import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { h } from "@/lib/h";

interface MarkdownRendererProps {
    content: string;
}

const proseClassName = [
    "space-y-4 text-sm leading-relaxed text-foreground",
    "[&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:mt-6",
    "[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-6",
    "[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-4",
    "[&_a]:text-primary [&_a]:underline",
    "[&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5",
    "[&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-muted [&_pre]:p-4",
    "[&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6",
    "[&_table]:w-full [&_th]:border [&_th]:border-border [&_th]:p-2 [&_td]:border [&_td]:border-border [&_td]:p-2",
  ].join(" ");

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return h(
          "div",
      { className: proseClassName },
          h(ReactMarkdown, { remarkPlugins: [remarkGfm] }, content),
        );
}
