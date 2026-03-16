"use client";

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

export default function LanguagePage() {
  const router = useRouter();

  const selectLanguage = (code: string) => {
    localStorage.setItem("language", code);
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-white text-black p-6">

      <h1 className="text-2xl font-semibold mb-6 text-center">
        Velg språk
      </h1>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => selectLanguage(lang.code)}
            className="p-4 border rounded-xl text-lg hover:bg-gray-100 transition"
          >
            {lang.name}
          </button>
        ))}
      </div>

    </main>
  );
}