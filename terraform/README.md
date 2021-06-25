## Requirements

- Terraform v0.14 (we recommend [tfenv](https://github.com/tfutils/tfenv))


## Development

Changes are automatically deployed via CI/CD, but in case you need to test or
debug, you can do so in your local development environment.

Copy `env.sample` to `.env` and edit the environment variables with your secret
credentials.

Source your secret credentials.

    $ . .env

Initialize Terraform.

    $ terraform init

Generate a plan.

    $ terraform plan

It should show "no changes". You can then make changes to files, `apply`, etc.

    $ terraform apply


## Continuous integration and deployment

We use CI/CD to apply changes to production. Any changes to `master` are validated
and reviewed before being applied. The process works like this:

1. Author submits changes as a pull request
1. Changes are validated with automated checks
1. Team member reviews the changes and the generated Terraform plan
1. Once approved and all checks are passing, changes are merged to `master`
1. Changes are applied to production


## Initial setup

The first time you setup this project, you'll need to create the Terraform backend and setup CI.


### Terraform backend

For CI/CD we setup an IAM policy and user with only those permissions to access
from the created S3 bucket and DyanamoDB table. See [Terraform S3 backend
documentation](https://www.terraform.io/docs/language/settings/backends/s3.html)
for the how to configure the IAM policy. Additionally, make sure:

- "Block all public access" is checked for the S3 bucket
- S3 bucket is configured with encryption


### GitHub Actions

Add these secrets for use in GitHub Actions.

Secret | Description
------ | -----------
AWS_ACCESS_KEY_ID | AWS access key Id for accessing the S3+DynamoDB Terraform state.
AWS_SECRET_ACCESS_KEY | AWS secret key for accessing the S3+DynamoDB Terraform state.
GH_SECRET_TOKEN | GitHub [personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) with `repo, read:org` scope and write permissions to repos.

To enforce the workflow, you should enable protected branches for `master`
configured with these options:

- Require pull request reviews before merging
- Dismiss stale pull request approvals when new commits are pushed
- Require status checks to pass before merging (build, plan)
- Require branches to be up to date before merging
- Include administrators


## Changing labels

1. Edit the list in [`repo/vars.tf`](repo/vars.tf).
1. Get the migration commands.

   ```sh
   python rename_label.py "<label before>" "<label after>"
   ```

1. Note this doesn't actually perform the migration. Copy and paste the output into the terminal to execute.
1. When running `terraform plan`/`apply`, it should show those labels being changed, not removed+added.
