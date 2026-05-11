"use client";
import { useState } from "react";
import { translations } from "../lib/translations";
import { getProgress } from "../lib/storage";

export default function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  const [language] = useState(() => getProgress().selectedLanguage || "no");

  return (
    <pkt-checkbox
      label={translations[language]?.markDone || translations.no.markDone}
      isSwitch
      checked={checked}
      onChange={(e: Event & { target: HTMLInputElement }) => onChange(e.target.checked)}
    />
  );
}
