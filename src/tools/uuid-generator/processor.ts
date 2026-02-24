export function generateUuidV4(): string {
  return crypto.randomUUID();
}

export function generateUuidV7(): string {
  const timestamp = Date.now();
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  // Set timestamp (48 bits)
  bytes[0] = (timestamp / 2**40) & 0xff;
  bytes[1] = (timestamp / 2**32) & 0xff;
  bytes[2] = (timestamp / 2**24) & 0xff;
  bytes[3] = (timestamp / 2**16) & 0xff;
  bytes[4] = (timestamp / 2**8) & 0xff;
  bytes[5] = timestamp & 0xff;
  // Set version 7
  bytes[6] = (bytes[6] & 0x0f) | 0x70;
  // Set variant
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
}

export function validateUuid(input: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(input);
}

export function getUuidVersion(input: string): string | null {
  if (!validateUuid(input)) return null;
  const version = input.charAt(14);
  return `v${version}`;
}
