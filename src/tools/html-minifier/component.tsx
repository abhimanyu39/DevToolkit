"use client";

import { useState } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { ToolOutput } from "@/components/tools/ToolOutput";
import { ToolSplitView } from "@/components/tools/ToolSplitView";
import { Button } from "@/components/ui/button";
import { minifyHtml } from "./processor";

export default function HtmlMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [savings, setSavings] = useState<number | null>(null);

  const handleMinify = () => {
    if (!input.trim()) return;
    const result = minifyHtml(input);
    setOutput(result.output);
    setSavings(result.savings);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button onClick={handleMinify}>Minify HTML</Button>
        {savings !== null && (
          <span className="text-sm text-emerald-400">
            Size reduced by {savings.toFixed(1)}%
          </span>
        )}
      </div>
      <ToolSplitView
        input={<ToolInput value={input} onChange={setInput} label="HTML Input" placeholder="<html>..." />}
        output={<ToolOutput value={output} label="Minified Output" filename="minified.html" />}
      />
    </div>
  );
}
