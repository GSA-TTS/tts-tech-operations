#!/bin/bash
# Updates the current repo with files from a canonical GitHub repo. This script
# is what's run in each repo by git-xargs in order to update files as per the
# canonical source. The list of templates is read from file.
#
# Usage:
#   $ ci_update_templates.sh <canonical_repo> <list_of_templates_file>
#
# This script is used in CI to automatically keep template files up to date in
# the repos we maintain.


set -o errexit
set -o pipefail
set -o nounset

function usage () {
cat <<EOF
$0: <canonical_repo> <list_of_templates_file>

  canonical_repo: the source GitHub repository to pull templates from in the
                  form org/repository e.g. 18F/tts-tech-port

  list_of_templates_file: filpath containing a list of relative paths in the
                          canonical repository

EOF
}

# Check for required args
if [[ "$#" != 2 ]]; then
  echo You must provide exactly two arguments. >&2
  usage >&2
  exit 1
fi


canonical_repository="$1"
list_of_templates_file="$2"  # git-xargs takes the repo list from stdin, otherwise we would just use stdin here.
echo Pulling templates from "${canonical_repository}"...

while read template_filename; do
  echo "$template_filename..."
  # Make sure the parent directories exist
  mkdir -p $(dirname ${template_filename})

  # Fetch the file from the canonical repo
  curl --location --silent --fail "https://raw.githubusercontent.com/${canonical_repository}/main/${template_filename}" > "${template_filename}"
done < "${list_of_templates_file}"
