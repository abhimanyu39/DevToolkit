"use client";

import { useState } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { ToolOutput } from "@/components/tools/ToolOutput";
import { ToolSplitView } from "@/components/tools/ToolSplitView";
import { Button } from "@/components/ui/button";
import { encodeUrl, decodeUrl, breakdownUrl } from "./processor";

export default function UrlEncoderDecoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [breakdown, setBreakdown] = useState<{ component: string; encoded: string }[]>([]);
  const [error, setError] = useState("");

  const handleProcess = () => {
    if (!input.trim()) return;
    try {
      const result = mode === "encode" ? encodeUrl(input) : decodeUrl(input);
      setOutput(result);
      setBreakdown(breakdownUrl(mode === "decode" ? result : input));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant={mode === "encode" ? "default" : "outline"} size="sm" onClick={() => setMode("encode")}>Encode</Button>
        <Button variant={mode === "decode" ? "default" : "outline"} size="sm" onClick={() => setMode("decode")}>Decode</Button>
        <Button onClick={handleProcess} size="sm" className="ml-4">
          {mode === "encode" ? "Encode URL" : "Decode URL"}
        </Button>
      </div>
      {error && <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>}
      <ToolSplitView
        input={<ToolInput value={input} onChange={setInput} label={mode === "encode" ? "Text / URL" : "Encoded URL"} placeholder="https://example.com/path?q=hello world" />}
        output={<ToolOutput value={output} label={mode === "encode" ? "Encoded" : "Decoded"} />}
      />
      {breakdown.length > 0 && (
        <div className="border border-gray-800 rounded-lg p-4 space-y-2">
          <h3 className="text-sm font-medium text-white">URL Breakdown</h3>
          {breakdown.map((b) => (
            <div key={b.component} className="flex gap-3 text-sm">
              <span className="text-gray-500 w-24">{b.component}:</span>
              <span className="text-gray-300 font-mono">{b.encoded}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
