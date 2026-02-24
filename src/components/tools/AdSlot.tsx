import { cn } from "@/lib/utils/cn";

interface AdSlotProps {
  position: "top-banner" | "sidebar" | "in-content" | "between-sections";
  className?: string;
}

export function AdSlot({ position, className }: AdSlotProps) {
  const sizes: Record<string, string> = {
    "top-banner": "h-[90px] max-w-[728px]",
    sidebar: "h-[250px] w-[300px]",
    "in-content": "h-[90px] max-w-[728px]",
    "between-sections": "h-[90px] max-w-[728px]",
  };

  return (
    <div
      className={cn(
        "mx-auto border border-dashed border-gray-700 rounded-md flex items-center justify-center text-gray-600 text-xs",
        sizes[position],
        position === "sidebar" ? "hidden lg:flex" : "w-full",
        className
      )}
    >
      Ad Space — {position}
    </div>
  );
}
