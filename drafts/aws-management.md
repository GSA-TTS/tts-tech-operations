# AWS Management Roadmap

>Goal: Support GSA's overall security policies applicable to Infrastructure/Platform as-a-Service and provide TTS system's with a default/inheritable additional level of security control through our own Common Control Platform (CCP).

## [Applicable GSA Guidance and Policy](https://insite.gsa.gov/topics/information-technology/security-and-privacy/information-technology-security)
- Security Engineering Architecture Reviews [CIO-IT Security 19-95]
- DevSecOps Program [CIO-IT Security 19-102]
- Maintenance [CIO-IT Security 10-50]
- Information Security Program Plan (ISPP) [CIO IT Security 18-90]

> Derived from GSA's Security_Engineering_Architecture_Reviews_[CIO_IT_Security_19-95_Initial_Release]_07-10-2019.pdf

# TTS Tech Portfolio AWS Management

## TTS Tech Portfolio Goals

- [ ] Work with programs to define users, groups, services, and roles can they access within their environments. To institute least privilege principles
- [ ] Protect the root account for all accounts.
- [ ] Require strong passwords, GSA password policies, and key rotation requirements across accounts.
- [ ] Require multi-factor authxentication for privileged users (all users generally, but exceptions for CI/CD and/or read-only automation).
- [ ] Secure federated and external interconnections.
- [ ] Securely store static credentials used for automation.
- [ ] Protect key-pairs; leverage IAM roles for use of resources.
- [ ] Focus on small frequent changes, regular quality assurance testing, tracking and auditing changes.

## TTS Program Goals

### Budget/Efficiency 

Utilize available computing resources efficiently to meet system
requirements, and to maintain that efficiency as demand changes and technologies evolve. Rely on Data-Driven decisions, review your choices on a continual basis to ensure you’re taking advantage of an evolving platform. Continually benchmark, load test, and monitor your environment to have the data needed to inform change.


- [ ] Consider all areas of cost including data-transfer costs.
- [ ] Decommission resources that are longer used.
- [ ] Stop resources that are temporarily not needed.
- [ ] Set access controls and procedures to govern usage.
- [ ] Tag assets to track projects.
- [ ] Manage limits to avoid over-provisioning.
- [ ] Fully leverage available/ATOed services rather than hosting and building your own (e.g. cloud.gov).
- [ ] Limit Bandwidth and Data Transfer across networks. (e.g. Minimize Latency)
- [ ] Consider database read-replicas or cdn caching solutions.
- [ ] Use multi-AZ/multi-region architectures.
- [ ] Use managed services that automatically scale based on demand (e.g. Autoscaling EC2 instances, RDS read replicas across AZs, etc)
   - [ ] Use Serverless Architectures
   - [ ] Leverage services such as simple storage that can host static content vs on a web server to remove the operational burden.
- [ ] Reduce connectivity to legacy on-prem resources. Consider placing data closest to resources to reduce distance. Take advantage of regions, placement groups, and edge locations.
- [ ] Measure trade-offs in consistency, durability, size vs acceptable time or latency to deliver a balanced performance to cost ratio.

#### Scaling/Right-Sizing

- [ ] Scale horizontally (additional nodes) and vertically (additional resources within nodes) to increase aggregate system availability.
- [ ] Design an elastic architecture that can grow and shrink on demand.
- [ ] Utilize parallel processing to split workloads into parts that execute simultaneously.
- [ ] Collect data from benchmarking or load testing to further optimize the architecture.
- [ ] Take advantage of elasticity mechanisms to ensure sufficient capacity.
- [ ] Employ microservice architectures - use queuing systems, streaming systems, workflows, load balancers, etc. to minimize dependencies.
- [ ] Ensure when a component’s dependencies are unhealthy, the component itself continues to serve requests in a degraded manner.
- [ ] Implement Auto-Healing to detect failures, remediate, and continuously monitor system health.

#### Iteration

- [ ] Workloads should be designed to allow components to be updated regularly.
- [ ] Make changes in small increments and be able to roll back without affecting operations (no downtime).
- [ ] Eliminate the need for large releases or batch upgrades in favor of Continuous Deployments.

#### Experimentation/Innovation

- [ ] Conduct comparative testing and alternatives analysis on different types of storage, services, and components.
- [ ] Use technology that aligns best with MVP customer needs.
- [ ] Component selection aligned with current need (Compute, storage, database, network).
- [ ] Understand where your architecture is performance constrained and be on the lookout for new releases or products that could alleviate constraints.
- [ ] Create documentation such as operational checklists, operations guidance, runbooks, playbooks, and keep them current. These documents are used to support day-to-day operations and respond to events.

### Networking

