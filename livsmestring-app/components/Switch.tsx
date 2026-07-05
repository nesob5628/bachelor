"use client";
import { useState } from "react";
import { translations } from "@/lib/translations";
import { getProgress } from "@/lib/storage";
// Small wrapper around the Punkt `pkt-checkbox` web component.
// Used as a toggle switch to mark steps as completed. This file only
// adds a localized label and forwards the checked state to the parent.
export default function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  // Read persisted language selection from storage; default to Norwegian ('no').
  const [language] = useState(() => getProgress().selectedLanguage || "no");

  // Render the Punkt checkbox as a switch. The event typing reflects the
  // native Event with an `target` input element providing `checked`.
  return (
    <pkt-checkbox
      label={translations[language]?.markDone || translations.no.markDone}
      isSwitch
      checked={checked}
      onChange={(e: Event & { target: HTMLInputElement }) => onChange(e.target.checked)}
    />
  );
}
