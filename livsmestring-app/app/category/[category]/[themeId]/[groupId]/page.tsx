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
import ReturnBtn from "@/components/ReturnBtn";
import { translations } from "@/lib/translations";

export default function Page() {
  const router = useRouter();
  const params = useParams();

  const category = params.category as string;
  const theme = params.themeId as string;
  const groupId = params.groupId as string;

  const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);
  const [completedVideoIds, setCompletedVideoIds] = useState<string[]>([]);
  const [language, setLanguage] = useState("no");

  useEffect(() => {
    const progress = getProgress();

    if (!progress.selectedLanguage) {
      router.replace("/language");
      return;
    }

    const selectedLanguage = progress.selectedLanguage;
    setLanguage(selectedLanguage);

    // 🔥 filtrer på groupId (DETTE ER HOVEDPOENGET)
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
        text={text?.category?.backToThemes || "Tilbake"}
        href={`/category/${category}/${theme}`}
      />

      <h1>{groupId.replaceAll("_", " ")}</h1>

      {filteredTopics.length === 0 && <p>Ingen videoer funnet</p>}

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
              {completed ? "Fullført" : "Marker som fullført"}
            </button>
          </div>
        );
      })}
    </main>
  );
}