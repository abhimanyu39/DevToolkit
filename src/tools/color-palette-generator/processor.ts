export interface ColorInfo {
  hex: string;
  rgb: string;
  hsl: string;
}

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function hexToHsl(hex: string): [number, number, number] {
  const [r, g, b] = hexToRgb(hex).map((v) => v / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function getColorInfo(hex: string): ColorInfo {
  const [r, g, b] = hexToRgb(hex);
  const [h, s, l] = hexToHsl(hex);
  return { hex, rgb: `rgb(${r}, ${g}, ${b})`, hsl: `hsl(${h}, ${s}%, ${l}%)` };
}

export function generateAnalogous(baseHue: number): ColorInfo[] {
  return [-30, -15, 0, 15, 30].map((offset) =>
    getColorInfo(hslToHex((baseHue + offset + 360) % 360, 70, 55))
  );
}

export function generateComplementary(baseHue: number): ColorInfo[] {
  return [0, 180].map((offset) =>
    getColorInfo(hslToHex((baseHue + offset) % 360, 70, 55))
  );
}

export function generateTriadic(baseHue: number): ColorInfo[] {
  return [0, 120, 240].map((offset) =>
    getColorInfo(hslToHex((baseHue + offset) % 360, 70, 55))
  );
}

export function generateShades(hex: string): ColorInfo[] {
  const [h, s] = hexToHsl(hex);
  return [90, 75, 55, 40, 25].map((l) => getColorInfo(hslToHex(h, s, l)));
}

export function generateRandomPalette(): ColorInfo[] {
  const baseHue = Math.floor(Math.random() * 360);
  return Array.from({ length: 5 }, (_, i) =>
    getColorInfo(hslToHex((baseHue + i * 72) % 360, 60 + Math.random() * 20, 45 + Math.random() * 20))
  );
}
