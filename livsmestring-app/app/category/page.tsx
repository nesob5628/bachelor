"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  clearSelectedLanguage,
  getProgress,
  setCategory,
} from "@/lib/storage";
import { translations } from "@/lib/translations";
import { topics } from "@/lib/data/videos";
import ProgressBar from "@/components/ProgressBar";
import ReturnBtn from "@/components/ReturnBtn";

export default function CategoryPage() {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("no");
  const [healthProgress, setHealthProgress] = useState(0);
  const [careerProgress, setCareerProgress] = useState(0);

  useEffect(() => {
    const progress = getProgress();

    if (!progress.selectedLanguage) {
      router.replace("/language");
      return;
    }

    const language = progress.selectedLanguage;
    const completedVideos =
      progress.languages?.[language]?.completedVideos ?? [];

    const healthVideos = topics.filter(
      (item) => item.language === language && item.category === "helse"
    );

    const careerVideos = topics.filter(
      (item) => item.language === language && item.category === "karriere"
    );

    const completedHealth = healthVideos.filter((item) =>
      completedVideos.includes(item.synthesiaId)
    ).length;

    const completedCareer = careerVideos.filter((item) =>
      completedVideos.includes(item.synthesiaId)
    ).length;

    const healthPercent =
      healthVideos.length > 0
        ? Math.round((completedHealth / healthVideos.length) * 100)
        : 0;

    const careerPercent =
      careerVideos.length > 0
        ? Math.round((completedCareer / careerVideos.length) * 100)
        : 0;

    setSelectedLanguage(language);
    setHealthProgress(healthPercent);
    setCareerProgress(careerPercent);
    setMounted(true);
  }, [router]);

  const text = translations[selectedLanguage];

  const handleChangeLanguage = () => {
    clearSelectedLanguage();
    router.push("/language");
  };

  if (!mounted) {
    return (
      <main className="pkt-container">
        <ReturnBtn
          text={text.category.changeLanguage}
          onClick={handleChangeLanguage}
          disabled
        />

        <div className="category-grid">
          <div className="category-card category-card--health">
            <div className="category-card__header">
              <img
                src="https://punkt-cdn.oslo.kommune.no/16/icons/ecg-heart.svg"
                alt=""
                className="category-card__icon"
              />
              <h2 className="category-card__title">...</h2>
            </div>
            <ProgressBar value={0} small />
          </div>

          <div className="category-card category-card--career">
            <div className="category-card__header">
              <img
                src="https://punkt-cdn.oslo.kommune.no/16/icons/briefcase.svg"
                alt=""
                className="category-card__icon"
              />
              <h2 className="category-card__title">...</h2>
            </div>
            <ProgressBar value={0} small />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pkt-container">
      <ReturnBtn
        text={text.category.changeLanguage}
        onClick={handleChangeLanguage}
      />

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

          <ProgressBar value={healthProgress} small />
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

          <ProgressBar value={careerProgress} small />
        </Link>
      </div>
    </main>
  );
}