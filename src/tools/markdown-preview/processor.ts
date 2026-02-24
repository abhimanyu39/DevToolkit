import { marked } from "marked";

export function markdownToHtml(input: string): string {
  return marked.parse(input, { async: false }) as string;
}
