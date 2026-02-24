"use client";

import { useState } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { ToolOutput } from "@/components/tools/ToolOutput";
import { ToolSplitView } from "@/components/tools/ToolSplitView";
import { ToolSettings } from "@/components/tools/ToolSettings";
import { Button } from "@/components/ui/button";
import { beautifyCss, minifyCss } from "./processor";

export default function CssBeautifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indent, setIndent] = useState(2);
  const [savings, setSavings] = useState<number | null>(null);

  const handleBeautify = () => {
    if (!input.trim()) return;
    setOutput(beautifyCss(input, indent));
    setSavings(null);
  };

  const handleMinify = () => {
    if (!input.trim()) return;
    const result = minifyCss(input);
    setOutput(result.output);
    setSavings(result.savings);
  };

  return (
    <div className="space-y-4">
      <ToolSettings>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Indent:</span>
          {[2, 4].map((n) => (
            <Button key={n} variant={indent === n ? "default" : "outline"} size="sm" onClick={() => setIndent(n)}>
              {n} spaces
            </Button>
          ))}
        </div>
        <Button onClick={handleBeautify} size="sm">Beautify</Button>
        <Button onClick={handleMinify} variant="secondary" size="sm">Minify</Button>
        {savings !== null && (
          <span className="text-sm text-emerald-400">Reduced by {savings.toFixed(1)}%</span>
        )}
      </ToolSettings>
      <ToolSplitView
        input={<ToolInput value={input} onChange={setInput} label="CSS Input" placeholder="body { color: red; }" />}
        output={<ToolOutput value={output} label="Output" filename="formatted.css" />}
      />
    </div>
  );
}
