import type { ToolDefinition } from "@/lib/tools/types";
import { yamlToJsonContent } from "./content";

export const yamlToJsonConfig: ToolDefinition = {
  slug: "yaml-to-json",
  name: "YAML to JSON Converter",
  shortName: "YAML ↔ JSON",
  description: "Free online YAML to JSON converter. Convert between YAML and JSON formats instantly. Bidirectional conversion.",
  category: "converters",
  keywords: ["yaml to json", "json to yaml", "yaml converter", "yaml json online", "yaml to json converter", "yaml to json online free", "convert yaml to json", "yaml parser", "json to yaml converter", "yaml validator", "yaml formatter", "yml to json", "yaml beautifier"],
  icon: "FileJson",
  component: () => import("./component"),
  relatedSlugs: ["json-formatter", "xml-to-json", "csv-to-json"],
  content: yamlToJsonContent,
};
