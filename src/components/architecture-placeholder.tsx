import { Workflow } from "lucide-react";
import { h } from "@/lib/h";

export function ArchitecturePlaceholder() {
    return h(
          "div",
      {
              className:
                        "flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/30 px-6 py-16 text-center",
      },
          h(Workflow, { size: 32, className: "text-muted-foreground" }),
          h(
                  "p",
            { className: "text-sm font-medium text-muted-foreground" },
                  "Architecture diagram will be added.",
                ),
        );
}
