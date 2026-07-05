"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { h } from "@/lib/h";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
        setMounted(true);
  }, []);

  if (!mounted) {
        return h("div", { className: "h-9 w-9" });
  }

  const isLight = theme === "light";

  return h(
        "button",
    {
            type: "button",
            "aria-label": "Toggle theme",
            onClick: () => setTheme(isLight ? "dark" : "light"),
            className:
                      "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-transparent transition-colors hover:bg-muted",
    },
        isLight ? h(Moon, { size: 18 }) : h(Sun, { size: 18 }),
      );
}
