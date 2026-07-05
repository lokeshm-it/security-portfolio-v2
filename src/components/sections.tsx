"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, FileText, ShieldCheck, Clock3, CheckCircle2 } from "lucide-react";
import { h } from "@/lib/h";
import { cn } from "@/lib/utils";
import { Button, LinkButton, Card, Badge } from "@/components/ui";
import { Reveal, SectionHeading } from "@/components/shared";
import { ProjectCard } from "@/components/project-card";
import { siteConfig, socialLinks } from "@/lib/site";
import { projects } from "@/lib/projects";
import { metrics, focusAreas, certifications, experience } from "@/lib/profile";
import type { CertStatus } from "@/lib/profile";

export function Hero() {
    return h(
          "section",
      {
              id: "hero",
              className:
                        "relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 sm:pt-32",
      },
          h("div", {
                  className:
                            "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.25),transparent_60%)]",
          }),
          h(
                  Reveal,
            { className: "mx-auto max-w-3xl text-center" },
                  h(
                            Badge,
                    { className: "mx-auto" },
                            "Microsoft Security \u00B7 M365 \u00B7 Azure \u00B7 Zero Trust \u00B7 ISO 27001",
                          ),
                  h(
                            "h1",
                    { className: "mt-6 text-4xl font-bold tracking-tight sm:text-6xl" },
                            "Hi, I\u2019m ",
                            h("span", { className: "text-gradient" }, siteConfig.name),
                          ),
                  h(
                            "p",
                    { className: "mt-4 text-lg text-muted-foreground" },
                            siteConfig.role,
                          ),
                  h(
                            "p",
                    { className: "mx-auto mt-4 max-w-xl text-sm text-muted-foreground" },
                            siteConfig.description,
                          ),
                  h(
                            "div",
                    { className: "mt-8 flex flex-wrap items-center justify-center gap-3" },
                            h(LinkButton, { href: "/projects" }, "View Projects"),
                            h(
                                        LinkButton,
                              { href: "/#contact", variant: "outline" },
                                        "Get in Touch",
                                      ),
                          ),
                ),
          h(
                  Reveal,
            {
                      delay: 0.15,
                      className:
                                  "mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6",
            },
                  ...metrics.map((metric) =>
                            h(
                                        "div",
                              {
                                            key: metric.label,
                                            className: "glass-card rounded-xl px-3 py-4 text-center",
                              },
                                        h("p", { className: "text-2xl font-semibold text-primary" }, metric.value),
                                        h("p", { className: "mt-1 text-xs text-muted-foreground" }, metric.label),
                                      ),
                                       ),
                ),
        );
}

