import vscode from "/vscode_icon.svg";
import { loadImage } from "../utils/helpers";

export const projects = [
  {
    id: 1,
    title: "Vs-Code Portfolio",
    description: "A Vscode themed developer portfolio website.",
    image: vscode,
    color: "bg-sky-400",
    tags: ["react", "tailwindcss"],
    sourceCode: "https://github.com/ilyanamzln/vscode-portfolio",
    demo: "https://ilyanamazlan-portfolio.netlify.app/",
  },
  {
    id: 2,
    title: "The Wild Oasis",
    description:
      "A custom-built application to manage cabins of a small boutique hotel called The Wild Oasis. It is an internal application used inside the hotel to check in guests as they arrive.",
    image: loadImage("wild-oasis.png"),
    color: "bg-lime-600",
    tags: ["react", "styled-components", "react-query", "supabase"],
    sourceCode: "https://github.com/ilyanamzln/the-wild-oasis",
    demo: "https://ilyanamzln-the-wild-oasis.netlify.app/",
  },
  {
    id: 3,
    title: "The Wild Oasis",
    description:
      "An application to book cabins of a small boutique hotel called The Wild Oasis. It is a customer-facing website for The Wild Oasis where guests can browse and reserve a cabin, and manage their profile.",
    image: loadImage("wild-oasis-client.png"),
    color: "bg-orange-500",
    tags: ["next.js", "tailwindcss", "next-auth", "supabase"],
    sourceCode: "",
    demo: "",
  },
  {
    id: 4,
    title: "Fast React Pizza",
    description: "A website to order pizza 🍕.",
    emoji: "🍕",
    color: "bg-amber-500",
    tags: ["react", "tailwindcss", "redux"],
    sourceCode: "",
    demo: "",
  },
];
