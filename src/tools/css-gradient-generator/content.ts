import type { ToolContent } from "@/lib/tools/types";

export const cssGradientContent: ToolContent = {
  whatIs: "CSS gradients create smooth transitions between colors. They are used for backgrounds, buttons, and decorative elements. This visual builder lets you create linear and radial gradients and generates the CSS code.",
  howToUse: "1. Choose gradient type (linear or radial).\n2. Set the angle for linear gradients.\n3. Add, remove, or modify color stops.\n4. Copy the generated CSS code.",
  faqs: [
    { question: "What is the difference between linear and radial gradients?", answer: "Linear gradients transition along a straight line at a specified angle. Radial gradients transition outward from a center point in a circular or elliptical pattern." },
    { question: "Can I use more than two colors?", answer: "Yes, CSS gradients support unlimited color stops. Click 'Add Stop' to add more colors." },
    { question: "Are CSS gradients supported in all browsers?", answer: "CSS gradients are supported in all modern browsers including Chrome, Firefox, Safari, and Edge." },
    { question: "Can I animate CSS gradients?", answer: "CSS gradients cannot be directly animated with transitions, but you can animate using background-position or CSS custom properties." },
    { question: "What is a color stop position?", answer: "A color stop position (0-100%) defines where a color appears in the gradient. 0% is the start, 100% is the end." },
  ],
};
