"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { describeCron, getNextRuns, parseCron } from "./processor";

const PRESETS = [
  { label: "Every minute", value: "* * * * *" },
  { label: "Every hour", value: "0 * * * *" },
  { label: "Every day at midnight", value: "0 0 * * *" },
  { label: "Every Monday at 9am", value: "0 9 * * 1" },
  { label: "Every 15 minutes", value: "*/15 * * * *" },
  { label: "First of month", value: "0 0 1 * *" },
];

export default function CronExpressionParser() {
  const [expression, setExpression] = useState("*/15 * * * *");
  const [description, setDescription] = useState("");
  const [nextRuns, setNextRuns] = useState<Date[]>([]);
  const [error, setError] = useState("");
  const [parts, setParts] = useState<{ minute: string; hour: string; dayOfMonth: string; month: string; dayOfWeek: string } | null>(null);

  const handleParse = () => {
    if (!expression.trim()) return;
    try {
      const p = parseCron(expression);
      setParts(p);
      setDescription(describeCron(expression));
      setNextRuns(getNextRuns(expression, 5));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setDescription("");
      setNextRuns([]);
      setParts(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Cron Expression</Label>
        <div className="flex gap-2">
          <Input
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="* * * * *"
            className="font-mono text-lg"
          />
          <Button onClick={handleParse}>Parse</Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((preset) => (
          <Button
            key={preset.value}
            variant="outline"
            size="sm"
            onClick={() => { setExpression(preset.value); }}
          >
            {preset.label}
          </Button>
        ))}
      </div>

      {error && (
        <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>
      )}

      {parts && (
        <div className="grid grid-cols-5 gap-2">
          {[
            { label: "Minute", value: parts.minute },
            { label: "Hour", value: parts.hour },
            { label: "Day (Month)", value: parts.dayOfMonth },
            { label: "Month", value: parts.month },
            { label: "Day (Week)", value: parts.dayOfWeek },
          ].map((p) => (
            <div key={p.label} className="p-3 rounded-md border border-gray-800 bg-gray-900 text-center">
              <div className="text-lg font-mono font-bold text-emerald-400">{p.value}</div>
              <div className="text-xs text-gray-500">{p.label}</div>
            </div>
          ))}
        </div>
      )}

      {description && (
        <div className="p-4 rounded-md border border-gray-800 bg-gray-900">
          <h3 className="text-sm font-medium text-gray-400 mb-1">Human-Readable</h3>
          <p className="text-white font-medium">{description}</p>
        </div>
      )}

      {nextRuns.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-400">Next 5 Run Times</h3>
          {nextRuns.map((date, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded border border-gray-800 bg-gray-900/50 text-sm">
              <span className="text-gray-500">#{i + 1}</span>
              <span className="text-white font-mono">{date.toLocaleString()}</span>
              <span className="text-gray-500 text-xs">{date.toISOString()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
