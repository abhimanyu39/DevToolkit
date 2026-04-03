import type { ToolDefinition } from "@/lib/tools/types";
import { csvToJsonContent } from "./content";

export const csvToJsonConfig: ToolDefinition = {
  slug: "csv-to-json",
  name: "CSV to JSON Converter",
  shortName: "CSV ↔ JSON",
  description: "Free online CSV to JSON converter. Convert between CSV and JSON with configurable delimiters. Bidirectional conversion.",
  category: "converters",
  keywords: ["csv to json", "json to csv", "csv converter", "csv json online", "csv to json converter", "csv to json online free", "convert csv to json", "csv parser online", "json to csv converter", "csv to json array", "tsv to json", "csv to json tool"],
  icon: "Table",
  component: () => import("./component"),
  relatedSlugs: ["yaml-to-json", "xml-to-json", "json-formatter"],
  content: csvToJsonContent,
};
