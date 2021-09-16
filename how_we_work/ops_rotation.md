# Operations Rotation Playbook

[Create an issue using the Operations Rotation template](https://github.com/18F/tts-tech-portfolio/issues/new?template=ops.md) before each Rotation to track tasks. Close once the rotation has ended.

We wear a lot of different hats and it's not always clear what process to follow
in order to address a request. In general, look for documented instructions in
the context of the request. If you're not sure:

1. Check the Handbook
1. Check this repo
1. Ask for clarification in [#tts-tech-portfolio](https://gsa-tts.slack.com/archives/CNW3GL70S)

We try to keep admin documentation and process close to the user documentation
and process.


## Urgent alerts

There are a few things that you'll want to keep an eye on and address
immediately if they come up.

- tts-vulnerability-reports
- #vulnerability-reports


## Communications Monitoring

You don't have to have the answers to all the questions, but you should ensure all the questions get answers.

### Slack Channels

| Channel name                                                                   |                                                                  Responsibility                                                                   |
| ------------------------------------------------------------------------------ | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
| [#admins-dns](https://gsa-tts.slack.com/archives/C4L58EQ5T)                    |                                                           Look for failure for DNS jobs                                                           |
| [#admins-emoji](https://gsa-tts.slack.com/archives/C024EBDS1NC)                |                                                    Recruit reviewers to approve emoji requests                                                    |
| [#admins-github](https://gsa-tts.slack.com/archives/C02KXM98G)                 |                                       Typically used for folks to request new accounts or transfer accounts or delete repos                                       |
| [#admins-govdelivery](https://gsa-tts.slack.com/archives/CBQ490G3Y)            |                                                                      unsure                                                                       |
| [#admins-hubspot](https://gsa-tts.slack.com/archives/C72F606QG)                |                                                                      unsure                                                                       |
| [#admins-iaas](https://gsa-tts.slack.com/archives/CMB19370T)                   |                                                                      unsure                                                                       |
| [#admins-mural](https://gsa-tts.slack.com/archives/C056CAN2F)                  |                                                 Typically used for folks to request new accounts or reactivate accounts                                                  |
| [#admins-slack](https://gsa-tts.slack.com/archives/C02KW46DP)                  |                                     Mostly managed by GSA IT, but recommend monitoring if a question pops up, GSA IT handles requests to @github-admins-login                                      |
| [#admins-trello](https://gsa-tts.slack.com/archives/C055J0BL0)                 |                                                 Typically used for folks to request new accounts or remove accounts                                                  |
| [#cto-ciso-tts-liason-private](https://gsa-tts.slack.com/archives/G012Y9UCN9E) |                                       Communication avenue between the CTO's plust the CISO's office & TTS                                        |
| [#cto-tts-liason-private](https://gsa-tts.slack.com/archives/GKDTT9D3N)        |                                                Communication avenue between the CTO's office & TTS                                                |
| [#incident-response](https://gsa-tts.slack.com/archives/C0G6G1UNM)             |                                                 Channel to post incidents that need responding to                                                 |
| [#infrastructure](https://gsa-tts.slack.com/archives/C039MHHF8)                |                                       Main channel where folks come to talk to the TTS Tech Portfolio team                                        |
| [#it-issues](https://gsa-tts.slack.com/archives/C028WFKN1)                     | Channel folks come to when having IT Issues, other non Tech Portfolio typically also chime in and a common response is to ask the IT Service Desk |
| [#questions](https://gsa-tts.slack.com/archives/C03EMDS6P)                     |                         Main channel where folks ask any random question other non Tech Portfolio typically also chime in                         |

It might be helpful [customize your sidebar](https://slack.com/help/articles/360043207674-Organize-your-sidebar-with-custom-sections) to group these channels together or take advantage of other [Slack tips for organization](https://handbook.tts.gsa.gov/tools/slack/guidelines/#usage-tips).

### Google Groups

You are responsible for monitoring email on these lists and triaging any
requests. A simple "Thanks for the message, we'll get back to you on this" is
perfectly okay. Often other team members will jump in on things where they have
context.

| Group                                                                                        | Permission |
| -------------------------------------------------------------------------------------------- | ---------- |
| [18F PyPI](https://groups.google.com/a/gsa.gov/g/18f-pypi)                                   | Owner      |
| [TTS Tech Portfolio IaaS Alerting](https://groups.google.com/a/gsa.gov/g/18fsoftware)        | Owner      |
| [IS-TTS](https://groups.google.com/a/gsa.gov/g/is-tts)                                       | Manager    |
| [TTS Software](https://groups.google.com/a/gsa.gov/g/tts-software)                           | Owner      |
| [TTS Technology Portfolio](https://groups.google.com/a/gsa.gov/g/devops)                     | Owner      |
| [TTS Vulnerability Reports](https://groups.google.com/a/gsa.gov/g/tts-vulnerability-reports) | Owner      |

For the `TTS Software` group, we use [Google's Collaborative Inbox](https://support.google.com/a/answer/167430?hl=en)
features to manage the status of requests. When on ops-rotation use the `Mark as Completed` to ensure others know a request has been satisfied. For requests that
need assistance from others on the team, use the `Assign` feature to task them,
include a description of what you need from them. Feel free to use any
additional features you may find useful.

It might be helpful to create a filter rule for each of the above
`to:<list>@gsa.gov`s and add a label (e.g. `tech-portfolio`). Then
[each day you can quickly process the queue](https://mail.google.com/mail/u/0/#search/label%3Atech-portfolio+is%3Aunread).

#### How to handle email alerts

- Let's Encrypt 
  - "Let's Encrypt certificate expiration notice for domain"
    - This can be ignored.

- DotGov 
  - "Your .GOV Domain <domain>.GOV is due for renewal"
    - Reach out to domain owners to determine if the domain is still needed. 

- AWS 
  - AWS email alerts will go directly to program contacts and will not require involvement from Ops-rotation person.
    - "AWS Budgets: <group/program> has exceeded your alert threshold"
    - "Attention required on case ..."
    - "Amazon EC2 Instance Retirement ..."

- Amazon Cloudwatch (from "GRACE Alerting")
  - Email alerts will go directly to program contacts (same as above issue) and will not require involvement from Ops-rotation person.
    - "ALARM: " 
