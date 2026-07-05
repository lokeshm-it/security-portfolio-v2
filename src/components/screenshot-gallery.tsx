"use client";

import { useCallback, useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { ChevronLeft, ChevronRight, ImageOff, X } from "lucide-react";
import { h } from "@/lib/h";

interface ScreenshotGalleryProps {
    imageFolder: string;
}

export function ScreenshotGallery({ imageFolder }: ScreenshotGalleryProps) {
    const [files, setFiles] = useState<string[] | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
        let cancelled = false;
        fetch("/images/manifest.json")
          .then((res) => (res.ok ? res.json() : {}))
          .then((manifest: Record<string, string[]>) => {
                    if (!cancelled) setFiles(manifest[imageFolder] ?? []);
          })
          .catch(() => {
                    if (!cancelled) setFiles([]);
          });
        return () => {
                cancelled = true;
        };
  }, [imageFolder]);

  const close = useCallback(() => setActiveIndex(null), []);
    const showPrev = useCallback(() => {
          setActiveIndex((i) =>
                  i === null || !files ? i : (i - 1 + files.length) % files.length,
                             );
    }, [files]);
    const showNext = useCallback(() => {
          setActiveIndex((i) => (i === null || !files ? i : (i + 1) % files.length));
    }, [files]);

  if (files === null) {
        return h(
                "div",
          { className: "text-sm text-muted-foreground" },
                "Loading screenshots\u2026",
              );
  }

  if (files.length === 0) {
        return h(
                "div",
          {
                    className:
                                "flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/30 px-6 py-16 text-center",
          },
                h(ImageOff, { size: 32, className: "text-muted-foreground" }),
                h(
                          "p",
                  { className: "text-sm font-medium text-muted-foreground" },
                          "Documentation will be added after lab completion.",
                        ),
              );
  }

  return h(
        "div",
        null,
        h(
                "div",
          { className: "grid grid-cols-2 gap-4 sm:grid-cols-3" },
                ...files.map((file, index) =>
                          h(
                                      "button",
                            {
                                          key: file,
                                          type: "button",
                                          onClick: () => setActiveIndex(index),
                                          className: "group overflow-hidden rounded-lg border border-border",
                            },
                                      h("img", {
                                                    src: `/images/${imageFolder}/${file}`,
                                                    alt: `${imageFolder} screenshot ${index + 1}`,
                                                    className:
                                                                    "h-40 w-full object-cover transition-transform group-hover:scale-105",
                                                    loading: "lazy",
                                      }),
                                    ),
                                   ),
              ),
        activeIndex !== null
          ? h(
                      "div",
            {
                          className:
                                          "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4",
                          onClick: close,
            },
                      h(
                                    "button",
                        {
                                        type: "button",
                                        "aria-label": "Close",
                                        onClick: close,
                                        className:
                                                          "absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20",
                        },
                                    h(X, { size: 20 }),
                                  ),
                      h(
                                    "button",
                        {
                                        type: "button",
                                        "aria-label": "Previous",
                                        onClick: (e: MouseEvent) => {
                                                          e.stopPropagation();
                                                          showPrev();
                                        },
                                        className:
                                                          "absolute left-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20",
                        },
                                    h(ChevronLeft, { size: 20 }),
                                  ),
                      h("img", {
                                    src: `/images/${imageFolder}/${files[activeIndex]}`,
                                    alt: `${imageFolder} screenshot ${activeIndex + 1}`,
                                    onClick: (e: MouseEvent) => e.stopPropagation(),
                                    className: "max-h-[85vh] max-w-[90vw] rounded-lg object-contain",
                      }),
                      h(
                                    "button",
                        {
                                        type: "button",
                                        "aria-label": "Next",
                                        onClick: (e: MouseEvent) => {
                                                          e.stopPropagation();
                                                          showNext();
                                        },
                                        className:
                                                          "absolute right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20",
                        },
                                    h(ChevronRight, { size: 20 }),
                                  ),
                    )
          : null,
      );
}
