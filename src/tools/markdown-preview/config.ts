import type { ToolDefinition } from "@/lib/tools/types";
import { markdownPreviewContent } from "./content";

export const markdownPreviewConfig: ToolDefinition = {
  slug: "markdown-preview",
  name: "Markdown Preview Editor",
  shortName: "Markdown Preview",
  description: "Free online Markdown editor with live preview. Write Markdown and see rendered HTML in real-time. Split pane editor.",
  category: "converters",
  keywords: ["markdown preview", "markdown editor", "markdown to html", "markdown renderer"],
  icon: "FileText",
  component: () => import("./component"),
  relatedSlugs: ["html-minifier", "json-formatter", "yaml-to-json"],
  content: markdownPreviewContent,
};
