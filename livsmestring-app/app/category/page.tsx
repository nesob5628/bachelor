"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { clearSelectedLanguage, getProgress, setCategory } from "@/lib/storage";
import { translations } from "@/lib/translations";

export default function CategoryPage() {
  const router = useRouter();
  const progress = getProgress();

  useEffect(() => {
    if (!progress.selectedLanguage) {
      router.replace("/language");
    }
  }, [router, progress.selectedLanguage]);

  const selectedLanguage = progress.selectedLanguage || "no";
  const text = translations[selectedLanguage];

  const handleChangeLanguage = () => {
    clearSelectedLanguage();
    router.push("/language");
  };

  return (
    <>
      <main className="pkt-container">
        <button
          type="button"
          onClick={handleChangeLanguage}
          className="pkt-button pkt-button--white return-button"
        >
          <img
            src="https://punkt-cdn.oslo.kommune.no/16/icons/arrow-return.svg"
            alt="Tilbake"
            className="return-icon"
          />
          {text.category.changeLanguage}
        </button>

        <div className="category-grid">
          <Link
            href="/category/helse"
            className="category-card category-card--health"
            onClick={() => setCategory("helse")}
          >
            <div className="category-card__header">
              <img
                src="https://punkt-cdn.oslo.kommune.no/16/icons/ecg-heart.svg"
                alt=""
                className="category-card__icon"
              />
              <h2 className="category-card__title">
                {text.category.healthTitle}
              </h2>
            </div>
          </Link>

          <Link
            href="/category/karriere"
            className="category-card category-card--career"
            onClick={() => setCategory("karriere")}
          >
            <div className="category-card__header">
              <img
                src="https://punkt-cdn.oslo.kommune.no/16/icons/briefcase.svg"
                alt=""
                className="category-card__icon"
              />
              <h2 className="category-card__title">
                {text.category.careerTitle}
              </h2>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}