"use client";

import Link from "next/link";
import { useState } from "react";
import { Code2, Search, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchTools } from "@/lib/tools/get-tool";
import type { ToolDefinition } from "@/lib/tools/types";

export function Header() {
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ToolDefinition[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 1) {
      setSearchResults(searchTools(query).slice(0, 6));
      setShowSearch(true);
    } else {
      setSearchResults([]);
      setShowSearch(false);
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-emerald-500" />
          <span className="text-xl font-bold text-white">DevToolkit</span>
        </Link>

        <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onBlur={() => setTimeout(() => setShowSearch(false), 200)}
              onFocus={() => searchQuery.length > 1 && setShowSearch(true)}
              className="pl-10"
            />
            {showSearch && searchResults.length > 0 && (
              <div className="absolute top-full mt-1 w-full rounded-md border border-gray-700 bg-gray-900 shadow-lg z-50">
                {searchResults.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 transition-colors"
                    onClick={() => {
                      setShowSearch(false);
                      setSearchQuery("");
                    }}
                  >
                    <span className="text-sm text-white">{tool.name}</span>
                    <span className="text-xs text-gray-500 ml-auto">
                      {tool.category}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      {mobileMenu && (
        <div className="md:hidden border-t border-gray-800 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          {showSearch && searchResults.length > 0 && (
            <div className="mt-2 rounded-md border border-gray-700 bg-gray-900">
              {searchResults.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/${tool.slug}`}
                  className="block px-4 py-2 hover:bg-gray-800 text-sm text-white"
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery("");
                    setMobileMenu(false);
                  }}
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
