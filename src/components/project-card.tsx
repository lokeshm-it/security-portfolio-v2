import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { h } from "@/lib/h";
import { Card, Badge } from "@/components/ui";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
    return h(
          Card,
      {
              className:
                        "group flex h-full flex-col justify-between transition-transform hover:-translate-y-1",
      },
          h(
                  "div",
                  null,
                  h("h3", { className: "text-lg font-semibold" }, project.title),
                  h(
                            "p",
                    { className: "mt-2 text-sm text-muted-foreground" },
                            project.shortDescription,
                          ),
                  h(
                            "div",
                    { className: "mt-4 flex flex-wrap gap-2" },
                            ...project.techStack
                              .slice(0, 4)
                              .map((tech) => h(Badge, { key: tech }, tech)),
                          ),
                ),
          h(
                  "div",
            { className: "mt-6 flex items-center gap-3" },
                  h(
                            Link,
                    {
                                href: `/projects/${project.slug}`,
                                className:
                                              "inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline",
                    },
                            "View case study",
                            h(ArrowUpRight, { size: 14 }),
                          ),
                  h(
                            "a",
                    {
                                href: project.repoUrl,
                                target: "_blank",
                                rel: "noreferrer",
                                className:
                                              "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground",
                    },
                            h(Github, { size: 14 }),
                            "Repo",
                          ),
                ),
        );
}
