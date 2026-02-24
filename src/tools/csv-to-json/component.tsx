"use client";

import { useState } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { ToolOutput } from "@/components/tools/ToolOutput";
import { ToolSplitView } from "@/components/tools/ToolSplitView";
import { ToolSettings } from "@/components/tools/ToolSettings";
import { Button } from "@/components/ui/button";
import { csvToJson, jsonToCsv } from "./processor";

export default function CsvToJson() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"csv-to-json" | "json-to-csv">("csv-to-json");
  const [delimiter, setDelimiter] = useState(",");
  const [error, setError] = useState("");

  const handleConvert = () => {
    if (!input.trim()) return;
    try {
      setOutput(mode === "csv-to-json" ? csvToJson(input, delimiter) : jsonToCsv(input, delimiter));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <div className="space-y-4">
      <ToolSettings>
        <div className="flex items-center gap-2">
          <Button variant={mode === "csv-to-json" ? "default" : "outline"} size="sm" onClick={() => setMode("csv-to-json")}>CSV → JSON</Button>
          <Button variant={mode === "json-to-csv" ? "default" : "outline"} size="sm" onClick={() => setMode("json-to-csv")}>JSON → CSV</Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Delimiter:</span>
          {[",", ";", "\t", "|"].map((d) => (
            <Button key={d} variant={delimiter === d ? "default" : "outline"} size="sm" onClick={() => setDelimiter(d)}>
              {d === "\t" ? "Tab" : d}
            </Button>
          ))}
        </div>
        <Button onClick={handleConvert} size="sm">Convert</Button>
      </ToolSettings>
      {error && <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>}
      <ToolSplitView
        input={<ToolInput value={input} onChange={setInput} label={mode === "csv-to-json" ? "CSV Input" : "JSON Input"} placeholder={mode === "csv-to-json" ? "name,age,city\nJohn,30,NYC" : '[{"name":"John"}]'} />}
        output={<ToolOutput value={output} label={mode === "csv-to-json" ? "JSON Output" : "CSV Output"} filename={mode === "csv-to-json" ? "output.json" : "output.csv"} />}
      />
    </div>
  );
}
