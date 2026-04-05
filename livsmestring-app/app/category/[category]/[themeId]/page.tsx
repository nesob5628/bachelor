"use client";

import { topics } from "@/lib/data/videos";
import { Topic } from "@/lib/types";
import { getProgress } from "@/lib/storage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const progress = getProgress();

    // Hvis noe mangler → send tilbake
    if (!progress.selectedLanguage) {
      router.replace("/language");
      return;
    }

    const language = progress.selectedLanguage;
    const languageProgress = progress.languages[language];

    if (!languageProgress?.category) {
      router.replace("/category");
      return;
    }

    if (!languageProgress?.theme) {
      router.replace(`/category/${languageProgress.category}`);
      return;
    }

    // filtrer riktig data
    const filtered = topics
      .filter(
        (item) =>
          item.language === language &&
          item.category === languageProgress.category &&
          item.theme === languageProgress.theme
      )
      .sort((a, b) => Number(a.order) - Number(b.order));

    setFilteredTopics(filtered);
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <main className="pkt-container">
        <p>Laster...</p>
      </main>
    );
  }

  return (
    <main className="pkt-container">
      <h1>Videoer</h1>

      {filteredTopics.length === 0 && <p>Ingen videoer funnet</p>}

      {filteredTopics.map((item, i) => (
        <div key={item.synthesiaId || i} style={{ marginBottom: "2rem" }}>
          <h3>{item.title}</h3>

          {item.synthesiaId && (
            <iframe
              width="100%"
              height="300"
              src={`https://share.synthesia.io/embeds/videos/${item.synthesiaId}`}
              allow="encrypted-media; fullscreen;"
              allowFullScreen
            />
          )}
        </div>
      ))}
    </main>
  );
}