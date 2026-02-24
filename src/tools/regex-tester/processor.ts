export interface RegexMatch {
  match: string;
  index: number;
  groups: string[];
}

export function testRegex(
  pattern: string,
  flags: string,
  testString: string
): { matches: RegexMatch[]; error?: string } {
  try {
    const regex = new RegExp(pattern, flags);
    const matches: RegexMatch[] = [];
    let match;
    if (flags.includes("g")) {
      while ((match = regex.exec(testString)) !== null) {
        matches.push({
          match: match[0],
          index: match.index,
          groups: match.slice(1),
        });
        if (!match[0]) break; // prevent infinite loop on zero-length matches
      }
    } else {
      match = regex.exec(testString);
      if (match) {
        matches.push({
          match: match[0],
          index: match.index,
          groups: match.slice(1),
        });
      }
    }
    return { matches };
  } catch (e) {
    return { matches: [], error: (e as Error).message };
  }
}
