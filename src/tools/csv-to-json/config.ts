import type { ToolDefinition } from "@/lib/tools/types";
import { csvToJsonContent } from "./content";

export const csvToJsonConfig: ToolDefinition = {
  slug: "csv-to-json",
  name: "CSV to JSON Converter",
  shortName: "CSV ↔ JSON",
  description: "Free online CSV to JSON converter. Convert between CSV and JSON with configurable delimiters. Bidirectional conversion.",
  category: "converters",
  keywords: ["csv to json", "json to csv", "csv converter", "csv json online"],
  icon: "Table",
  component: () => import("./component"),
  relatedSlugs: ["yaml-to-json", "xml-to-json", "json-formatter"],
  content: csvToJsonContent,
};
