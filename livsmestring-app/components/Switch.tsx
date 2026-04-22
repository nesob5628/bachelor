"use client";
import { useState, useEffect } from "react";
import { translations } from "../lib/translations";
import { getProgress } from "../lib/storage";


export default function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  const [language, setLanguage] = useState("no");

  useEffect(() => {
    const progress = getProgress();
    setLanguage(progress.selectedLanguage || "no");
  }, []);

  return (
    <pkt-checkbox
      label={translations[language]?.markDone || translations.no.markDone}
      isSwitch
      checked={checked}
      onChange={(e: any) => onChange(e.target.checked)}
    />
  );
}