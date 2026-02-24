export interface GradientStop {
  color: string;
  position: number;
}

export function generateGradientCss(
  type: "linear" | "radial",
  angle: number,
  stops: GradientStop[]
): string {
  const stopsStr = stops.map((s) => `${s.color} ${s.position}%`).join(", ");
  if (type === "linear") {
    return `background: linear-gradient(${angle}deg, ${stopsStr});`;
  }
  return `background: radial-gradient(circle, ${stopsStr});`;
}
