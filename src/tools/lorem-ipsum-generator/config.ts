import type { ToolDefinition } from "@/lib/tools/types";
import { loremIpsumContent } from "./content";

export const loremIpsumConfig: ToolDefinition = {
  slug: "lorem-ipsum-generator",
  name: "Lorem Ipsum Generator",
  shortName: "Lorem Ipsum",
  description: "Free online Lorem Ipsum generator. Generate placeholder text by paragraphs, sentences, or words. Configurable count.",
  category: "generators",
  keywords: ["lorem ipsum", "placeholder text", "dummy text", "lorem ipsum generator"],
  icon: "AlignLeft",
  component: () => import("./component"),
  relatedSlugs: ["password-generator", "uuid-generator", "markdown-preview"],
  content: loremIpsumContent,
};
