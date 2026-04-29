"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { setSelectedLanguage, getProgress, clearSelectedLanguage } from "@/lib/storage";

const languages = [
  { code: "no", name: "Norsk" },
  { code: "en", name: "English" },
  { code: "ar", name: "العربية" },
  { code: "fa", name: "فارسی" },
  { code: "ku", name: "Kurdî" },
  { code: "so", name: "Somali" },
  { code: "es", name: "Español" },
  { code: "sw", name: "Kiswahili" },
  { code: "ta", name: "தமிழ்" },
  { code: "ti", name: "ትግርኛ" },
  { code: "tr", name: "Türkçe" },
  { code: "ur", name: "اردو" },
];

const selectLanguageTexts = [
  "Velg språk",
  "Choose language",
  "اختر اللغة",
  "انتخاب زبان",
  "Ziman hilbijêre",
  "Dooro luqadda",
  "Elige idioma",
  "Chagua lugha",
  "மொழியைத் தேர்ந்தெடுக்கவும்",
  "ቋንቋ ምረጽ",
  "Dil seçin",
  "زبان منتخب کریں",
];

export default function LanguagePage() {
  const router = useRouter();
  const [headingIndex, setHeadingIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const searchParams = useSearchParams();
  const isChangingLanguage = searchParams.get("change") === "true";

  useEffect(() => {
    const progress = getProgress();

    if (isChangingLanguage) {
      clearSelectedLanguage();
      window.dispatchEvent(new Event("languageChanged"));
      return;
    }

    if (progress.selectedLanguage) {
      router.replace("/category");
    }
  }, [router, isChangingLanguage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setHeadingIndex((prev) => (prev + 1) % selectLanguageTexts.length);
        setFade(true);
      }, 250);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const selectLanguage = (code: string) => {
    setSelectedLanguage(code);
    window.dispatchEvent(new Event("languageChanged"));
    router.push("/category");
  };

  return (
    <div className="pkt-container">
      <section className="pkt-section">
        <div className="pkt-section__content">

          {/* Heading */}
          <header className="language-header">
            <div className="language-heading-wrap">
              <h1 className={`language-title ${fade ? "is-visible" : "is-hidden"}`}>
                {selectLanguageTexts[headingIndex]}
              </h1>
            </div>
          </header>

          {/* Grid */}
          <div className="language-grid">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => selectLanguage(lang.code)}
                className="pkt-linkcard language-card"
              >
                <span className="pkt-linkcard__title">
                  {lang.name}
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}