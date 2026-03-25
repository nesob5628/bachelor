"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setSelectedLanguage, getProgress } from "@/lib/storage";

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
  { code: "uk", name: "Українська" },
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
  "Оберіть мову",
  "زبان منتخب کریں",
];

export default function LanguagePage() {
  const router = useRouter();
  const [headingIndex, setHeadingIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const progress = getProgress();

    if (progress.selectedLanguage) {
      router.replace("/category");
    }
  }, [router]);

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
    router.push("/category");
  };

  return (
    <main className="pkt-container">
      <div className="language-shell">
        <header className="language-header">
          <div className="brand-header">
            <img
              src="https://punkt-cdn.oslo.kommune.no/16/logos/oslologo.svg"
              alt="Oslo kommune"
              className="brand-header__logo"
            />
            <p className="brand-header__text">Livsmestring</p>
          </div>

          <h1 className={`language-title ${fade ? "is-visible" : "is-hidden"}`}>
            {selectLanguageTexts[headingIndex]}
          </h1>
        </header>

        <section className="language-grid" aria-label="Velg språk">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => selectLanguage(lang.code)}
              className="pkt-linkcard pkt-linkcard--blue"
            >
              <div className="pkt-linkcard__title">{lang.name}</div>
            </button>
          ))}
        </section>
      </div>
    </main>
  );
}