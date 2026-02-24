import type { ToolContent } from "@/lib/tools/types";

export const loremIpsumContent: ToolContent = {
  whatIs: "Lorem Ipsum is placeholder text used in design and development to demonstrate visual layout without meaningful content distracting from the design. It has been the industry standard dummy text since the 1500s.",
  howToUse: "1. Choose generation mode: paragraphs, sentences, or words.\n2. Set the count.\n3. Click 'Generate'.\n4. Copy or download the text.",
  faqs: [
    { question: "Where does Lorem Ipsum come from?", answer: "Lorem Ipsum originates from a scrambled section of 'De Finibus Bonorum et Malorum' by Cicero, written in 45 BC." },
    { question: "Why use Lorem Ipsum instead of real text?", answer: "Lorem Ipsum provides natural-looking text distribution without distracting readers with meaningful content during the design phase." },
    { question: "Is Lorem Ipsum real Latin?", answer: "It is derived from Latin but contains scrambled and altered words, so it is not proper Latin text." },
    { question: "Are there alternatives to Lorem Ipsum?", answer: "Yes, alternatives include Hipster Ipsum, Bacon Ipsum, and other themed generators, but Lorem Ipsum remains the standard." },
    { question: "How much Lorem Ipsum should I use?", answer: "Use enough to accurately represent the expected content length. For body text, 2-3 paragraphs is typical." },
  ],
};
