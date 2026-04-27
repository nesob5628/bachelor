"use client";

import { topics } from "@/lib/videos";
import { Topic } from "@/lib/types";
import { getProgress, markVideoCompleted, unmarkVideoCompleted } from "@/lib/storage";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { healthThemes } from "@/lib/themes/health_themes";
import { careerThemes } from "@/lib/themes/career_themes";
import ReturnBtn from "@/components/ReturnBtn";
import { translations } from "@/lib/translations";
import Link from "next/link";
import Loading from "@/components/Loading";
import Stepper from "@/components/Stepper";
import ProgressBar from "@/components/ProgressBar";
import MessageBox from "@/components/MessageBox";


type GroupItem = {
  id: string;
  title: string;
};

const getTitle = (
  title: { no: string } & Record<string, string>,
  language: string
) => {
  return title[language] || title.no;
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
  const [isLoading, setIsLoading] = useState(true);

  const safeLanguage = translations[language] ? language : "no";

  const getGroupTitle = (groupId: string, lang: string) => {
    const theme = healthThemes.find((item) => item.id === themeFromUrl);
    const group = theme?.groups?.find((item) => item.id === groupId);

    return group
      ? getTitle(group.title, lang)
      : groupId.replaceAll("_", " ");
  };

  useEffect(() => {
    const progress = getProgress();

    if (!progress.selectedLanguage) {
      router.replace("/language");
      return;
    }

    const selectedLanguage = progress.selectedLanguage;
    const safeLang = translations[selectedLanguage] ? selectedLanguage : "no";

    setLanguage(selectedLanguage);

    const selectedTranslation = translations[safeLang];

    const themeList = category === "helse" ? healthThemes : careerThemes;
    const foundTheme = themeList.find((item) => item.id === themeFromUrl);

    setThemeTitle(
      foundTheme
        ? getTitle(foundTheme.title, safeLang)
        : selectedTranslation.subtopic.themeFallback
    );

    const themeTopics = topics
  .filter(
    (item) =>
      item.language === selectedLanguage &&
      item.category === category &&
      item.theme === themeFromUrl
  )
  .map((item) => {
    const subtopic = foundTheme?.subtopics?.find(
      (sub) => sub.id === item.subtopicId
    );

    return {
      ...item,
      subtopicTitle: subtopic
        ? getTitle(subtopic.title, safeLang)
        : item.subtopicTitle,
    };
  })
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
              title: getGroupTitle(item.groupId!, safeLang),
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
    setIsLoading(false);
  }, [router, category, themeFromUrl]);

  useEffect(() => {
    if (filteredTopics.length === 0) return;

    const firstIncomplete = filteredTopics.findIndex(
      (item) => !completedVideoIds.includes(item.synthesiaId)
    );

    setCurrentStep(firstIncomplete === -1 ? 0 : firstIncomplete);
  }, [filteredTopics, completedVideoIds]);

    const handleMarkCompleted = (synthesiaId: string, checked: boolean) => {
      if (!synthesiaId) return;

      if (checked) {
        markVideoCompleted(synthesiaId);

        setCompletedVideoIds((prev) =>
          prev.includes(synthesiaId) ? prev : [...prev, synthesiaId]
        );
      } else {
        unmarkVideoCompleted(synthesiaId);

        setCompletedVideoIds((prev) =>
          prev.filter((id) => id !== synthesiaId)
        );
      }
    };

  const text = translations[safeLanguage] ?? translations.no;
  const categoryText = text.category ?? translations.no.category;
  const themeText = text.theme ?? translations.no.theme;

  const subthemeCardClass =
    category === "helse"
      ? "subtheme-card subtheme-card--health"
      : "subtheme-card subtheme-card--career";

  const getThemeProgress = () => {
    const allVideos = topics.filter(
      (item) =>
        item.language === language &&
        item.category === category &&
        item.theme === themeFromUrl
    );

    if (allVideos.length === 0) return 0;

    const completed = allVideos.filter((item) =>
      completedVideoIds.includes(item.synthesiaId)
    ).length;

    return Math.round((completed / allVideos.length) * 100);
  };

  const getGroupProgress = (groupId: string) => {
    const allVideos = topics.filter(
      (item) =>
        item.language === language &&
        item.category === category &&
        item.theme === themeFromUrl &&
        item.groupId === groupId
    );

    if (allVideos.length === 0) return 0;

    const completed = allVideos.filter((item) =>
      completedVideoIds.includes(item.synthesiaId)
    ).length;

    return Math.round((completed / allVideos.length) * 100);
  };

  const themeProgress = getThemeProgress();

  return (
    <main className="pkt-container">
      <ReturnBtn
        text={categoryText.backToThemes}
        href={`/category/${category}`}
      />

      <h1 className="theme-heading">{themeTitle}</h1>

      <div className="theme-progress">
        <ProgressBar value={themeProgress}/>
      </div>

      {isLoading && <Loading />}

      {!isLoading && hasGroups && (
        <div className="subtheme-grid">
          {groups.map((group) => {
            const progress = getGroupProgress(group.id);

            return (
              <Link
                key={group.id}
                href={`/category/${category}/${themeFromUrl}/${group.id}`}
                className={subthemeCardClass}
              >
                <div className="subtheme-card__header">
                  <span className="subtheme-card__title">{group.title}</span>

                  {progress === 100 && (
                    <img
                      src="https://punkt-cdn.oslo.kommune.no/16/icons/check-medium.svg"
                      alt="Fullført undertema"
                      className="theme-card__check"
                      width={24}
                      height={24}
                    />
                  )}
                </div>

                <div className="subtheme-card__progress">
                  <ProgressBar value={progress} small />
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {!isLoading && !hasGroups && filteredTopics.length === 0 && (
        <MessageBox title={themeText.empty}>
          {themeText.emptyDescription}
        </MessageBox>
      )}

      {!isLoading && !hasGroups && filteredTopics.length > 0 && (
        <Stepper
          topics={filteredTopics}
          completedVideoIds={completedVideoIds}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          handleMarkCompleted={handleMarkCompleted}
          text={text}
          category={category}
        />
      )}
    </main>
  );
}