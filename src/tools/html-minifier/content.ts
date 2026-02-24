import type { ToolContent } from "@/lib/tools/types";

export const htmlMinifierContent: ToolContent = {
  whatIs: "HTML minification removes unnecessary characters from HTML code without changing its functionality. This includes whitespace, comments, and redundant attributes, resulting in smaller file sizes and faster page loads.",
  howToUse: "1. Paste your HTML code into the input area.\n2. Click 'Minify HTML' to compress it.\n3. See the size reduction percentage.\n4. Copy the minified HTML or download it.",
  commonErrors: "Be careful with whitespace-sensitive elements like <pre> and <code>. Minification may also break inline JavaScript or CSS if they rely on specific formatting.",
  faqs: [
    { question: "Does minifying HTML affect how the page looks?", answer: "No, minification only removes unnecessary whitespace and comments. The visual output remains identical." },
    { question: "How much can HTML minification reduce file size?", answer: "Typically 10-30% depending on how much whitespace and comments are in the original code." },
    { question: "Should I minify HTML for production?", answer: "Yes, minified HTML loads faster and uses less bandwidth, which improves user experience and SEO." },
    { question: "Is HTML minification reversible?", answer: "Minification is lossy — comments are removed permanently. You should always keep your original source files." },
    { question: "Does this tool handle embedded CSS and JavaScript?", answer: "This tool focuses on HTML minification. For CSS and JS, use dedicated minification tools." },
  ],
};
