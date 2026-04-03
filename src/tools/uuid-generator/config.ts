import type { ToolDefinition } from "@/lib/tools/types";
import { uuidGeneratorContent } from "./content";

export const uuidGeneratorConfig: ToolDefinition = {
  slug: "uuid-generator",
  name: "UUID Generator & Validator",
  shortName: "UUID Generator",
  description: "Free online UUID generator. Generate UUID v4 and v7, bulk generate, and validate existing UUIDs. Cryptographically secure.",
  category: "generators",
  keywords: ["uuid generator", "guid generator", "uuid v4", "uuid v7", "random uuid", "uuid generator online", "generate uuid", "uuid v4 generator", "unique id generator", "bulk uuid generator", "random guid generator", "uuid creator", "uuid generator free"],
  icon: "Fingerprint",
  component: () => import("./component"),
  relatedSlugs: ["password-generator", "lorem-ipsum-generator", "json-formatter"],
  content: uuidGeneratorContent,
};
