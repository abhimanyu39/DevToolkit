import type { ToolDefinition } from "@/lib/tools/types";
import { uuidGeneratorContent } from "./content";

export const uuidGeneratorConfig: ToolDefinition = {
  slug: "uuid-generator",
  name: "UUID Generator & Validator",
  shortName: "UUID Generator",
  description: "Free online UUID generator. Generate UUID v4 and v7, bulk generate, and validate existing UUIDs. Cryptographically secure.",
  category: "generators",
  keywords: ["uuid generator", "guid generator", "uuid v4", "uuid v7", "random uuid"],
  icon: "Fingerprint",
  component: () => import("./component"),
  relatedSlugs: ["password-generator", "lorem-ipsum-generator", "json-formatter"],
  content: uuidGeneratorContent,
};
