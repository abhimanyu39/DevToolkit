"use client";

import { useState } from "react";
import { Copy, Check, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolSettings } from "@/components/tools/ToolSettings";
import { copyToClipboard } from "@/lib/utils/clipboard";
import { generateAnalogous, generateComplementary, generateTriadic, generateShades, generateRandomPalette, type ColorInfo } from "./processor";

type HarmonyType = "analogous" | "complementary" | "triadic" | "shades" | "random";

export default function ColorPaletteGenerator() {
  const [palette, setPalette] = useState<ColorInfo[]>([]);
  const [baseColor, setBaseColor] = useState("#10b981");
  const [harmony, setHarmony] = useState<HarmonyType>("analogous");
  const [copied, setCopied] = useState<string | null>(null);

  const handleGenerate = () => {
    // Extract hue from hex for harmony calculations
    const r = parseInt(baseColor.slice(1, 3), 16) / 255;
    const g = parseInt(baseColor.slice(3, 5), 16) / 255;
    const b = parseInt(baseColor.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0;
    if (max !== min) {
      const d = max - min;
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    const hue = Math.round(h * 360);

    switch (harmony) {
      case "analogous": setPalette(generateAnalogous(hue)); break;
      case "complementary": setPalette(generateComplementary(hue)); break;
      case "triadic": setPalette(generateTriadic(hue)); break;
      case "shades": setPalette(generateShades(baseColor)); break;
      case "random": setPalette(generateRandomPalette()); break;
    }
  };

  const handleCopy = async (value: string) => {
    const ok = await copyToClipboard(value);
    if (ok) { setCopied(value); setTimeout(() => setCopied(null), 2000); }
  };

  return (
    <div className="space-y-4">
      <ToolSettings>
        <div className="flex items-center gap-2">
          <Label>Base Color:</Label>
          <Input type="color" value={baseColor} onChange={(e) => setBaseColor(e.target.value)} className="w-10 h-8 p-0.5" />
          <Input value={baseColor} onChange={(e) => setBaseColor(e.target.value)} className="w-28 font-mono text-sm" />
        </div>
        {(["analogous", "complementary", "triadic", "shades", "random"] as const).map((h) => (
          <Button key={h} variant={harmony === h ? "default" : "outline"} size="sm" onClick={() => setHarmony(h)}>
            {h.charAt(0).toUpperCase() + h.slice(1)}
          </Button>
        ))}
        <Button onClick={handleGenerate} size="sm"><RefreshCw className="h-3 w-3" /> Generate</Button>
      </ToolSettings>
      {palette.length > 0 && (
        <>
          <div className="flex rounded-lg overflow-hidden h-32 border border-gray-800">
            {palette.map((c, i) => (
              <div key={i} className="flex-1" style={{ backgroundColor: c.hex }} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {palette.map((c, i) => (
              <div key={i} className="p-3 rounded-lg border border-gray-800 bg-gray-900 space-y-2">
                <div className="h-12 rounded" style={{ backgroundColor: c.hex }} />
                {[c.hex, c.rgb, c.hsl].map((val) => (
                  <button key={val} onClick={() => handleCopy(val)} className="flex items-center gap-2 w-full text-left text-xs font-mono text-gray-300 hover:text-white cursor-pointer">
                    {copied === val ? <Check className="h-3 w-3 text-emerald-400 shrink-0" /> : <Copy className="h-3 w-3 shrink-0" />}
                    {val}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
      {palette.length === 0 && <div className="text-center text-gray-500 py-8">Click Generate to create a color palette</div>}
    </div>
  );
}
