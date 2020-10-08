To `plan`/`apply` changes:

1. [Install Terraform.](https://learn.hashicorp.com/tutorials/terraform/install-cli)
1. [Create a GitHub personal access token.](https://github.com/settings/tokens)
1. In this directory:

   1. Create [a `terraform.tfvars` file](https://www.terraform.io/docs/configuration/variables.html#variable-definitions-tfvars-files) with the token

      ```hcl
      github_token = "…"
      ```

   1. Ensure Terraform runs successfuly

      ```sh
      terraform init
      terraform plan
      ```

It should show "no changes". You can then make changes to files, `apply`, etc.
