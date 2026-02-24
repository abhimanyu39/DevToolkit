import type { ToolContent } from "@/lib/tools/types";

export const jsonValidatorContent: ToolContent = {
  whatIs: "A JSON validator checks whether your JSON data is syntactically correct according to the JSON specification. It identifies errors like missing commas, unmatched brackets, and invalid values, helping you debug malformed data.",
  howToUse: "1. Paste your JSON into the input area.\n2. Click 'Validate JSON'.\n3. See detailed error messages with line and column numbers.\n4. View statistics for valid JSON (key count, depth, size).",
  commonErrors: "Trailing commas, single quotes instead of double quotes, unquoted keys, missing closing brackets, and undefined/NaN values are the most common JSON validation errors.",
  faqs: [
    { question: "What is the difference between JSON validation and formatting?", answer: "Validation checks if JSON is syntactically correct. Formatting changes the visual layout without altering the data." },
    { question: "Can JSON have trailing commas?", answer: "No, standard JSON does not allow trailing commas. They will cause validation errors." },
    { question: "Are comments allowed in JSON?", answer: "No, standard JSON does not support comments. Use JSONC or JSON5 if you need comments." },
    { question: "What is JSON Schema validation?", answer: "JSON Schema validation checks data against a schema that defines the structure, types, and constraints. This tool validates syntax only." },
    { question: "Can this validate nested JSON?", answer: "Yes, this tool validates JSON at any nesting depth and reports the maximum depth of your data structure." },
  ],
};
