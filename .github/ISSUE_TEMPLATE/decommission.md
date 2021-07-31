---
name: Decommissioning
about: Checklist for shutting down a system (website, micro/informational site,
cloud.gov app, etc.)
title: decommission [system]
labels: "g: accepted, i: enterprise architecture"
assignees: ""
---

> [Helpful resource about sites vs systems](https://docs.google.com/document/d/1chNbOfxs2vLGSUuIPtWZregaUeT-ruLc8EufEzt9GZk/edit)

## All systems

The following checklist is used for decomissioning **any system**, regardless of
whether it has a backend or not. Examples of systems that don't have a backend
include micro/informational sites on Federalist such as `https://search.gov` and
`https://login.gov`. This checklist also applies when decommissioning a site and merging its content
into a different site.

_Add/remove items, as applicable._

- [ ] Notify any users of the system, via banner across the site, email, Slack, etc. Ideally, help them find alternatives, make sure they're off in time, etc.
  - [ ] Update the `README.md` file to indicate where and when the site was
  decommissioned, archived, or redirected ([example](https://github.com/18F/before-you-ship#readme))
- [ ] [Archive the GitHub repositor(ies)](https://help.github.com/articles/archiving-repositories/). Ask in [#admins-github](https://gsa-tts.slack.com/messages/admins-github) if you need help.
- [ ] Clean up integrations/usage of any [third-party software](https://docs.google.com/spreadsheets/d/12pfcEIEXaJTjIKex-3wnI89erIvgKf9B_XpGkDl6qsM/edit#gid=0) (add checkboxes below)
  - [ ] Remove (sub)accounts
    - [ ] New Relic - [#admins-newrelic](https://gsa-tts.slack.com/messages/admins-newrelic)
  - [ ] Remove any external integrations
    - [ ] [Slack](https://handbook.tts.gsa.gov/slack/#integrations)
  - [ ] Archive the Slack channel
  - [ ] Archive the issue tracker (Trello, etc.)
- [ ] (If applicable) Ask the Tech Portfolio to update [TTS subdomains](https://docs.google.com/spreadsheets/d/12pfcEIEXaJTjIKex-3wnI89erIvgKf9B_XpGkDl6qsM/edit#gid=1884617968)

### If you're merging content or redirecting to a different site

If the site you're decommissioning is being merged into or redirect to another site, then
complete the following sub-checklist.

- [ ] Content is fully merged into the destination site
  - [ ] Merges happen incrementally rather than all at once. (For an example,
    [see the pull requests](https://github.com/18F/handbook/pulls?q=is%3Apr+bys+is%3Aclosed) for merging `before-you-ship.18f.gov` into
    `handbook.tts.gsa.gov`)
  - [ ] Redirects are set up for distinct content sections or pages 
  - [ ] Redirect is set up for the top-level domain
- [ ] [Update the TouchPoints record](https://touchpoints.app.cloud.gov/admin/websites)
  - [ ] Production status is updated to 'Redirect'

### If you're deleting the site's content

If the site you're decommissioning is being taken down without merging its
content anywhere, then complete this sub-checklist instead.

 - [ ] If the site was operated on Federalist, contact [federalist-support@gsa.gov](mailto:federalist-support@gsa.gov) to deprovision the [custom domain](https://cloud.gov/docs/management/custom-domains/) for the site
- [ ] [Update the TouchPoints record](https://touchpoints.app.cloud.gov/admin/websites)
  - [ ] Production status is updated to 'Decommissioned' or 'Archived'
- [ ] Export any relevant [records](https://handbook.tts.gsa.gov/records-management/) and store in Google Drive.


## Only systems with a backend

This additional checklist is used for decomissioning **systems with a backend** or other
supporting infrastructure. Examples of systems that have a backend are
cloud.gov/AWS applications like `https://secure.login.gov` and `https://search.usa.gov`.

_Add/remove items, as applicable._

- [ ] Clean up infrastructure
  - [ ] cloud.gov organization deleted ([contact](https://cloud.gov/contact/))
  - [ ] Delete any associated AWS resources, and decommission any AWS accounts. Ask in [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure) for help.
- [ ] Domain changes
  - [ ] Clean up any DNS entries that are no longer needed, from [the DNS repository](https://github.com/18F/dns) or elsewhere.
  - [ ] If site was still in use, do one of the following:
    - [Set up redirect(s)](https://github.com/18F/pages-redirects#domain-redirects)
    - Point to Google Form asking about usage—see [the Fugacious page](https://fugacious.18f.gov/) ([code](https://github.com/18F/fugacious-landing)) as an example
  - [ ] [Delete the domain registration from DotGov](https://home.dotgov.gov/management/#how-do-i-delete-my-domain)

- [ ] Notify other parts of GSA
  - [ ] Notify your ISSO
  - [ ] Notify the Privacy Office ([gsa.privacyact@gsa.gov](mailto:gsa.privacyact@gsa.gov)) to take down the [privacy impact assessment (PIA)](https://www.gsa.gov/reference/gsa-privacy-program/privacy-impact-assessments-pia) and/or privacy threshold assessment (PTA)
  - [ ] Disposal Notification letter signed

