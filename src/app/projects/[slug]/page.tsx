import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Github, ExternalLink, Download } from "lucide-react";
import { h } from "@/lib/h";
import { Badge, Card, LinkButton } from "@/components/ui";
import { ArchitecturePlaceholder } from "@/components/architecture-placeholder";
import { ScreenshotGallery } from "@/components/screenshot-gallery";
import { projects, getProjectBySlug } from "@/lib/projects";

interface PageParams {
    params: { slug: string };
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageParams): Metadata {
    const project = getProjectBySlug(params.slug);
    if (!project) return {};
    return {
          title: project.title,
          description: project.shortDescription,
          openGraph: { title: project.title, description: project.shortDescription },
    };
}

function ListBlock({ title, items }: { title: string; items: string[] | string }) {
    return h(
          "div",
      { className: "mt-10" },
          h("h2", { className: "text-xl font-semibold" }, title),
          Array.isArray(items)
            ? h(
                        "ul",
              { className: "mt-4 space-y-2 text-sm text-muted-foreground" },
                        ...items.map((item, i) =>
                                      h(
                                                      "li",
                                        { key: i, className: "flex gap-2" },
                                                      h("span", { className: "text-primary" }, "\u2192"),
                                                      item,
                                                    ),
                                               ),
                      )
            : h("p", { className: "mt-4 text-sm text-muted-foreground" }, items),
        );
}

export default function ProjectDetailPage({ params }: PageParams) {
    const project = getProjectBySlug(params.slug);
    if (!project) notFound();

  return h(
        "div",
    { className: "px-4 py-16 sm:px-6" },
        h(
                "div",
          { className: "mx-auto max-w-3xl" },
                h(
                          "p",
                  { className: "text-sm font-medium uppercase tracking-wider text-primary" },
                          "Case Study",
                        ),
                h(
                          "h1",
                  { className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl" },
                          project.title,
                        ),
                h(
                          "p",
                  { className: "mt-4 text-muted-foreground" },
                          project.shortDescription,
                        ),
                h(
                          "div",
                  { className: "mt-6 flex flex-wrap gap-3" },
                          h(
                                      LinkButton,
                            { href: project.repoUrl, target: "_blank", rel: "noreferrer" },
                                      h(Github, { size: 16 }),
                                      "View Repository",
                                    ),
                          h(
                                      LinkButton,
                            {
                                          href: project.repoUrl,
                                          target: "_blank",
                                          rel: "noreferrer",
                                          variant: "outline",
                            },
                                      h(Download, { size: 16 }),
                                      "Download Documentation",
                                    ),
                        ),
                h(
                          "div",
                  { className: "mt-12" },
                          h("h2", { className: "text-xl font-semibold" }, "Project Overview"),
                          h("p", { className: "mt-4 text-sm text-muted-foreground" }, project.overview),
                        ),
                h(
                          "div",
                  { className: "mt-10" },
                          h("h2", { className: "text-xl font-semibold" }, "Business Scenario"),
                          h("p", { className: "mt-4 text-sm text-muted-foreground" }, project.businessScenario),
                        ),
                h(
                          "div",
                  { className: "mt-10" },
                          h("h2", { className: "text-xl font-semibold" }, "Architecture"),
                          h("div", { className: "mt-4" }, h(ArchitecturePlaceholder, null)),
                        ),
                h(
                          "div",
                  { className: "mt-10" },
                          h("h2", { className: "text-xl font-semibold" }, "Technologies Used"),
                          h(
                                      "div",
                            { className: "mt-4 flex flex-wrap gap-2" },
                                      ...project.techStack.map((t) => h(Badge, { key: t }, t)),
                                    ),
                        ),
                h(ListBlock, { title: "Prerequisites", items: project.prerequisites }),
                h(ListBlock, { title: "Lab Setup", items: project.labSetup }),
                h(ListBlock, {
                          title: "Step-by-Step Implementation",
                          items: project.implementationSteps,
                }),

                h(
                          "div",
                  { className: "mt-10" },
                          h("h2", { className: "text-xl font-semibold" }, "PowerShell Scripts"),
                          typeof project.powershellScripts === "string"
                            ? h("p", { className: "mt-4 text-sm text-muted-foreground" }, project.powershellScripts)
                            : h(
                                            "div",
                              { className: "mt-4 space-y-3" },
                                            ...project.powershellScripts.map((script) =>
                                                              h(
                                                                                  Card,
                                                                { key: script.name },
                                                                                  h("p", { className: "font-mono text-sm text-primary" }, script.name),
                                                                                  h("p", { className: "mt-1 text-sm text-muted-foreground" }, script.description),
                                                                                ),
                                                                                           ),
                                          ),
                        ),
                h(
                          "div",
                  { className: "mt-10" },
                          h("h2", { className: "text-xl font-semibold" }, "Screenshots"),
                          h("div", { className: "mt-4" }, h(ScreenshotGallery, { imageFolder: project.imageFolder })),
                        ),
                h(ListBlock, { title: "Validation", items: project.validation }),
                h(ListBlock, { title: "Lessons Learned", items: project.lessonsLearned }),
                h(ListBlock, { title: "Best Practices", items: project.bestPractices }),
                h(
                          "div",
                  { className: "mt-10" },
                          h("h2", { className: "text-xl font-semibold" }, "Skills Demonstrated"),
                          h(
                                      "div",
                            { className: "mt-4 flex flex-wrap gap-2" },
                                      ...project.skillsDemonstrated.map((s) => h(Badge, { key: s }, s)),
                                    ),
                        ),
                h(
                          "div",
                  { className: "mt-10" },
                          h("h2", { className: "text-xl font-semibold" }, "Certification Mapping"),
                          h(
                                      "ul",
                            { className: "mt-4 space-y-2 text-sm text-muted-foreground" },
                                      ...project.certificationMapping.map((c, i) => h("li", { key: i }, c)),
                                    ),
                        ),
                h(
                          "div",
                  { className: "mt-10" },
                          h("h2", { className: "text-xl font-semibold" }, "Microsoft Learn References"),
                          h(
                                      "ul",
                            { className: "mt-4 space-y-2 text-sm" },
                                      ...project.msLearnReferences.map((ref) =>
                                                    h(
                                                                    "li",
                                                      { key: ref.url },
                                                                    h(
                                                                                      "a",
                                                                      {
                                                                                          href: ref.url,
                                                                                          target: "_blank",
                                                                                          rel: "noreferrer",
                                                                                          className: "inline-flex items-center gap-1 text-primary hover:underline",
                                                                      },
                                                                                      ref.label,
                                                                                      h(ExternalLink, { size: 12 }),
                                                                                    ),
                                                                  ),
                                                                                 ),
                                    ),
                        ),
                h(
                          "div",
                  { className: "mt-12" },
                          h(
                                      Link,
                            { href: "/projects", className: "text-sm text-muted-foreground hover:text-foreground" },
                                      "\u2190 Back to all projects",
                                    ),
                        ),
              ),
      );
}
