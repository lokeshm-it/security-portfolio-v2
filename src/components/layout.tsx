"use client";

import { useState } from "react";
import { Menu, X, Github, Linkedin, FileText } from "lucide-react";
import { h } from "@/lib/h";
import { cn } from "@/lib/utils";
import { navItems, siteConfig, socialLinks } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";

function SocialLinks({ className }: { className?: string }) {
    return h(
          "div",
      { className: cn("flex items-center gap-2", className) },
          h(
                  "a",
            {
                      href: socialLinks.github,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "GitHub",
                      className:
                                  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted",
            },
                  h(Github, { size: 16 }),
                ),
          h(
                  "a",
            {
                      href: socialLinks.linkedin,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "LinkedIn",
                      className:
                                  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted",
            },
                  h(Linkedin, { size: 16 }),
                ),
          h(
                  "a",
            {
                      href: socialLinks.resume,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "Resume",
                      className:
                                  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted",
            },
                  h(FileText, { size: 16 }),
                ),
        );
}

export function Navbar() {
    const [open, setOpen] = useState(false);

  return h(
        "header",
    {
            className:
                      "glass-nav sticky top-0 z-50 border-b border-border/60",
    },
        h(
                "div",
          {
                    className:
                                "mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6",
          },
                h(
                          "a",
                  { href: "/", className: "text-sm font-semibold tracking-tight" },
                          h("span", { className: "text-gradient" }, siteConfig.name),
                        ),
                h(
                          "nav",
                  { className: "hidden items-center gap-1 md:flex" },
                          ...navItems.map((item) =>
                                      h(
                                                    "a",
                                        {
                                                        key: item.href,
                                                        href: item.href,
                                                        className:
                                                                          "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                                        },
                                                    item.label,
                                                  ),
                                                  ),
                        ),
                h(
                          "div",
                  { className: "hidden items-center gap-2 md:flex" },
                          h(SocialLinks, null),
                          h(ThemeToggle, null),
                        ),
                h(
                          "div",
                  { className: "flex items-center gap-2 md:hidden" },
                          h(ThemeToggle, null),
                          h(
                                      "button",
                            {
                                          type: "button",
                                          "aria-label": "Toggle menu",
                                          onClick: () => setOpen((v) => !v),
                                          className:
                                                          "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border",
                            },
                                      open ? h(X, { size: 18 }) : h(Menu, { size: 18 }),
                                    ),
                        ),
              ),
        open
          ? h(
                      "nav",
            {
                          className:
                                          "flex flex-col gap-1 border-t border-border/60 px-4 py-3 md:hidden",
            },
                      ...navItems.map((item) =>
                                    h(
                                                    "a",
                                      {
                                                        key: item.href,
                                                        href: item.href,
                                                        onClick: () => setOpen(false),
                                                        className:
                                                                            "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                                      },
                                                    item.label,
                                                  ),
                                                ),
                      h(SocialLinks, { className: "pt-2" }),
                    )
          : null,
      );
}

export function Footer() {
    return h(
          "footer",
      { className: "border-t border-border/60 py-8" },
          h(
                  "div",
            {
                      className:
                                  "mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6",
            },
                  h(
                            "p",
                    { className: "text-sm text-muted-foreground" },
                            `\u00A9 ${new Date().getFullYear()} ${siteConfig.name}. Built with Next.js, TypeScript and Tailwind CSS.`,
                          ),
                  h(SocialLinks, null),
                ),
        );
}
