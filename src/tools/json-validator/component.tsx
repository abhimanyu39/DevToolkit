"use client";

import { useState } from "react";
import { ToolInput } from "@/components/tools/ToolInput";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { validateJson, type ValidationResult } from "./processor";

export default function JsonValidator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ValidationResult | null>(null);

  const handleValidate = () => {
    if (!input.trim()) return;
    setResult(validateJson(input));
  };

  return (
    <div className="space-y-4">
      <ToolInput value={input} onChange={setInput} label="JSON Input" placeholder='{"key": "value"}' />
      <Button onClick={handleValidate}>Validate JSON</Button>
      {result && (
        <div className="space-y-3">
          <div className={`flex items-center gap-2 p-3 rounded-md border ${result.valid ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"}`}>
            {result.valid ? (
              <><CheckCircle className="h-5 w-5 text-emerald-400" /><span className="text-emerald-400 font-medium">Valid JSON</span></>
            ) : (
              <><XCircle className="h-5 w-5 text-red-400" /><span className="text-red-400 font-medium">Invalid JSON</span></>
            )}
          </div>
          {result.valid && (
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-md border border-gray-800 bg-gray-900 text-center">
                <div className="text-lg font-bold text-white">{result.keyCount}</div>
                <div className="text-xs text-gray-500">Total Keys</div>
              </div>
              <div className="p-3 rounded-md border border-gray-800 bg-gray-900 text-center">
                <div className="text-lg font-bold text-white">{result.depth}</div>
                <div className="text-xs text-gray-500">Max Depth</div>
              </div>
              <div className="p-3 rounded-md border border-gray-800 bg-gray-900 text-center">
                <div className="text-lg font-bold text-white">{result.parsedSize} B</div>
                <div className="text-xs text-gray-500">Size</div>
              </div>
            </div>
          )}
          {result.errors.map((err, i) => (
            <div key={i} className="p-3 rounded-md border border-red-500/30 bg-red-500/10 text-sm">
              <p className="text-red-400 font-mono">{err.message}</p>
              {err.line && <p className="text-red-300/70 text-xs mt-1">Line {err.line}, Column {err.column}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
