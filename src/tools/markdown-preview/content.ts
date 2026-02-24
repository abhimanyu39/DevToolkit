import type { ToolContent } from "@/lib/tools/types";

export const markdownPreviewContent: ToolContent = {
  whatIs: "Markdown is a lightweight markup language for creating formatted text using plain-text syntax. This tool provides a live preview, converting your Markdown to HTML in real-time as you type.",
  howToUse: "1. Type or paste Markdown in the left panel.\n2. See the rendered HTML preview in the right panel.\n3. Copy the generated HTML if needed.\n4. The preview updates in real-time as you type.",
  commonErrors: "Missing blank lines before lists or headings, incorrect heading levels, and forgetting to escape special characters like * and _ are common Markdown mistakes.",
  faqs: [
    { question: "What Markdown flavors are supported?", answer: "This tool uses standard CommonMark with GitHub-flavored extensions like tables and task lists." },
    { question: "Can I use HTML in Markdown?", answer: "Yes, most Markdown parsers allow inline HTML, which is rendered alongside the Markdown content." },
    { question: "How do I create a code block?", answer: "Use triple backticks (```) before and after your code, optionally specifying the language for syntax highlighting." },
    { question: "Can I create tables in Markdown?", answer: "Yes, use pipes (|) and dashes (-) to create tables. Alignment is set with colons in the separator row." },
    { question: "Is the preview output safe?", answer: "The HTML output is rendered in a sandboxed context. For production use, always sanitize HTML output." },
  ],
};
