import type { ComponentType } from "react";

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ToolContent {
  whatIs: string;
  howToUse: string;
  commonErrors?: string;
  codeExamples?: string;
  faqs: ToolFAQ[];
}

export type ToolCategory =
  | "formatters"
  | "generators"
  | "converters"
  | "encoders-decoders"
  | "validators"
  | "testers"
  | "web-tools"
  | "text-tools";

export interface ToolDefinition {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  category: ToolCategory;
  keywords: string[];
  icon: string;
  component: () => Promise<{ default: ComponentType }>;
  relatedSlugs: string[];
  content: ToolContent;
  isNew?: boolean;
  isPro?: boolean;
}
