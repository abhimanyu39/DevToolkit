"use client";

import { useState, useMemo } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { copyToClipboard } from "@/lib/utils/clipboard";
import { markdownToHtml } from "./processor";

export default function MarkdownPreview() {
  const [input, setInput] = useState("# Hello World\n\nThis is **bold** and *italic* text.\n\n- Item 1\n- Item 2\n\n```js\nconsole.log('hello');\n```");
  const [copied, setCopied] = useState(false);

  const html = useMemo(() => {
    try {
      return markdownToHtml(input);
    } catch {
      return "<p>Error rendering markdown</p>";
    }
  }, [input]);

  const handleCopy = async () => {
    const ok = await copyToClipboard(html);
    if (ok) { setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={handleCopy}>
          {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied HTML!" : "Copy HTML"}
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ToolInput value={input} onChange={setInput} label="Markdown Input" placeholder="# Type your markdown here..." rows={20} />
        <div className="space-y-2">
          <span className="text-sm font-medium text-gray-300">Preview</span>
          <div
            className="prose prose-invert prose-sm max-w-none p-4 rounded-md border border-gray-700 bg-gray-900 min-h-[300px] overflow-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}
