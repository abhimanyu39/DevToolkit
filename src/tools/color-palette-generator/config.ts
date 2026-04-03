import type { ToolDefinition } from "@/lib/tools/types";
import { colorPaletteContent } from "./content";

export const colorPaletteConfig: ToolDefinition = {
  slug: "color-palette-generator",
  name: "Color Palette Generator",
  shortName: "Color Palette",
  description: "Free online color palette generator. Create harmonious color palettes with HEX, RGB, and HSL values. Multiple harmony types.",
  category: "generators",
  keywords: ["color palette", "color scheme generator", "color harmony", "hex color palette", "color palette generator", "color palette generator online", "color picker", "color combination generator", "color palette maker", "random color palette", "complementary colors", "color wheel", "rgb color palette"],
  icon: "Pipette",
  component: () => import("./component"),
  relatedSlugs: ["css-gradient-generator", "css-beautifier", "qr-code-generator"],
  content: colorPaletteContent,
};
