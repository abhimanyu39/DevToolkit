export function beautifyCss(input: string, indent: number = 2): string {
  const indentStr = " ".repeat(indent);
  let result = input.replace(/\s+/g, " ").trim();
  result = result.replace(/\s*{\s*/g, " {\n" + indentStr);
  result = result.replace(/\s*}\s*/g, "\n}\n\n");
  result = result.replace(/;\s*/g, ";\n" + indentStr);
  // Clean up trailing indentation before closing brace
  result = result.replace(new RegExp(indentStr + "}", "g"), "}");
  result = result.replace(/\n{3,}/g, "\n\n");
  return result.trim();
}

export function minifyCss(input: string): { output: string; savings: number } {
  let result = input;
  result = result.replace(/\/\*[\s\S]*?\*\//g, "");
  result = result.replace(/\s+/g, " ");
  result = result.replace(/\s*{\s*/g, "{");
  result = result.replace(/\s*}\s*/g, "}");
  result = result.replace(/\s*:\s*/g, ":");
  result = result.replace(/\s*;\s*/g, ";");
  result = result.replace(/;}/g, "}");
  result = result.trim();
  const originalSize = new Blob([input]).size;
  const minifiedSize = new Blob([result]).size;
  const savings = originalSize > 0 ? ((originalSize - minifiedSize) / originalSize) * 100 : 0;
  return { output: result, savings };
}
