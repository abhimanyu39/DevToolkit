import { toolRegistry } from "./registry";
import type { ToolDefinition, ToolCategory } from "./types";

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return toolRegistry.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolDefinition[] {
  return toolRegistry.filter((t) => t.category === category);
}

export function getAllSlugs(): string[] {
  return toolRegistry.map((t) => t.slug);
}

export function getRelatedTools(slug: string): ToolDefinition[] {
  const tool = getToolBySlug(slug);
  if (!tool) return [];
  return tool.relatedSlugs
    .map((s) => getToolBySlug(s))
    .filter((t): t is ToolDefinition => t !== undefined);
}

export function searchTools(query: string): ToolDefinition[] {
  const q = query.toLowerCase();
  return toolRegistry.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.shortName.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q))
  );
}
