# TTS Tech Portfolio- Operations Rotation

## Playbook

### Meetings

> Play: Infrastructure Meeting

- Review action items 32 hrs in advance
- Follow up on any items
- Compile agenda 48 hrs in advance
- Send agenda 24 hrs in advance
- Lead meeting

> Play: CTO Liaison Meeting

- Review [trello board](https://trello.com/b/BFp37KQ6/gsa-cto-tts-liaison)

> Play: Scrum - Sprint Planning

- Review board prior to meeting

> Play: Scrum - Daily Standup

- Lead meeting

> Play: Scrum - Review/Retro

- Lead retro

> Play: Operations Rotation - Handover

### DNS

> Play: DNS Activity
> Documentation: [DNS Handbook page](https://github.com/18F/dns)

### Pull Requests

[Pull Requests for Responsible TTS Tech Portfolio Repository](https://github.com/search?utf8=%E2%9C%93&q=state%3Aopen+is%3Apr+repo%3A18F%2Faws-admin+repo%3A18F%2Fghad+repo%3A18F%2Ftts-tech-portfolio+repo%3A18F%2Fvulnerability-disclosure-policy+repo%3A18F%2FDNS+repo%3A18f%2Fhandbook+repo%3A18F%2Fbefore-you-ship+repo%3A18F%2Fchandika+repo%3A18F%2Fopen-source-policy+repo%3A18F%2Flaptop+repo%3A18F%2Fchat+repo%3A18F%2Fbug-bounty+repo%3A18F%2Flaptop++repo%3A18F%2Fraktabija&type=Issues&ref=advsearch&l=&l=)

### Data

- [Updating the public IT Standards dataset](https://github.com/GSA/data/tree/master/enterprise-architecture#updating-the-list)

## Security

> Play: GitHubSecurity
> Documentation: [18F Security Issues Page on GitHub](https://github.com/search?o=asc&q=user%3A18F+user%3AGSA+author%3Aapp%2Fdependabot+is%3Aopen+archived%3Afalse&s=created&type=Issues)

> Play: Security Triaging
> [Notes](https://docs.google.com/document/d/10OrSjLKdi2FssAMLZDnKne79r7V9hy-D2pmqWXA703k/edit)

- HackerOne:
  -- #bug-bounty-partners
- Incidents
  -- #incident-response

### Micropurchase Requests

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

- Slack Channels

1. #admins-aws
1. #admins-dmarc
1. #admins-mural
1. #admins-slack
1. #admins-trello
1. #admins-zoom
1. #it-issues
1. #tts-tech-portfolio
1. #infrastructure
1. #admings-github
1. #admins-dns
1. #admins-govdelivery
1. #bug-bounty-partners
1. #cto-tts-liason-private
1. #tts-tech-portfolio-alerts
1. #mac
1. #bug-bounty-partners
1. #tts-shared-services
1. #tts-tech-portfolio
1. #incident-response
1. #questions
1. #devops-public
1. #solutions
1. #admins

- Google Groups

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

[Creating new AWS accounts](https://before-you-ship.18f.gov/infrastructure/aws/#creating-new-accounts)

## System Management - Software Management

### Play: Managing Software requests

Start the [request process](https://handbook.18f.gov/software/) when a user needs a piece of software they will make a request by sending an email will be sent to tts-software@gsa.gov and show on the [Software Group](https://groups.google.com/a/gsa.gov/forum/?utm_medium=email&utm_source=footer#!forum/tts-software) and whomever is in rotation will answer it. Once the operations rotation receives the email they send a canned response to the requestor letting them know that they’ve gotten it. Once operations rotation person has completed all of their tasks, they will mark the item complete.

Microsoft, Adobe, Zoom, Mural, and InVision require that you go into the back-end and manually add the person into the account.

See the following [administration guide](https://docs.google.com/document/d/18Htav6TIgasBvvSroI8H_sQXxnvMlra2k9iabBwQYUs/edit#) and [document guide](https://docs.google.com/document/d/1qIms6TcYOQ24BerQrxAFzTKAqVS6VNCpWklwTsxBmWA/edit#) for links to the user lists, back-end accounts, and template responses.

### Play: Manage Software Requests (Onboarding)

### Play: Microsoft Software Request

Point them to [Office documentation](https://handbook.18f.gov/office/).

### Play: Mural Software Request

- [Mural How-To Guide](https://docs.google.com/document/d/1VCxeilrxP-8wiX75DHcuVPBE3RgsODKJ-u5urGs-eaI/edit) - How to administer the TTS Mural account
- [Mural user list](https://docs.google.com/spreadsheets/d/1DT_3_SDM8ezbaN3I0FnN3ZYVtJpgkyXqYkO54FcnBro/edit)

#### Canned Response

##### New member account

> Hi XXXX, I have taken the liberty of adding you to the TTS account for full member access, here is the link if you do not receive an email to that effect. Feel free to reach out if you have any questions.

##### Guest account

> Would it be possible for your partners to take on Guest accounts? Guests are internal stakeholders, partners and clients working on or reviewing a project or workshop. They have slightly restricted access, but they can collaborate in a mural and access private rooms. Would that meet your needs?

##### Reactivate account

> Hi XXXX, I have taken the liberty of reactivating you to the TTS account for full member access, here is the link if you do not receive an email to that effect. Feel free to reach out if you have any questions.

##### Request for a member account (when already have one)

> Hi XXXX, It looks like you are already a member in this account, if you would like a link to Mural, I can send you one. If you need access to a board you are working with, please have the creator of that Mural workspace send you a link.

### Play: Sketch Software Request

[Sketch Handbook page](https://handbook.18f.gov/sketch/#for-admins)

Canned Response: _See instructions in the Handbook._

### Play: Omnigraffle Software Request

- v6 (not 7+)
- License Owner: 18F Software (GSA)
- [Omnigraffle License key](https://docs.google.com/document/d/18k8yuM9oXQA7MNr-qvfq8gXliSHOb_bWElohb-KaObw/edit#)

If employees are asking to be removed from Omigraffle, this software does not have that capability since it only inputs a code and there is not limit to users, Omnigraffle is just removed when the out boarded employee turns their Macbook in.

### Play: Sublime Text Software Request

[Sublime License Key](https://docs.google.com/document/d/18k8yuM9oXQA7MNr-qvfq8gXliSHOb_bWElohb-KaObw/edit#)

### Play: AWS Software Request

- [AWS Account Setup](https://docs.google.com/document/d/1gHTa3w-N8jyPXK_qx2bEDniFcUOTlAvITYiQI_G8lrY/edit)
- [AWS Accounts](https://docs.google.com/spreadsheets/d/1DedSCiU9AsCAAVvAFZT0_Ii7AFIKlI-JNifzlpHNbDg/edit#gid=807365900)

#### Play: Sandbox accounts Software Request

[sandbox accounts](https://docs.google.com/spreadsheets/d/1DedSCiU9AsCAAVvAFZT0_Ii7AFIKlI-JNifzlpHNbDg/edit#gid=807365900)

### Play: NPM Software Request

### Play: SSLMATE Software Request

### Play: SauceLabs Software Request

### Play: Twillo Software Request

### Play: Trello Software Request

### Play: GitHub Software Request

### Play: CloudCheckr Software Request

### Play: Dotgov.gov Software Request

### Play: Zoom Software Request

### Play: InVision Software Request

### Play: Adobe Software Request

Canned Response:

> Please request through the Service Desk. Updating the Handbook with info about this.

### Play Manage Software Requests (Offboarding)

Remember, it is not all giving out license, you have to take them away too! TTS Talent will reach out to the current SaaS PM to send them this [document](https://docs.google.com/spreadsheets/d/1IlFY5AAvTyuS7yDHk5_odJGHYZDU_MN9HNGKJ2zXwi0/edit) so that they can check off the boxes of when they have either manually removed or requested removal of a former employee from the software.\_

Simply go into both the software back-end account and remove the individual, then go in and update the user lists by deleting the cell with the person’s name and information.
