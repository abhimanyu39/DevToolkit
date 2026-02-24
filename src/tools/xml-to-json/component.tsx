"use client";

import { useState } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { ToolOutput } from "@/components/tools/ToolOutput";
import { ToolSplitView } from "@/components/tools/ToolSplitView";
import { Button } from "@/components/ui/button";
import { xmlToJson, jsonToXml } from "./processor";

export default function XmlToJson() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"xml-to-json" | "json-to-xml">("xml-to-json");
  const [error, setError] = useState("");

  const handleConvert = () => {
    if (!input.trim()) return;
    try {
      setOutput(mode === "xml-to-json" ? xmlToJson(input) : jsonToXml(input));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant={mode === "xml-to-json" ? "default" : "outline"} size="sm" onClick={() => setMode("xml-to-json")}>XML → JSON</Button>
        <Button variant={mode === "json-to-xml" ? "default" : "outline"} size="sm" onClick={() => setMode("json-to-xml")}>JSON → XML</Button>
        <Button onClick={handleConvert} size="sm" className="ml-4">Convert</Button>
      </div>
      {error && <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>}
      <ToolSplitView
        input={<ToolInput value={input} onChange={setInput} label={mode === "xml-to-json" ? "XML Input" : "JSON Input"} placeholder={mode === "xml-to-json" ? '<root><name>John</name></root>' : '{"root":{"name":"John"}}'} />}
        output={<ToolOutput value={output} label={mode === "xml-to-json" ? "JSON Output" : "XML Output"} filename={mode === "xml-to-json" ? "output.json" : "output.xml"} />}
      />
    </div>
  );
}
