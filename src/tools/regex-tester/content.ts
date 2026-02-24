import type { ToolContent } from "@/lib/tools/types";

export const regexTesterContent: ToolContent = {
  whatIs: "Regular expressions (regex) are patterns used to match character combinations in strings. This regex tester lets you write patterns and instantly see matches highlighted in your test text, with support for capture groups and all standard flags.",
  howToUse: "1. Enter your regex pattern.\n2. Toggle flags (global, case-insensitive, multiline, dotall).\n3. Type or paste your test string.\n4. See matches highlighted in real-time with capture groups shown.",
  commonErrors: "Forgetting to escape special characters (. * + ? [ ] { } ( ) ^ $ | \\), greedy vs lazy matching issues, and incorrect flag usage are common regex mistakes.",
  faqs: [
    { question: "What does the 'g' flag do?", answer: "The global (g) flag finds all matches in the string rather than stopping after the first match." },
    { question: "What is a capture group?", answer: "A capture group, defined by parentheses (), captures the matched text for back-referencing or extraction." },
    { question: "What is the difference between greedy and lazy matching?", answer: "Greedy quantifiers (*, +) match as much as possible. Lazy quantifiers (*?, +?) match as little as possible." },
    { question: "How do I match a literal dot?", answer: "Use \\. to match a literal dot. An unescaped dot (.) matches any character except newline." },
    { question: "What is a lookahead?", answer: "A lookahead (?=...) asserts that what follows the current position matches the pattern, without consuming characters." },
  ],
};
