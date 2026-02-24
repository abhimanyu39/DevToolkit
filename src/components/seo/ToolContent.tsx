import type { ToolContent } from "@/lib/tools/types";

interface ToolContentSectionProps {
  content: ToolContent;
  toolName: string;
}

export function ToolContentSection({ content, toolName }: ToolContentSectionProps) {
  return (
    <section className="space-y-6 prose prose-invert prose-sm max-w-none">
      <div>
        <h2 className="text-xl font-bold text-white">What is {toolName}?</h2>
        <p className="text-gray-400">{content.whatIs}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-white">
          How to Use This {toolName}
        </h2>
        <p className="text-gray-400 whitespace-pre-line">{content.howToUse}</p>
      </div>
      {content.commonErrors && (
        <div>
          <h2 className="text-xl font-bold text-white">Common Errors</h2>
          <p className="text-gray-400 whitespace-pre-line">
            {content.commonErrors}
          </p>
        </div>
      )}
      {content.codeExamples && (
        <div>
          <h2 className="text-xl font-bold text-white">Code Examples</h2>
          <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
            {content.codeExamples}
          </pre>
        </div>
      )}
    </section>
  );
}
