"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ToolFAQ } from "@/lib/tools/types";
import { cn } from "@/lib/utils/cn";

interface FAQSectionProps {
  faqs: ToolFAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs.length) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex items-center justify-between w-full px-4 py-3 text-left text-sm font-medium text-gray-100 hover:bg-gray-800/50 transition-colors cursor-pointer"
            >
              {faq.question}
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-gray-400 transition-transform",
                  openIndex === i && "rotate-180"
                )}
              />
            </button>
            {openIndex === i && (
              <div className="px-4 pb-3 text-sm text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
