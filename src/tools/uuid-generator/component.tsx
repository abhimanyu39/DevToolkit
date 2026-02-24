"use client";

import { useState, useCallback } from "react";
import { Copy, Check, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolSettings } from "@/components/tools/ToolSettings";
import { copyToClipboard } from "@/lib/utils/clipboard";
import { generateUuidV4, generateUuidV7, validateUuid, getUuidVersion } from "./processor";

export default function UuidGenerator() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [version, setVersion] = useState<"v4" | "v7">("v4");
  const [count, setCount] = useState(1);
  const [validateInput, setValidateInput] = useState("");
  const [validateResult, setValidateResult] = useState<string | null>(null);
  const [copied, setCopied] = useState<number | null>(null);

  const handleGenerate = useCallback(() => {
    const gen = version === "v4" ? generateUuidV4 : generateUuidV7;
    setUuids(Array.from({ length: count }, () => gen()));
  }, [version, count]);

  const handleValidate = () => {
    if (!validateInput.trim()) return;
    const valid = validateUuid(validateInput);
    const ver = getUuidVersion(validateInput);
    setValidateResult(valid ? `Valid UUID (${ver})` : "Invalid UUID");
  };

  const handleCopy = async (uuid: string, idx: number) => {
    const ok = await copyToClipboard(uuid);
    if (ok) { setCopied(idx); setTimeout(() => setCopied(null), 2000); }
  };

  const handleCopyAll = async () => {
    await copyToClipboard(uuids.join("\n"));
    setCopied(-1);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-4">
      <ToolSettings>
        <div className="flex items-center gap-2">
          <Button variant={version === "v4" ? "default" : "outline"} size="sm" onClick={() => setVersion("v4")}>UUID v4</Button>
          <Button variant={version === "v7" ? "default" : "outline"} size="sm" onClick={() => setVersion("v7")}>UUID v7</Button>
        </div>
        <div className="flex items-center gap-2">
          <Label>Count:</Label>
          <Input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-20" />
        </div>
        <Button onClick={handleGenerate} size="sm"><RefreshCw className="h-3 w-3" /> Generate</Button>
        {uuids.length > 1 && (
          <Button onClick={handleCopyAll} variant="outline" size="sm">
            {copied === -1 ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
            Copy All
          </Button>
        )}
      </ToolSettings>
      <div className="space-y-2">
        {uuids.map((uuid, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-md border border-gray-800 bg-gray-900">
            <code className="flex-1 text-sm text-gray-100 font-mono">{uuid}</code>
            <Button variant="ghost" size="icon" onClick={() => handleCopy(uuid, i)} className="h-8 w-8">
              {copied === i ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
        ))}
        {uuids.length === 0 && <div className="text-center text-gray-500 py-8">Click Generate to create UUIDs</div>}
      </div>

      <div className="border-t border-gray-800 pt-4 space-y-2">
        <Label>Validate UUID</Label>
        <div className="flex gap-2">
          <Input value={validateInput} onChange={(e) => setValidateInput(e.target.value)} placeholder="Paste UUID to validate..." className="font-mono" />
          <Button onClick={handleValidate} variant="outline" size="sm">Validate</Button>
        </div>
        {validateResult && (
          <p className={`text-sm ${validateResult.startsWith("Valid") ? "text-emerald-400" : "text-red-400"}`}>{validateResult}</p>
        )}
      </div>
    </div>
  );
}
