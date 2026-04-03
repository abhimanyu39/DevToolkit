import type { ToolDefinition } from "@/lib/tools/types";
import { htmlMinifierContent } from "./content";

export const htmlMinifierConfig: ToolDefinition = {
  slug: "html-minifier",
  name: "HTML Minifier",
  shortName: "HTML Minifier",
  description: "Free online HTML minifier. Remove whitespace, comments, and reduce file size. See size reduction percentage instantly.",
  category: "formatters",
  keywords: ["html minifier", "minify html", "html compressor", "reduce html size", "html minifier online", "compress html", "minify html online free", "html optimizer", "html beautifier", "html formatter", "remove html whitespace", "html compression tool"],
  icon: "FileCode",
  component: () => import("./component"),
  relatedSlugs: ["css-beautifier", "json-formatter", "markdown-preview"],
  content: htmlMinifierContent,
};
