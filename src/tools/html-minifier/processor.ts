export function minifyHtml(input: string): { output: string; savings: number } {
  let result = input;
  result = result.replace(/<!--[\s\S]*?-->/g, "");
  result = result.replace(/\s+/g, " ");
  result = result.replace(/>\s+</g, "><");
  result = result.replace(/\s*=\s*/g, "=");
  result = result.trim();
  const originalSize = new Blob([input]).size;
  const minifiedSize = new Blob([result]).size;
  const savings = originalSize > 0 ? ((originalSize - minifiedSize) / originalSize) * 100 : 0;
  return { output: result, savings };
}
