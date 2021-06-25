---
name: ATO
about: Checklist for an Authority to Operate
title: ATO for [system] - due [date]
labels: "g: accepted, i: software assurance"
assignees: ""
---
- **Main repository:** [url]
- **Site:** [url]
- **Product manager:** @[username]
- **System Owner:** @[username of technical point of contact who will be the project representative in the Sprint]
- **Infrastructure Lead:** @[username]
- **ATO folder:** [url]
- **Sprint notes:** [url]

## TODOs

If your system isn't live yet, "production" refers to the environment that _will_ be production.

### Phase 0: As early in the project as possible


- [ ] Assign the appropriate labels to this issue.
- [ ] Read the following:
  - [ ] [Guidelines for GSA's Digital Presence](https://insite.gsa.gov/employee-resources/communications/digital-website-communication/policies-and-guidelines/guidelines-for-gsas-digital-presence)
  - [ ] [Hello, production](https://blog.thepete.net/blog/2019/10/04/hello-production/)
  - [ ] [The Engineering Practices Guide](https://engineering.18f.gov/), particularly:
    - [ ] [Languages & Runtimes](https://engineering.18f.gov/language-selection/)
  - [ ] [Before You Ship](https://before-you-ship.18f.gov), particularly:
    - [ ] [Infrastructure](https://before-you-ship.18f.gov/infrastructure/)
    - [ ] [Lifecycle of a Launch](https://before-you-ship.18f.gov/ato/)
  - [ ] [The API Standards](https://github.com/GSA/api-standards), if you plan to have an API
- [ ] Determine the [impact level](https://before-you-ship.18f.gov/ato/levels/).
  - [ ] Confirm with @[Authorizing Official]

### Phase 1: ATO Sprint prerequisites

Everything in this section needs to be completed before the project will be scheduled for an ATO Sprint.

#### Tech Portfolio Lead

- [ ] Set up an ATO intro meeting with the project team.
- [ ] Set up the project ATO folder.
- [ ] Make a copy of the [ATO Sprinting notes template](https://docs.google.com/document/d/1EdcNyE1kkQve3tHyiV1QIRWNOBlTeh33lAbX0h4h18M/edit) and save it in the [Sprinting Team folder](https://drive.google.com/drive/folders/0B2tmNhXsZ-EyVkVra21NTmc0U00?usp=sharing) with a title of `ATO Sprinting Team notes - <project>`.
  - [ ] Fill out the placeholders.
  - [ ] Link to it as the `Sprint notes` at the top of this issue.

#### Project team

##### Technical

These tasks apply to every repository/application/hostname/language that is directly involved in your project.

- [ ] Enable [protected branches](https://help.github.com/articles/about-protected-branches/) for the project repository.
  - Get help via #admins-github, if needed.
- [ ] Ensure that your production environment is fully set up, and matches what's described in your ATO materials.
- [ ] [Set up monitoring](https://before-you-ship.18f.gov/infrastructure/monitoring/)
  - [ ] [Downtime alerts](https://before-you-ship.18f.gov/infrastructure/monitoring/#downtime)
  - [ ] [Error & performance alerts](https://before-you-ship.18f.gov/infrastructure/monitoring/#errors--performance-problems)
  - [ ] [DAP](https://digital.gov/dap/)
- [ ] [Log required events](https://before-you-ship.18f.gov/infrastructure/logging/#what-to-log)
- [ ] Perform security scans, and put the results (or a link to them) in the project's `ATO folder`.
  - [ ] Set up [dependency analysis](https://before-you-ship.18f.gov/security/static-analysis/) service
    - [ ] Add service badge to your README
    - [ ] Put a point-in-time PDF of the scan results in the project's `ATO folder`.
  - [ ] Set up [static code analysis](https://before-you-ship.18f.gov/security/static-analysis/)
    - [ ] If using a service, add the badge to your README.
  - [ ] [Perform dynamic vulnerability scanning](https://before-you-ship.18f.gov/security/dynamic-scanning/)
    - [ ] Resolve any visible security issues, re-running the scan as needed
    - [ ] Add the issue-free scan report or documentation about false positives to the project's ATO folder.
- [ ] If this is a new system, add a prominent [`Beta`](https://18f.gsa.gov/dashboard/stages/) label to the site.
- [ ] Ensure the production environment has sufficient capacity to withstand the testing.
  - The testing tools create very heavy usage and traffic.

##### Documentation

...reading and writing.

- [ ] Read the [Overview](https://before-you-ship.18f.gov/) and [the ATO section (including sub-pages)](https://before-you-ship.18f.gov/ato/) of Before You Ship.
- [ ] Read the LATO guide<!-- unless not doing a LATO -->.
  - Search [this page](https://insite.gsa.gov/topics/information-technology/security-and-privacy/it-security/it-security-procedural-guides) for "Lightweight Security Authorization Guide".
- [ ] Read the [Checklist of Requirements for Federal Websites and Digital Services](https://digital.gov/resources/checklist-of-requirements-for-federal-digital-services/)
- [ ] Read the [Guidelines for GSA's Digital Presence](https://insite.gsa.gov/employee-resources/communications/digital-website-communication/policies-and-guidelines/guidelines-for-gsas-digital-presence)
- [ ] Request a [privacy threshold analysis (PTA)](https://before-you-ship.18f.gov/privacy/)
- [ ] Fill out the Rules of Engagement (RoE)
  - [Network diagram tips](https://before-you-ship.18f.gov/ato/ssp/#diagrams)
- [ ] [Update relevant documentation](https://before-you-ship.18f.gov/ato/tips/), primarily the README.
- [ ] [Fill out the System Security Plan (SSP).](https://before-you-ship.18f.gov/ato/ssp/)

### Phase 2: Documentation review


1. [ ] Schedule a documentation review session. 
   - One or more follow-up sessions may be necessary.
1. [ ] Fix any documentation issues identified in the session.
1. [ ] RoE signed
   - [ ] System Owner
   - [ ] GSA IT
1. [ ] Confirm you can access [Archer](https://before-you-ship.18f.gov/ato/archer/)

### Phase 3: ATO Sprint

1. [ ] Sprint started.
1. [ ] Polish up the System Security Plan (SSP).
1. [ ] [Security procedures](https://insite.gsa.gov/employee-resources/information-technology/security-and-privacy/it-security/it-security-procedural-guides) complete
   1. [ ] Security Engineering Architecture Review
   1. [ ] Penetration test - @[tester]
      - [ ] Enhanced Scanning and Assessment Process (ESAP) document added to ATO folder - @[tester]
1. [ ] Put all vulnerabilities from the ESAP in the project's issue tracker.
1. [ ] Fix any `Critical` or `High` vulnerabilities from the ESAP.
   - This needs to be done before the ATO can be issued, though not necessarily before the end of the sprint.

### Phase 4: Post-Sprint

1. [ ] Controls tested - @[GSA IT representative]
1. [ ] Create a Plan of Actions and Milestones (POAM). - @[GSA IT representative]
1. [ ] Final review and risk acceptance signatures (issue the ATO) - @[Authorizing Official]
1. [ ] Remove the `Beta` label from the site.
1. [ ] Fix all `Moderate` vulnerabilities - due [30 days after ATO issued]
1. [ ] Fix all `Low` vulnerabilities - due [60 days after ATO issued]
1. [ ] [Join the TTS Private Bug Bounty](https://docs.google.com/forms/d/1lvCBb2-jc5nNi-5V8J3IZQ8TcvMj8BWwryo1Qk3e_Bc/edit) - due [60 days after ATO issued]
1. [ ] Move to the TTS Public Bug Bounty - ask [#bug-bounty](https://app.slack.com/client/T025AQGAN/C0X2FMJ86) - due [two weeks after start] or two weeks after the last critcal/high report was triaged, whichever comes last

---

See the [Before You Ship](https://before-you-ship.18f.gov/ato/) site for more information.

/cc @18F/tts-tech-portfolio
