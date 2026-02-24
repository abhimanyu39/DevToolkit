import type { ToolDefinition } from "@/lib/tools/types";
import { jsonValidatorContent } from "./content";

export const jsonValidatorConfig: ToolDefinition = {
  slug: "json-validator",
  name: "JSON Validator",
  shortName: "JSON Validator",
  description: "Free online JSON validator. Validate JSON syntax with detailed error messages, line numbers, and data statistics.",
  category: "validators",
  keywords: ["json validator", "validate json", "json checker", "json lint"],
  icon: "CheckCircle",
  component: () => import("./component"),
  relatedSlugs: ["json-formatter", "yaml-to-json", "jwt-decoder"],
  content: jsonValidatorContent,
};
