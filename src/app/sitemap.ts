import type { MetadataRoute } from "next";
import { toolRegistry } from "@/lib/tools/registry";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dev-toolkit-five.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = toolRegistry.map((tool) => ({
    url: `${SITE_URL}/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...toolPages,
  ];
}
