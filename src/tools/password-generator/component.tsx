"use client";

import { useState, useCallback } from "react";
import { Copy, Check, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolSettings } from "@/components/tools/ToolSettings";
import { copyToClipboard } from "@/lib/utils/clipboard";
import { generatePassword, getPasswordStrength, type PasswordOptions } from "./processor";

export default function PasswordGenerator() {
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [passwords, setPasswords] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  const [copied, setCopied] = useState<number | null>(null);

  const handleGenerate = useCallback(() => {
    const result = Array.from({ length: count }, () => generatePassword(options));
    setPasswords(result);
  }, [options, count]);

  const handleCopy = async (pw: string, idx: number) => {
    const ok = await copyToClipboard(pw);
    if (ok) { setCopied(idx); setTimeout(() => setCopied(null), 2000); }
  };

  return (
    <div className="space-y-4">
      <ToolSettings>
        <div className="flex items-center gap-2">
          <Label>Length:</Label>
          <Input
            type="number"
            min={4}
            max={128}
            value={options.length}
            onChange={(e) => setOptions({ ...options, length: Number(e.target.value) })}
            className="w-20"
          />
        </div>
        <div className="flex items-center gap-2">
          <Label>Count:</Label>
          <Input
            type="number"
            min={1}
            max={50}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-20"
          />
        </div>
        {(["uppercase", "lowercase", "numbers", "symbols"] as const).map((key) => (
          <label key={key} className="flex items-center gap-1.5 text-sm text-gray-300 cursor-pointer">
            <input
              type="checkbox"
              checked={options[key]}
              onChange={(e) => setOptions({ ...options, [key]: e.target.checked })}
              className="rounded border-gray-600 accent-emerald-500"
            />
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        ))}
        <Button onClick={handleGenerate} size="sm">
          <RefreshCw className="h-3 w-3" /> Generate
        </Button>
      </ToolSettings>
      <div className="space-y-2">
        {passwords.map((pw, i) => {
          const strength = getPasswordStrength(pw);
          return (
            <div key={i} className="flex items-center gap-3 p-3 rounded-md border border-gray-800 bg-gray-900">
              <code className="flex-1 text-sm text-gray-100 font-mono break-all">{pw}</code>
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5">
                  <div className={`h-2 w-2 rounded-full ${strength.color}`} />
                  <span className="text-xs text-gray-400">{strength.label}</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleCopy(pw, i)} className="h-8 w-8">
                  {copied === i ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                </Button>
              </div>
            </div>
          );
        })}
        {passwords.length === 0 && (
          <div className="text-center text-gray-500 py-8">Click Generate to create passwords</div>
        )}
      </div>
    </div>
  );
}
