import type { ToolDefinition } from "@/lib/tools/types";
import { sqlFormatterContent } from "./content";

export const sqlFormatterConfig: ToolDefinition = {
  slug: "sql-formatter",
  name: "SQL Formatter & Beautifier",
  shortName: "SQL Formatter",
  description: "Free online SQL formatter. Format and beautify SQL queries with support for MySQL, PostgreSQL, and SQLite dialects.",
  category: "formatters",
  keywords: ["sql formatter", "sql beautifier", "format sql online", "sql pretty print"],
  icon: "Database",
  component: () => import("./component"),
  relatedSlugs: ["json-formatter", "css-beautifier", "csv-to-json"],
  content: sqlFormatterContent,
};
