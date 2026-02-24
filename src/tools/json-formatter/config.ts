import type { ToolDefinition } from "@/lib/tools/types";
import { jsonFormatterContent } from "./content";

export const jsonFormatterConfig: ToolDefinition = {
  slug: "json-formatter",
  name: "JSON Formatter & Validator",
  shortName: "JSON Formatter",
  description: "Free online JSON formatter and validator. Paste your JSON, instantly format, validate, and beautify it. No signup required.",
  category: "formatters",
  keywords: ["json formatter", "json beautifier", "json validator", "json pretty print", "format json online"],
  icon: "Braces",
  component: () => import("./component"),
  relatedSlugs: ["json-validator", "yaml-to-json", "csv-to-json"],
  content: jsonFormatterContent,
};
