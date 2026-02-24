import type { ToolDefinition } from "@/lib/tools/types";
import { base64Content } from "./content";

export const base64Config: ToolDefinition = {
  slug: "base64-encoder-decoder",
  name: "Base64 Encoder & Decoder",
  shortName: "Base64 Encoder",
  description: "Free online Base64 encoder and decoder. Encode text to Base64 or decode Base64 strings instantly. No signup required.",
  category: "encoders-decoders",
  keywords: ["base64 encoder", "base64 decoder", "base64 encode online", "base64 decode online"],
  icon: "Lock",
  component: () => import("./component"),
  relatedSlugs: ["url-encoder-decoder", "jwt-decoder", "json-formatter"],
  content: base64Content,
};
