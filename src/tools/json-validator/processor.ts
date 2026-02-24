export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  parsedSize?: number;
  keyCount?: number;
  depth?: number;
}

export interface ValidationError {
  message: string;
  line?: number;
  column?: number;
}

function getJsonDepth(obj: unknown, current: number = 0): number {
  if (typeof obj !== "object" || obj === null) return current;
  let maxDepth = current;
  for (const value of Object.values(obj as Record<string, unknown>)) {
    maxDepth = Math.max(maxDepth, getJsonDepth(value, current + 1));
  }
  if (Array.isArray(obj)) {
    for (const item of obj) {
      maxDepth = Math.max(maxDepth, getJsonDepth(item, current + 1));
    }
  }
  return maxDepth;
}

function countKeys(obj: unknown): number {
  if (typeof obj !== "object" || obj === null) return 0;
  let count = 0;
  if (Array.isArray(obj)) {
    for (const item of obj) count += countKeys(item);
  } else {
    const record = obj as Record<string, unknown>;
    count += Object.keys(record).length;
    for (const value of Object.values(record)) count += countKeys(value);
  }
  return count;
}

export function validateJson(input: string): ValidationResult {
  if (!input.trim()) {
    return { valid: false, errors: [{ message: "Input is empty" }] };
  }
  try {
    const parsed = JSON.parse(input);
    return {
      valid: true,
      errors: [],
      parsedSize: new Blob([input]).size,
      keyCount: countKeys(parsed),
      depth: getJsonDepth(parsed),
    };
  } catch (e) {
    const message = (e as Error).message;
    // Try to extract line/column from error message
    const posMatch = message.match(/position (\d+)/);
    let line: number | undefined;
    let column: number | undefined;
    if (posMatch) {
      const pos = parseInt(posMatch[1]);
      const beforeError = input.slice(0, pos);
      line = (beforeError.match(/\n/g) || []).length + 1;
      column = pos - beforeError.lastIndexOf("\n");
    }
    return {
      valid: false,
      errors: [{ message, line, column }],
    };
  }
}
