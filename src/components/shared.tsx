"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { h } from "@/lib/h";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
    return h(
          motion.div,
      {
              className,
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-80px" },
              transition: { duration: 0.5, delay },
      },
          children,
        );
}

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
    id?: string;
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    id,
}: SectionHeadingProps) {
    return h(
          "div",
      { id, className: "mx-auto max-w-2xl text-center" },
          eyebrow
            ? h(
                        "p",
              {
                            className:
                                            "text-sm font-medium uppercase tracking-wider text-primary",
              },
                        eyebrow,
                      )
            : null,
          h(
                  "h2",
            { className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl" },
                  title,
                ),
          description
            ? h("p", { className: "mt-4 text-muted-foreground" }, description)
            : null,
        );
}
