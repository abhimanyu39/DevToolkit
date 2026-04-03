import type { ToolDefinition } from "@/lib/tools/types";
import { cssGradientContent } from "./content";

export const cssGradientConfig: ToolDefinition = {
  slug: "css-gradient-generator",
  name: "CSS Gradient Generator",
  shortName: "CSS Gradient",
  description: "Free online CSS gradient generator. Create beautiful linear and radial gradients visually. Copy CSS code instantly.",
  category: "generators",
  keywords: ["css gradient", "gradient generator", "css gradient maker", "linear gradient", "radial gradient", "css gradient generator", "gradient generator online", "css gradient background", "gradient css code", "background gradient generator", "color gradient generator", "css linear gradient generator", "conic gradient", "gradient maker online free"],
  icon: "Palette",
  component: () => import("./component"),
  relatedSlugs: ["color-palette-generator", "css-beautifier", "html-minifier"],
  content: cssGradientContent,
};
