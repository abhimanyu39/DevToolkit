import type { ToolContent } from "@/lib/tools/types";

export const yamlToJsonContent: ToolContent = {
  whatIs: "YAML (YAML Ain't Markup Language) and JSON are both data serialization formats. YAML uses indentation for structure and is human-friendly, while JSON uses braces and brackets. This tool converts between the two formats instantly.",
  howToUse: "1. Select conversion direction (YAML→JSON or JSON→YAML).\n2. Paste your data in the input area.\n3. Click 'Convert'.\n4. Copy or download the result.",
  commonErrors: "YAML is indent-sensitive — mixing tabs and spaces causes errors. JSON requires double quotes for strings and keys. Ensure proper nesting in both formats.",
  faqs: [
    { question: "When should I use YAML over JSON?", answer: "YAML is better for configuration files (Docker, Kubernetes, CI/CD) due to its readability. JSON is better for APIs and data interchange." },
    { question: "Does YAML support comments?", answer: "Yes, YAML supports comments using the # character. JSON does not support comments." },
    { question: "Can YAML represent all JSON data?", answer: "Yes, YAML is a superset of JSON. Any valid JSON is also valid YAML." },
    { question: "Are tabs allowed in YAML?", answer: "No, YAML only allows spaces for indentation. Using tabs will cause parsing errors." },
    { question: "What is the file extension for YAML?", answer: "Both .yml and .yaml are accepted file extensions for YAML files." },
  ],
};
