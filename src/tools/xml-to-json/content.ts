import type { ToolContent } from "@/lib/tools/types";

export const xmlToJsonContent: ToolContent = {
  whatIs: "XML (Extensible Markup Language) and JSON are both data formats used for storing and transmitting structured data. Converting between them is common when integrating legacy XML APIs with modern JSON-based applications.",
  howToUse: "1. Select conversion direction (XML→JSON or JSON→XML).\n2. Paste your XML or JSON data.\n3. Click 'Convert'.\n4. Copy or download the output.",
  commonErrors: "XML must be well-formed with matching tags and proper nesting. JSON keys with special XML characters need escaping. Attributes are converted using @attributes convention.",
  faqs: [
    { question: "How are XML attributes handled?", answer: "XML attributes are converted to a special @attributes object in the JSON output." },
    { question: "Can this handle CDATA sections?", answer: "Basic CDATA sections are processed as text content in the conversion." },
    { question: "What about XML namespaces?", answer: "Namespaces are preserved as part of the element names in the JSON output." },
    { question: "Is the conversion lossless?", answer: "Round-trip conversion may not be perfectly lossless due to fundamental differences between XML and JSON data models." },
    { question: "Can I convert large XML files?", answer: "This tool runs in your browser, so it works well for files up to several megabytes depending on your device." },
  ],
};
