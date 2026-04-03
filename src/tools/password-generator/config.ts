import type { ToolDefinition } from "@/lib/tools/types";
import { passwordGeneratorContent } from "./content";

export const passwordGeneratorConfig: ToolDefinition = {
  slug: "password-generator",
  name: "Password Generator",
  shortName: "Password Generator",
  description: "Free online password generator. Create strong, random passwords with configurable length and character sets. Strength meter included.",
  category: "generators",
  keywords: ["password generator", "random password", "strong password", "secure password generator", "random password generator", "strong password generator", "password generator online", "generate password", "passphrase generator", "password creator", "password generator free", "password maker"],
  icon: "KeyRound",
  component: () => import("./component"),
  relatedSlugs: ["uuid-generator", "lorem-ipsum-generator", "base64-encoder-decoder"],
  content: passwordGeneratorContent,
};
