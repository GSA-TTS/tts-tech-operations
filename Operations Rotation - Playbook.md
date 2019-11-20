# TTS Tech Portfolio- Operations Rotation 
## Playbook
### Meetings
	Play: Infrastructure Meeting 
  *Review action items 32 hrs in advance
Follow up on any items
Compile agenda 48 hrs in advance
Send agenda 24 hrs in advance
Lead meeting
  Play: CTO Liaison Meeting
Review trello board
  Play: Scrum - Sprint Planning
Review board prior to meeting
  Play: Scrum - Daily Standup
Lead meeting
  Play: Scrum - Review/Retro
Lead retro
  Play: Operations Rotation - Handover
### DNS
Play: DNS activity  
DNS Handbook page
Security 
Play: Security Nudges
GitHub: 18F Security Issues Page on GitHub
Play: Security Triaging
HackerOne: 
#bug-bounty-partners
Incidents
#incident-response

### Micropurchase Requests
Play: Micropurchase Procedure
People submit micropurchase request form
Request goes into spreadsheet
Melanie/Ethan do initial triage to determine if it should go to `Pending TTS Software Team review`
Tech Portfolio reviews to check if it has:
An ATO
Prior FITARA approval
Check the FITARA Trello board - if not on we need to go through approval process
If Yes to both, change Status to “Pending Supervisor Approval”
Once the Supervisor/AO approval steps are completed (these are automated by email), status is automatically moved to “Pending P-card Purchaser”.
John: complete P-Card purchase
John: Manually enter the Pegasys CC id for the P-Card holder
Change Status in spreadsheet to “Completed”
This “completed” action triggers the Pegasys reimbursement request.
Request is routed to the AO who then approves.
Communications Monitoring
Slack Channels
#admins-aws
#admins-dmarc
#admins-mural
#admins-slack
#admins-trello
#admins-zoon
#it-issues
#tts-tech-portfolio
#infrastructure
#admings-github
#admins-dns
#admins-govdelivery
#bug-bounty-partners
#cto-tts-liason-private
#tts-tech-portfolio-alerts
#mac
#bug-bounty-partners
#tts-shared-services
#tts-tech-portfolio
#incident-response
#questions
#devops-public
#solutions
#admins
Google Groups

18F DevOps
Owner
18F PyPl
Owner
18F Software
Owner
18f-team
Member
AWS Account 144433228153
Owner
AWS Account 541873662368
Owner
AWS Account 565574605783
Owner
AWS Account 570696747145
Owner
AWS Account 195022191070
Owner
AWS Account 616118738211
Owner
AWS Account 992476103436
Owner
IS-TTS
Manager
Mac Working Group
Owner
TTS Software
Owner
TTS Solutions Govvies
Owner
TTS Technology Portfolio
Owner
TTS Vulnerability Reports
Owner

Knowledge Management
Handbook triage and maintenanceGitHub
Contributing to 18F Handbook
System Management - Cloud Management
Play: AWS Account
Creating new accountsOpen a Support Ticket through the Console Interface
Access to the root account is likely broken at this time. Try submitting the request from the paired commercial AWS account. (More information on paired accounts coming soon)
AWS Contracts will email an "AWS GOVCLOUD ACCOUNT ACCESS CERTIFICATION" form to the root account email address. The form must be printed, signed, and returned to AWS Contracts.
Note: This form requires a wet signature.
Scan or take a picture of the document and email it back to AWS Contracts.
AWS Contracts will acknowledge receipt of the form and push the case through to support.
Note: AWS Contracts cannot provide a timeline for account recovery.
When the AWS GovCloud Support Engineers are ready to rotate the credentials, they will send two things to the root account email beforehand.
An encrypted PDF file containing access and secret keys.
An email with an authentication code, which must be read back to the support engineer.
The AWS Support Engineer will schedule a call and authenticate against the access code.
The AWS Support Engineer will provide the key to unlock the PDF.
The key is long. Transcribe it into a text editor first.
Acrobat works much better than Preview when needing to copy and paste the key pair.
The AWS Support Engineer will walk through any necessary AWS CLI commands to reinitialize the account.
Use the onboarding tool to create a new root account.
Log in, enable MFA.
System Management - Hardware Management
Play: Mac Procedure
At the direction of GSA IT we've cancelled these as pending TTS procurements, and have been asked to direct you to submit a GSA Servicedesk ticket for these items instead. Sorry for the delay/limbo, we're working on an automated replay to handle these scenarios for the future.
 
