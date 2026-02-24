import type { ToolContent } from "@/lib/tools/types";

export const cronParserContent: ToolContent = {
  whatIs: "A cron expression is a string of five fields representing a schedule: minute, hour, day of month, month, and day of week. This parser decodes cron expressions into human-readable descriptions and shows upcoming execution times.",
  howToUse: "1. Enter a cron expression (5 fields) or click a preset.\n2. Click 'Parse'.\n3. See the human-readable description and breakdown.\n4. View the next 5 scheduled run times.",
  commonErrors: "Using 6 or 7 fields (some systems include seconds/years), confusing 0-indexed vs 1-indexed day of week, and not understanding wildcards and step values are common mistakes.",
  faqs: [
    { question: "What does */5 mean?", answer: "*/5 means 'every 5 units'. In the minute field, */5 means every 5 minutes (0, 5, 10, 15, etc.)." },
    { question: "Is Sunday 0 or 7?", answer: "In standard cron, Sunday is 0 and Saturday is 6. Some systems also accept 7 for Sunday." },
    { question: "Can I use names for months and days?", answer: "Some cron implementations support names (JAN, FEB, MON, TUE), but this parser uses numeric values." },
    { question: "What is the difference between * and ?", answer: "In standard 5-field cron, only * is used. The ? symbol is used in some extended formats (like Quartz) to mean 'no specific value'." },
    { question: "How do I schedule something for the last day of the month?", answer: "Standard cron doesn't support 'last day'. You would typically use a wrapper script or extended cron syntax like 'L'." },
  ],
};
