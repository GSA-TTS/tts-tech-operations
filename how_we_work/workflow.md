# Tech Portfolio Workflow

## Structure

| Thing      | Definition         | Board Structure | Duration      |
| :--------- | :----------------- | :-------------- | :------------ |
| Initiative | Categories of work | Label & Column  | Indefinite    |
| Issue      | Chunks of work     | Cards           | Week, at most |

## Ceremonies and Activities

We use the term "sprint" to refer to the ceremony cycles, even though they aren't strictly Sprints in the Scrum sense. These can all be found on the shared `TTS Tech Portfolio` calendar.

### Stand-ups

**Purpose:** Ensure folks are making progress within their assigned Initiative areas and that people aren't blocked.

**Meeting Flow:**

1. For each participant:
   1. Filter board by `assignee:<GITHUB_USERNAME>`
   1. Give status updates on issues from right to left (`Blocked/Watching` through `In Progress`), top to bottom in each column
   1. What they plan to start next
   1. Raise any:
      - Current blockers
      - Things that need feedback
      - Help needed
   1. Review of calendar items that others might benefit from attending or knowing about
1. OpsRotation person leads looking at any any pull requests that would be useful to review as a group

#### What to work on

Recommended order to prioritize cards:

1. `In Progress`
1. `Waiting/Feedback` that can be moved forward / broken up
1. `Ready (Sprint Planned)` with upcoming due dates & left over from past sprints
1. Other `Ready (Sprint Planned)`

##### Tips

