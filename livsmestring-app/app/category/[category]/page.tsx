'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  getProgress,
  setProgress,
  getCompletedVideos,
} from '@/lib/storage';
import { topics } from '@/lib/data/videos';
import { healthThemes } from '@/lib/themes/health_themes';
import { careerThemes } from '@/lib/themes/career_themes';
import { translations } from "@/lib/translations";
import ProgressBar from '@/components/ProgressBar';
import ReturnBtn from '@/components/ReturnBtn';

type ThemeItem = {
  id: string;
  title: Record<string, string>;
};

export default function Page() {
  const params = useParams();
  const router = useRouter();

  const category = params.category as 'helse' | 'karriere';
  const themes: ThemeItem[] =
    category === 'helse' ? healthThemes : careerThemes;

  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState('no');

  useEffect(() => {
    const progress = getProgress();
    const selectedLanguage = progress.selectedLanguage || 'no';

    setLanguage(selectedLanguage);
    setMounted(true);
  }, []);

  const handleClick = (themeId: string) => {
    const progress = getProgress();

    setProgress({
      ...progress,
      languages: {
        ...progress.languages,
        [language]: {
          ...progress.languages?.[language],
          category,
          theme: themeId,
        },
      },
    });

    router.push(`/category/${category}/${themeId}`);
  };

  const getSingleThemeProgress = (themeId: string) => {
    const completedVideos = getCompletedVideos();

    const themeVideos = topics.filter(
      (video: any) =>
        video.language === language &&
        video.category === category &&
        video.theme === themeId
    );

    if (themeVideos.length === 0) return 0;

    const completedCount = themeVideos.filter((video: any) =>
      completedVideos.includes(video.synthesiaId)
    ).length;

    return Math.round((completedCount / themeVideos.length) * 100);
  };

  const totalProgress =
    themes.length > 0
      ? Math.round(
          themes.reduce(
            (sum, item) => sum + getSingleThemeProgress(item.id),
            0
          ) / themes.length
        )
      : 0;

  const themeCardClass =
    category === 'helse' ? 'theme-card theme-card--health' : 'theme-card theme-card--career';

  if (!mounted) {
    return (
      <main className="pkt-container">
        <ReturnBtn 
          text={translations[language]?.category?.backToCategories || translations.no.category.backToCategories}
          href="/category" />

        <div className="theme-grid">
          {themes.map((item) => (
            <div key={item.id} className={themeCardClass}>
              <div className="theme-card__header">
                <span className="theme-card__title">{item.title.no}</span>
              </div>
              <ProgressBar value={0} small />
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="pkt-container">
      <ReturnBtn 
        text={translations[language]?.category?.backToCategories || translations.no.category.backToCategories}
        href="/category" />

      <ProgressBar value={totalProgress} label="Tema-progresjon" />

      <div className="theme-grid">
        {themes.map((item) => {
          const themeProgress = getSingleThemeProgress(item.id);
          const completed = themeProgress === 100;

          return (
            <button
              key={item.id}
              type="button"
              className={themeCardClass}
              onClick={() => handleClick(item.id)}
            >
              <div className="theme-card__header">
                <span className="theme-card__title">
                  {item.title[language] || item.title.no}
                </span>

                {completed && (
                  <img
                    src="https://punkt-cdn.oslo.kommune.no/16/icons/check-medium.svg"
                    alt="Fullført tema"
                    className="theme-card__check"
                    width={24}
                    height={24}
                  />
                )}
              </div>

              <ProgressBar value={themeProgress} small />
            </button>
          );
        })}
      </div>
    </main>
  );
}