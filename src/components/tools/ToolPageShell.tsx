import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AdSlot } from "./AdSlot";
import { FAQSection } from "@/components/seo/FAQSection";
import { RelatedTools } from "@/components/seo/RelatedTools";
import { ToolContentSection } from "@/components/seo/ToolContent";
import type { ToolDefinition } from "@/lib/tools/types";
import { getCategoryById } from "@/lib/tools/categories";
import { getRelatedTools } from "@/lib/tools/get-tool";

interface ToolPageShellProps {
  tool: ToolDefinition;
  children: React.ReactNode;
}

export function ToolPageShell({ tool, children }: ToolPageShellProps) {
  const category = getCategoryById(tool.category);
  const relatedTools = getRelatedTools(tool.slug);

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-gray-500">{category?.name}</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-white">{tool.shortName}</span>
      </nav>

      {/* Title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {tool.name}
        </h1>
        <p className="text-gray-400">{tool.description}</p>
      </div>

      {/* Top Ad */}
      <AdSlot position="top-banner" />

      {/* Tool Component */}
      <div>{children}</div>

      {/* Between Ad */}
      <AdSlot position="between-sections" />

      {/* SEO Content */}
      <ToolContentSection content={tool.content} toolName={tool.shortName} />

      {/* FAQ */}
      <FAQSection faqs={tool.content.faqs} />

      {/* In-Content Ad */}
      <AdSlot position="in-content" />

      {/* Related Tools */}
      {relatedTools.length > 0 && <RelatedTools tools={relatedTools} />}
    </div>
  );
}
