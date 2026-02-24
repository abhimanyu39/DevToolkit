import type { ToolContent } from "@/lib/tools/types";

export const csvToJsonContent: ToolContent = {
  whatIs: "CSV (Comma-Separated Values) is a tabular data format, while JSON is a hierarchical data format. Converting between them is essential for data processing, API integration, and database operations.",
  howToUse: "1. Select conversion direction.\n2. Choose your delimiter (comma, semicolon, tab, or pipe).\n3. Paste your data.\n4. Click 'Convert' and copy the result.",
  commonErrors: "CSV files with unescaped commas in values, inconsistent column counts, and missing headers are common issues. Ensure values with special characters are properly quoted.",
  faqs: [
    { question: "Does the first row need to be headers?", answer: "Yes, this tool uses the first row as JSON object keys. Ensure your CSV has a header row." },
    { question: "Can I use a custom delimiter?", answer: "Yes, you can choose comma, semicolon, tab, or pipe as your delimiter." },
    { question: "How are nested objects handled?", answer: "CSV is a flat format. Nested JSON objects are flattened to string representation in CSV output." },
    { question: "What about quoted values with commas?", answer: "Values containing commas should be wrapped in double quotes in CSV. This tool handles standard CSV quoting." },
    { question: "Is there a size limit?", answer: "This tool processes data in your browser, so it depends on your device's memory. It works well for files up to several megabytes." },
  ],
};