- [ ] Plan for connectivity requirements to legacy data centers.
- [ ] Develop all systems in multiple availability zones (AZs). Moderate and High system classifications should leverage multi- regional deployments.
- [ ] Have highly availability / multiple connections.
- [ ] Implement VPN between data centers and for user connectivity.
- [ ] Proper VPC/Account allocation - Use separate accounts for each VPC and avoid integrating all VPCs into a singular account.
- [ ] Typically you should have Production, Staging, and
- [ ] Development/Test, each in their respective accounts and consider production as an immutable environment that is strictly controlled with full-on automation (i.e., changes are ALL pushed via API and not manually via direct machine access or through the AWS Console).
- [ ] Proper VPC allocation - 1-2 VPCs per account (see above).
- [ ] Proper subnet allocation. Limit the number of subnets to what is minimally required ensuring appropriate segmentation of public/web tiers and internal database tiers. Ensure no overlapping of private IP addresses within subnets.
- [ ] Test Recovery Procedures and responses to unexpected events and component failures.
- [ ] Learn from operational events and failures by capturing and review all operational events and using them for improvements.
- [ ] Ensure adequate backups are performed.
- [ ] Automatically recover from traffic failure.
- [ ] Automatically recover from system failure.
- [ ] Test production systems at full scale load.


#### Automation and Alerting

- [ ] Set thresholds and monitor performance.
- [ ] Tune monitoring to minimize false positives.
- [ ] Automate triggers to reduce human error.
- [ ] Have routine gameday tests to simulate events in production.
- [ ] Monitor and report on metrics critical to business objectives.
- [ ] Perform operations with code to avoid error with manual interaction.
- [ ] Create all infrastructures following Infrastructure as Code (IaC) model using cloud automation tools not via the cloud console. Infrastructure should be defined as “code” and be able to be destroyed and recreated readily in an automated way.
- [ ] Create immutable hosts instead of long-lived servers that you patch and upgrade.
- [ ] Use automation frameworks and scripting for common repetitive processes or procedures.
- [ ] Ensure you can do upgrades without downtime in a fully automated manner.
- [ ] Responses to unexpected operational events should be automated. Not just alerting, but for mitigation, remediation, rollback and recovery activities.

### Monitoring

- [ ] Implement inventory tools to establish operational baselines. This allows you to set appropriate alerting thresholds and understand the scope of routine vs anomalous activity.
- [ ] Log all actions and changes within your environment.
- [ ] Log everything for your stack and from AWS services; integrate into either a SIEM or to CW with alerting/monitoring.
- [ ] Process logs, events and monitoring that allow for auditing,
- [ ] automated analysis, and alarming.
- [ ] Have a log repository to lock and retain logs. Logging (all actions
- [ ] and changes)
- [ ] Ensure that no resources are enumerable in your public APIs.
- [ ] Use canary checks in APIs to detect illegal or abnormal requests
- [ ] that indicate attacks.

### Data Protection

- [ ] Review data classification and retention policies.
- [ ] Properly store and manage encryption keys.
- [ ] Implement logging to create records of changes.
- [ ] Implement storage resiliency.
- [ ] Implement versioning control and protection against accidental
- [ ] overwrite / deletes.
- [ ] Store data in multiple locations.
- [ ] Encrypt data at rest and in transit everywhere you can, especially
- [ ] when crossing VPCs and external to your environment.
- [ ] Securely decommission data.

### Incident Response

- [ ] Implement detailed logging of events and changes for analysis.
- [ ] Configure automatic log processing and alerting.
- [ ] Conduct forensics in an isolated environment.


```plantuml
@startuml Two Modes - Technical View

!define AWSPuml https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/master/dist
!includeurl AWSPuml/AWSCommon.puml
!includeurl AWSPuml/AWSSimplified.puml
!includeurl AWSPuml/General/all.puml
!includeurl AWSPuml/Compute/all.puml
!includeurl AWSPuml/Storage/all.puml
!includeurl AWSPuml/Mobile/all.puml
!includeurl AWSPuml/ApplicationIntegration/all.puml
!includeurl AWSPuml/General/all.puml
!includeurl AWSPuml/Database/all.puml
!includeurl AWSPuml/Analytics/all.puml
!includeurl AWSPuml/AWSCostManagement/all.puml
!includeurl AWSPuml/GroupIcons/all.puml
!includeurl AWSPuml/ManagementAndGovernance/all.puml
!includeurl AWSPuml/NetworkingAndContentDelivery/all.puml
!includeurl AWSPuml/SecurityIdentityAndCompliance/all.puml

left to right direction

Users(developer, "TTS Program(s)", "Developers")
ADConnector(secureauth, "GSA SecureAuth or Login.gov", "TBD")
IAMMFAToken(OTP, "MFA enabled with QR/OTP", "TBD")
ManagementConsole(jump_account, "AWS Jump Account", "user votes")
IAMRole(assume_role, "Assume Role", "user votes")
IAMPermissions(role_policies, "Roles and Policies", "jwt to submit votes")
AWSCLI(cli, "AWSCLI", "jwt to submit votes")
Organizations(organization, "TTS (AWS Organization)", "jwt to submit votes")
OrganizationsOrganizationalunit(organization_unit, "TTS Program (AWS Organizational Unit)", "jwt to submit votes")

developer --> secureauth
developer --> OTP
secureauth <--> jump_account
OTP <--> jump_account
jump_account --> role_policies
session --> cli

rectangle organization {
  organization -- (organization_unit)
  (organization_unit) .> (role_policies) : include
  (role_policies) .> (assume_role) : extends
  (assume_role) -- session
}

@enduml
```