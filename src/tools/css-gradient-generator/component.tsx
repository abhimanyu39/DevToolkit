"use client";

import { useState } from "react";
import { Copy, Check, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolSettings } from "@/components/tools/ToolSettings";
import { copyToClipboard } from "@/lib/utils/clipboard";
import { generateGradientCss, type GradientStop } from "./processor";

export default function CssGradientGenerator() {
  const [type, setType] = useState<"linear" | "radial">("linear");
  const [angle, setAngle] = useState(90);
  const [stops, setStops] = useState<GradientStop[]>([
    { color: "#10b981", position: 0 },
    { color: "#3b82f6", position: 100 },
  ]);
  const [copied, setCopied] = useState(false);

  const css = generateGradientCss(type, angle, stops);
  const previewStyle = type === "linear"
    ? { background: `linear-gradient(${angle}deg, ${stops.map((s) => `${s.color} ${s.position}%`).join(", ")})` }
    : { background: `radial-gradient(circle, ${stops.map((s) => `${s.color} ${s.position}%`).join(", ")})` };

  const handleCopy = async () => {
    const ok = await copyToClipboard(css);
    if (ok) { setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  const updateStop = (index: number, updates: Partial<GradientStop>) => {
    setStops(stops.map((s, i) => (i === index ? { ...s, ...updates } : s)));
  };

  const addStop = () => {
    setStops([...stops, { color: "#8b5cf6", position: 50 }]);
  };

  const removeStop = (index: number) => {
    if (stops.length > 2) setStops(stops.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="h-48 rounded-lg border border-gray-800" style={previewStyle} />
      <ToolSettings>
        <Button variant={type === "linear" ? "default" : "outline"} size="sm" onClick={() => setType("linear")}>Linear</Button>
        <Button variant={type === "radial" ? "default" : "outline"} size="sm" onClick={() => setType("radial")}>Radial</Button>
        {type === "linear" && (
          <div className="flex items-center gap-2">
            <Label>Angle:</Label>
            <Input type="number" min={0} max={360} value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="w-20" />
            <span className="text-sm text-gray-400">deg</span>
          </div>
        )}
      </ToolSettings>
      <div className="space-y-2">
        {stops.map((stop, i) => (
          <div key={i} className="flex items-center gap-3">
            <Input type="color" value={stop.color} onChange={(e) => updateStop(i, { color: e.target.value })} className="w-10 h-8 p-0.5" />
            <Input value={stop.color} onChange={(e) => updateStop(i, { color: e.target.value })} className="w-28 font-mono text-sm" />
            <Input type="number" min={0} max={100} value={stop.position} onChange={(e) => updateStop(i, { position: Number(e.target.value) })} className="w-20" />
            <span className="text-sm text-gray-400">%</span>
            {stops.length > 2 && (
              <Button variant="ghost" size="icon" onClick={() => removeStop(i)} className="h-8 w-8"><Trash2 className="h-3 w-3" /></Button>
            )}
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={addStop}><Plus className="h-3 w-3" /> Add Stop</Button>
      </div>
      <div className="flex items-center gap-2 p-3 rounded-md border border-gray-800 bg-gray-900 font-mono text-sm text-gray-300">
        <code className="flex-1">{css}</code>
        <Button variant="ghost" size="sm" onClick={handleCopy}>
          {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
}
