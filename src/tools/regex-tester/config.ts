import type { ToolDefinition } from "@/lib/tools/types";
import { regexTesterContent } from "./content";

export const regexTesterConfig: ToolDefinition = {
  slug: "regex-tester",
  name: "Regex Tester & Debugger",
  shortName: "Regex Tester",
  description: "Free online regex tester with real-time match highlighting, capture groups, and flag toggles. Test your regular expressions instantly.",
  category: "testers",
  keywords: ["regex tester", "regular expression tester", "regex debugger", "regex online"],
  icon: "Regex",
  component: () => import("./component"),
  relatedSlugs: ["json-validator", "jwt-decoder", "password-generator"],
  content: regexTesterContent,
};
