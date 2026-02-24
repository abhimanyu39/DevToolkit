import type { ToolContent } from "@/lib/tools/types";

export const sqlFormatterContent: ToolContent = {
  whatIs: "A SQL formatter takes raw SQL queries and reformats them with proper indentation, line breaks, and keyword casing. This makes complex queries much easier to read, debug, and maintain.",
  howToUse: "1. Paste your SQL query into the input area.\n2. Select your database dialect (MySQL, PostgreSQL, SQLite, or Standard SQL).\n3. Toggle uppercase keywords if desired.\n4. Click 'Format SQL' and copy the result.",
  commonErrors: "Missing semicolons at the end of statements, unmatched parentheses in subqueries, missing JOIN conditions, and incorrect alias usage are common SQL formatting issues.",
  faqs: [
    { question: "Does formatting SQL change its behavior?", answer: "No, formatting only changes the visual layout. The SQL executes exactly the same way." },
    { question: "Should SQL keywords be uppercase?", answer: "It's a common convention to uppercase SQL keywords (SELECT, FROM, WHERE) for readability, but it's not required." },
    { question: "What SQL dialects are supported?", answer: "This tool supports Standard SQL, MySQL, PostgreSQL, and SQLite dialects." },
    { question: "Can this format stored procedures?", answer: "Yes, the formatter handles most SQL constructs including stored procedures, CTEs, and subqueries." },
    { question: "Does formatting affect query performance?", answer: "No, SQL formatting is purely cosmetic and has zero impact on query execution performance." },
  ],
};
