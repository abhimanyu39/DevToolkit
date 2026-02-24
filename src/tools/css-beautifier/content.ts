import type { ToolContent } from "@/lib/tools/types";

export const cssBeautifierContent: ToolContent = {
  whatIs: "A CSS beautifier formats minified or poorly formatted CSS code into a clean, readable structure with proper indentation and line breaks. It makes stylesheets easier to read, understand, and maintain.",
  howToUse: "1. Paste your CSS code into the input area.\n2. Choose your indentation preference (2 or 4 spaces).\n3. Click 'Beautify' to format or 'Minify' to compress.\n4. Copy or download the result.",
  commonErrors: "Missing closing braces, missing semicolons after property values, and using invalid property names are common CSS errors that can be caught during formatting.",
  faqs: [
    { question: "Does beautifying CSS change how it works?", answer: "No, beautifying only changes formatting. The styles render exactly the same in browsers." },
    { question: "Should I minify CSS for production?", answer: "Yes, minified CSS loads faster. Use the beautified version for development and minified for production." },
    { question: "Can this tool handle SCSS or LESS?", answer: "This tool is designed for standard CSS. SCSS and LESS may work partially but aren't fully supported." },
    { question: "What indentation should I use?", answer: "2 spaces is the most common convention, but 4 spaces is also widely used. Choose what your team prefers." },
    { question: "Does this tool sort CSS properties?", answer: "Currently no. Property sorting may be added in a future update." },
  ],
};
