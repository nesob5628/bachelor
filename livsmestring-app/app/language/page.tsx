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
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const selectLanguage = (code: string) => {
    setSelectedLanguage(code);
    router.push("/category");
  };

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto max-w-md">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
            Livsmestring
          </p>

          <div className="flex min-h-[88px] items-center justify-center">
            <h1
              className={`min-h-[48px] text-3xl font-semibold transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {selectLanguageTexts[headingIndex] ?? "Select language"}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
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