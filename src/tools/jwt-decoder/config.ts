import type { ToolDefinition } from "@/lib/tools/types";
import { jwtDecoderContent } from "./content";

export const jwtDecoderConfig: ToolDefinition = {
  slug: "jwt-decoder",
  name: "JWT Decoder & Inspector",
  shortName: "JWT Decoder",
  description: "Free online JWT decoder. Decode JSON Web Tokens, inspect header and payload, check expiration. No signup required.",
  category: "testers",
  keywords: ["jwt decoder", "jwt debugger", "decode jwt", "json web token decoder"],
  icon: "ShieldCheck",
  component: () => import("./component"),
  relatedSlugs: ["base64-encoder-decoder", "json-validator", "regex-tester"],
  content: jwtDecoderContent,
};
