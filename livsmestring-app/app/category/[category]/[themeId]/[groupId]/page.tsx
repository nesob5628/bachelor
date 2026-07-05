"use client";

import { topics } from "@/lib/videos";
import { Topic } from "@/lib/types";
import {
  getProgress,
  markVideoCompleted,
  unmarkVideoCompleted,
} from "@/lib/storage";
import { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import ReturnBtn from "@/components/ReturnBtn";
import { translations } from "@/lib/translations";
import Stepper from "@/components/Stepper";
import MessageBox from "@/components/MessageBox";
import { healthThemes } from "@/lib/themes/health_themes";
import ProgressBar from "@/components/ProgressBar";
import Loading from "@/components/Loading";

// Resolve the localized title for a theme, group, or subtopic.
const getTitle = (
  title: { no: string } & Record<string, string>,
  language: string
) => title[language] || title.no;

export default function Page() {
  const router = useRouter();
  const params = useParams();

  const category = params.category as "helse" | "karriere";
  const theme = params.themeId as string;
  const groupId = params.groupId as string;

  const [language] = useState(() => getProgress().selectedLanguage || "");
  const [completedVideoIds, setCompletedVideoIds] = useState<string[]>(() => {
    if (!language) return [];
    return getProgress().languages?.[language]?.completedVideos ?? [];
  });

  const safeLanguage = translations[language] ? language : "no";
  const text = translations[safeLanguage] ?? translations.no;

  // Build the localized title for the current group.
  const groupTitle = useMemo(() => {
    if (!language) return groupId.replaceAll("_", " ");
    const safeLang = translations[language] ? language : "no";
    const themeData = healthThemes.find((item) => item.id === theme);
    const group = themeData?.groups?.find((item) => item.id === groupId);
    return group ? getTitle(group.title, safeLang) : groupId.replaceAll("_", " ");
  }, [language, theme, groupId]);

  // Filter videos for the current language, category, theme, and group.
  const filteredTopics = useMemo<Topic[]>(() => {
    if (!language) return [];
    const themeData = healthThemes.find((item) => item.id === theme);
    const groupData = themeData?.groups?.find((item) => item.id === groupId);

    return topics
      .filter(
        (item) =>
          item.language === language &&
          item.category === category &&
          item.theme === theme &&
          item.groupId === groupId
      )
      .map((item) => {
        const subtopic = groupData?.subtopics?.find(
          (sub) => sub.id === item.subtopicId
        );
        return {
          ...item,
          subtopicTitle: subtopic
            ? getTitle(subtopic.title, language)
            : item.subtopicTitle,
        };
      })
      .sort((a, b) => Number(a.order) - Number(b.order));
  }, [language, category, theme, groupId]);

  useEffect(() => {
    if (!language) {
      router.replace("/language");
    }
  }, [router, language]);

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

  const groupProgress = useMemo(() => {
    if (filteredTopics.length === 0) return 0;
    const completed = filteredTopics.filter((item) =>
      completedVideoIds.includes(item.synthesiaId)
    ).length;
    return Math.round((completed / filteredTopics.length) * 100);
  }, [filteredTopics, completedVideoIds]);

  if (!language) return <Loading />;

  return (
    <main className="pkt-container">
      <ReturnBtn
        text={text.category.backToThemes}
        href={`/category/${category}/${theme}`}
      />

      <h1 className="theme-heading">{groupTitle}</h1>

      <div className="theme-progress">
        <ProgressBar value={groupProgress} />
      </div>

      {filteredTopics.length === 0 && (
        <MessageBox title={text.subtopic.empty}>
          {text.subtopic.emptyDescription}
        </MessageBox>
      )}

      {filteredTopics.length > 0 && (
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
