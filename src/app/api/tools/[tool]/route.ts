import { NextResponse } from "next/server";
import { getToolBySlug } from "@/lib/tools/get-tool";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ tool: string }> }
) {
  const { tool: slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return NextResponse.json({ error: "Tool not found" }, { status: 404 });
  }

  return NextResponse.json({
    slug: tool.slug,
    name: tool.name,
    description: tool.description,
    category: tool.category,
    keywords: tool.keywords,
    message:
      "API endpoints coming soon. This tool runs client-side for privacy.",
  });
}
