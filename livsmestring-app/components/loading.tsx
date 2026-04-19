"use client";

import { useEffect, useState } from "react";
import { getProgress } from "@/lib/storage";
import { translations } from "@/lib/translations";

export default function Loading() {
  const [text, setText] = useState("Laster...");

  useEffect(() => {
    const progress = getProgress();
    const selectedLanguage = progress.selectedLanguage || "no";

    setText(translations[selectedLanguage]?.loading || "Laster...");
  }, []);

  return (
    <div className="app-loader">
      <img
        src="https://punkt-cdn.oslo.kommune.no/16/animations/loader.svg"
        alt={text}
        className="app-loader__icon"
      />
      <p>{text}</p>
    </div>
  );
}