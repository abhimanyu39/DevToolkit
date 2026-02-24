"use client";

import { useState } from "react";
import { ToolOutput } from "@/components/tools/ToolOutput";
import { ToolSettings } from "@/components/tools/ToolSettings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateWords, generateSentences, generateParagraphs } from "./processor";

type Mode = "paragraphs" | "sentences" | "words";

export default function LoremIpsumGenerator() {
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<Mode>("paragraphs");
  const [count, setCount] = useState(3);

  const handleGenerate = () => {
    switch (mode) {
      case "paragraphs": setOutput(generateParagraphs(count)); break;
      case "sentences": setOutput(generateSentences(count)); break;
      case "words": setOutput(generateWords(count)); break;
    }
  };

  return (
    <div className="space-y-4">
      <ToolSettings>
        <div className="flex items-center gap-2">
          {(["paragraphs", "sentences", "words"] as const).map((m) => (
            <Button key={m} variant={mode === m ? "default" : "outline"} size="sm" onClick={() => setMode(m)}>
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Label>Count:</Label>
          <Input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-20" />
        </div>
        <Button onClick={handleGenerate} size="sm">Generate</Button>
      </ToolSettings>
      <ToolOutput value={output} label="Generated Text" rows={16} filename="lorem-ipsum.txt" />
    </div>
  );
}