- Look for [anything with a due date](https://github.com/orgs/18F/projects/11?fullscreen=true&card_filter_query=due+label%3A%22due+date%22).
- Look for work that is missing from the board. If you mention you're working on something and it isn't represented, someone will probably ask a follow up question.
- See also: [guidelines for external contribution](https://docs.google.com/drawings/d/1YzYVriKsExFEdS8Qf20LAa-quxdOuYuPX2ZeQ8K_D9w/edit)

NOTE: This activity relates to the following measures within the Performance Plan

- Business Unit: Delivers great work (Customer Satisfaction & Relations), (Productivity & Volume)
- Duty Specific: Works well with others (Communication Skills), (Helps Others)

### Lunches

**Purpose:** Team bonding/culture-building.

We talk about whatever we want, work-related or not. We avoid talking about day-to-day tasks—that's what Stand-ups are for.

Opportunity to do some lean coffee style discussions to talk about areas of interest that folks want to hear from others.

NOTE: This activity is purely optional and will have no impact on an individual's performance plan.

### Sprint Planning and Grooming prep

**Purpose:** Come prepared to those ceremonies

1. Add cards to the board
   - related to your Initiative
   - related to Working Groups
   - etc
1. Make sure all the current In Progress/Waiting/Blocked cards are up to date and reflect the current status
1. Groom Cards
   - Cards in the Ready (Sprint Planned) column + the columns to the right must be `g: accepted` ([check](https://github.com/orgs/18F/projects/11?fullscreen=true&card_filter_query=-label%3A%22g%3A+accepted%22))
   - Cards in the Backlog (Sprint Staging) column must be `g: final` and ready to be Groomed Accepted ([check](https://github.com/orgs/18F/projects/11?fullscreen=true&card_filter_query=-label%3A%22g%3A+final%22))
   - Cards in the Icebox column must be `g: initial` ([check](https://github.com/orgs/18F/projects/11?fullscreen=true&card_filter_query=-label%3A%22g%3A+initial%22-label%3A%22g%3A+final%22+-label%3A%22g%3A+accepted%22))
1. Cards in Backlog (Sprint Staging) column + the columns to the right must be [assigned](#assignment)
   - Check to make sure cards in your Initiative are [assigned](#assignment) ([check](https://github.com/orgs/18F/projects/11?fullscreen=true&card_filter_query=-assignee%3Aafeld+-assignee%3Ajjediny))
   - Order cards
     - Sprint Planning -- cards that you want moved into the Sprint should be at the top of New when filtered by your name
     - Sprint Grooming -- cards that you want discussed, deleted or delegated should be at the bottom of Icebox when filtered by your name

#### Tips

- Have the relevant [template](https://github.com/18F/tts-tech-portfolio/issues/new/choose) filled out when creating a new card.
- During Grooming, you can move a card to Backlog (Sprint Staging) while it is still labeled `g: initial`; but it should be groomed ASAP.
- Ideally this is done by noon on Friday before the Sprint Ceremony to give teammates enough time to review. Also helps the Project Manager feel prepared going into the Sprint ceremony.
- Be especially diligent about adding cards that you would like to include into the new Sprint.
- This relates to the following measures within the Performance Plan
  - Business Unit: Improves Resource Management (Quality Management)
  - Duty Specific: Demonstrates agility, adaptability, and resilience (Planning & Agility)
  - Duty Specific: Works Well (Meets Deadlines), (Dependability)

### Sprint Planning

**Purpose:** Get all the cards that will be worked on in the next two weeks into the Backlog (Sprint Staging) from Ready (Sprint Planned), Icebox or New. Expect that the cards that are planned for will be the activity that gets worked on within the next couple of weeks unless there is a task that needs to be expedited.

**Meeting Flow:**

1. **Review personal async work**
1. **Due Date Review:** Look for any cards that have Due Dates within the next 3 weeks. Put any cards with Due Dates within the next 2 weeks into Ready (Sprint Planned).
1. **Triage planned but not In-Progress cards:** Determine if a previously planned card will go back into the Backlog (Sprint Staging) or stay in Ready(Sprint Planned). Any card that is more than 2 Sprints past due will need justification for staying open and not done.
1. **Review New cards:** Move cards into the Backlog (Sprint Staging) that you would like to discuss adding into the Sprint, giving a quick explanation of the card and justification for why it should be in Sprint Staging. Teammates will provide input and ask questions about new cards. Only cards to be added to this Sprint will be discussed; all other cards will be discussed at Grooming.
1. **Sprint Staged cards:** Move cards into the Backlog (Sprint Staging) that you would like to discuss adding into the Sprint. Order cards in Sprint Staging based on priority of getting added to ready. If card is not expected to be completed within this Sprint, move card from Backlog (Sprint Staging) to Icebox. If card is not expected to be completed within this Sprint, move card from Backlog (Sprint Staging) to Icebox.
1. **Review cards of other teammates:**
   1. Skim through any background information.
   1. Check:
      - That it clearly lays out what problem is being solved
      - That is captures all the perspective users
      - For achievable Acceptance Criteria
      - That the Size is realistic.
      - That it's clear what it would take to close the card
      - That it's easy to imagine what the end product of the card would be
   1. If approved, react with a 'thumbs up' emoji on the card body.
   1. If not approved, react with a 'thumbs down' emoji and indicate what else needs to be done in a comment.
1. **Sprint Discussion:** Are any cards missing in the that should be listed? Are there any lower effort cards that can be added? How much is this Sprint going to move the needle for your initiative?
1. **Ready (Sprint Planned):** Project Manager will add designated Sprint Milestone to cards. Project Manager will move over cards for teammates.

##### Tips

- Cards that are not likely to get done this Sprint should go at the bottom of the stack.
- Start from the top when reviewing cards.
- Filter for cards that are Groomed Final before starting a review and exclude cards assigned to yourself.
- Should have enough work to keep yourself busy for the next two weeks. Keeping in mind the current In Progress/Waiting/Blocked cards, any upcoming leave and pre-allocated work.
- As you are reviewing teammate's cards; make comments directly in the card; but you may also ask simple questions for the sake of clarity. (That's why we're doing this together as a group!)
- When considering cards to work on, think about..
  - Force-multipliers, i.e. where we can spend a little time now to save a lot of time in the long run
  - Solve active pain points over nice-to-haves
  - Are quick wins

### Grooming

**Purpose:** Maintain non-planned or in-progress cards.

**Meeting Flow:**

1. Speed Stand-Up (if needed)
1. New Card Review - Teammates will brief others on the new cards they created and the group will decide where the card should go Icebox or Backlog (Sprint Staging).
1. Teammates will order the cards within their initiative in the `Icebox` based on their own criteria
1. Card Review `Icebox`
1. Review cards of other teammates
   - Skim through any background information
   - Clearly lays out what problem is being solved
   - Captures all the perspective users
   - Validate the Size as being realistic
   - Achievable Acceptance Criteria
     - Clear what it would take to close the card
     - Easy to imagine what the end product of the card would be
1. Approve other's cards
   - If approved
     - React with a 'thumbs up' emoji on the card body
   - If not approve
     - Indicate what else needs to be done in a comment
1. Sprint Discussion
   - Should cards in the Backlog be moved back into the Icebox?
   - Believe cards should be in a different order?
   - Any cards that should get split up?
   - Any cards that can be delegated?
   - Any cards that can be deleted?
     - No longer relevant
1. Wrap-Up

#### Tips

- Start from the bottom when reviewing cards.
- Focus on cards that are Groom Initial when reviewing cards.
- Try to keep cards 'right-sized' and scoped to be started and finished within the Sprint.
- Filter for cards that are Groomed Final before starting a review and exclude cards assigned to yourself.

### Retros

**Purpose:** An opportunity for the team to inspect itself and identify possible improvements.

[Notes](https://docs.google.com/document/d/1AllRE0PWduc_Blu1bt5RWMqIbjbkROzlEugqZ089VTg/edit#)

## [The board](https://github.com/orgs/18F/projects/11?fullscreen=true)

**Purpose:** Show what is and isn't being worked on, and to help keep ourselves from taking on too much at once, individually and collectively.

The board structure is inspired by Kanban.

### Cards

**Purpose:**

- Remind ourselves what problem we are trying to solve
- Establish a scope that is completable sooner than later

Also known as an "issue". A card should be created when a task:

- Is the responsibility of the Tech Portfolio (versus something like a personal HR-related task)
- Will take more than 30 minutes
  - Shorter tasks can be added (such as "schedule meeting around X"), but is not required
  - Not necessary for things like recurring or TTS-wide meetings. For example: we don't have cards for each of our ceremonies.
  - Beware of tasks that seem quick ("email someone about X") but commit you / the team to follow-on conversations/work.
- Would otherwise be lost as an action item in an email, meeting notes, Slack, etc.

If there is a repository that the issue is specifically applicable to, create it there. Otherwise, default to [creating in the tts-tech-portfolio repository](https://github.com/18F/tts-tech-portfolio/issues/new/choose). [Add it](https://help.github.com/en/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board) to the project board.

- Cards with a due date should have a suffix of `- due [date]` in the title and the `due date` label.

#### Assignment

Issues default to being assigned to the corresponding Initiative owner. That person is welcome to ask for someone else to take it, such as if:

- A particular skillset is needed
- They don't have capacity to finish it by the due date
- Etc.

The Project Manager will be responsible for resolving any uncertainty around assignment.

### Labels

We have a couple set types of labels. Beyond those, you are also welcome to add whatever labels are useful to you. The labels are [configured as code](terraform/).

#### [Grooming status](https://github.com/18F/tts-tech-portfolio/labels?q=groom)

**Purpose:** Indicate the state of the issue itself.

See [Grooming](#grooming).

### Columns

Ideally, issues move left to right, with the exception of Blocked/Waiting. There is no team-wide vertical ordering of issues in any column, though individuals are welcome to do so.

| Column                  | Description                                                                                                                                                                                                                            | Max per person                  | Issue entrance criteria                                                       |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ----------------------------------------------------------------------------- |
| New                     | Newly created Issues land here automatically.                                                                                                                                                                                          |                                 |                                                                               |
| Icebox                  | Issues here should be prioritized top-to-bottom amongst the initiative.                                                                                                                                                                |                                 |                                                                               |
| Backlog (Sprint Staged) | Issues that are immediate priorities. Expect to accomplish within the next 2 Sprints. Once they move into this column, they either get moved into a Sprint and advance to the Sprint Planned column within 30 days or they get closed. | 4                               | Must be [assigned](#assignment)                                               |
| Ready (Sprint Planned)  | Issues to be worked from this column. Team conscience, no blockers, and no prerequisites. What the team is going to work on next. Planned at the Sprint Planning ceremony.                                                             |                                 | Must be groomed                                                               |
| In Progress             | Issues that are being actively worked on                                                                                                                                                                                               | 12, though fewer is recommended | Must be [groomed](#grooming)                                                  |
| Feedback/Waiting        | Issues temporarily moved into this column. Expect to move in and out quickly. Something that is actively being worked on and it is with someone else for the moment.                                                                   |                                 | Must have explanation of what it's waiting on                                 |
| Blocked/Watching        | Issues that are waiting on someone outside the team; out of our control to get done. Want to keep an eye on it, but not likely to be responsible for it to be done.                                                                    |                                 | Must have explanation of what it's waiting on                                 |
| Done                    | Issues that have been completed this sprint                                                                                                                                                                                            |                                 | Closed due to either being complete or deemed a duplicate, out of scope, etc. |
| Initiatve               |                                                                                                                                                                                                                                        |                                 |                                                                               |
