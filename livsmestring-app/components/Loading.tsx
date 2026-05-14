"use client";

import Image from "next/image";
import { useState } from "react";
import { getProgress } from "@/lib/storage";
import { translations } from "@/lib/translations";

export default function Loading() {
  const [text] = useState(() => {
    const progress = getProgress();
    const lang = progress.selectedLanguage || "no";
    return translations[lang]?.loading || "Laster...";
  });

  return (
    <div className="app-loader">
      <div className="app-loader__icon">
        <Image
          src="https://punkt-cdn.oslo.kommune.no/16/animations/loader.svg"
          alt={text}
          fill
        />
      </div>
      <p>{text}</p>
    </div>
  );
}
