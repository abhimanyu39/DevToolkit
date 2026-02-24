import type { ToolContent } from "@/lib/tools/types";

export const colorPaletteContent: ToolContent = {
  whatIs: "A color palette generator creates harmonious color combinations based on color theory. It helps designers and developers choose colors that work well together using principles like analogous, complementary, and triadic harmony.",
  howToUse: "1. Pick a base color.\n2. Select a harmony type.\n3. Click 'Generate' to create a palette.\n4. Click any color value to copy it.",
  faqs: [
    { question: "What is color harmony?", answer: "Color harmony refers to color combinations that are visually pleasing. Types include analogous (adjacent on color wheel), complementary (opposite), and triadic (evenly spaced)." },
    { question: "What is the difference between HEX, RGB, and HSL?", answer: "HEX uses hexadecimal notation (#ff0000). RGB specifies red, green, blue values (rgb(255,0,0)). HSL uses hue, saturation, lightness (hsl(0,100%,50%))." },
    { question: "How many colors should a palette have?", answer: "Most design systems use 3-5 primary colors plus neutral shades. A good rule is one primary, one accent, and 2-3 neutrals." },
    { question: "What is an analogous color scheme?", answer: "Analogous colors are adjacent on the color wheel, creating harmonious, comfortable designs with little contrast." },
    { question: "How do I ensure accessibility?", answer: "Ensure text colors have sufficient contrast ratio against their background. WCAG recommends at least 4.5:1 for normal text." },
  ],
};
