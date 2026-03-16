"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const languages = [
  { code: "no", name: "Norsk" },
  { code: "en", name: "English" },
  { code: "ar", name: "العربية" },
  { code: "so", name: "Somali" },
  { code: "uk", name: "Українська" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "pl", name: "Polski" },
  { code: "tr", name: "Türkçe" },
  { code: "fa", name: "فارسی" },
  { code: "ku", name: "Kurdî" },
  { code: "da", name: "Dari" },
  { code: "ps", name: "Pashto" },
  { code: "ti", name: "ትግርኛ" },
  { code: "am", name: "አማርኛ" },
];

const selectLanguageTexts = [
  "Velg språk",
  "Choose language",
  "اختر اللغة",
  "Dooro luqadda",
  "Оберіть мову",
  "Elige idioma",
  "Choisissez la langue",
  "Sprache wählen",
  "Wybierz język",
  "Dil seçin",
  "انتخاب زبان",
  "Ziman hilbijêre",
  "ژبه وټاکئ",
  "ቋንቋ ምረጽ",
  "ቋንቋ ይምረጡ",
];

export default function LanguagePage() {
  const router = useRouter();
  const [headingIndex, setHeadingIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setHeadingIndex((prev) => (prev + 1) % selectLanguageTexts.length);
        setFade(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const selectLanguage = (code: string) => {
    localStorage.setItem("language", code);
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-white text-black px-6 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
            Livsmestring
          </p>

          <h1
            className={`text-3xl font-semibold min-h-[48px] transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {selectLanguageTexts[headingIndex]}
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="rounded-2xl border border-gray-200 bg-white px-4 py-4 text-lg shadow-sm transition hover:bg-gray-50 hover:shadow-md"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}