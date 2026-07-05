export const siteConfig = {
    name: "Lokesh M",
    role: "Senior Infrastructure Engineer | Microsoft Security & Cloud",
    description:
          "Cybersecurity portfolio showcasing Microsoft Security, Microsoft 365, Azure, Zero Trust and ISO 27001 projects.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://security-portfolio-v2.vercel.app",
    email: "lokeshmurali45@gmail.com",
    location: "Bangalore, India",
};

export interface NavItem {
    label: string;
    href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
  ];

export const socialLinks = {
    github: "https://github.com/lokeshm-it",
    linkedin: "https://www.linkedin.com/in/lokesh-itinfra",
    resume: "/Lokesh-M-Resume.pdf",
};
