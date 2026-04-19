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
        <ol className="pkt-stepper pkt-stepper--vertical">
          {filteredTopics.map((item, i) => {
            const completed =
              !!item.synthesiaId &&
              (completedVideoIds.includes(item.synthesiaId) ||
                isVideoCompleted(item.synthesiaId));

            let stepClass = "pkt-step";

            if (completed) stepClass += " pkt-step--completed";
            else if (i === currentStep) stepClass += " pkt-step--current";
            else stepClass += " pkt-step--incomplete";

            return (
              <li key={item.synthesiaId || i} className={stepClass}>
                <span className="pkt-step__line pkt-step__line--1" aria-hidden="true" />
                <span className="pkt-step__line pkt-step__line--2" aria-hidden="true" />

                <span className="pkt-step__indicator">
                  {completed ? (
                    <svg width="24" height="24" fill="none">
                      <path fill="#2A2859" d="M3 3h18v18H3z" />
                      <path
                        d="m10.34 16-1.11-1.14L7 12.58l1.11-1.15 2.23 2.28L15.88 8 17 9.15l-5.55 5.71L10.34 16Z"
                        fill="#F1FDFF"
                      />
                    </svg>
                  ) : i === currentStep ? (
                    <svg width="24" height="24" fill="none">
                      <circle opacity=".15" cx="12" cy="12" r="12" fill="#2A2859" />
                      <circle cx="12" cy="12" r="6" fill="#2A2859" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="7"
                        style={{ fill: "var(--pkt-color-grays-grey-200, #CCC)" }}
                      />
                    </svg>
                  )}
                </span>

                <span className="pkt-step__line pkt-step__line--3" aria-hidden="true" />

                <div className="pkt-step__wrapper">
                  <div
                    className="pkt-step__title"
                    onClick={() => setCurrentStep(i)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.subtopicTitle}
                  </div>

                  {i === currentStep && (
                    <div className="pkt-step__content">
                      {item.synthesiaId && (
                        <iframe
                          width="100%"
                          height="300"
                          src={`https://share.synthesia.io/embeds/videos/${item.synthesiaId}`}
                          title={item.subtopicTitle}
                          allow="encrypted-media; fullscreen;"
                          allowFullScreen
                        />
                      )}

                      {item.synthesiaId && (
                        <button
                          className="pkt-button"
                          onClick={() =>
                            handleMarkCompleted(item.synthesiaId!)
                          }
                          disabled={completed}
                        >
                          {completed ? text.done : text.markDone}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </main>
  );
}
