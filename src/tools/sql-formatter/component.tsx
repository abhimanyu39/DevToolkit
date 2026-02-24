"use client";

import { useState } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { ToolOutput } from "@/components/tools/ToolOutput";
import { ToolSplitView } from "@/components/tools/ToolSplitView";
import { ToolSettings } from "@/components/tools/ToolSettings";
import { Button } from "@/components/ui/button";
import { formatSql, type SqlDialect } from "./processor";

const dialects: { value: SqlDialect; label: string }[] = [
  { value: "sql", label: "Standard SQL" },
  { value: "mysql", label: "MySQL" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "sqlite", label: "SQLite" },
];

export default function SqlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [dialect, setDialect] = useState<SqlDialect>("sql");
  const [uppercase, setUppercase] = useState(true);
  const [error, setError] = useState("");

  const handleFormat = () => {
    if (!input.trim()) return;
    try {
      setOutput(formatSql(input, dialect, uppercase));
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
          <span className="text-sm text-gray-400">Dialect:</span>
          {dialects.map((d) => (
            <Button
              key={d.value}
              variant={dialect === d.value ? "default" : "outline"}
              size="sm"
              onClick={() => setDialect(d.value)}
            >
              {d.label}
            </Button>
          ))}
        </div>
        <Button
          variant={uppercase ? "default" : "outline"}
          size="sm"
          onClick={() => setUppercase(!uppercase)}
        >
          UPPERCASE Keywords
        </Button>
        <Button onClick={handleFormat} size="sm">Format SQL</Button>
      </ToolSettings>
      {error && (
        <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {error}
        </div>
      )}
      <ToolSplitView
        input={<ToolInput value={input} onChange={setInput} label="SQL Input" placeholder="SELECT * FROM users WHERE id = 1;" />}
        output={<ToolOutput value={output} label="Formatted SQL" filename="formatted.sql" />}
      />
    </div>
  );
}
