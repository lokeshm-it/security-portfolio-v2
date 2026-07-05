import type { Metadata } from "next";
import { h } from "@/lib/h";
import { SectionHeading } from "@/components/shared";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
    title: "Projects",
    description:
          "Microsoft Security, Microsoft 365, Azure, Zero Trust and ISO 27001 case studies.",
};

export default function ProjectsPage() {
    return h(
          "div",
      { className: "px-4 py-20 sm:px-6" },
          h(
                  "div",
            { className: "mx-auto max-w-6xl" },
                  h(SectionHeading, {
                            eyebrow: "Portfolio",
                            title: "All Projects",
                            description:
                                        "Every documented Microsoft Security, Microsoft 365, Azure, Zero Trust and ISO 27001 implementation in this portfolio.",
                  }),
                  h(
                            "div",
                    { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" },
                            ...projects.map((project) =>
                                        h(ProjectCard, { key: project.slug, project }),
                                                    ),
                          ),
                ),
        );
}
