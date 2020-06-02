# Tech Portfolio Workflow

## [The board](https://github.com/orgs/18F/projects/11?fullscreen=true)

**Purpose:** Show what is and isn't being worked on, and to help keep ourselves from taking on too much at once, individually and collectively.

The board structure is inspired by Kanban.

### Issues

**Purpose:**

- Remind ourselves what problem we are trying to solve

- Establish a scope that is completable sooner than later

Also known as a "card". An issue should be created when a task:

- Is the responsibility of the Tech Portfolio (versus something like a personal HR-related task)
- Will take more than 30 minutes
  - Shorter tasks can be added (such as "schedule meeting around X"), but is not required
  - Not necessary for things like recurring or TTS-wide meetings. For example: we don't have issues for each of our ceremonies.
  - Beware of tasks that seem quick ("email someone about X") but commit you / the team to follow-on conversations/work.
- Would otherwise be lost as an action item in an email, meeting notes, Slack, etc.

If there is a repository that the issue is specifically applicable to, create it there. Otherwise, default to [creating in the tts-tech-portfolio repository](https://github.com/18F/tts-tech-portfolio/issues/new/choose). [Add it](https://help.github.com/en/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board) to the project board. Issues with a due date should have a suffix of `- due [date]` in the title and the `due date` label.

### Labels

We have a couple set types of labels. Beyond those, you are also welcome to add whatever labels are useful to you. The labels are [configured as code](terraform/).

In order to allow for continued asynchronous work as much as possible, if a person needs feedback on an issue, use the label `feedback needed` and tag in the person and provide a synopsis of what feedback you're looking for.

#### [Domain](https://github.com/18F/tts-tech-portfolio/labels?q=epic)

**Purpose:** [Filtering on the board](https://help.github.com/en/github/managing-your-work-on-github/filtering-cards-on-a-project-board)

Multiple may apply to any given issue.

#### [Grooming status](https://github.com/18F/tts-tech-portfolio/labels?q=groom)

**Purpose:** Indicate the state of the issue itself.

See [Grooming](#grooming).

### Columns

Ideally, issues move left to right, with the exception of Blocked/Waiting. There is no team-wide vertical ordering of issues in any column, though individuals are welcome to do so.

| Column          | Description                                         | Max per person                 | Issue entrance criteria                                                       |
| --------------- | --------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------------- |
| Backlog         | New/lower-priority issues                           |                                |                                                                               |
| Ready           | Issues that will be worked on next                  | 4                              | Must be assigned                                                              |
| In Progress     | Issues that are being actively worked on            | 3, though fewer is recommended | Must be [groomed](#grooming)                                                  |
| Blocked/Waiting | Issues that are waiting on someone outside the team |                                | Must have explanation of what it's waiting on                                 |
| Done            | Issues that have been completed this sprint         |                                | Closed due to either being complete or deemed a duplicate, out of scope, etc. |

## Ceremonies

We use the term "sprint" to refer to the ceremony cycles, even though they aren't strictly Sprints in the Scrum sense.

### Standups

**Purpose:** Ensure we aren't stepping on each others' toes, and that people aren't blocked.

1.  Each team member gives an update on:
    1.  What did you work on since the last standup?
    1.  What are you working on next?
    1.  What are your blockers?
    1.  Do you need/want help with anything?
1.  We look for work that is missing from the board from each person's standup
1.  We look for [anything with a due date](https://github.com/orgs/18F/projects/11?fullscreen=true&card_filter_query=due) coming up and ensure it's Ready and assigned.

At the individual level, it's important to walk into the day's stand-up prepared. It keeps the energy of the stand-up high and everyone engaged.

### Lunches

**Purpose:** Team bonding/culture-building.

We talk about whatever we want, work-related or not. We avoid talking about day-to-day tasks—that's what Standups are for.

### Sprint Planning

**Purpose:** Ensure we are making progress on longer-term goals.

Review long-term goals and determine what should be prioritized next, or if any issues are missing for them.

### Deep Grooming

**Purpose:** Keep the number of issues on the board manageable.

In Deep Grooming, we close issues in the Backlog that:

- We don't believe we'll get to it in the next three months
- Are out of [scope](https://handbook.tts.gsa.gov/tech-portfolio/) for the Tech Portfolio

### Sprint Reviews

**Purpose:** Look back and celebrate what has reached the `Done` column, and communicate that with our users, teammates, and other stakeholders.

- The Attendees include the Tech Portfolio team and others that are interested.
- The person from the Tech Portfolio team who is currently on the Operations Rotation leads the meeting.
- If there are any final decisions, finished documents, etc that have been completed, those items are reviewed in greater detail.
- Any potential success stories are noted.

#### Prep

- Archive any issues that are in `Done` that were closed without completion (duplicates, deemed out of scope, etc.)
  - Reach out to the team ahead of time to get input
- Find `Done` issues that are demo-able, and reach out to team member with as much notice as possible

#### General agenda

...with max time for each:

1.  40 mins: Go through all issues in `Done` with demos as applicable
1.  5 mins: `In progress`
1.  5 mins: `Waiting/Blocked`
1.  10 mins: Q&A and suggestions from stakeholders

### Retros

**Purpose:** An opportunity for the team to inspect itself and identify possible improvements.

[Notes](https://docs.google.com/document/d/1AllRE0PWduc_Blu1bt5RWMqIbjbkROzlEugqZ089VTg/edit#)

## Actions

The following happen outside of [Ceremonies](#ceremonies).

### Grooming

For an issue to be "groomed", it must:

- Have the relevant [template](https://github.com/18F/tts-tech-portfolio/issues/new/choose) filled out
- Be reviewed by another team member for clarity and scope
- Have the relevant [labels](#labels) attached
- Be assigned to one or more people
- Be no more than two weeks worth of work
  - If longer, it should be split into multiple, if not considered an [Epic](#epics)
- The person who created the issue doesn't have to be the one to groom it or eventually be assigned to it
- Ideally the person who is assigned to the task is the person who grooms it

#### Procedure

For each issue:

1. If the issue already exists but isn't groomed, assign `grooming: draft - initial` label
1. Fill in the issue template
1. Switch to `groomed: draft - final` label
1. Have someone else on the team review
1. They will switch to `groomed: accepted` label

### Assignment

You can assign yourself to any issue that isn't assigned to anyone else. If you would like to be assigned to something that someone is already assigned to either cowork or lead the task, coordinate it with the person currently assigned. While not a strict rule, keep an eye out for issues that:

- Are a continuation of things you've already been working on
- Match your skill set
- Are of interest
- Fall under a [role](roles.md) you hold

If you need/want to hand something `In Progress` or `Blocked/Waiting` off to someone else, just say so.

### What to work on

Recommended order to prioritize issues:

1. `In Progress`
1. `Blocked/Waiting` that can be moved forward / broken up
1. `Ready` with upcoming due dates
1. Other `Ready`
1. `Backlog`, particularly issues that:
   1. Force-multipliers, i.e. where we can spend a little time now to save a lot of time in the long run
   1. Solve active pain points over nice-to-haves
   1. Are quick wins
   1. Are part of an [Epic](#epics)

## Epics

Projects that aren't completable within a couple weeks should follow this arc:

1. Proposal
   - This should live as a file in the repository, though can be drafted as a Google Doc
   - What is the problem(s) we are trying to solve?
   - What is the smallest increment / Minimum Viable Product?
   - Metric(s)
     - What might we want to measure to show it's successful?
     - What are the questions others might ask?
     - What information would we need to collect to answer them?
1. Consult stakeholders
1. Creation of tasks
1. Metrics: Measure the baseline
1. Complete tasks, and adapt as necessary
1. Consult stakeholders to ensure problem is solved, at least for now
1. Measure the new state, and compare to the baseline
1. Update relevant documentation
1. Announce as widely as possible / makes sense, which may be some combination of:
   - Blog
   - An internal/external talk
   - Email to stakeholders (TTS-wide?)
   - Post in #news or relevant channel
