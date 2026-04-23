"use client";

import { topics } from "@/lib/videos";
import { Topic } from "@/lib/types";
import { getProgress, markVideoCompleted } from "@/lib/storage";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import ReturnBtn from "@/components/ReturnBtn";
import { translations } from "@/lib/translations";
import Stepper from "@/components/Stepper";
import MessageBox from "@/components/MessageBox";
import { healthThemes } from "@/lib/themes/health_themes";

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
  const theme = params.themeId as string;
  const groupId = params.groupId as string;

  const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);
  const [completedVideoIds, setCompletedVideoIds] = useState<string[]>([]);
  const [language, setLanguage] = useState("no");
  const [currentStep, setCurrentStep] = useState(0);

  const safeLanguage = translations[language] ? language : "no";
  const text = translations[safeLanguage] ?? translations.no;

  const getGroupTitle = () => {
    const themeData = healthThemes.find((item) => item.id === theme);
    const group = themeData?.groups?.find((item) => item.id === groupId);

    return group
      ? getTitle(group.title, safeLanguage)
      : groupId.replaceAll("_", " ");
  };

  useEffect(() => {
    const progress = getProgress();

    if (!progress.selectedLanguage) {
      router.replace("/language");
      return;
    }

    const selectedLanguage = progress.selectedLanguage;
    setLanguage(selectedLanguage);

    const filtered = topics
      .filter(
        (item) =>
          item.language === selectedLanguage &&
          item.category === category &&
          item.theme === theme &&
          item.groupId === groupId
      )
      .sort((a, b) => Number(a.order) - Number(b.order));

    setFilteredTopics(filtered);

    const completed =
      progress.languages?.[selectedLanguage]?.completedVideos ?? [];

    setCompletedVideoIds(completed);
  }, [router, category, theme, groupId]);

  useEffect(() => {
    if (filteredTopics.length === 0) return;

    const firstIncomplete = filteredTopics.findIndex(
      (item) => !completedVideoIds.includes(item.synthesiaId)
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

  return (
    <main className="pkt-container">
      <ReturnBtn
        text={text.category.backToThemes}
        href={`/category/${category}/${theme}`}
      />

      <h1 className="theme-heading">{getGroupTitle()}</h1>

      {filteredTopics.length === 0 && (
        <MessageBox title={text.subtopic.empty}>
          {text.subtopic.emptyDescription}
        </MessageBox>
      )}

      {filteredTopics.length > 0 && (
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