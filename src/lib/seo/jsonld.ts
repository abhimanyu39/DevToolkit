import type { ToolDefinition } from "../tools/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dev-toolkit-five.vercel.app";

export function generateToolJsonLd(tool: ToolDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    url: `${SITE_URL}/${tool.slug}`,
    description: tool.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    browserRequirements: "Requires JavaScript",
  };
}

export function generateFAQJsonLd(tool: ToolDefinition) {
  if (!tool.content.faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(
  tool: ToolDefinition,
  categoryName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `${SITE_URL}/#${tool.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.shortName,
        item: `${SITE_URL}/${tool.slug}`,
      },
    ],
  };
}
