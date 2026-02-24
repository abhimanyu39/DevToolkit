import type { ToolDefinition } from "@/lib/tools/types";
import { xmlToJsonContent } from "./content";

export const xmlToJsonConfig: ToolDefinition = {
  slug: "xml-to-json",
  name: "XML to JSON Converter",
  shortName: "XML ↔ JSON",
  description: "Free online XML to JSON converter. Convert between XML and JSON formats with attribute support. Bidirectional conversion.",
  category: "converters",
  keywords: ["xml to json", "json to xml", "xml converter", "xml json online"],
  icon: "FileCode2",
  component: () => import("./component"),
  relatedSlugs: ["yaml-to-json", "csv-to-json", "json-formatter"],
  content: xmlToJsonContent,
};
