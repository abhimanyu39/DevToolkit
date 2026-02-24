"use client";

import { Suspense, lazy, useMemo } from "react";
import { getToolBySlug } from "@/lib/tools/get-tool";

interface DynamicToolLoaderProps {
  slug: string;
}

export function DynamicToolLoader({ slug }: DynamicToolLoaderProps) {
  const Component = useMemo(() => {
    const tool = getToolBySlug(slug);
    if (!tool) return () => <div>Tool not found</div>;
    return lazy(tool.component);
  }, [slug]);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
        </div>
      }
    >
      <Component />
    </Suspense>
  );
}
