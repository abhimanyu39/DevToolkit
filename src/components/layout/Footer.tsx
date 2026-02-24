import Link from "next/link";
import { Code2 } from "lucide-react";
import { toolRegistry } from "@/lib/tools/registry";
import { categories } from "@/lib/tools/categories";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Code2 className="h-5 w-5 text-emerald-500" />
              <span className="text-lg font-bold text-white">DevToolkit</span>
            </Link>
            <p className="text-sm text-gray-400">
              Free online developer tools. No signup required. 100% client-side
              and privacy-first.
            </p>
          </div>
          {categories.slice(0, 3).map((category) => {
            const categoryTools = toolRegistry.filter(
              (t) => t.category === category.id
            );
            if (categoryTools.length === 0) return null;
            return (
              <div key={category.id}>
                <h3 className="font-semibold text-white mb-3">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {categoryTools.map((tool) => (
                    <li key={tool.slug}>
                      <Link
                        href={`/${tool.slug}`}
                        className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                      >
                        {tool.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap gap-3 mb-6">
            {toolRegistry.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="text-xs text-gray-500 hover:text-emerald-400 transition-colors"
              >
                {tool.shortName}
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} DevToolkit. All tools run
            client-side. Your data never leaves your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}
