"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { testRegex } from "./processor";

const FLAG_OPTIONS = [
  { flag: "g", label: "Global" },
  { flag: "i", label: "Case Insensitive" },
  { flag: "m", label: "Multiline" },
  { flag: "s", label: "Dotall" },
];

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");

  const result = useMemo(() => {
    if (!pattern || !testString) return null;
    return testRegex(pattern, flags, testString);
  }, [pattern, flags, testString]);

  const toggleFlag = (flag: string) => {
    setFlags((prev) => (prev.includes(flag) ? prev.replace(flag, "") : prev + flag));
  };

  const highlightedText = useMemo(() => {
    if (!result || result.error || result.matches.length === 0) return null;
    try {
      const regex = new RegExp(pattern, flags.includes("g") ? flags : flags + "g");
      const parts: { text: string; isMatch: boolean }[] = [];
      let lastIndex = 0;
      let match;
      while ((match = regex.exec(testString)) !== null) {
        if (match.index > lastIndex) {
          parts.push({ text: testString.slice(lastIndex, match.index), isMatch: false });
        }
        parts.push({ text: match[0], isMatch: true });
        lastIndex = match.index + match[0].length;
        if (!match[0]) break;
      }
      if (lastIndex < testString.length) {
        parts.push({ text: testString.slice(lastIndex), isMatch: false });
      }
      return parts;
    } catch {
      return null;
    }
  }, [pattern, flags, testString, result]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Regular Expression</Label>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 font-mono">/</span>
          <Input
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="Enter regex pattern..."
            className="font-mono"
          />
          <span className="text-gray-500 font-mono">/</span>
          <span className="text-emerald-400 font-mono text-sm">{flags}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {FLAG_OPTIONS.map(({ flag, label }) => (
          <Button
            key={flag}
            variant={flags.includes(flag) ? "default" : "outline"}
            size="sm"
            onClick={() => toggleFlag(flag)}
          >
            {flag} — {label}
          </Button>
        ))}
      </div>

      <div className="space-y-2">
        <Label>Test String</Label>
        <Textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="Enter text to test against..."
          rows={6}
          className="font-mono text-sm"
        />
      </div>

      {result?.error && (
        <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono">
          {result.error}
        </div>
      )}

      {highlightedText && (
        <div className="space-y-2">
          <Label>Highlighted Matches</Label>
          <div className="p-3 rounded-md border border-gray-800 bg-gray-900 font-mono text-sm whitespace-pre-wrap break-all">
            {highlightedText.map((part, i) =>
              part.isMatch ? (
                <mark key={i} className="bg-emerald-500/30 text-emerald-300 rounded px-0.5">
                  {part.text}
                </mark>
              ) : (
                <span key={i} className="text-gray-300">{part.text}</span>
              )
            )}
          </div>
        </div>
      )}

      {result && !result.error && (
        <div className="space-y-2">
          <Label>
            Matches ({result.matches.length})
          </Label>
          {result.matches.length === 0 ? (
            <p className="text-sm text-gray-500">No matches found</p>
          ) : (
            <div className="space-y-1">
              {result.matches.map((m, i) => (
                <div key={i} className="flex items-start gap-3 p-2 rounded border border-gray-800 bg-gray-900/50 text-sm">
                  <span className="text-gray-500 shrink-0">#{i + 1}</span>
                  <code className="text-emerald-400 font-mono">{m.match}</code>
                  <span className="text-gray-500">@{m.index}</span>
                  {m.groups.length > 0 && (
                    <span className="text-gray-400">
                      Groups: {m.groups.map((g, j) => <code key={j} className="text-blue-400 mx-1">{g}</code>)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
