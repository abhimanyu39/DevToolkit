"use client";

import { useState } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { ToolOutput } from "@/components/tools/ToolOutput";
import { ToolSplitView } from "@/components/tools/ToolSplitView";
import { Button } from "@/components/ui/button";
import { yamlToJson, jsonToYaml } from "./processor";

export default function YamlToJson() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"yaml-to-json" | "json-to-yaml">("yaml-to-json");
  const [error, setError] = useState("");

  const handleConvert = () => {
    if (!input.trim()) return;
    try {
      setOutput(mode === "yaml-to-json" ? yamlToJson(input) : jsonToYaml(input));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant={mode === "yaml-to-json" ? "default" : "outline"} size="sm" onClick={() => setMode("yaml-to-json")}>YAML → JSON</Button>
        <Button variant={mode === "json-to-yaml" ? "default" : "outline"} size="sm" onClick={() => setMode("json-to-yaml")}>JSON → YAML</Button>
        <Button onClick={handleConvert} size="sm" className="ml-4">Convert</Button>
      </div>
      {error && <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>}
      <ToolSplitView
        input={<ToolInput value={input} onChange={setInput} label={mode === "yaml-to-json" ? "YAML Input" : "JSON Input"} placeholder={mode === "yaml-to-json" ? "name: John\nage: 30" : '{"name": "John"}'} />}
        output={<ToolOutput value={output} label={mode === "yaml-to-json" ? "JSON Output" : "YAML Output"} filename={mode === "yaml-to-json" ? "output.json" : "output.yaml"} />}
      />
    </div>
  );
}
