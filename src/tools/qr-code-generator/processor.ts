import QRCode from "qrcode";

export async function generateQrCode(
  text: string,
  options?: { color?: string; bgColor?: string; width?: number }
): Promise<string> {
  return QRCode.toDataURL(text, {
    width: options?.width || 300,
    margin: 2,
    color: {
      dark: options?.color || "#000000",
      light: options?.bgColor || "#ffffff",
    },
  });
}

export async function generateQrCodeSvg(
  text: string,
  options?: { color?: string; bgColor?: string }
): Promise<string> {
  return QRCode.toString(text, {
    type: "svg",
    margin: 2,
    color: {
      dark: options?.color || "#000000",
      light: options?.bgColor || "#ffffff",
    },
  });
}
