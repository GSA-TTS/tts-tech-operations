---
name: Decommissioning
about: Checklist for shutting down a system
title: decommission [system]
labels: "g: accepted, i: enterprise architecture"
assignees: ""
---

_Add/remove items, as applicable._

- [ ] Notify any users of the system, via banner across the site, email, Slack, etc. Ideally, help them find alternatives, make sure they're off in time, etc.
- [ ] Export any relevant [records](https://handbook.tts.gsa.gov/records-management/) and store in Google Drive.
- [ ] Clean up infrastructure
  - [ ] cloud.gov organization deleted ([contact](https://cloud.gov/contact/))
  - [ ] Delete any associated AWS resources, and decommission any AWS accounts. Ask in [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure) for help.
  - [ ] If the site was operated on Federalist, contact [federalist-support@gsa.gov](mailto:federalist-support@gsa.gov) to deprovision the [custom domain](https://cloud.gov/docs/management/custom-domains/) for the site
- [ ] [Archive the GitHub repositor(ies)](https://help.github.com/articles/archiving-repositories/). Ask in [#admins-github](https://gsa-tts.slack.com/messages/admins-github) if you need help.
- [ ] Domain changes
  - [ ] Clean up any DNS entries that are no longer needed, from [the DNS repository](https://github.com/18F/dns) or elsewhere.
  - [ ] If site was still in use, do one of the following:
    - [Set up redirect(s)](https://github.com/18F/pages-redirects#domain-redirects)
    - Point to Google Form asking about usage—see [the Fugacious page](https://fugacious.18f.gov/) ([code](https://github.com/18F/fugacious-landing)) as an example
  - [ ] [Delete the domain registration from DotGov](https://home.dotgov.gov/management/#how-do-i-delete-my-domain)
  - [ ] Update inventories
    - [ ] [TTS subdomains](https://docs.google.com/spreadsheets/d/12pfcEIEXaJTjIKex-3wnI89erIvgKf9B_XpGkDl6qsM/edit#gid=1884617968)
    - [ ] [GSA websites](https://docs.google.com/spreadsheets/d/1OBO6g7_OsVBv0vG8WSCI6L2FD_iRh3A7a_6eQWj2zLE/edit#gid=2013137748)
- [ ] Notify other parts of GSA
  - [ ] Notify your ISSO
  - [ ] Notify the Privacy Office ([gsa.privacyact@gsa.gov](mailto:gsa.privacyact@gsa.gov)) to take down the [privacy impact assessment (PIA)](https://www.gsa.gov/reference/gsa-privacy-program/privacy-impact-assessments-pia) and/or privacy threshold assessment (PTA)
  - [ ] Disposal Notification letter signed
- [ ] Clean up integrations/usage of any [third-party software](https://docs.google.com/spreadsheets/d/12pfcEIEXaJTjIKex-3wnI89erIvgKf9B_XpGkDl6qsM/edit#gid=0) (add checkboxes below)
  - [ ] Remove (sub)accounts
    - [ ] New Relic - [#admins-newrelic](https://gsa-tts.slack.com/messages/admins-newrelic)
  - [ ] Remove any external integrations
    - [ ] [Slack](https://handbook.tts.gsa.gov/slack/#integrations)
  - [ ] Archive the Slack channel
  - [ ] Archive the issue tracker (Trello, etc.)
