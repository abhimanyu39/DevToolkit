import type { ToolDefinition } from "@/lib/tools/types";
import { qrCodeContent } from "./content";

export const qrCodeConfig: ToolDefinition = {
  slug: "qr-code-generator",
  name: "QR Code Generator",
  shortName: "QR Code Generator",
  description: "Free online QR code generator. Create QR codes from text or URLs. Download as PNG or SVG with custom colors.",
  category: "generators",
  keywords: ["qr code generator", "qr code maker", "create qr code", "qr code online"],
  icon: "QrCode",
  component: () => import("./component"),
  relatedSlugs: ["password-generator", "uuid-generator", "base64-encoder-decoder"],
  content: qrCodeContent,
};
