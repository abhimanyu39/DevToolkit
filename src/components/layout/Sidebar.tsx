"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/tools/categories";
import { toolRegistry } from "@/lib/tools/registry";
import { cn } from "@/lib/utils/cn";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <nav className="sticky top-20 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto pr-4 pb-8">
        {categories.map((category) => {
          const tools = toolRegistry.filter((t) => t.category === category.id);
          if (tools.length === 0) return null;
          return (
            <div key={category.id}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {category.name}
              </h3>
              <ul className="space-y-1">
                {tools.map((tool) => (
                  <li key={tool.slug}>
                    <Link
                      href={`/${tool.slug}`}
                      className={cn(
                        "block text-sm px-3 py-1.5 rounded-md transition-colors",
                        pathname === `/${tool.slug}`
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      )}
                    >
                      {tool.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
