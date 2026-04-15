"use client";

import { topics } from "@/lib/data/videos";
import { Topic } from "@/lib/types";
import {
  getProgress,
  markVideoCompleted,
  isVideoCompleted,
} from "@/lib/storage";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { healthThemes } from "@/lib/themes/health_themes";
import { careerThemes } from "@/lib/themes/career_themes";
import ReturnBtn from "@/components/ReturnBtn";
import { translations } from "@/lib/translations";

type ThemeItem = {
  id: string;
  title: Record<string, string>;
};

const uiText: Record<
  string,
  {
    empty: string;
    markDone: string;
    done: string;
    themeFallback: string;
  }
> = {
  no: {
    empty: "Ingen videoer funnet",
    markDone: "Marker som fullført",
    done: "Fullført",
    themeFallback: "Tema",
  },
  en: {
    empty: "No videos found",
    markDone: "Mark as completed",
    done: "Completed",
    themeFallback: "Theme",
  },
  ar: {
    empty: "لم يتم العثور على فيديوهات",
    markDone: "وضع علامة كمكتمل",
    done: "مكتمل",
    themeFallback: "الموضوع",
  },
  uk: {
    empty: "Відео не знайдено",
    markDone: "Позначити як завершено",
    done: "Завершено",
    themeFallback: "Тема",
  },
  tr: {
    empty: "Video bulunamadı",
    markDone: "Tamamlandı olarak işaretle",
    done: "Tamamlandı",
    themeFallback: "Tema",
  },
  ta: {
    empty: "வீடியோக்கள் எதுவும் கிடைக்கவில்லை",
    markDone: "முடிந்தது என குறிக்கவும்",
    done: "முடிந்தது",
    themeFallback: "தலைப்பு",
  },
};

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const category = params.category as 'helse' | 'karriere';

  const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);
  const [completedVideoIds, setCompletedVideoIds] = useState<string[]>([]);
  const [themeTitle, setThemeTitle] = useState("Tema");
  const [language, setLanguage] = useState("no");

  useEffect(() => {
    const progress = getProgress();

    if (!progress.selectedLanguage) {
      router.replace("/language");
      return;
    }

    const selectedLanguage = progress.selectedLanguage;
    const languageProgress = progress.languages[selectedLanguage];

    if (!languageProgress?.category) {
      router.replace("/category");
      return;
    }

    if (!languageProgress?.theme) {
      router.replace(`/category/${languageProgress.category}`);
      return;
    }

    setLanguage(selectedLanguage);

    const { category, theme } = languageProgress;

    const themeList: ThemeItem[] =
      category === "helse" ? healthThemes : careerThemes;

    const foundTheme = themeList.find((item) => item.id === theme);

    setThemeTitle(
      foundTheme?.title?.[selectedLanguage] ||
        foundTheme?.title?.no ||
        uiText[selectedLanguage]?.themeFallback ||
        "Tema"
    );

    const filtered = topics
      .filter(
        (item) =>
          item.language === selectedLanguage &&
          item.category === category &&
          item.theme === theme
      )
      .sort((a, b) => Number(a.order) - Number(b.order));

    setFilteredTopics(filtered);

    const completed =
      progress.languages?.[selectedLanguage]?.completedVideos ?? [];
    setCompletedVideoIds(completed);
  }, [router]);

  const handleMarkCompleted = (synthesiaId: string) => {
    markVideoCompleted(synthesiaId);

    setCompletedVideoIds((prev) =>
      prev.includes(synthesiaId) ? prev : [...prev, synthesiaId]
    );
  };

  const text = uiText[language] || uiText.no;

  return (
    <main className="pkt-container">
      <ReturnBtn 
        text={translations[language]?.category?.backToThemes || translations.no.category.backToThemes}
        href={`/category/${category}`} />

      <h1>{themeTitle}</h1>

      {filteredTopics.length === 0 && <p>{text.empty}</p>}

      {filteredTopics.map((item, i) => {
        const completed =
          completedVideoIds.includes(item.synthesiaId) ||
          isVideoCompleted(item.synthesiaId);

        return (
          <div key={item.synthesiaId || i} className="video-card">
            <h3>{item.title}</h3>

            {item.synthesiaId && (
              <iframe
                width="100%"
                height="300"
                src={`https://share.synthesia.io/embeds/videos/${item.synthesiaId}`}
                title={item.title}
                allow="encrypted-media; fullscreen;"
                allowFullScreen
              />
            )}

            <button
              type="button"
              className="pkt-button"
              onClick={() => handleMarkCompleted(item.synthesiaId)}
              disabled={completed}
            >
              {completed ? text.done : text.markDone}
            </button>
          </div>
        );
      })}
    </main>
  );
}