import Link from "next/link";
import type { ToolDefinition } from "@/lib/tools/types";

interface RelatedToolsProps {
  tools: ToolDefinition[];
}

export function RelatedTools({ tools }: RelatedToolsProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-bold text-white">Related Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${tool.slug}`}
            className="block p-4 rounded-lg border border-gray-800 hover:border-emerald-500/50 bg-gray-900/50 transition-colors"
          >
            <h4 className="font-medium text-white text-sm">{tool.shortName}</h4>
            <p className="text-xs text-gray-400 mt-1 line-clamp-2">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
