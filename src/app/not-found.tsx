import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <h2 className="text-xl text-gray-400 mb-2">Tool Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The tool you are looking for does not exist or may have been moved.
        Browse our collection of free developer tools below.
      </p>
      <Button asChild>
        <Link href="/">Browse All Tools</Link>
      </Button>
    </div>
  );
}
