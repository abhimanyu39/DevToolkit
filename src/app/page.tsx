"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toolRegistry } from "@/lib/tools/registry";
import { categories } from "@/lib/tools/categories";
import type { ToolDefinition } from "@/lib/tools/types";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return toolRegistry.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.shortName.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Free Online <span className="text-emerald-500">Developer Tools</span>
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          JSON formatter, Base64 encoder, regex tester, and 20+ more tools. No
          signup required. 100% client-side & privacy-first.
        </p>
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          <Input
            placeholder="Search tools... (e.g., JSON, Base64, UUID)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 text-base bg-gray-900 border-gray-700"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
        {[
          "20+ Free Tools",
          "No Signup Required",
          "100% Client-Side",
          "Privacy First",
        ].map((stat) => (
          <div
            key={stat}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {stat}
          </div>
        ))}
      </section>

      {/* Search Results */}
      {filteredTools && (
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Search Results ({filteredTools.length})
          </h2>
          {filteredTools.length === 0 ? (
            <p className="text-gray-500">
              No tools found matching your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Tool Grid by Category */}
      {!filteredTools && (
        <div className="space-y-12">
          {categories.map((category) => {
            const categoryTools = toolRegistry.filter(
              (t) => t.category === category.id
            );
            if (categoryTools.length === 0) return null;
            return (
              <section key={category.id} id={category.id}>
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-white">
                    {category.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryTools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ToolCard({ tool }: { tool: ToolDefinition }) {
  return (
    <Link
      href={`/${tool.slug}`}
      className="group block p-4 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-emerald-500/50 hover:bg-gray-900 transition-all"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium text-white group-hover:text-emerald-400 transition-colors">
          {tool.shortName}
        </h3>
        {tool.isNew && <Badge>NEW</Badge>}
      </div>
      <p className="text-sm text-gray-400 line-clamp-2">{tool.description}</p>
    </Link>
  );
}
