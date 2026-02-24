import type { ReactNode } from "react";

interface ToolSplitViewProps {
  input: ReactNode;
  output: ReactNode;
}

export function ToolSplitView({ input, output }: ToolSplitViewProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>{input}</div>
      <div>{output}</div>
    </div>
  );
}
