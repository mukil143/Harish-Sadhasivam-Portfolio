import React, { useState, useEffect } from "react";

export function TypingText({
  words = ["Technical Trainer...", "Full Stack Developer...", "Qualified Mentor...", "Tech Enthusiast..."],
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 1000,
  className = "",
  showCursor = true,
  cursorClassName = ""
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout;
    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, speed);
    }

    // Switch between typing and deleting
    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      {showCursor && <span className={cursorClassName}>|</span>}
    </span>
  );
}