Follow these steps:
Open browser window and go to: https://gsa.service-now.com/sp
Click on icon “Order Something”
Scroll down the page and in categories, column click on “General Requests”.
On the General Requests page, within the 3x3 grid, find the icon “GSA Generic Request” and Click-it.
Complete the form:
Supervisor = Default Supervisor.
Planning Date = Should be two days from the current date.
Additional Comments: Please route to Client Engineering MAC team
Click “Add to Cart” and complete the order
System Management - Software Management
Play: Managing Software requests
Request processWhen a user needs a piece of software they will make a request requests by sending an email will be sent to tts-software@gsa.gov and show on the Software Group and whomever is in rotation will answer it. “Pending TTS Software Team review” in the Request Status column. Once the operations rotation receives the email they send a canned response to the requestor letting them know that they’ve gotten it. Once operations rotation person has completed all of their tasks, they will mark the item complete. 

Microsoft, Adobe, Zoom, Mural, and InVision require that you go into the back-end and manually add the person into the account. Have the previous Software PM show you exactly how it is done!
Administration guide: See the following administration guide and document guide for links to the user lists, back-end accounts, and template responses.
Play Manage Software Requests (Onboarding)
Play: Microsoft Software Request
Point them to Office documentationHow to Get Microsoft Office for your Mac - Instructions on how to download Microsoft for Mac. This is a challenging process for many people, so I put together this how-to guide to make it easier.
Canned Response: Please try using through Horizon—we are deprecating Office for Mac 2016.
Play: Mural Software Request
Mural How-To Guide - How to administer the TTS Mural account
Mural user list
Canned Response
New member account
Hi XXXX,  I have taken the liberty of adding you to the 18F account for full member access, here is the link if you do not receive an email to that effect. Feel free to reach out if you have any questions.
Guest account
Would it be possible for your partners to take on Guest accounts? Guests are internal stakeholders, partners and clients working on or reviewing a project or workshop. They have slightly restricted access, but they can collaborate in a mural and access private rooms. Would that meet your needs?
Request for a member account (when already have one)
Hi XXXX, It looks like you are already a member in this account, if you would like a link to Mural, I can send you one. If you need access to a board you are working with, please have the creator of that Mural workspace send you a link. 
Play: Sketch Software Request
Sketch Handbook page
Sketch License  key
Sketch List of users
Canned Response: See instructions in the Handbook.
Play: Omnigraffle Software Request
v6 (not 7+)
License Owner: 18F Software (GSA)
Omnigraffle License key
If employees are asking to be removed from Omigraffle, this software does not have that capability since it only inputs a code and there is not limit to users, Omnigraffle is just removed when the out boarded employee turns their Macbook in.
Play: Sublime Text Software Request
Sublime License Key
Play: AWS Software Request
AWS Account Setup
AWS Accounts
Play: Sandbox accounts Software Request
sandbox accounts
Play: NPM Software Request
Play: SSLMATE Software Request
Play: SauceLabs Software Request
Play:  Twillo Software Request
Play: Trello Software Request
Play: GitHub Software Request
Play: CloudCheckr Software Request
Play: Dotgov.gov Software Request
Play: Zoom Software Request
Play: InVision Software Request
Play: Adobe Software Request
Canned Response: Please request through the Service Desk. Updating the Handbook with info about this.
Play Manage Software Requests (Offboarding) 
Remember, it is not all giving out license, you have to take them away too! TTS Talent will reach out to the current SaaS PM to send them this document so that they can check off the boxes of when they have either manually removed or requested removal of a former employee from the software.

Simply go into both the software back-end account and remove the individual, then go in and update the user lists by deleting the cell with the person’s name and information. 

