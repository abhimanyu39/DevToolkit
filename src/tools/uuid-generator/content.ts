import type { ToolContent } from "@/lib/tools/types";

export const uuidGeneratorContent: ToolContent = {
  whatIs: "A UUID (Universally Unique Identifier) is a 128-bit identifier that is unique across all devices and time. UUIDs are widely used as database primary keys, session IDs, and for distributed system coordination.",
  howToUse: "1. Choose UUID version (v4 for random, v7 for time-sortable).\n2. Set how many UUIDs to generate.\n3. Click 'Generate'.\n4. Copy individual UUIDs or all at once.",
  commonErrors: "Confusing UUID versions, not using proper generation methods (using Math.random instead of crypto), and storing UUIDs inefficiently in databases are common mistakes.",
  faqs: [
    { question: "What is the difference between UUID v4 and v7?", answer: "UUID v4 is fully random. UUID v7 includes a timestamp prefix, making it time-sortable and better suited for database indexing." },
    { question: "Can UUIDs collide?", answer: "While theoretically possible, the probability of UUID v4 collision is astronomically low (about 1 in 2^122)." },
    { question: "Should I use UUID or auto-increment ID?", answer: "UUIDs are better for distributed systems and prevent ID enumeration. Auto-increment is simpler and more storage-efficient for single-database systems." },
    { question: "How should I store UUIDs in a database?", answer: "Store as a native UUID type if available, or as BINARY(16) for efficiency. Avoid storing as VARCHAR(36)." },
    { question: "Are UUIDs case-sensitive?", answer: "No, UUIDs are case-insensitive. Both uppercase and lowercase hex characters are valid." },
  ],
};
