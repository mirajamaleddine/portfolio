"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
  className?: string;
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function Typewriter({
  className,
  words,
  typingSpeed = 60,
  deletingSpeed = 40,
  delayBetween = 1500,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayed.length === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, words, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={`inline-flex ${className}`}>
      <span>{displayed}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="ml-1 text-yellow-300"
      >
        |
      </motion.span>
    </span>
  );
}
