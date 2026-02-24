"use client";

import { useState } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { ToolOutput } from "@/components/tools/ToolOutput";
import { ToolSplitView } from "@/components/tools/ToolSplitView";
import { Button } from "@/components/ui/button";
import { encodeBase64, decodeBase64 } from "./processor";

export default function Base64EncoderDecoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");

  const handleProcess = () => {
    if (!input.trim()) return;
    try {
      setOutput(mode === "encode" ? encodeBase64(input) : decodeBase64(input));
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
          {mode === "encode" ? "Encode to Base64" : "Decode from Base64"}
        </Button>
      </div>
      {error && <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>}
      <ToolSplitView
        input={<ToolInput value={input} onChange={setInput} label={mode === "encode" ? "Plain Text" : "Base64 String"} placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."} />}
        output={<ToolOutput value={output} label={mode === "encode" ? "Base64 Output" : "Decoded Text"} filename={mode === "encode" ? "encoded.txt" : "decoded.txt"} />}
      />
    </div>
  );
}
