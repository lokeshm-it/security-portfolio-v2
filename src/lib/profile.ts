export interface Metric {
    value: string;
    label: string;
}

export const metrics: Metric[] = [
  { value: "9+", label: "Years of Experience" },
  { value: "22+", label: "Enterprise & Home Lab Projects" },
  { value: "60+", label: "Technical Articles" },
  { value: "200+", label: "Enterprise Endpoints Managed" },
  { value: "97\u201399%", label: "Patch Compliance" },
  { value: "99.9%", label: "Infrastructure Availability" },
  ];

export interface FocusArea {
    title: string;
    description: string;
}

export const focusAreas: FocusArea[] = [
  {
        title: "Microsoft 365 & Collaboration",
        description:
                "Exchange Online, Teams, SharePoint and OneDrive administration with governed provisioning, licensing and access control.",
  },
  {
        title: "Identity & Access",
        description:
                "Hybrid identity on Microsoft Entra ID \u2014 Conditional Access, MFA, SSPR and RBAC designed around Zero Trust.",
  },
  {
        title: "Endpoint Management",
        description:
                "Intune, Windows Autopilot and compliance policies driving 98%+ endpoint compliance across managed fleets.",
  },
  {
        title: "Security & Threat Protection",
        description:
                "Microsoft Defender for Endpoint, Defender XDR and EDR for threat visibility, hardening and rapid response.",
  },
  {
        title: "Infrastructure & Continuity",
        description:
                "Active Directory, Windows Server, Azure IaaS, DNS/DHCP and BCP/DR planning validated against RTO and RPO targets.",
  },
  {
        title: "Compliance & Governance",
        description:
                "ISO/IEC 27001:2022 audit readiness and Microsoft Purview data governance embedded into day-to-day operations.",
  },
  ];

export type CertStatus = "completed" | "in-progress" | "planned";

export interface Certification {
    code: string;
    name: string;
    status: CertStatus;
}

export const certifications: Certification[] = [
  { code: "ISO 27001", name: "ISO/IEC 27001 Internal Auditor", status: "completed" },
  { code: "ISO 27001", name: "ISO/IEC 27001 Lead Implementer", status: "completed" },
  { code: "MS-102", name: "Microsoft 365 Administrator", status: "in-progress" },
  { code: "SC-200", name: "Security Operations Analyst", status: "in-progress" },
  { code: "SC-300", name: "Identity & Access Administrator", status: "planned" },
  { code: "SC-400", name: "Information Protection Administrator", status: "planned" },
  { code: "AZ-900", name: "Azure Fundamentals", status: "planned" },
  { code: "AZ-500", name: "Azure Security Engineer", status: "planned" },
  { code: "SC-100", name: "Cybersecurity Architect", status: "planned" },
  { code: "CISSP", name: "Certified Information Systems Security Professional", status: "planned" },
  { code: "CCSP", name: "Certified Cloud Security Professional", status: "planned" },
  ];

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location: string;
    current: boolean;
    summary: string;
    achievements: string[];
    tech: string[];
}

export const experience: ExperienceItem[] = [
  {
        company: "Celegence",
        role: "Senior Infrastructure Engineer",
        period: "Jul 2023 \u2014 Present",
        location: "Bengaluru \u00B7 Life Sciences",
        current: true,
        summary:
                "Own hybrid Microsoft 365, Azure and Windows Server infrastructure across 200+ endpoints in a regulated environment.",
        achievements: [
                "Maintain 99.9% infrastructure availability across hybrid M365, Azure IaaS and Windows Server.",
                "Lead patch management via WSUS and Intune, achieving 97\u201399% endpoint compliance.",
                "Implemented Intune, Autopilot, Conditional Access, MFA and SSPR for 98%+ Zero Trust compliance.",
                "Support ISO/IEC 27001:2022 audits and BCP/DR validation against defined RTOs and RPOs.",
              ],
        tech: [
                "Microsoft 365",
                "Entra ID",
                "Intune",
                "Defender",
                "Azure IaaS",
                "Windows Server",
                "PowerShell",
              ],
  },
  ];