export function ProjectsPreviewSection() {
    return h(
          "section",
      { id: "projects", className: "px-4 py-20 sm:px-6" },
          h(
                  "div",
            { className: "mx-auto max-w-6xl" },
                  h(SectionHeading, {
                            eyebrow: "Case Studies",
                            title: "Featured Security Projects",
                            description:
                                        "Hands-on Microsoft Security, Microsoft 365, Azure and Zero Trust implementations, documented end to end.",
                  }),
                  h(
                            "div",
                    { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" },
                            ...projects
                              .slice(0, 6)
                              .map((project) => h(ProjectCard, { key: project.slug, project })),
                          ),
                  h(
                            "div",
                    { className: "mt-10 text-center" },
                            h(
                                        Link,
                              {
                                            href: "/projects",
                                            className: "text-sm font-medium text-primary hover:underline",
                              },
                                        "View all projects \u2192",
                                      ),
                          ),
                ),
        );
}

const certStatusMeta: Record<CertStatus, { label: string; className: string; icon: typeof CheckCircle2 }> = {
    completed: { label: "Completed", className: "text-green-400", icon: CheckCircle2 },
    "in-progress": { label: "In Progress", className: "text-primary", icon: Clock3 },
    planned: { label: "Planned", className: "text-muted-foreground", icon: ShieldCheck },
};

export function CertificationsSection() {
    return h(
          "section",
      { id: "certifications", className: "px-4 py-20 sm:px-6" },
          h(
                  "div",
            { className: "mx-auto max-w-5xl" },
                  h(SectionHeading, {
                            eyebrow: "Credentials",
                            title: "Certifications",
                            description:
                                        "Microsoft and ISO certifications completed, in progress, and planned.",
                  }),
                  h(
                            "div",
                    { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" },
                            ...certifications.map((cert) => {
                                        const meta = certStatusMeta[cert.status];
                                        return h(
                                                      Card,
                                          { key: `${cert.code}-${cert.name}`, className: "flex items-start gap-3" },
                                                      h(meta.icon, { size: 18, className: cn("mt-0.5 shrink-0", meta.className) }),
                                                      h(
                                                                      "div",
                                                                      null,
                                                                      h("p", { className: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, cert.code),
                                                                      h("p", { className: "mt-1 text-sm font-semibold" }, cert.name),
                                                                      h("p", { className: cn("mt-1 text-xs", meta.className) }, meta.label),
                                                                    ),
                                                    );
                            }),
                          ),
                ),
        );
}

export function SkillsSection() {
    return h(
          "section",
      { id: "skills", className: "px-4 py-20 sm:px-6" },
          h(
                  "div",
            { className: "mx-auto max-w-5xl" },
                  h(SectionHeading, {
                            eyebrow: "Expertise",
                            title: "Skills & Focus Areas",
                            description:
                                        "Core Microsoft Security and infrastructure domains this portfolio is built around.",
                  }),
                  h(
                            "div",
                    { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" },
                            ...focusAreas.map((area) =>
                                        h(
                                                      Card,
                                          { key: area.title },
                                                      h("h3", { className: "text-base font-semibold" }, area.title),
                                                      h("p", { className: "mt-2 text-sm text-muted-foreground" }, area.description),
                                                    ),
                                                      ),
                          ),
                ),
        );
}

export function ExperienceSection() {
    return h(
          "section",
      { id: "experience", className: "px-4 py-20 sm:px-6" },
          h(
                  "div",
            { className: "mx-auto max-w-3xl" },
                  h(SectionHeading, {
                            eyebrow: "Career",
                            title: "Experience",
                            description: "Recent hands-on infrastructure and security ownership.",
                  }),
                  h(
                            "div",
                    { className: "mt-12 space-y-6" },
                            ...experience.map((job) =>
                                        h(
                                                      Card,
                                          { key: `${job.company}-${job.role}` },
                                                      h(
                                                                      "div",
                                                        { className: "flex flex-wrap items-baseline justify-between gap-2" },
                                                                      h("h3", { className: "text-lg font-semibold" }, `${job.role} \u00B7 ${job.company}`),
                                                                      h("span", { className: "text-xs text-muted-foreground" }, job.period),
                                                                    ),
                                                      h("p", { className: "mt-1 text-xs text-muted-foreground" }, job.location),
                                                      h("p", { className: "mt-3 text-sm text-muted-foreground" }, job.summary),
                                                      h(
                                                                      "ul",
                                                        { className: "mt-4 space-y-2 text-sm text-muted-foreground" },
                                                                      ...job.achievements.map((item) =>
                                                                                        h("li", { key: item, className: "flex gap-2" }, h("span", { className: "text-primary" }, "\u2192"), item),
                                                                                                            ),
                                                                    ),
                                                      h(
                                                                      "div",
                                                        { className: "mt-4 flex flex-wrap gap-2" },
                                                                      ...job.tech.map((tech) => h(Badge, { key: tech }, tech)),
                                                                    ),
                                                    ),
                                                      ),
                          ),
                ),
        );
}

export function ContactSection() {
    return h(
          "section",
      { id: "contact", className: "px-4 py-20 sm:px-6" },
          h(
                  Card,
            { className: "mx-auto max-w-2xl text-center" },
                  h(SectionHeading, {
                            eyebrow: "Contact",
                            title: "Let\u2019s talk security",
                            description:
                                        "Open to Microsoft Security, cloud infrastructure and Zero Trust engineering roles and collaborations.",
                  }),
                  h(
                            "div",
                    { className: "mt-8 flex flex-wrap items-center justify-center gap-3" },
                            h(
                                        LinkButton,
                              { href: `mailto:${siteConfig.email}` },
                                        h(Mail, { size: 16 }),
                                        "Email Me",
                                      ),
                            h(
                                        LinkButton,
                              { href: socialLinks.github, target: "_blank", rel: "noreferrer", variant: "outline" },
                                        h(Github, { size: 16 }),
                                        "GitHub",
                                      ),
                            h(
                                        LinkButton,
                              { href: socialLinks.linkedin, target: "_blank", rel: "noreferrer", variant: "outline" },
                                        h(Linkedin, { size: 16 }),
                                        "LinkedIn",
                                      ),
                            h(
                                        LinkButton,
                              { href: socialLinks.resume, target: "_blank", rel: "noreferrer", variant: "ghost" },
                                        h(FileText, { size: 16 }),
                                        "Resume",
                                      ),
                          ),
                ),
        );
}
