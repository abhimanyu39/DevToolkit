"use client";

import { Clipboard, X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ToolInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  rows?: number;
}

export function ToolInput({
  value,
  onChange,
  label = "Input",
  placeholder = "Paste your content here...",
  rows = 12,
}: ToolInputProps) {
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      onChange(text);
    } catch {
      // clipboard access denied
    }
  };

  const handleFile = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt,.json,.xml,.yaml,.yml,.csv,.html,.css,.sql,.md";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const text = await file.text();
        onChange(text);
      }
    };
    input.click();
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label>{label}</Label>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" onClick={handlePaste}>
            <Clipboard className="h-3 w-3" />
            <span className="hidden sm:inline">Paste</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={handleFile}>
            <Upload className="h-3 w-3" />
            <span className="hidden sm:inline">Upload</span>
          </Button>
          {value && (
            <Button variant="ghost" size="sm" onClick={() => onChange("")}>
              <X className="h-3 w-3" />
              <span className="hidden sm:inline">Clear</span>
            </Button>
          )}
        </div>
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="font-mono text-sm"
      />
    </div>
  );
}
