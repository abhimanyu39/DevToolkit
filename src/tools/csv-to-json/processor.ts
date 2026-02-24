export function csvToJson(input: string, delimiter: string = ","): string {
  const lines = input.trim().split("\n");
  if (lines.length < 2) return "[]";
  const headers = lines[0].split(delimiter).map((h) => h.trim().replace(/^"|"$/g, ""));
  const result = lines.slice(1).map((line) => {
    const values = line.split(delimiter).map((v) => v.trim().replace(/^"|"$/g, ""));
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => { obj[h] = values[i] || ""; });
    return obj;
  });
  return JSON.stringify(result, null, 2);
}

export function jsonToCsv(input: string, delimiter: string = ","): string {
  const data = JSON.parse(input);
  if (!Array.isArray(data) || data.length === 0) return "";
  const headers = Object.keys(data[0]);
  const rows = data.map((row: Record<string, unknown>) =>
    headers.map((h) => {
      const val = String(row[h] ?? "");
      return val.includes(delimiter) || val.includes('"') || val.includes("\n")
        ? `"${val.replace(/"/g, '""')}"`
        : val;
    }).join(delimiter)
  );
  return [headers.join(delimiter), ...rows].join("\n");
}
