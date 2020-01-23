# TTS Project Board

## General Instructions

- An issue should be created when a task:
  - Is the responsibility of our team (versus something like a personal HR-related task)
  - Will take more than 30 minutes
    - Shorter tasks _can_ be added (such as "schedule meeting around X"), but is not required
    - Not necessary for things like recurring or TTS-wide meetings. For example: we don't have issues for each of our Sprint Planning sessions.
  - Would otherwise be lost as an action item in an email, meeting notes, Slack, etc.
- Let the rest of the team know you are starting an issue (radiate intent) by copying the link of the issue into our private chat and @-ing the rest of the team.

## Workflow Ceremonies

The team plans on working in an agile way, focused on Kanban with agile ceremonies. No designated person is responsible for any one category/domain of work.

### Standups

On a daily basis, the group meets for a half hour. The group will verbally discuss the following

1. What did I work on yesterday?
1. What am I working on today?
1. What issues are blocking me?

At the individual level, it’s important to walk into the day's stand-up prepared. It keeps the energy of the stand-up high and everyone engaged.

### Grooming

Steps:

1. Insert `New Issues` into either `Icebox` or `Backlog`
1. Collaboratively order what are in the `Icebox` and `Backlog` columns.

The team looks through cards that are labeled `needs grooming`, individuals refine what is written, and create/validate Acceptance Criteria. If all sections of the issue are agreed upon, the label `needs grooming` is removed.

### Planning Ceremony

Steps:

- Collaboratively order the `Epics`, then use those to order what is in the `Backlog` and `Ready` columns.
- Clear out the `New Issues` column.

### Retros

Are an opportunity for the team to inspect itself and create a plan for improvements to be enacted during the next Sprint.

### Sprint Reviews

Sprint reviews are a chance to look back and celebrate what has reached the `Done` column and communicate that with our users, teammates, and other stakeholders. Previously, the TTS Tech Portfolio team had a "TTS infrastructure check-in" meeting but this is now the "TTS Tech Portfolio - Sprint Review" meeting.

The Sprint Review includes the following elements:

- The Attendees include the TTS Tech Portfolio team and key stakeholders
- The person from the TTS Tech Portfolio team who is currently on the Operations Rotation leads the meeting, as the 'Meeting Leader'.
- The Meeting Leader explains what Backlog items have been "Done" and what has not been "Done"
- If there are any final decisions, finished documents, etc that have been completed, those items are reviewed in greater detail.
- The Meeting Leader discusses the Backlog as it stands.
- The entire group collaborates on what to do next, so that the Sprint Review provides valuable input to subsequent Sprint Planning.
- Any potential [success stories](https://docs.google.com/document/d/1HmAtF3A4HUvn2HRV_nfgaXxlO8spqIJmkOP8nJoUqQs/edit) are noted

General agenda (with max time for each):

1. 40 mins: Go through all issues in `Done` with demos as applicable
1. 5 mins: `In progress`
1. 5 mins: `Waiting/Blocked`
1. 10 mins: Q&A and suggestions from stakeholders

## Epics

- Create an issue for the epic - use the label `epic-able`
- Label it with the label "epic"
- Move it to the `Epics` column
- Create a label related to that epic and use that label for related issues

## Cards

### General Instructions: for Issues on Project Board

- Ensure `Work in Progress (WIP)` limits
- Ensure `Acceptance Criteria` are established
- Ensure there is a `User Story`

### Labels

- Use whatever labels works for you!
  - John plans on using labels related to the Cybersecurity Framework
    - This helps him with tracking work as it relates to the NIST 800-53 controls.
  - Alyssa plans on using labels related to the domain of work that fits her skills
    - This helps her prioritize, sort & pull from

#### Grooming

- Has actionable Acceptance Criteria that we expect to be able to check off to help us understand when the work is done.
- Discussed by the team and implementation sketched (use more checklists here).
- We believe the benefit of the story is easily deliverable within in a few days of concentrated work (otherwise, split it into smaller stories!)
- Everyone that would like to work on it has been assigned

### Assignments

- If you would like to work on an issue, assign yourself to it once it is in the `Backlog` column

## Project Board

##### Definition of "Done" (DoD)

An agile "Definition of Done" (DoD) captures the team's agreed-upon standards for how we get work done at a consistent level of quality. Having a DoD ensures that non-functional requirements (NFRs) don't have to be re-litigated for every piece of work taken on, cards can be focused on just the relevant details, and new team members aren't surprised by assumed expectations of their colleagues.

### Columns

| Column          | Description                                                                               | Prioritized?                                   | Entrance criteria                                                                                                                                 | Exit criteria                                                                      |
| --------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **New Issues**  | Where reported issues, and newly-identified stories appear.                               | N                                              |                                                                                                                                                   | Moved to Backlog or Icebox, or closed.                                             |
| **Epics**       |                                                                                           | Y, during Sprint Planning                      |                                                                                                                                                   |
| **Icebox**      | Issues that are not planned to get attention any time soon.                               | Y, during Grooming                             |                                                                                                                                                   |
| **Backlog**     | Indicate the intended benefit and who the story is for in one of these forms              | Y, during sprint planning                      | Has label, assignment, and acceptance criteria.                                                                                                   |
| **Ready**       | No info or assistance is needed from outside the team to start work and likely finish it. | N                                              | Label, assignment, and acceptance criteria. There's capacity available to work on the story (e.g., this column is a buffer of shovel-ready work). |
| **In Progress** | When someone is actively working on the issue                                             | Up to assignee                                 | Discussed during a ceremony, fully groomed, and assigned.                                                                                         | Relevant tasks complete, irrelevant checklists removed or captured on a new story. |
| **Blocked**     | When there's a dependency on someone responding or something happening outside the team   | N                                              | Waiting for other members on the team to validate work product                                                                                    | Form/Document submitted and waiting on other                                       |
| **Done**        | When work warrants demonstration to stakeholders and is awaiting the next sprint review   | Y, by Meeting Leader in prep for Sprint Review | Acceptance criteria are demonstrably met.                                                                                                         | The work is user-visible and announceable at any time.                             |
