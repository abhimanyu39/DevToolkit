"use client";

import { useState } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { ToolOutput } from "@/components/tools/ToolOutput";
import { ToolSplitView } from "@/components/tools/ToolSplitView";
import { ToolSettings } from "@/components/tools/ToolSettings";
import { Button } from "@/components/ui/button";
import { formatJson, minifyJson, validateJson } from "./processor";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indent, setIndent] = useState(2);
  const [error, setError] = useState("");

  const handleFormat = () => {
    if (!input.trim()) return;
    try {
      setOutput(formatJson(input, indent));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const handleMinify = () => {
    if (!input.trim()) return;
    try {
      setOutput(minifyJson(input));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const handleValidate = () => {
    if (!input.trim()) return;
    const result = validateJson(input);
    if (result.valid) {
      setError("");
      setOutput("✓ Valid JSON");
    } else {
      setError(result.error || "Invalid JSON");
      setOutput("");
    }
  };

  return (
    <div className="space-y-4">
      <ToolSettings>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Indent:</span>
          {[2, 4].map((n) => (
            <Button
              key={n}
              variant={indent === n ? "default" : "outline"}
              size="sm"
              onClick={() => setIndent(n)}
            >
              {n} spaces
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleFormat} size="sm">Format</Button>
          <Button onClick={handleMinify} variant="secondary" size="sm">Minify</Button>
          <Button onClick={handleValidate} variant="outline" size="sm">Validate</Button>
        </div>
      </ToolSettings>
      {error && (
        <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono">
          {error}
        </div>
      )}
      <ToolSplitView
        input={<ToolInput value={input} onChange={setInput} label="JSON Input" placeholder='{"key": "value"}' />}
        output={<ToolOutput value={output} label="Formatted Output" filename="formatted.json" />}
      />
    </div>
  );
}
