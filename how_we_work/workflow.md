# Tech Portfolio Workflow

## Ceremonies and Activities

We use the term "sprint" to refer to the ceremony cycles, even though they aren't strictly Sprints in the Scrum sense. These can all be found on the shared `TTS Tech Portfolio` calendar.

Any ceremony can start with a [standup](#stand-ups) if needed.

### Sprint Planning

**Purpose:** Have the `Ready (Sprint Planned)` column represent all cards that will be started this Sprint.

**Meeting Flow:**

1. **Due Date Review:** [Look for cards that have upcoming due dates.](https://github.com/orgs/18F/projects/11?fullscreen=true&card_filter_query=label%3A%22m%3A+due+date%22) Move into `Ready (Sprint Planned)` as necessary to complete them in time.
1. **Review `New` cards:** Move cards into `Backlog (Sprint Staging)` that you would like to discuss adding into the Sprint. Move the rest into `Icebox`.
1. **Review `Icebox` cards:** Move cards from `Icebox` into `Backlog (Sprint Staging)` that you would like to discuss adding into the Sprint.
1. **Get `Ready`:** Move cards between `Backlog (Sprint Staging)` and `Ready (Sprint Planned)`.
   - `Ready (Sprint Planned)` should represent the [highest-priority](#prioritization) issues that haven't been started.
   - There should only be as many assigned to each person as they think they will be able to start this Sprint. Keep the following in mind:
     - [What to work on](#what-to-work-on)
     - Upcoming leave
     - Other commitments (training, working groups, etc.)

#### Prioritization

Use the following considerations for how to prioritize cards moving towards/into `Ready`:

- Due date
- Force-multiplier / quick win / high value
  - Prioritize reducing Tech Portfolio pain points / [toil](https://sre.google/sre-book/eliminating-toil/) before those of our customers, in the spirit of "put your own oxygen mask on first, before attempting to help those around you."
- Continuation of things you've already been working on
- Solve active pain points over nice-to-haves

### Stand-ups

**Purpose:** Ensure folks are making progress within their assigned Initiative areas and that people aren't blocked.

**Meeting Flow:**

1. First 15 minutes or less: For each participant, give status updates.
   1. Filter board by `assignee:<GITHUB_USERNAME>`
   1. Give status updates on issues from right to left (`Blocked/Watching` through `In Progress`), top to bottom in each column
   1. What they plan to start next
   1. Raise any:
      - Current blockers
      - Things that need feedback
      - Help needed
   1. Confirm there are no issues missing to represent recent/current/upcoming work
   1. Review of calendar items that others might benefit from attending or knowing about
1. Folks who don't need to stay for subsequent items are welcome to drop.
1. Revisit [parking lot](https://agileforall.com/7-tips-for-a-more-effective-daily-scrum/) items.
1. OpsRotation person leads looking at any any pull requests that would be useful to review as a group.

### What to work on

Work on cards assigned to you:

1. With upcoming [due dates](https://github.com/orgs/18F/projects/11?fullscreen=true&card_filter_query=label%3A%22m%3A+due+date%22)
1. Right to left on the board

See also: [guidelines for external contribution](https://docs.google.com/drawings/d/1YzYVriKsExFEdS8Qf20LAa-quxdOuYuPX2ZeQ8K_D9w/edit)

### Lunches

**Purpose:** Team bonding/culture-building.

Optional. We talk about whatever we want, work-related or not.

### Co-working

**Purpose:** Time set aside to work through tasks as a group (full or partial team)

### Grooming

**Purpose:** Ensure that cards that are [groomed](#grooming-status) before they're closed, ideally before they're started.

**Meeting Flow:**

1. New Card Review - Teammates will brief others on the new cards they created and the group will decide where the card should go to `Icebox` or `Backlog (Sprint Staging)`.
1. Teammates will order the cards within their initiative in the `Icebox` based on their own criteria
1. Review [non-groomed issues](https://github.com/orgs/18F/projects/11?fullscreen=true&card_filter_query=-label%3A%22g%3A+accepted%22) right to left, [grooming](#grooming-status) each

### Icebox Thaw

**Purpose:** Remove stale issues from the `Icebox`.

### Retros

**Purpose:** An opportunity for the team to inspect itself and identify possible improvements.

[Notes](https://docs.google.com/document/d/1AllRE0PWduc_Blu1bt5RWMqIbjbkROzlEugqZ089VTg/edit#)

## [The board](https://github.com/orgs/18F/projects/11?fullscreen=true)

**Purpose:** Show what is and isn't being worked on, and to help keep ourselves from taking on too much at once, individually and collectively.

The board structure is inspired by Kanban.

### Initiatives

These are our categories of work. There is an `Initiatives` column that is there to help with filtering.

### Cards

Also known as an "issue".

**Purpose:**

- Representing chunks of work
- Remind ourselves what problem we are trying to solve
- Establish a scope that is completable sooner than later

A card should be created when a task:

- Is the responsibility of the Tech Portfolio (versus something like a personal HR-related task)
- Will take more than 30 minutes
  - Shorter tasks can be added (such as "schedule meeting around X"), but is not required
  - Not necessary for things like recurring or TTS-wide meetings. For example: we don't have cards for each of our ceremonies.
  - Beware of tasks that seem quick ("email someone about X") but commit you / the team to follow-on conversations/work.
- Would otherwise be lost as an action item in an email, meeting notes, Slack, etc.

Other notes:

- If there is a repository that the issue is specifically applicable to, create it there. Otherwise, default to [creating in the tts-tech-portfolio repository](https://github.com/18F/tts-tech-portfolio/issues/new/choose).
- [Add all Tech Portfolio-related issues to the project board.](https://help.github.com/en/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)
- Cards with a due date should have a suffix of `- due [date]` in the title and the `m: due date` label.
- Cards that need to make their way into `In Progress` mid-sprint should be tagged with `m: expedite`.

#### Assignment

Issues default to being assigned to the corresponding Initiative owner. That person is welcome to ask for someone else to take it, such as if:

- A particular skillset is needed
- They don't have capacity to finish it by the due date
- It falls under someone else's [role](roles.md)
- The other person is specifically interested (for personal growth, etc.)

The Project Manager will be responsible for resolving any uncertainty around assignment.

### Labels

We have a couple set types of labels, which are [configured as code](../terraform/repo/vars.tf). Beyond those, you are welcome to add whatever labels are useful to you.

#### Grooming status

**Purpose:** Consensus on the problem that will be solved and the work expectations (timeline, artefact, etc.)

The grooming status is represented with the `g:` labels: `g: initial` → `g: final` → `g: accepted`. An issue is considered "groomed" (`g: accepted`) once it has been:

- Given the following labels:
  - Initiative (`i: <whatever>`)
    - `s: months` should be broken up
  - Size (`s: <days|weeks>`)
- Added to the board
- Assigned
- Reviewed by another member of the team for clarity, accuracy, and being realistic

`Implementation Steps` aren't required at this point. See also: the [grooming](#grooming) sprint ceremony.

### Columns

Ideally, issues move left to right, with the exception of `Feedback/Waiting` and `Blocked/Watching`.

| Column                  | Description                                                                                                                                                          | Ordered?                            | Max per person                 | Issue entrance criteria                                                       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------ | ----------------------------------------------------------------------------- |
| New                     | Newly created Issues land here automatically.                                                                                                                        | N                                   |                                |                                                                               |
| Icebox                  |                                                                                                                                                                      | Y, within each Initiative (roughly) |                                |                                                                               |
| Backlog (Sprint Staged) | Issues to be considered for the next Sprint.                                                                                                                         | N                                   | 4                              | [Assigned](#assignment)                                                       |
| Ready (Sprint Planned)  | Issues to be worked on next. Populated during the Sprint Planning ceremony.                                                                                          | Y                                   |                                | [Groomed](#grooming-status)                                                   |
| In Progress             | Issues that are being actively worked on.                                                                                                                            | N                                   | 3, though fewer is recommended | [Groomed](#grooming-status)                                                   |
| Feedback/Waiting        | Issues temporarily moved into this column. Expect to move in and out quickly. Something that is actively being worked on and it is with someone else for the moment. | N                                   |                                | Explanation of what it's waiting on                                           |
| Blocked/Watching        | Issues that are waiting on someone outside the team; out of our control to get done. Want to keep an eye on it, but not likely to be responsible for it to be done.  | N                                   |                                | Explanation of what it's waiting on                                           |
| Done                    | Issues that have been completed this sprint.                                                                                                                         | Y                                   |                                | Closed due to either being complete or deemed a duplicate, out of scope, etc. |
| Initiative              |                                                                                                                                                                      | N                                   |                                |                                                                               |
