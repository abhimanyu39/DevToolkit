import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { toolRegistry } from "@/lib/tools/registry";
import { getToolBySlug } from "@/lib/tools/get-tool";
import { generateToolMetadata } from "@/lib/seo/metadata";
import {
  generateToolJsonLd,
  generateFAQJsonLd,
  generateBreadcrumbJsonLd,
} from "@/lib/seo/jsonld";
import { getCategoryById } from "@/lib/tools/categories";
import { ToolPageShell } from "@/components/tools/ToolPageShell";
import { Sidebar } from "@/components/layout/Sidebar";
import { AdSlot } from "@/components/tools/AdSlot";
import { DynamicToolLoader } from "@/components/tools/DynamicToolLoader";

interface PageProps {
  params: Promise<{ "tool-slug": string }>;
}

export async function generateStaticParams() {
  return toolRegistry.map((tool) => ({
    "tool-slug": tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { "tool-slug": slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return generateToolMetadata(tool);
}

export default async function ToolPage({ params }: PageProps) {
  const { "tool-slug": slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const category = getCategoryById(tool.category);
  const toolJsonLd = generateToolJsonLd(tool);
  const faqJsonLd = generateFAQJsonLd(tool);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(
    tool,
    category?.name || ""
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <ToolPageShell tool={tool}>
            <DynamicToolLoader slug={tool.slug} />
          </ToolPageShell>
        </div>
        <aside className="hidden xl:block w-[300px] shrink-0">
          <div className="sticky top-20">
            <AdSlot position="sidebar" />
          </div>
        </aside>
      </div>
    </>
  );
}
