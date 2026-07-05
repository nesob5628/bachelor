"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { getProgress, setCategory } from "@/lib/storage";
import { translations } from "@/lib/translations";
import { topics } from "@/lib/videos";
import Loading from "@/components/Loading";
import ProgressBar from "@/components/ProgressBar";
import ReturnBtn from "@/components/ReturnBtn";
import MessageBox from "@/components/MessageBox";

export default function CategoryPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    setSelectedLanguage(getProgress().selectedLanguage || "");
    setMounted(true);
  }, []);


  const healthProgress = useMemo(() => {
    if (!selectedLanguage) return 0;
    const progress = getProgress();
    const completedVideos = progress.languages?.[selectedLanguage]?.completedVideos ?? [];
    const healthVideos = topics.filter(
      (item) => item.language === selectedLanguage && item.category === "helse"
    );
    const completedHealth = healthVideos.filter((item) =>
      completedVideos.includes(item.synthesiaId)
    ).length;
    return healthVideos.length > 0
      ? Math.round((completedHealth / healthVideos.length) * 100)
      : 0;
  }, [selectedLanguage]);

  const careerProgress = useMemo(() => {
    if (!selectedLanguage) return 0;
    const progress = getProgress();
    const completedVideos = progress.languages?.[selectedLanguage]?.completedVideos ?? [];
    const careerVideos = topics.filter(
      (item) => item.language === selectedLanguage && item.category === "karriere"
    );
    const completedCareer = careerVideos.filter((item) =>
      completedVideos.includes(item.synthesiaId)
    ).length;
    return careerVideos.length > 0
      ? Math.round((completedCareer / careerVideos.length) * 100)
      : 0;
  }, [selectedLanguage]);

  useEffect(() => {
    if (!mounted) return;
    if (!selectedLanguage) {
      router.replace("/language");
    }
  }, [mounted, router, selectedLanguage]);

  const text = translations[selectedLanguage] ?? translations.no;

  const handleChangeLanguage = () => {
    router.push("/language/change");
  };

  if (!mounted || !selectedLanguage) return <Loading />;
  const hasVideos =
  topics.filter((item) => item.language === selectedLanguage).length > 0;

  
  return (
    <main className="pkt-container">
      <ReturnBtn
        text={text.category.changeLanguage}
        onClick={handleChangeLanguage}
      />
      
      <div className="category-grid">


      

      {!hasVideos && (
  <MessageBox title={text.moduleInProgress}>
  {text.videoNotAvailable}
</MessageBox>
)}


        <Link
          href="/category/helse"
          className="category-card category-card--health"
          onClick={() => setCategory("helse")}
        >
          


          <div className="category-card__header">
            <div className="category-card__icon">
              <Image
                src="https://punkt-cdn.oslo.kommune.no/16/icons/ecg-heart.svg"
                alt=""
                fill
              />
            </div>
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
            <div className="category-card__icon">
              <Image
                src="https://punkt-cdn.oslo.kommune.no/16/icons/briefcase.svg"
                alt=""
                fill
              />
            </div>
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
