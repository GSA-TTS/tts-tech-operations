# Joining the TTS Tech Portfolio team

The goal of the Tech Portfolio is to oversee/manage/coordinate everything technology-related that cuts across TTS, or anything technology-related that will affect TTS from the outside: particularly security, compliance, infrastructure, and tech policy.

## Onboarding

Get through [the 18F onboarding guide for your discipline](https://handbook.18f.gov/#teams) first. (Contractors, we're presuming you have an equivalent process you've gone through for onboarding with your employer.)

Everyone joining the TTS Tech Portfolio team will get assigned a team onboarding buddy. This person should be working on similar things to what you will be working on, so that they can answer questions in your domain.

You and your team onboarding buddy must follow the instructions in [the Onboarding Checklist](OnboardingChecklist.md) to create an issue that will guide you through tasks that will get you up to speed and contributing in no time. You (and your buddy) must track your progress by checking the boxes as you complete tasks.

Our Onboarding Checklist helps us fulfill important security and compliance requirements, so each new team member needs to have their own checklist in our issue-tracker to document their progress. This is true even if you're rejoining the cloud.gov team after being in it previously.

### Checklist

When someone new joins the TTS Tech Portoflio team:

1. The TTS Tech Portoflio director or deputy director adds the new team member to the `tts-tech-portfolio` team in GitHub. This constitutes 'formal approval` by leadership and enables access to to the [Tech Portfolio GitHub repos]({{site.baseurl}}/github-repos) for the next step
1. [Create a new card in the Tech Portfolio Github repo.](https://github.com/18F/tts-tech-portfolio/issues/new?template=onboarding.md&title=onboard+%5Bname%5D)
1. Replace "NewPerson" with the new person's name and "Buddy" with the onboarding buddy's name.
1. Submit the card.
1. Assign the person who bravely volunteered to be the new person's Onboarding Buddy to the card.
1. Put the issue into the _In Progress_ column.

In order to get NewPerson productively contributing to the TTS Tech Portfolio team, Buddy should help NewPerson complete a prescribed set of tasks that will bring them up to speed.

## Tools and project artifacts

Whenever possible, we err on the side of putting data where the public can see it. Some data might be kept in Google Drive for convenience of presentation, commenting, etc. but we consider public GitHub repositories the intended destination whenever possible.

Several tools are used for project management, but the main one you will probably be using is GitHub to submit and merge pull requests and [Jira](https://cm-jira.usa.gov/secure/RapidBoard.jspa?projectKey=CG&rapidView=1929) to manage squad-specific work in kanban boards. We also use Jira for [macro-level cadence and roadmapping](https://cm-jira.usa.gov/secure/PortfolioPlanView.jspa?id=138&sid=138#backlog).

## Things we maintain

- TTS Tech Portfolio [epositories]()
  - Repositories in the [cloud-gov Github organization](https://github.com/cloud-gov).
  - [FISMAReady](https://github.com/18F/compliance-toolkit/)
  - [Compliance Masonry](https://github.com/opencontrol/compliance-masonry)
- a [Google Drive folder](https://drive.google.com/a/gsa.gov/folderview?id=0Bx6EvBXVDWwheUtVckVnOE1pRzA&usp=sharing) full of artifacts related to design, user research, etc (also expected to move to GitHub in time)
- [Murals](http://mur.al/bklqnALZ) for our quarterly PI planning sessions

We try to move others to the [opencontrol](https://github.com/opencontrol) or [fisma-ready](https://github.com/fisma-ready) GitHub organizations whenever appropriate.

To release: `ci.fr.cloud.gov -> deploy-cf project`
