import type { ToolContent } from "@/lib/tools/types";

export const urlEncoderContent: ToolContent = {
  whatIs: "URL encoding (percent encoding) converts special characters in URLs to their percent-encoded equivalents. This ensures URLs are valid and can be safely transmitted across the internet without ambiguity.",
  howToUse: "1. Select 'Encode' or 'Decode' mode.\n2. Paste your URL or text.\n3. Click the action button.\n4. View the result and optional URL breakdown.",
  commonErrors: "Double-encoding is a common mistake — encoding an already encoded URL produces incorrect results. Spaces should be encoded as %20 in URLs, not as +.",
  faqs: [
    { question: "What characters need URL encoding?", answer: "Special characters like spaces, &, =, ?, #, and non-ASCII characters must be percent-encoded in URLs." },
    { question: "What is the difference between encodeURI and encodeURIComponent?", answer: "encodeURI encodes a complete URL preserving URL structure characters. encodeURIComponent encodes everything, suitable for query parameter values." },
    { question: "Why are spaces encoded as %20?", answer: "The %20 encoding represents a space character in the URL percent-encoding scheme defined by RFC 3986." },
    { question: "Is URL encoding the same as HTML encoding?", answer: "No, URL encoding uses percent signs (%20) while HTML encoding uses entities (&amp;). They serve different purposes." },
    { question: "Can I encode non-English characters?", answer: "Yes, non-ASCII characters are first encoded to UTF-8 bytes, then each byte is percent-encoded." },
  ],
};
