# Technical standards

Beyond the TTS-wide [language selection](https://engineering.18f.gov/language-selection/) and [integration](https://engineering.18f.gov/integrations/) standards/guidance, the Tech Portfolio does the following:

- **Code**
  - **Language:** Python or JavaScript
    - Ruby can/should be used in the context of [Jekyll sites](https://engineering.18f.gov/language-selection/#frequently-used-frameworks)
  - **Version control:** All code meant to be reused should be in a repository
    - Default to using a repository under [github.com/18F](https://github.com/18F), unless there is a better place, such as contributing it to an external open source project
    - Code written for one-off use can go into an issue comment or Gist
    - Important thing is that it's not just on an individual's computer
  - **Style:** Use an opinionated formatter, specifically:
    - [Prettier](https://prettier.io/) for HTML, CSS, JavaScript, etc.
    - [Black](https://black.readthedocs.io/en/stable/) for Python
    - [`terraform fmt`](https://www.terraform.io/docs/commands/fmt.html) for Terraform
- **Configuration as code:** [Terraform](https://www.terraform.io/)
- **Continuous integration/deployment:** [CircleCI](https://circleci.com/) or [GitHub Actions](https://docs.github.com/en/free-pro-team@latest/actions)
- **Shared credentials:** [KeePassXC](https://keepassxc.org/) synced through [Google Drive File Stream](https://support.google.com/drive/answer/7329379#macos)

All the above are "where possible" — there will be exceptions.

## Protected branches

Protected branches are [required](https://engineering.18f.gov/project-setup/#branch-protection-requirement) for the `main` branch in GitHub. Additionally, we prefer this configuration for all of our repositories.

- "Require pull request reviews before merging"
- "Dismiss stale pull request approvals when new commits are pushed"
- "Require status checks to pass before merging"
- "Include administrators"


## Additional guidance

…beyond the TTS-wide [Engineering Practices Guide](https://engineering.18f.gov/):

- Pull requests should be as small as possible+meaningful.
- Once a project reaches its Minimum Viable Product (MVP), all changes should be reviewed.
  - In other words, it's ok to _not_ have every change to a new project reviewed.
  - This applies to code repositories (though [pull requests](https://guides.github.com/introduction/flow/)) and Google Docs (through [suggest changes](https://support.google.com/docs/answer/6033474)).
- We try and avoid shared accounts (using one of our [Google Groups](ops_rotation.md#google-groups) as an account email) whenever possible
