import type { ToolContent } from "@/lib/tools/types";

export const base64Content: ToolContent = {
  whatIs: "Base64 is a binary-to-text encoding scheme that converts binary data into ASCII characters. It is commonly used to embed images in HTML/CSS, encode email attachments, and transmit data safely over text-based protocols.",
  howToUse: "1. Select 'Encode' or 'Decode' mode.\n2. Paste your text or Base64 string.\n3. Click the action button.\n4. Copy or download the result.",
  commonErrors: "Invalid Base64 strings often contain characters outside the Base64 alphabet. Ensure the input length is a multiple of 4 and uses only A-Z, a-z, 0-9, +, /, and = padding.",
  faqs: [
    { question: "Is Base64 encryption?", answer: "No, Base64 is encoding, not encryption. It does not provide any security — anyone can decode it." },
    { question: "Why does Base64 make data larger?", answer: "Base64 increases data size by approximately 33% because it represents 3 bytes of data using 4 ASCII characters." },
    { question: "When should I use Base64?", answer: "Use it for embedding binary data in text formats (data URIs, JSON, XML) or for safe data transport over text protocols." },
    { question: "Can I Base64 encode images?", answer: "Yes, images can be Base64 encoded for embedding directly in HTML or CSS using data URIs." },
    { question: "What is Base64URL?", answer: "Base64URL is a variant that uses - and _ instead of + and /, making it safe for URLs and filenames." },
  ],
};
