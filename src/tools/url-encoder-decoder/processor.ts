export function encodeUrl(input: string): string {
  return encodeURIComponent(input);
}

export function decodeUrl(input: string): string {
  return decodeURIComponent(input);
}

export function breakdownUrl(input: string): { component: string; encoded: string }[] {
  try {
    const url = new URL(input);
    return [
      { component: "Protocol", encoded: url.protocol },
      { component: "Host", encoded: url.host },
      { component: "Pathname", encoded: url.pathname },
      { component: "Search", encoded: url.search },
      { component: "Hash", encoded: url.hash },
    ].filter((c) => c.encoded);
  } catch {
    return [];
  }
}
