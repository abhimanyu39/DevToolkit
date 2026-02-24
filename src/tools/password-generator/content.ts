import type { ToolContent } from "@/lib/tools/types";

export const passwordGeneratorContent: ToolContent = {
  whatIs: "A password generator creates strong, random passwords using cryptographically secure methods. Strong passwords are essential for protecting online accounts from brute-force attacks and unauthorized access.",
  howToUse: "1. Set your desired password length (12+ recommended).\n2. Choose character types (uppercase, lowercase, numbers, symbols).\n3. Set how many passwords to generate.\n4. Click 'Generate' and copy your password.",
  commonErrors: "Using short passwords (under 8 characters), excluding character types, and reusing passwords across sites are common security mistakes.",
  faqs: [
    { question: "What makes a strong password?", answer: "A strong password is at least 12 characters long and includes uppercase, lowercase, numbers, and symbols. It should not contain dictionary words or personal information." },
    { question: "Are these passwords truly random?", answer: "Yes, this tool uses the Web Crypto API (crypto.getRandomValues) which provides cryptographically secure random numbers." },
    { question: "Is it safe to generate passwords online?", answer: "Yes, this tool runs entirely in your browser. No passwords are sent to any server or stored anywhere." },
    { question: "How long should my password be?", answer: "At least 12 characters, but 16+ is recommended for high-security accounts." },
    { question: "Should I use a password manager?", answer: "Absolutely. A password manager lets you use unique, strong passwords for every account without memorizing them." },
  ],
};
