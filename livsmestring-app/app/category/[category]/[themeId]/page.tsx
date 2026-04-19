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
import Link from "next/link";
import Stepper from "@/components/Stepper";

type ThemeItem = {
  id: string;
  title: Record<string, string>;
};

type GroupItem = {
  id: string;
  title: string;
};

const uiText: Record<
  string,
  {
    empty: string;
    markDone: string;
    done: string;
    themeFallback: string;
    chooseSubtheme: string;
  }
> = {
  no: {
    empty: "Ingen videoer funnet",
    markDone: "Marker som fullført",
    done: "Fullført",
    themeFallback: "Tema",
    chooseSubtheme: "Velg undertema",
  },
  en: {
    empty: "No videos found",
    markDone: "Mark as completed",
    done: "Completed",
    themeFallback: "Theme",
    chooseSubtheme: "Choose subtopic",
  },
  ar: {
    empty: "لم يتم العثور على فيديوهات",
    markDone: "وضع علامة كمكتمل",
    done: "مكتمل",
    themeFallback: "الموضوع",
    chooseSubtheme: "اختر موضوعًا فرعيًا",
  },
  uk: {
    empty: "Відео не знайдено",
    markDone: "Позначити як завершено",
    done: "Завершено",
    themeFallback: "Тема",
    chooseSubtheme: "Оберіть підтему",
  },
  tr: {
    empty: "Video bulunamadı",
    markDone: "Tamamlandı olarak işaretle",
    done: "Tamamlandı",
    themeFallback: "Tema",
    chooseSubtheme: "Alt konu seç",
  },
  ta: {
    empty: "வீடியோக்கள் எதுவும் கிடைக்கவில்லை",
    markDone: "முடிந்தது என குறிக்கவும்",
    done: "முடிந்தது",
    themeFallback: "தலைப்பு",
    chooseSubtheme: "துணைத்தலைப்பை தேர்வு செய்க",
  },
};

export default function Page() {
  const router = useRouter();
  const params = useParams();

  const category = params.category as "helse" | "karriere";
  const themeFromUrl = params.themeId as string;

  const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);
  const [groups, setGroups] = useState<GroupItem[]>([]);
  const [completedVideoIds, setCompletedVideoIds] = useState<string[]>([]);
  const [themeTitle, setThemeTitle] = useState("Tema");
  const [language, setLanguage] = useState("no");
  const [hasGroups, setHasGroups] = useState(false);

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const progress = getProgress();

    if (!progress.selectedLanguage) {
      router.replace("/language");
      return;
    }

    const selectedLanguage = progress.selectedLanguage;
    setLanguage(selectedLanguage);

    const themeList: ThemeItem[] =
      category === "helse" ? healthThemes : careerThemes;

    const foundTheme = themeList.find((item) => item.id === themeFromUrl);

    setThemeTitle(
      foundTheme?.title?.[selectedLanguage] ||
        foundTheme?.title?.no ||
        uiText[selectedLanguage]?.themeFallback ||
        "Tema"
    );

    const themeTopics = topics
      .filter(
        (item) =>
          item.language === selectedLanguage &&
          item.category === category &&
          item.theme === themeFromUrl
      )
      .sort((a, b) => Number(a.order) - Number(b.order));

    const groupedTopics = themeTopics.filter(
      (item) => item.groupId && item.groupId.trim() !== ""
    );

    if (groupedTopics.length > 0) {
      setHasGroups(true);

      const uniqueGroups: GroupItem[] = Array.from(
        new Map(
          groupedTopics.map((item) => [
            item.groupId!,
            {
              id: item.groupId!,
              title:
                item.groupTitle?.trim() || item.groupId!.replaceAll("_", " "),
            },
          ])
        ).values()
      );

      setGroups(uniqueGroups);
      setFilteredTopics([]);
    } else {
      setHasGroups(false);
      setGroups([]);
      setFilteredTopics(themeTopics);
    }

    const completed =
      progress.languages?.[selectedLanguage]?.completedVideos ?? [];
    setCompletedVideoIds(completed);
  }, [router, category, themeFromUrl]);

  useEffect(() => {
    if (filteredTopics.length === 0) return;

    const firstIncomplete = filteredTopics.findIndex(
      (item) =>
        !completedVideoIds.includes(item.synthesiaId || "")
    );

    setCurrentStep(firstIncomplete === -1 ? 0 : firstIncomplete);
  }, [filteredTopics, completedVideoIds]);

  const handleMarkCompleted = (synthesiaId: string) => {
    if (!synthesiaId) return;

    markVideoCompleted(synthesiaId);

    setCompletedVideoIds((prev) =>
      prev.includes(synthesiaId) ? prev : [...prev, synthesiaId]
    );
  };

  const text = uiText[language] || uiText.no;

  const subthemeCardClass =
    category === "helse"
      ? "subtheme-card subtheme-card--health"
      : "subtheme-card subtheme-card--career";

  return (
    <main className="pkt-container">
      <ReturnBtn
        text={
          translations[language]?.category?.backToThemes ||
          translations.no.category.backToThemes
        }
        href={`/category/${category}`}
      />

      <h1 style={{ textAlign: 'center', margin: '24px 0 40px 0', fontSize: '2rem', fontWeight: 600 }}>{themeTitle}</h1>

      {hasGroups && (
        <>
          <h2 className="page-title">{text.chooseSubtheme}</h2>

          <div className="subtheme-grid">
            {groups.map((group) => (
              <Link
                key={group.id}
                href={`/category/${category}/${themeFromUrl}/${group.id}`}
                className={subthemeCardClass}
              >
                <div className="subtheme-card__header">
                  <span className="subtheme-card__title">{group.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {!hasGroups && filteredTopics.length === 0 && <p>{text.empty}</p>}

      
      {!hasGroups && filteredTopics.length > 0 && (
        <Stepper
          topics={filteredTopics}
          completedVideoIds={completedVideoIds}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          handleMarkCompleted={handleMarkCompleted}
          text={text}
        />
      )}
    </main>
  );
}
