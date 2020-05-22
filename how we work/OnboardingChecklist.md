# Onboarding Checklist

## Instructions

When someone new joins the TTS Tech Portoflio team:

1. The TTS Tech Portoflio director or deputy director adds the new team member to the `tts-tech-portfolio` team in GitHub. This constitutes 'formal approval` by leadership and enables access to to the [Tech Portfolio GitHub repos]({{site.baseurl}}/github-repos) for the next step
1. Create a new card in the [Tech Portfolio Github repo](https://github.com/18F/tts-tech-portfolio/issues) called "Onboard [NewPerson]".
2. View the raw source of this file.
3. Copy the text before the checklists to the Description field of the card.
3. Copy each applicable block of tasks into a its own new task list on the card, replacing "NewPerson" with the new person's name and  "Buddy" with the onboarding buddy's name.
4. Submit the card.
5. Assign the person who bravely volunteered to be the new person's Onboarding Buddy to the card.
6. Put the issue into the _In Progress_ column.

---

In order to get NewPerson productively contributing to the TTS Tech Portfolio team, Buddy should help NewPerson complete a prescribed set of tasks that will bring them up to speed.

## Directions

**NewPerson and Buddy:** Try to go through your checklists in order.

**Buddy:** If you can’t complete any of the items on your checklist personally, _you are responsible for ensuring that someone with the correct access completes that item_.

## New Person checklist

- [ ] Take judicious notes on what about this onboarding process or Tech Portfolio is confusing or frustrating. If you notice a problem (especially with things like documentation), you are more than welcome to fix it! At the very least, please share this information with your buddy (or someone) at some point so we can make the team/platform better. (You can also file issues and pull requests on [the template Onboarding checklist](https://github.com/18f/tts-tech-portfolio/how-we-work/OnboardingChecklist.md).
- [ ] Once you've finished the checklists below, make suggestions for steps that would have improved your onboarding experience as pull requests on [the onboarding checklist template](https://github.com/18f/tts-tech-portfolio/how-we-work/OnboardingChecklist.md) used to make this issue.


### Getting to know TTS Tech Portfolio


- [ ] Figure out who your onboarding buddy is (they should reach out to you) and make sure this issue is assigned to them in our [Github Project board](https://github.com/orgs/18F/projects/11?fullscreen=true).
- [ ] Read [the team onboarding document](https://github.com/18f/tts-tech-portfolio/how-we-work/Onboarding.md) for more context about TTS Tech Portfolio.
- [ ] Bookmark the [pertinent links listed here](https://github.com/18f/tts-tech-portfolio/how-we-work/internal-links.md).
- [ ] Read the [TTS Tech Portfolio Handbook]({{site.baseurl}}/tech-portfolio) page for a highlevel overview of what we do


### Getting to know TTS Tech Portfolio works

- [ ] Read the [Workflow document]({{site.baseurl}}/workflow) to learn about how we work.
- [ ] We use a [Github Projects tracking board](hhttps://github.com/orgs/18F/projects/11?fullscreen=true) .


### Required items for all team members

These items help us fulfill security and compliance requirements (including for FedRAMP). If you get stuck, or if these requirements are confusing, ask for help from your buddy or in a cloud.gov channel.

Pre-requisites:

- [ ] Complete [GSA OLU](https://gsaolu.gsa.gov/) GSA Mandatory Cyber Security and Privacy Training, including accepting the GSA IT Rules of Behavior, which is required before we can give you access to any cloud.gov systems. If you joined GSA more than two months ago, you've already completed this task and can just check the box.

Ensure you know what's happening on the team:

- [ ] Subscribe to the [Tech Portfolio team calendar](https://calendar.google.com/calendar?cid=Z3NhLmdvdl82aDI5YnF1ZGx0NGVoZTVzOWswOGlmdGZxMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t) (click the + in the bottom right) so you know when assorted team meetings are happening in the various squads. Tip: When you plan Out of Office time, make a calendar event for that on the TTS Tech Portfolio calendar so that your teammates know you'll be away
- [ ] Subscribe (through the GitHub watch function) to the [tts-tech-portfolio](https://github.com/18F/tts-tech-portfolio) GitHub repository notifications


Learn our policies and procedures:

- [ ] Coordinate with your onboarding buddy to go through [Incident Response Training](https://docs.google.com/presentation/d/1AZjQE8zBzMRWZIFUuJPkJLted1ykGtALrLPoPRx5Vls/edit#slide=id.p) within 60 days of joining the team (and annually after that). This will cover the following document, which you should also review before or after training:
- [ ] Read the [Before You Ship Guide](https://before-you-ship.18f.gov/)
- [ ] Coordinate with your onboarding buddy to go through [nonpublic information training](https://docs.google.com/presentation/d/1rXSZZ0t0kadsoP1EMJoM0T7ROkGD3Pr5wojWnf2GksI/edit#slide=id.g1a2cf8d6b3_0_273) within 60 days of joining the team (and annually after that). This will cover the following documents, which you should also review before or after training:
- [ ] Review the [18F open source policy guidance about protecting sensitive information](https://github.com/18F/open-source-policy/blob/master/practice.md#protecting-sensitive-information)
  - [ ] Read the cloud.gov [sharing secret keys](https://cloud.gov/docs/ops/secrets/#sharing-secret-keys) policy
  - [ ] Review the [TTS requirements for password management](https://handbook.tts.gsa.gov/password-requirements/)
- [ ] Read the [TTS Security Policies and Procedures](https://github.com/18F/compliance-docs). These documents explain the high-level policies and procedures we must comply with while running cloud.gov, sorted into security control "families" They explain that we follow GSA IT security policy, and they provide a summary of the procedures in to support TTS System Security Plans.










### Dogfood-ing
- [ ] [Request access to 18F Google Analytics](https://handbook.18f.gov/google-analytics/), so you can view cloud.gov site analytics ([including for the dashboard](https://docs.google.com/document/d/1gSbP2ak2a3QLpCZIF_KlbQ2QHE6RjDI-7ZnnrJZvMDE/edit)).
- [ ] Learn about [setting up a local development environment](https://cloud.gov/docs/ops/setting-up-a-local-development-environment/), which contains setup instructions for GSA Macs for the rest of these software items. 

- [ ] [Sign up for a cloud.gov account with your GSA email address](https://cloud.gov/signup/).
   - [ ] [Deploy a sample application to cloud.gov](https://cloud.gov/quickstart/) to get familiar with the basics of the PaaS from a user's perspective.
  - [ ] Check out cloud.gov [staging](https://ci.fr-stage.cloud.gov/) and [production](https://ci.fr.cloud.gov) Concourse instances, and take a look at some of [cloud.gov pipelines](https://github.com/search?q=org%3A18F+cg-deploy).
  - [ ] Ask the Director or Deputy Director for an invite to a DigitalGov Search account for cg-site, so you can configure it and view analytics for the most common searches.

### Do some learning


- Get familiar with [Terraform](https://www.terraform.io/)
  - [ ] Go through the [getting started guide](https://www.terraform.io/intro/getting-started/install.html)
- Learn about [Kubernetes](https://kubernetes.io/)
  - [ ] Go through the [official tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
   - [ ] Read about [ETCD: The Brain of a Kubernetes Cluster](https://medium.com/better-programming/a-closer-look-at-etcd-the-brain-of-a-kubernetes-cluster-788c8ea759a5)
  - [ ] Read about [Raft: Understandable Distributed Consensus](http://thesecretlivesofdata.com/raft/)
  - [ ] Read the cloud.gov guide for [troubleshooting k8s](https://cloud.gov/docs/ops/runbook/troubleshooting-kubernetes/)
  - [ ] Watch [The illustrated Children's Guide to Kubernetes](https://youtu.be/4ht22ReBjno)
 - Learn about [Concourse](https://concourse.ci/)
   - [ ] Try a [tutorial](https://github.com/starkandwayne/concourse-tutorial).
   
- Get familiar with our AWS setup
  - [ ] Read about [AWS onboarding](https://cloud.gov/docs/ops/aws-onboarding/)
  - [ ] Read about the [AWS CLI](https://aws.amazon.com/cli/)

### Community Slack Channels
  - [ ] Join [the Cloud Foundry Slack](http://slack.cloudfoundry.org/) in case you need to ask questions of upstream developers
  - [ ] Join [the Concourse Discord](https://discordapp.com/invite/MeRxXKW) in case you need to ask questions of upstream developers.



### Non team-specific items

_Note: These are items that do not fall into the boundary of work for a specific team. However, please consult your onboarding buddy to verify that your work relates to these items prior doing these two checklists._

### Compliance-specific items

- [ ] Watch [Handling FISMA Faster and Better](https://www.youtube.com/watch?v=T1S52B1-NT4) for important context and background on the federal regulatory context in which cloud.gov operates.
- [ ] Do a cursory read of [Before You Ship](https://pages.18f.gov/before-you-ship/).


## Buddy checklist

- [ ] Introduce yourself to the new team member and give them some of your background so they know who you are.
- [ ] Identify a straightforward, well-groomed story in progress that involves their skills domain, schedule a meeting with the owner for an introduction (if it's not you), and setup pairing sessions several times in the first week on the project.
- [ ] Identify a straightforward, well-groomed first story, ideally something they could conceivably complete in their first two/three weeks using their existing skills. Discuss the context with them, then make them the assignee for the card.
- [ ] Discuss suggestions for how the onboarding experience could have been improved and open as PRs on [the onboarding template](https://github.com/cloud-gov/product/blob/master/OnboardingChecklist.md).
- [ ] Ask the Director or Deputy Director to have the person shadow whomever is on [OpsRotation](https://github.com/18F/tts-tech-portfolio/blob/master/Operations%20Rotation%20-%20Playbook.md), so they can see how we handle support and read with those within TTS.


## Required items for all team members

These items help us fulfill security and compliance requirements (including for FedRAMP).

- [ ] Add them to the @tts-tech-portfolio [in Slack’s Team Directory](https://get.slack.help/hc/en-us/articles/212906697-User-Groups#edit-a-user-group).
- [ ] Add them to the recurring TTS Tech Portfolio meetings that are relevant for them in [the team calendar](https://calendar.google.com/calendar?cid=Z3NhLmdvdl82aDI5YnF1ZGx0NGVoZTVzOWswOGlmdGZxMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t).
- [ ] Ask one of TTS Github Maintainers to add them to the [@18F/tts-tech-portfolio](https://github.com/orgs/18F/teams/tts-tech-portfolio) on GitHub.


