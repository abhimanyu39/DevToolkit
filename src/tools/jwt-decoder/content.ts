import type { ToolContent } from "@/lib/tools/types";

export const jwtDecoderContent: ToolContent = {
  whatIs: "JWT (JSON Web Token) is an open standard for securely transmitting information between parties as a JSON object. JWTs consist of three parts: header, payload, and signature. This decoder lets you inspect JWT contents without verification.",
  howToUse: "1. Paste your JWT token.\n2. Click 'Decode JWT'.\n3. View the decoded header, payload, and signature.\n4. Check token expiry status.",
  commonErrors: "Common JWT issues include expired tokens, missing required claims, incorrect algorithms, and improper signature verification. Always validate signatures server-side.",
  faqs: [
    { question: "Is it safe to decode JWTs in the browser?", answer: "Decoding is safe — JWT payloads are not encrypted, just encoded. However, never share tokens containing sensitive data publicly." },
    { question: "Does this tool verify the signature?", answer: "No, this tool only decodes and displays the JWT contents. Signature verification requires the secret key and should be done server-side." },
    { question: "What is the 'exp' claim?", answer: "The 'exp' claim is the expiration time as a Unix timestamp. Tokens should be rejected after this time." },
    { question: "What algorithms do JWTs use?", answer: "Common algorithms include HS256 (HMAC), RS256 (RSA), and ES256 (ECDSA). The algorithm is specified in the header." },
    { question: "Should I store JWTs in localStorage?", answer: "It depends on your security requirements. HttpOnly cookies are generally more secure against XSS attacks than localStorage." },
  ],
};
