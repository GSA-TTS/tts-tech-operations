# Operations Rotation Playbook

[Create an issue using the Operations Rotation template](https://github.com/18F/tts-tech-portfolio/issues/new?template=ops.md) before each Rotation to track tasks. Close once the rotation has ended.

## Micropurchase Requests

> Play: Micropurchase Procedure

1. People submit micropurchase request form
1. Request goes into spreadsheet
1. Melanie/Ethan do initial triage to determine if it should go to `Pending TTS Software Team review`
1. Tech Portfolio reviews to check if it has:
   1. An ATO
   1. Prior FITARA approval
      1. Check the FITARA Trello board - if not on we need to go through approval process
1. If Yes to both, change Status to “Pending Supervisor Approval”
1. Once the Supervisor/AO approval steps are completed (these are automated by email), status is automatically moved to “Pending P-card Purchaser”.
1. John: complete P-Card purchase
1. John: Manually enter the Pegasys CC id for the P-Card holder
1. Change Status in spreadsheet to “Completed”
1. This “completed” action triggers the Pegasys reimbursement request.
1. Request is routed to the AO who then approves.

## Communications Monitoring

### Slack Channels

- #admins-github
- #admins-aws
- #admins-dmarc
- #admins-dns
- #admins-govdelivery
- #admins-iaas
- #admins-mural
- #admins-slack
- #admins-trello
- #admins-zoom
- #bug-bounty-partners
- #cto-tts-liason-private
- #devops-public
- #incident-response
- #infrastructure
- #it-issues
- #mac
- #questions
- #solutions
- #tts-shared-services
- #tts-tech-portfolio
- #tts-tech-portfolio-alerts

### Google Groups

| Group                     | Permission |
| ------------------------- | ---------- |
| 18F DevOps                | Owner      |
| 18F PyPl                  | Owner      |
| 18F Software              | Owner      |
| 18f-team                  | Member     |
| IS-TTS                    | Manager    |
| TTS Software              | Owner      |
| TTS Technology Portfolio  | Owner      |
| TTS Vulnerability Reports | Owner      |

## Knowledge Management

- Handbook triage and maintenance
  [Contributing to 18F Handbook](https://github.com/18F/handbook/blob/master/CONTRIBUTING.md)

## System Management - Cloud Management

> Play: AWS Account
> [Creating new accounts](https://before-you-ship.18f.gov/infrastructure/aws/#creating-new-accounts)

## System Management - Software Management

> Play: Managing Software requests
> Start the [request process](https://handbook.18f.gov/software/) when a user needs a piece of software they will make a request by sending an email will be sent to tts-software@gsa.gov and show on the [Software Group](https://groups.google.com/a/gsa.gov/forum/?utm_medium=email&utm_source=footer#!forum/tts-software) and whomever is in rotation will answer it. Once the operations rotation receives the email they send a canned response to the requestor letting them know that they’ve gotten it. Once operations rotation person has completed all of their tasks, they will mark the item complete.

Microsoft, Adobe, Zoom, Mural, and InVision require that you go into the back-end and manually add the person into the account.

Administration guide: See the following [administration guide](https://docs.google.com/document/d/18Htav6TIgasBvvSroI8H_sQXxnvMlra2k9iabBwQYUs/edit#) and [document guide](https://docs.google.com/document/d/1qIms6TcYOQ24BerQrxAFzTKAqVS6VNCpWklwTsxBmWA/edit#) for links to the user lists, back-end accounts, and template responses.

### Play Manage Software Requests (Onboarding)

> Play: Microsoft Software Request
> [Point them to Office documentation](https://handbook.18f.gov/office/)

> Play: Mural Software Request
> [Mural How-To Guide](https://docs.google.com/document/d/1VCxeilrxP-8wiX75DHcuVPBE3RgsODKJ-u5urGs-eaI/edit) - How to administer the TTS Mural account
> [Mural user list](https://docs.google.com/spreadsheets/d/1DT_3_SDM8ezbaN3I0FnN3ZYVtJpgkyXqYkO54FcnBro/edit)

- Canned Response

-- New member account

_Hi XXXX, I have taken the liberty of adding you to the TTS account for full member access, here is the link if you do not receive an email to that effect. Feel free to reach out if you have any questions._

-- Guest account

_Would it be possible for your partners to take on Guest accounts? Guests are internal stakeholders, partners and clients working on or reviewing a project or workshop. They have slightly restricted access, but they can collaborate in a mural and access private rooms. Would that meet your needs?_

-- Reactivate account

_Hi XXXX, I have taken the liberty of reactivating you to the TTS account for full member access, here is the link if you do not receive an email to that effect. Feel free to reach out if you have any questions._

--- Request for a member account (when already have one)

_Hi XXXX, It looks like you are already a member in this account, if you would like a link to Mural, I can send you one. If you need access to a board you are working with, please have the creator of that Mural workspace send you a link._

> Play: Sketch Software Request
> [Sketch Handbook page](https://handbook.18f.gov/sketch/#for-admins)

- Canned Response: _See instructions in the Handbook._

> Play: Omnigraffle Software Request

1. v6 (not 7+)
1. License Owner: 18F Software (GSA)
1. [Omnigraffle License key](https://docs.google.com/document/d/18k8yuM9oXQA7MNr-qvfq8gXliSHOb_bWElohb-KaObw/edit#)

If employees are asking to be removed from Omigraffle, this software does not have that capability since it only inputs a code and there is not limit to users, Omnigraffle is just removed when the out boarded employee turns their Macbook in.

> Play: Sublime Text Software Request
> [Sublime License Key](https://docs.google.com/document/d/18k8yuM9oXQA7MNr-qvfq8gXliSHOb_bWElohb-KaObw/edit#)

> Play: AWS Software Request

- [AWS Account Setup](https://docs.google.com/document/d/1gHTa3w-N8jyPXK_qx2bEDniFcUOTlAvITYiQI_G8lrY/edit)
- [AWS Accounts](https://docs.google.com/spreadsheets/d/1DedSCiU9AsCAAVvAFZT0_Ii7AFIKlI-JNifzlpHNbDg/edit#gid=807365900)

> Play: Sandbox accounts Software Request
> [sandbox accounts](https://docs.google.com/spreadsheets/d/1DedSCiU9AsCAAVvAFZT0_Ii7AFIKlI-JNifzlpHNbDg/edit#gid=807365900)

> Play: NPM Software Request

> Play: SSLMATE Software Request

> Play: SauceLabs Software Request

> Play: Twillo Software Request

> Play: Trello Software Request

> Play: GitHub Software Request

> Play: CloudCheckr Software Request

> Play: Dotgov.gov Software Request

> Play: Zoom Software Request

> Play: InVision Software Request

> Play: Adobe Software Request

- Canned Response: \_Please request through the Service Desk. Updating the Handbook with info about this.
