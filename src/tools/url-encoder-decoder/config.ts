import type { ToolDefinition } from "@/lib/tools/types";
import { urlEncoderContent } from "./content";

export const urlEncoderConfig: ToolDefinition = {
  slug: "url-encoder-decoder",
  name: "URL Encoder & Decoder",
  shortName: "URL Encoder",
  description: "Free online URL encoder and decoder. Encode or decode URL strings with component-by-component breakdown.",
  category: "encoders-decoders",
  keywords: ["url encoder", "url decoder", "percent encoding", "encode url online"],
  icon: "Link",
  component: () => import("./component"),
  relatedSlugs: ["base64-encoder-decoder", "json-formatter", "html-minifier"],
  content: urlEncoderContent,
};
