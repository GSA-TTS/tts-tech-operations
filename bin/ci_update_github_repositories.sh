#!/bin/bash
# CI script to apply templates from this canonical repo to all repos we maintain.
#
# The script relies on [git-xargs](https://github.com/gruntwork-io/git-xargs)
# which automates the checkout of repositories, commiting changes, and creating
# pull requests. git-xargs takes a script/program that runs locally in each
# target repo to apply changes to files. See bin/ci_update_templates.sh for the
# script that updates a single repository.
#
# Usage:
#   $ bin/ci_update_github_repositories.sh

set -o errexit
set -o pipefail
set -o nounset

LOGLEVEL=${LOGLEVEL:-INFO}
DRYRUN=${DRYRUN:-1}

canonical_repository="18F/tts-tech-portfolio"
pull_request_title="Update templates from canonical source"

template_dir=$(mktemp -d)

function cleanup () {
  rm -rf "${template_dir}"
}

trap cleanup EXIT

# List of templates in this repo that are applied to other repositories
cat <<EOF > "${template_dir}/template_files"
.github/ISSUE_TEMPLATE/general.md
.github/workflows/issues-new.yml
.github/workflows/pull-requests-new.yml
EOF


# Commit message template, written to file
cat <<EOF > "${template_dir}/commit_message"
Update templates from canonical source

Templates updated from https://github.com/${canonical_repository}
EOF

# Pull request body template, written to file
cat <<EOF > "${template_dir}/pull_request_description"
Hello!

This is an automated pull request from the Tech Portfolio. This pull request includes templates that have been updated in [${canonical_repository}](https://github.com/${canonical_repository}). A member of the Tech Portfolio will be dropping by to review and merge. If you have any questions, don't hesitate to reach out to [#tts-tech-portfolio](https://gsa-tts.slack.com/archives/CNW3GL70S) or [open an issue](https://github.com/${canonical_repository}/issues/new?assignees=&labels=g%3A+initial&template=general.md&title=).

--
$0
https://github.com/${canonical_repository}
EOF

# List of repos to apply, written to file
# TODO move this to a canonical source, shared with terraform
# TODO templates should not be applied universally to all repos. Issue
#      templates for example only apply to repos where shared_content_ownership
#      is false (and not captured here).
cat <<EOF > "${template_dir}/repo_list"
18F/.github
18F/aws-admin
18F/aws-admin-cleanup
18F/before-you-ship
18F/billing-tools
18F/bug-bounty
18F/certificate-service
18F/chandika
18F/charlie
18F/chat
18F/deploy-ttslicenses
18F/dns
18F/ghad
18F/glossary
18F/handbook
18F/join.tts.gsa.gov
18F/laptop
18F/newrelic-terraform
18F/pages-redirects
18F/private-eye
18F/raktabija
18F/slack-export-handling
18F/tts-common-controls
18F/tts-tech-portfolio
18F/tts-tech-portfolio-private
18F/uswds-jekyll
18F/vulnerability-disclosure-policy
EOF

# Output the content of the named template to stdout
function template () {
  local name
  name="$1"

  cat "${template_dir}/${name}"
}

# Check for DRYRUN
additional_args=
if [[ "${DRYRUN}" != 0 ]]; then
  additional_args="--dry-run"
fi

# Put it all together and pass control to git-xargs
exec git-xargs ${additional_args} \
  --branch-name tts-bot/update-templates \
  --loglevel "${LOGLEVEL}" \
  --repos "${template_dir}/repo_list" \
  --skip-archived-repos \
  --pull-request-title "${pull_request_title}" \
  --pull-request-description "$(template pull_request_description)" \
  --commit-message "$(template commit_message)" \
  $(pwd)/bin/ci_update_templates.sh "${canonical_repository}" "${template_dir}/template_files"
