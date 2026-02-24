import type { ToolCategory } from "./types";

export interface CategoryDefinition {
  id: ToolCategory;
  name: string;
  description: string;
  icon: string;
}

export const categories: CategoryDefinition[] = [
  {
    id: "formatters",
    name: "Formatters & Beautifiers",
    description: "Format, beautify, and minify your code",
    icon: "Code",
  },
  {
    id: "converters",
    name: "Converters",
    description: "Convert between different data formats",
    icon: "ArrowLeftRight",
  },
  {
    id: "encoders-decoders",
    name: "Encoders & Decoders",
    description: "Encode and decode data in various formats",
    icon: "Lock",
  },
  {
    id: "generators",
    name: "Generators",
    description: "Generate passwords, UUIDs, lorem ipsum, and more",
    icon: "Wand2",
  },
  {
    id: "validators",
    name: "Validators",
    description: "Validate data formats and schemas",
    icon: "CheckCircle",
  },
  {
    id: "testers",
    name: "Testers & Debuggers",
    description: "Test regex patterns, decode tokens, and debug",
    icon: "Bug",
  },
  {
    id: "web-tools",
    name: "Web Tools",
    description: "Tools for web development",
    icon: "Globe",
  },
  {
    id: "text-tools",
    name: "Text Tools",
    description: "Text manipulation utilities",
    icon: "Type",
  },
];

export function getCategoryById(id: ToolCategory): CategoryDefinition | undefined {
  return categories.find((c) => c.id === id);
}
