import type { ToolDefinition } from "@/lib/tools/types";
import { cssBeautifierContent } from "./content";

export const cssBeautifierConfig: ToolDefinition = {
  slug: "css-beautifier",
  name: "CSS Beautifier & Minifier",
  shortName: "CSS Beautifier",
  description: "Free online CSS beautifier and minifier. Format your CSS with configurable indentation or minify for production.",
  category: "formatters",
  keywords: ["css beautifier", "css formatter", "css minifier", "format css online"],
  icon: "Paintbrush",
  component: () => import("./component"),
  relatedSlugs: ["html-minifier", "css-gradient-generator", "json-formatter"],
  content: cssBeautifierContent,
};
