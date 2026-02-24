import type { ToolContent } from "@/lib/tools/types";

export const qrCodeContent: ToolContent = {
  whatIs: "A QR (Quick Response) code is a two-dimensional barcode that can store URLs, text, and other data. QR codes are widely used for sharing links, contact information, Wi-Fi credentials, and payment details.",
  howToUse: "1. Enter your text or URL.\n2. Optionally customize colors.\n3. Click 'Generate QR Code'.\n4. Download as PNG or SVG.",
  faqs: [
    { question: "What can I encode in a QR code?", answer: "URLs, plain text, email addresses, phone numbers, Wi-Fi credentials, vCards, and more." },
    { question: "What is the maximum data a QR code can hold?", answer: "A QR code can store up to 7,089 numeric characters or 4,296 alphanumeric characters." },
    { question: "Which format should I download, PNG or SVG?", answer: "PNG for web use and sharing. SVG for print materials as it scales without quality loss." },
    { question: "Do QR codes expire?", answer: "Static QR codes never expire. Dynamic QR codes (hosted service) may expire based on the provider." },
    { question: "Can I customize QR code colors?", answer: "Yes, you can change the foreground and background colors. Ensure sufficient contrast for scanning." },
  ],
};
