import type { ToolDefinition } from "@/lib/tools/types";
import { cronParserContent } from "./content";

export const cronParserConfig: ToolDefinition = {
  slug: "cron-expression-parser",
  name: "Cron Expression Parser",
  shortName: "Cron Parser",
  description: "Free online cron expression parser. Get human-readable descriptions and next run times for any cron schedule.",
  category: "testers",
  keywords: ["cron parser", "cron expression", "cron schedule", "cron job", "crontab", "cron expression generator", "crontab generator", "cron validator", "cron tester", "cron builder", "crontab guru", "cron expression to human readable", "cron next run", "cron expression online"],
  icon: "Clock",
  component: () => import("./component"),
  relatedSlugs: ["regex-tester", "json-validator", "uuid-generator"],
  content: cronParserContent,
};
