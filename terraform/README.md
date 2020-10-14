To `plan`/`apply` changes:

1. Ensure AWS CLI is properly configured.  Terraform requires access to AWS resources in order to track state as well as to perform the relevant operations
   1. [Download and install AWSCLI](https://aws.amazon.com/cli/)
   1. [Configure AWSCLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
      At a minimum, a profile should be created (or the Default profile used) containing your tts-prod AWS account credentials.  

      `~/.aws/credentials:`

      ```hcl
      ~/.aws/credentials:
         [profile_name]
         aws_access_key_id=YOUR_ACCESS_KEY_FROM_TTS_PROD
         aws_secret_access_key=YOUR_SECRET_ACCESS_KEY_FROM_TTS_PROD
      ```

      `~/.aws/config:`

      ```hcl
         ~/.aws/config:
         [profile_name]
         region=us-west-2
      ```

      Note that using a profile other than `Default` will mean you need to set the environment variable `AWS_PROFILE=profile_name` to the profile containing your tts-prod AWS credentials

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
