import type { Metadata } from "next";
import type { ToolDefinition } from "../tools/types";
import { getCategoryById } from "../tools/categories";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dev-toolkit-five.vercel.app";
const SITE_NAME = "DevToolkit";

export function generateToolMetadata(tool: ToolDefinition): Metadata {
  const category = getCategoryById(tool.category);
  return {
    title: `${tool.name} Online — Free | ${SITE_NAME}`,
    description: tool.description,
    keywords: tool.keywords,
    openGraph: {
      title: `${tool.name} Online — Free | ${SITE_NAME}`,
      description: tool.description,
      url: `${SITE_URL}/${tool.slug}`,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} Online — Free`,
      description: tool.description,
    },
    alternates: {
      canonical: `${SITE_URL}/${tool.slug}`,
    },
    other: {
      "article:section": category?.name || "",
    },
  };
}

export function generateSiteMetadata(): Metadata {
  return {
    title: {
      default: `${SITE_NAME} — Free Online Developer Tools`,
      template: `%s | ${SITE_NAME}`,
    },
    description:
      "Free online developer tools: JSON formatter, Base64 encoder, UUID generator, regex tester, and 20+ more. No signup required. 100% client-side & privacy-first.",
    keywords: [
      "developer tools",
      "online tools",
      "json formatter",
      "base64 encoder",
      "uuid generator",
      "regex tester",
      "free dev tools",
    ],
    openGraph: {
      title: `${SITE_NAME} — Free Online Developer Tools`,
      description:
        "Free online developer tools. No signup required. 100% client-side & privacy-first.",
      url: SITE_URL,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    metadataBase: new URL(SITE_URL),
  };
}
