"use client";

import { topics } from "@/lib/data/videos";
import { Topic } from "@/lib/types";
import {
  getProgress,
  markVideoCompleted,
} from "@/lib/storage";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import ReturnBtn from "@/components/ReturnBtn";
import { translations } from "@/lib/translations";
import Stepper from "@/components/Stepper";

export default function Page() {
  const router = useRouter();
  const params = useParams();

  const category = params.category as string;
  const theme = params.themeId as string;
  const groupId = params.groupId as string;

  const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);
  const [completedVideoIds, setCompletedVideoIds] = useState<string[]>([]);
  const [language, setLanguage] = useState("no");
  const [currentStep, setCurrentStep] = useState(0);

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

  const handleMarkCompleted = (synthesiaId: string) => {
    markVideoCompleted(synthesiaId);

    setCompletedVideoIds((prev) =>
      prev.includes(synthesiaId) ? prev : [...prev, synthesiaId]
    );
  };

  const text =
    translations[language] || translations.no;

  return (
    <main className="pkt-container">
      <ReturnBtn
        text={text.category.backToThemes}
        href={`/category/${category}/${theme}`}
      />

      <h1>{groupId.replaceAll("_", " ")}</h1>

      {filteredTopics.length === 0 && <p>{text.subtheme.empty}</p> }

      {filteredTopics.length > 0 && (
        <Stepper
          topics={filteredTopics}
          completedVideoIds={completedVideoIds}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          handleMarkCompleted={handleMarkCompleted}
          text={{
            done: text.done,
            markDone: text.markDone,
          }}
        />
      )}
    </main>
  );
}