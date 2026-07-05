export interface PowerShellScript {
    name: string;
    description: string;
}

export interface ProjectLink {
    label: string;
    url: string;
}

export const COMING_SOON =
    "Documentation will be added after lab completion.";

export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    repoUrl: string;
    imageFolder: string;
    overview: string;
    businessScenario: string;
    techStack: string[];
    prerequisites: string[];
    labSetup: string[];
    implementationSteps: string[];
    powershellScripts: PowerShellScript[] | string;
    validation: string[] | string;
    lessonsLearned: string[] | string;
    bestPractices: string[] | string;
    skillsDemonstrated: string[];
    certificationMapping: string[];
    msLearnReferences: ProjectLink[];
}

export const projects: Project[] = [
  {
        slug: "purview-dsi",
        title: "Microsoft Purview Data Security Investigations",
        shortDescription:
                "AI-assisted insider-risk investigation of a departing employee, from evidence scoping through mitigation tracking.",
        repoUrl:
                "https://github.com/lokeshm-it/Microsoft-Purview-Data-Security-Investigations",
        imageFolder: "purview-dsi",
        overview:
                "Data Security Investigations (DSI) is a Microsoft Purview solution that lets security and compliance teams collect incident-related content, run AI-assisted content analysis over it, and track remediation inside one investigation workspace. This lab builds a full DSI case around a simulated departing-employee data exfiltration scenario using Purview's built-in investigation template.",
        businessScenario:
                "A departing employee may access or copy confidential data before their last day, and security teams have no fast way to reconstruct what was touched, classify the sensitivity of that content, or confirm which files actually warrant escalation. This project scopes an investigation to one user's mailbox and SharePoint/OneDrive activity, lets Purview's AI categorize and search the evidence, and tracks any confirmed high-risk file through to mitigation.",
        techStack: [
                "Microsoft Purview",
                "Data Security Investigations",
                "Microsoft Purview Audit",
                "Endpoint DLP",
                "Microsoft 365 E5 Compliance",
                "PowerShell",
              ],
        prerequisites: [
                "Microsoft 365 E5 or Purview Compliance licensing with DSI enabled",
                "Pay-as-you-go billing configured for data storage",
                "AI capacity units provisioned",
                "Investigator/Admin/Reviewer roles assigned",
                "Microsoft Purview Audit enabled (Standard or Premium)",
              ],
        labSetup: [
                "Provision a Microsoft 365 lab tenant with Purview Compliance licensing",
                "Complete the DSI setup tasks: billing, AI capacity and role assignment",
                "Configure Endpoint DLP evidence collection if endpoint sources are in scope",
              ],
        implementationSteps: [
                'Create an investigation from the "Surface employee data exfiltration" template and review the auto-filled context, date range and activity list',
                "Add the subject user as a data source and confirm mailbox and site inclusion under Manage sources",
                "Run the Audit search and, where relevant, an Endpoint DLP search, and monitor the Activities tab until both complete",
                "Run Categorize with AI across all collected items to assign content categories",
                "Use AI Search (preview) to ask natural-language questions of the evidence set",
                "Run a targeted Examine (Personal Data / Credentials) against the highest-priority file",
                "Track any confirmed high-risk item through the Mitigation list to a Completed status",
                "Export the Activities tab for a full, timestamped audit trail",
              ],
        powershellScripts: [
          {
                    name: "Get-DSIInvestigation.ps1",
                    description:
                                "Lists Purview compliance cases used as Data Security Investigations, with status.",
          },
          {
                    name: "Get-DSIAuditActivity.ps1",
                    description:
                                "Queries the Unified Audit Log for a user's file and email activity over a date range.",
          },
          {
                    name: "Export-DSIMitigationReport.ps1",
                    description:
                                "Exports a CSV summary of investigation activity history for offline audit reporting.",
          },
              ],
        validation: [
                "Investigation created from template with auto-filled AI context, date range and activity list",
                "Data source added and confirmed via Manage sources",
                "Audit search completed and items prepared for AI",
                "AI Categorization produced multiple distinct content categories across the collected items",
                "AI Search (preview) correctly answered a natural-language question with cited evidence",
                "Examine (Personal Data) extracted and risk-rated sensitive values from the targeted file",
                "High-risk file tracked in the Mitigation list through to Completed status",
              ],
        lessonsLearned: [
                "AI capacity and billing are hard prerequisites for Categorize, AI Search and Examine, not optional extras",
                "Templates auto-fill investigation context that should be reviewed against the real scenario, not assumed",
                "AI-generated output carries an explicit accuracy disclaimer and needs human review before HR or legal action",
                "Categorize and Examine are complementary: Categorize gives breadth, Examine gives depth on one file",
              ],
        bestPractices: [
                "Provision AI capacity and billing ahead of scheduling investigator time",
                "Prefer a purpose-built template over a fully custom investigation whenever the scenario matches",
                "Scope sources as narrowly as possible before running Endpoint DLP searches",
                "Run Categorize first to triage, then Examine only the highest-risk category matches",
              ],
        skillsDemonstrated: [
                "Insider risk investigation",
                "Microsoft Purview administration",
                "AI-assisted evidence triage",
                "Unified Audit Log querying",
                "Compliance case documentation",
              ],
        certificationMapping: [
                "SC-400: Information Protection Administrator",
                "MS-102: Microsoft 365 Administrator",
                "SC-200: Security Operations Analyst",
                "SC-300: Identity and Access Administrator",
              ],
        msLearnReferences: [
          {
                    label: "Data Security Investigations documentation",
                    url: "https://learn.microsoft.com/en-us/purview/data-security-investigations",
          },
          {
                    label: "Search-UnifiedAuditLog reference",
                    url: "https://learn.microsoft.com/en-us/powershell/module/exchange/search-unifiedauditlog",
          },
              ],
  },
  {
        slug: "communication-compliance",
        title: "Microsoft Purview Communication Compliance",
        shortDescription:
                "Policy-driven detection of code-of-conduct and regulatory risk across Exchange, Teams and Viva Engage, with a reviewer investigation workflow.",
        repoUrl:
                "https://github.com/lokeshm-it/Microsoft-Purview-Communication-Compliance",
        imageFolder: "communication-compliance",
        overview:
                "Communication Compliance is a Microsoft Purview insider-risk solution that scans internal and external communications for defined risk conditions and routes matches to a reviewer queue, rather than requiring manual review of employee messages. This project documents policy creation, alert triage and reviewer investigation across Exchange, Teams and Viva Engage.",
        businessScenario:
                "Organizations need to catch code-of-conduct and regulatory violations in communications before they escalate into legal, HR or regulatory incidents, but manually reviewing message volume at scale is impractical. This project configures policies that flag sensitive-information and inappropriate-content risk conditions and walks through the reviewer workflow used to action confirmed matches.",
        techStack: [
                "Microsoft Purview",
                "Communication Compliance",
                "Exchange Online",
                "Microsoft Teams",
                "Viva Engage",
                "PowerShell",
              ],
        prerequisites: [
                "Microsoft 365 E5 or Purview Compliance licensing with Communication Compliance enabled",
                "Reviewer and Admin roles assigned",
                "Exchange, Teams and Viva Engage in scope for the tenant",
              ],
        labSetup: [
                "Provision a Microsoft 365 lab tenant with Purview Compliance licensing",
                "Assign Communication Compliance admin and reviewer roles",
                "Identify the communication channels and user groups to bring into policy scope",
              ],
        implementationSteps: [
                "Define a Communication Compliance policy and select the risk conditions to detect",
                "Scope the policy to the relevant users, groups and communication channels",
                "Let the policy run and generate alerts against matching messages",
                "Triage alerts in the reviewer queue and investigate flagged messages in context",
                "Take a resolution action on confirmed matches and document the outcome",
              ],
        powershellScripts: COMING_SOON,
        validation: COMING_SOON,
        lessonsLearned: [
                "Policy scope and risk conditions need to match the real communication channels in use, not just the default set",
                "Reviewer queues benefit from clear escalation ownership so flagged items don't stall",
              ],
        bestPractices: [
                "Start policy scope narrow and expand once alert volume and false-positive rate are understood",
                "Separate policy administration from alert review where organizational policy requires separation of duties",
              ],
        skillsDemonstrated: [
                "Insider risk policy configuration",
                "Microsoft Purview administration",
                "Reviewer workflow design",
                "Compliance investigation",
              ],
        certificationMapping: [
                "SC-400: Information Protection Administrator",
                "MS-102: Microsoft 365 Administrator",
              ],
        msLearnReferences: [
          {
                    label: "Communication Compliance documentation",
                    url: "https://learn.microsoft.com/en-us/purview/communication-compliance",
          },
              ],
  },
  {
        slug: "defender-xdr-sentinel",
        title: "Microsoft Defender XDR + Microsoft Sentinel Integration",
        shortDescription:
                "Unified SIEM correlation of Defender for Endpoint, Office 365, Identity and Entra ID signals into a single Sentinel workspace.",
        repoUrl: "https://github.com/lokeshm-it/Defender-XDR-Microsoft-Sentinel",
        imageFolder: "defender-xdr-sentinel",
        overview:
                "This is the fifth project in a seven-part Microsoft 365 security portfolio, focused on the monitoring and response pillar. It connects Microsoft Defender XDR to Microsoft Sentinel so that signals from Defender for Endpoint, Defender for Office 365, Defender for Identity and Entra ID are correlated in one SIEM instead of several separate consoles.",
        businessScenario:
                "A Zero Trust model assumes breaches will happen, so detection depends on correlating signals across products rather than reviewing each console in isolation. Without a shared SIEM, attack chains spanning multiple Defender pillars stay invisible, analysts must pivot between consoles, and there is no centralized audit trail for incident review.",
        techStack: [
                "Microsoft Defender XDR",
                "Microsoft Sentinel",
                "Microsoft Defender for Endpoint",
                "Microsoft Defender for Office 365",
                "Microsoft Defender for Identity",
                "Microsoft Entra ID",
                "KQL",
              ],
        prerequisites: [
                "Microsoft 365 Business Premium or E5 tenant with Defender XDR enabled",
                "Microsoft Sentinel workspace provisioned",
                "Defender for Endpoint, Office 365 and Identity already deployed",
              ],
        labSetup: [
                "Provision a Microsoft Sentinel workspace",
                "Enable the Microsoft Defender XDR data connector",
                "Confirm upstream Defender products are actively generating signal",
              ],
        implementationSteps: [
                "Connect the Microsoft Defender XDR connector to the Sentinel workspace",
                "Validate incoming incident and alert data from each connected Defender product",
                "Build correlation and analytics rules to surface multi-pillar attack chains",
                "Configure incident triage workflow inside the unified Sentinel view",
              ],
        powershellScripts: COMING_SOON,
        validation: COMING_SOON,
        lessonsLearned: [
                "Individual Defender controls deployed in isolation still leave a correlation gap that only a shared SIEM closes",
                "Connector version and data latency matter when validating that all upstream products are actually feeding Sentinel",
              ],
        bestPractices: [
                "Bring Defender products online and confirm healthy signal before wiring up SIEM correlation rules",
                "Build analytics rules around attack chains that span pillars, not single-product alerts already visible natively",
              ],
        skillsDemonstrated: [
                "SIEM architecture",
                "Microsoft Sentinel administration",
                "Defender XDR correlation",
                "KQL analytics rule design",
                "SOC workflow design",
              ],
        certificationMapping: [
                "SC-200: Security Operations Analyst",
                "SC-100: Cybersecurity Architect",
              ],
        msLearnReferences: [
          {
                    label: "Microsoft Defender XDR documentation",
                    url: "https://learn.microsoft.com/en-us/microsoft-365/security/defender/microsoft-365-defender",
          },
          {
                    label: "Microsoft Sentinel documentation",
                    url: "https://learn.microsoft.com/en-us/azure/sentinel/overview",
          },
              ],
  },
  {
        slug: "mdca-mde",
        title:
                "Microsoft Defender for Cloud Apps + Defender for Endpoint Integration",
        shortDescription:
                "Shadow IT discovery and SaaS security posture management by integrating Defender for Cloud Apps with the existing Defender for Endpoint agent.",
        repoUrl: "https://github.com/lokeshm-it/MDCA-MDE-Integration",
        imageFolder: "mdca-mde",
        overview:
                "This project integrates Microsoft Defender for Cloud Apps (MDCA) with Microsoft Defender for Endpoint (MDE), the cornerstone of the Applications pillar of the Microsoft Zero Trust model. The MDE agent already deployed on managed endpoints acts as a passive signal source, forwarding cloud traffic metadata to MDCA's Cloud Discovery engine.",
        businessScenario:
                "Organizations typically lack visibility into which cloud and SaaS applications employees are actually using, a Shadow IT blind spot that normally requires network appliances or proxy configurations to close. This integration achieves cloud application discovery and governance for managed devices without deploying any additional network infrastructure.",
        techStack: [
                "Microsoft Defender for Cloud Apps",
                "Microsoft Defender for Endpoint",
                "Cloud Discovery",
                "OAuth app governance",
                "Zero Trust",
              ],
        prerequisites: [
                "Microsoft Defender for Endpoint deployed on managed devices",
                "Microsoft Defender for Cloud Apps license",
                "Admin access to enable the MDE-MDCA integration toggle",
              ],
        labSetup: [
                "Confirm MDE is actively reporting from managed endpoints",
                "Enable the Defender for Cloud Apps integration toggle in the MDE/MDCA admin settings",
                "Allow Cloud Discovery telemetry to populate",
              ],
        implementationSteps: [
                "Enable the MDE-to-MDCA integration toggle",
                "Review the Cloud Discovery dashboard for discovered cloud applications",
                "Assess discovered apps by risk score and usage volume",
                "Configure OAuth app governance policies for connected third-party apps",
                "Sanction, tag or block applications based on organizational risk tolerance",
              ],
        powershellScripts: COMING_SOON,
        validation: COMING_SOON,
        lessonsLearned: [
                "Reusing the existing MDE agent as a signal source avoids standing up separate network appliances for Shadow IT visibility",
                "Cloud Discovery coverage is limited to traffic visible from managed, MDE-onboarded devices",
              ],
        bestPractices: [
                "Review discovered apps regularly rather than treating Cloud Discovery as a one-time scan",
                "Pair Cloud Discovery findings with OAuth app governance to act on risky third-party app grants, not just visibility",
              ],
        skillsDemonstrated: [
                "Shadow IT discovery",
                "SaaS security posture management",
                "OAuth app governance",
                "Zero Trust Applications pillar implementation",
              ],
        certificationMapping: [
                "SC-200: Security Operations Analyst",
                "SC-400: Information Protection Administrator",
              ],
        msLearnReferences: [
          {
                    label: "Microsoft Defender for Cloud Apps documentation",
                    url: "https://learn.microsoft.com/en-us/defender-cloud-apps/",
          },
              ],
  },
  {
        slug: "tvm",
        title: "Continuous Threat & Vulnerability Management",
        shortDescription:
                "Risk-based, continuous vulnerability management across a managed fleet using Microsoft Defender for Endpoint Plan 2.",
        repoUrl:
                "https://github.com/lokeshm-it/Continuous-Threat-Vulnerability-Management",
        imageFolder: "tvm",
        overview:
                "This project implements a continuous Threat & Vulnerability Management (TVM) programme using Microsoft Defender for Endpoint Plan 2. TVM replaces point-in-time vulnerability scanning with a continuous, risk-based model: the Defender sensor on each endpoint streams real-time vulnerability telemetry to the TVM engine, which scores and prioritizes findings by exploitability, exposure and business impact.",
        businessScenario:
                "Periodic vulnerability scans leave organizations blind between scan cycles and provide little help prioritizing which of many findings to fix first. This lab starts from a baseline exposure score of 57/100 (Medium) across 33 detected CVEs, then works through remediation: a Windows OS update for the highest-impact finding, a documented vendor-managed risk exception for an OpenSSL finding, and Attack Surface Reduction (ASR) rule deployment.",
        techStack: [
                "Microsoft Defender for Endpoint Plan 2",
                "Threat & Vulnerability Management",
                "Attack Surface Reduction rules",
                "Windows Update",
              ],
        prerequisites: [
                "Microsoft Defender for Endpoint Plan 2 licensing",
                "Endpoints onboarded to Defender for Endpoint",
                "Admin access to the Vulnerability Management dashboard",
              ],
        labSetup: [
                "Onboard endpoints to Microsoft Defender for Endpoint",
                "Allow the TVM engine to establish a baseline exposure score",
                "Review the initial CVE and exposure findings",
              ],
        implementationSteps: [
                "Record the baseline exposure score (57/100, Medium) and review all 33 detected CVEs",
                "Prioritize findings by exploitability, exposure and business impact rather than CVSS score alone",
                "Remediate the highest-impact finding via a Windows OS update",
                "Document a vendor-managed risk exception for the OpenSSL finding pending vendor patch",
                "Deploy Attack Surface Reduction (ASR) rules to reduce exposure from remaining findings",
                "Re-check the exposure score after remediation to confirm improvement",
              ],
        powershellScripts: COMING_SOON,
        validation: [
                "Baseline exposure score of 57/100 (Medium) recorded against 33 detected CVEs",
                "Highest-impact CVE remediated via Windows OS update",
                "OpenSSL finding documented as a vendor-managed risk exception rather than left unresolved and untracked",
                "Attack Surface Reduction rules deployed and confirmed active",
              ],
        lessonsLearned: [
                "A continuous telemetry stream surfaces new exposure between scan cycles that periodic scanning would miss",
                "Not every finding can be patched immediately — vendor-managed exceptions need explicit documentation and tracking, not silence",
                "Prioritizing by exploitability and exposure, not just CVE count, focuses remediation effort where it matters most",
              ],
        bestPractices: [
                "Remediate the highest-impact finding first rather than working through CVEs in list order",
                "Document any accepted risk exception with an owner and review date",
                "Pair OS-level patching with ASR rules for defense in depth on remaining exposure",
              ],
        skillsDemonstrated: [
                "Vulnerability management",
                "Risk-based prioritization",
                "Attack Surface Reduction rule deployment",
                "Risk exception documentation",
              ],
        certificationMapping: [
                "SC-200: Security Operations Analyst",
                "MS-102: Microsoft 365 Administrator",
              ],
        msLearnReferences: [
          {
                    label: "Microsoft Defender Vulnerability Management documentation",
                    url: "https://learn.microsoft.com/en-us/defender-vulnerability-management/",
          },
              ],
  },
  {
        slug: "zero-trust-email",
        title: "Zero Trust Email Security",
        shortDescription:
                "Defense-in-depth email protection built on Microsoft Defender for Office 365 Plan 2, treating email as an untrusted entry point.",
        repoUrl: "https://github.com/lokeshm-it/Zero-Trust-Email-Security",
        imageFolder: "zero-trust-email",
        overview:
                "This project implements a Zero Trust email security framework using Microsoft Defender for Office 365 Plan 2. Every attachment is detonated before delivery, every link is inspected at click time, and sender identity is continuously validated against known impersonation patterns.",
        businessScenario:
                "Email remains one of the most common entry points for attackers, through malicious attachments, credential-phishing links, and impersonation of trusted senders. This implementation covers the full defense-in-depth stack — pre-delivery sandbox analysis, click-time URL inspection, identity-based phishing detection, user-reported threat visibility, and post-delivery automated remediation — and recorded a Secure Score increase of +55 points across a two-day implementation window.",
        techStack: [
                "Microsoft Defender for Office 365 Plan 2",
                "Safe Attachments",
                "Safe Links",
                "Anti-phishing policies",
                "Microsoft Secure Score",
              ],
        prerequisites: [
                "Microsoft Defender for Office 365 Plan 2 licensing",
                "Exchange Online mailboxes in scope",
                "Admin access to Microsoft Defender security policies",
              ],
        labSetup: [
                "Confirm Defender for Office 365 Plan 2 licensing is active",
                "Review the current Secure Score baseline for email-related recommendations",
                "Identify mailboxes and domains to bring into policy scope",
              ],
        implementationSteps: [
                "Configure Safe Attachments for pre-delivery sandbox detonation",
                "Configure Safe Links for click-time URL inspection",
                "Configure Anti-Phishing policies with mailbox intelligence and spoof intelligence",
                "Enable user-reported message settings for phishing visibility",
                "Verify Automated Investigation and Response (AIR) remediation on confirmed threats",
                "Re-check Secure Score to confirm the improvement from the new policies",
              ],
        powershellScripts: COMING_SOON,
        validation: [
                "Safe Attachments and Safe Links policies active and applied to in-scope mailboxes",
                "Anti-phishing policy enforcing mailbox and spoof intelligence",
                "User-reported message flow confirmed working",
                "Secure Score increased by +55 points across the two-day implementation window",
              ],
        lessonsLearned: [
                "Treating email as an untrusted channel end-to-end (attachment, link and sender identity) closes more gaps than any single control alone",
                "Secure Score is a useful, measurable proxy for the real-world impact of email security changes",
              ],
        bestPractices: [
                "Layer Safe Attachments, Safe Links and anti-phishing together rather than relying on one control",
                "Route user-reported phishing into the same remediation workflow as automated detections",
              ],
        skillsDemonstrated: [
                "Email threat protection",
                "Safe Attachments and Safe Links configuration",
                "Anti-phishing policy tuning",
                "Secure Score improvement",
              ],
        certificationMapping: [
                "MS-102: Microsoft 365 Administrator",
                "SC-200: Security Operations Analyst",
              ],
        msLearnReferences: [
          {
                    label: "Microsoft Defender for Office 365 documentation",
                    url: "https://learn.microsoft.com/en-us/defender-office-365/",
          },
              ],
  },
  ];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}
