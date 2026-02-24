"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolSettings } from "@/components/tools/ToolSettings";
import { Textarea } from "@/components/ui/textarea";
import { generateQrCode, generateQrCodeSvg } from "./processor";

export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [color, setColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!text.trim()) return;
    try {
      const dataUrl = await generateQrCode(text, { color, bgColor, width: 400 });
      setQrDataUrl(dataUrl);
      setError("");
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const handleDownloadPng = () => {
    if (!qrDataUrl) return;
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = "qrcode.png";
    a.click();
  };

  const handleDownloadSvg = async () => {
    if (!text.trim()) return;
    const svg = await generateQrCodeSvg(text, { color, bgColor });
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Text or URL</Label>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL to encode..."
          rows={3}
          className="font-mono text-sm"
        />
      </div>
      <ToolSettings>
        <div className="flex items-center gap-2">
          <Label>Color:</Label>
          <Input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-8 p-0.5" />
        </div>
        <div className="flex items-center gap-2">
          <Label>Background:</Label>
          <Input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-10 h-8 p-0.5" />
        </div>
        <Button onClick={handleGenerate} size="sm">Generate QR Code</Button>
      </ToolSettings>
      {error && <div className="p-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>}
      {qrDataUrl && (
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-800 bg-gray-900">
          <img src={qrDataUrl} alt="Generated QR Code" className="max-w-[300px]" />
          <div className="flex gap-2">
            <Button onClick={handleDownloadPng} variant="outline" size="sm"><Download className="h-3 w-3" /> PNG</Button>
            <Button onClick={handleDownloadSvg} variant="outline" size="sm"><Download className="h-3 w-3" /> SVG</Button>
          </div>
        </div>
      )}
    </div>
  );
}
