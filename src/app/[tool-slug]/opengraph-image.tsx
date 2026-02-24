import { ImageResponse } from "next/og";
import { getToolBySlug } from "@/lib/tools/get-tool";
import { getCategoryById } from "@/lib/tools/categories";

export const alt = "DevToolkit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ "tool-slug": string }>;
}) {
  const { "tool-slug": slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#030712",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f3f4f6",
            fontSize: 48,
          }}
        >
          DevToolkit
        </div>
      ),
      { ...size }
    );
  }

  const category = getCategoryById(tool.category);

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #030712 0%, #111827 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              background: "#10b981",
              borderRadius: "8px",
              width: "40px",
              height: "40px",
            }}
          />
          <span style={{ color: "#9ca3af", fontSize: "24px" }}>
            DevToolkit
          </span>
        </div>
        <h1
          style={{
            color: "#f3f4f6",
            fontSize: "56px",
            fontWeight: "bold",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          {tool.name}
        </h1>
        <p
          style={{
            color: "#9ca3af",
            fontSize: "24px",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          {tool.description}
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "32px",
          }}
        >
          <span
            style={{
              color: "#10b981",
              fontSize: "18px",
              borderRadius: "20px",
              border: "1px solid #10b981",
              padding: "8px 16px",
            }}
          >
            {category?.name}
          </span>
          <span
            style={{
              color: "#6b7280",
              fontSize: "18px",
              borderRadius: "20px",
              border: "1px solid #374151",
              padding: "8px 16px",
            }}
          >
            Free & Open Source
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
