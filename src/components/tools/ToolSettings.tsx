"use client";

import type { ReactNode } from "react";

interface ToolSettingsProps {
  children: ReactNode;
}

export function ToolSettings({ children }: ToolSettingsProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 p-3 rounded-lg border border-gray-800 bg-gray-900/50 mb-4">
      {children}
    </div>
  );
}
