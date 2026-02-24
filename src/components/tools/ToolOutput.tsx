"use client";

import { useState } from "react";
import { Copy, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { copyToClipboard } from "@/lib/utils/clipboard";

interface ToolOutputProps {
  value: string;
  label?: string;
  rows?: number;
  filename?: string;
}

export function ToolOutput({
  value,
  label = "Output",
  rows = 12,
  filename = "output.txt",
}: ToolOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(value);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label>{label}</Label>
        <div className="flex items-center gap-1">
          {value && (
            <>
              <Button variant="ghost" size="sm" onClick={handleCopy}>
                {copied ? (
                  <Check className="h-3 w-3 text-emerald-400" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
                <span className="hidden sm:inline">
                  {copied ? "Copied!" : "Copy"}
                </span>
              </Button>
              <Button variant="ghost" size="sm" onClick={handleDownload}>
                <Download className="h-3 w-3" />
                <span className="hidden sm:inline">Download</span>
              </Button>
            </>
          )}
        </div>
      </div>
      <Textarea
        value={value}
        readOnly
        rows={rows}
        className="font-mono text-sm"
        placeholder="Output will appear here..."
      />
    </div>
  );
}
