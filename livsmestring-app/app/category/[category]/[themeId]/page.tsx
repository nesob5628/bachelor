"use client";

import Image from "next/image";
import { topics } from "@/lib/videos";
import { Topic } from "@/lib/types";
import { getProgress, markVideoCompleted, unmarkVideoCompleted } from "@/lib/storage";
import { useState, useEffect, useMemo } from "react";
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
) => title[language] || title.no;

const resolveGroupTitle = (groupId: string, lang: string, themeId: string) => {
  const theme = healthThemes.find((item) => item.id === themeId);
  const group = theme?.groups?.find((item) => item.id === groupId);
  return group ? getTitle(group.title, lang) : groupId.replaceAll("_", " ");
};

export default function Page() {
  const router = useRouter();
  const params = useParams();

  const category = params.category as "helse" | "karriere";
  const themeFromUrl = params.themeId as string;

  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState("");
  const [completedVideoIds, setCompletedVideoIds] = useState<string[]>([]);

  useEffect(() => {
    const progress = getProgress();
    const lang = progress.selectedLanguage || "";
    setLanguage(lang);
    setCompletedVideoIds(lang ? (progress.languages?.[lang]?.completedVideos ?? []) : []);
    setMounted(true);
  }, []);

  // Ensure we have a valid language, fallback to Norwegian if not
  const safeLanguage = translations[language] ? language : "no";

  const themeTitle = useMemo(() => {
    if (!language) return "Tema";
    const safeLang = translations[language] ? language : "no";
    const themeList = category === "helse" ? healthThemes : careerThemes;
    const foundTheme = themeList.find((item) => item.id === themeFromUrl);
    return foundTheme
      ? getTitle(foundTheme.title, safeLang)
      : (translations[safeLang]?.subtopic?.themeFallback ?? "Tema");
  }, [language, category, themeFromUrl]);

  const { filteredTopics, groups, hasGroups } = useMemo(() => {
    if (!language) return { filteredTopics: [] as Topic[], groups: [] as GroupItem[], hasGroups: false };
    const safeLang = translations[language] ? language : "no";
    const themeList = category === "helse" ? healthThemes : careerThemes;
    const foundTheme = themeList.find((item) => item.id === themeFromUrl);

    const themeTopics = topics
      .filter(
        (item) =>
          item.language === language &&
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
      const uniqueGroups: GroupItem[] = Array.from(
        new Map(
          groupedTopics.map((item) => [
            item.groupId!,
            {
              id: item.groupId!,
              title: resolveGroupTitle(item.groupId!, safeLang, themeFromUrl),
            },
          ])
        ).values()
      );
      return { filteredTopics: [] as Topic[], groups: uniqueGroups, hasGroups: true };
    }

    return { filteredTopics: themeTopics, groups: [] as GroupItem[], hasGroups: false };
  }, [language, category, themeFromUrl]);

  useEffect(() => {
    if (mounted && !language) {
      router.replace("/language");
    }
  }, [router, language, mounted]);

  const handleMarkCompleted = (synthesiaId: string, checked: boolean) => {
    if (!synthesiaId) return;
    if (checked) {
      markVideoCompleted(synthesiaId);
      setCompletedVideoIds((prev) =>
        prev.includes(synthesiaId) ? prev : [...prev, synthesiaId]
      );
    } else {
      unmarkVideoCompleted(synthesiaId);
      setCompletedVideoIds((prev) => prev.filter((id) => id !== synthesiaId));
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

  if (!mounted || !language) return <Loading />;

  return (
    <main className="pkt-container">
      <ReturnBtn
        text={categoryText.backToThemes}
        href={`/category/${category}`}
      />

      <h1 className="theme-heading">{themeTitle}</h1>

      <div className="theme-progress">
        <ProgressBar value={getThemeProgress()} />
      </div>

      {hasGroups && (
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
                    <div className="theme-card__check">
                      <Image
                        src="https://punkt-cdn.oslo.kommune.no/16/icons/check-medium.svg"
                        alt="Fullført undertema"
                        fill
                      />
                    </div>
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

      {!hasGroups && filteredTopics.length === 0 && (
        <MessageBox title={themeText.empty}>
          {themeText.emptyDescription}
        </MessageBox>
      )}

      {!hasGroups && filteredTopics.length > 0 && (
        <Stepper
          topics={filteredTopics}
          completedVideoIds={completedVideoIds}
          handleMarkCompleted={handleMarkCompleted}
          category={category}
        />
      )}
    </main>
  );
}
