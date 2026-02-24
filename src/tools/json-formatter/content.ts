import type { ToolContent } from "@/lib/tools/types";

export const jsonFormatterContent: ToolContent = {
  whatIs: "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write. A JSON formatter helps you beautify minified JSON data, making it readable with proper indentation and structure.",
  howToUse: "1. Paste your JSON into the input area or upload a .json file.\n2. Choose your preferred indentation (2 or 4 spaces).\n3. Click 'Format' to beautify, 'Minify' to compress, or 'Validate' to check syntax.\n4. Copy the result or download it as a file.",
  commonErrors: "Missing commas between key-value pairs, trailing commas after the last item, using single quotes instead of double quotes, unquoted keys, and missing closing brackets are the most common JSON errors.",
  faqs: [
    { question: "What is the difference between JSON.stringify and JSON.parse?", answer: "JSON.stringify converts a JavaScript object into a JSON string, while JSON.parse converts a JSON string back into a JavaScript object." },
    { question: "Can JSON contain comments?", answer: "No, standard JSON does not support comments. If you need comments, consider using JSONC (JSON with Comments) or JSON5." },
    { question: "What is the maximum size of a JSON file?", answer: "There is no specification limit for JSON file size, but practical limits depend on available memory and the parser being used." },
    { question: "Is JSON case-sensitive?", answer: "Yes, JSON keys are case-sensitive. 'Name' and 'name' are treated as different keys." },
    { question: "What is JSON Schema?", answer: "JSON Schema is a specification that allows you to define the structure, types, and constraints of JSON data for validation purposes." },
  ],
};
