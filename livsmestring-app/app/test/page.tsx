"use client";

import { useEffect, useMemo, useState } from "react";
import { getProgress, saveProgress } from "@/lib/storage";

const videos = [
  {
    id: "1",
    title: "1. Hva er valgfrihet?",
    url: "https://share.synthesia.io/embeds/videos/46623012-eb25-4ed7-abd0-2600205c214c",
  },
  {
    id: "2",
    title: "2. Å ta egne valg",
    url: "https://share.synthesia.io/embeds/videos/2d37ce0f-b99d-4739-a76f-4bc5f967a98c",
  },
  {
    id: "3",
    title: "3. Konsekvenser",
    url: "https://share.synthesia.io/embeds/videos/46623012-eb25-4ed7-abd0-2600205c214c",
  },
];

type VideoStatus = "not_started" | "in_progress" | "completed";

type Progress = {
  currentVideoId: string;
  videos: Record<string, { status: VideoStatus }>;
};

const defaultProgress: Progress = {
  currentVideoId: videos[0].id,
  videos: {},
};

function normalizeProgress(data: any): Progress {
  if (!data || typeof data !== "object") {
    return defaultProgress;
  }

  const normalized: Progress = {
    currentVideoId:
      typeof data.currentVideoId === "string"
        ? data.currentVideoId
        : videos[0].id,
    videos: {},
  };

  if (data.videos && typeof data.videos === "object") {
    for (const [videoId, value] of Object.entries(data.videos)) {
      if (value && typeof value === "object" && "status" in value) {
        const status = (value as { status?: VideoStatus }).status;

        if (
          status === "not_started" ||
          status === "in_progress" ||
          status === "completed"
        ) {
          normalized.videos[videoId] = { status };
        }
      }

      if (value === true) {
        normalized.videos[videoId] = { status: "completed" };
      }
    }
  }

  return normalized;
}

export default function TemaTest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [showConfirm, setShowConfirm] = useState(false);

  const nextExists = currentIndex < videos.length - 1;

  const progressText = useMemo(
    () => `Video ${currentIndex + 1} av ${videos.length}`,
    [currentIndex]
  );

  useEffect(() => {
    const saved = normalizeProgress(getProgress());
    setProgress(saved);

    const savedIndex = videos.findIndex(
      (video) => video.id === saved.currentVideoId
    );

    if (savedIndex !== -1) {
      setCurrentIndex(savedIndex);
    }
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("Message from iframe:");
      console.log("Origin:", event.origin);
      console.log("Data:", event.data);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const updateProgress = (updated: Progress) => {
    setProgress(updated);
    saveProgress(updated);
  };

  const selectVideo = (idx: number) => {
    const videoId = videos[idx].id;
    const currentStatus = progress.videos[videoId]?.status;

    const updated: Progress = {
      ...progress,
      currentVideoId: videoId,
      videos: {
        ...progress.videos,
        [videoId]: {
          status: currentStatus === "completed" ? "completed" : "in_progress",
        },
      },
    };

    updateProgress(updated);
    setCurrentIndex(idx);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContinueClick = () => {
    setShowConfirm(true);
  };

  const markAsCompletedAndContinue = () => {
    const currentVideoId = videos[currentIndex].id;

    const updatedCurrent: Progress = {
      ...progress,
      currentVideoId,
      videos: {
        ...progress.videos,
        [currentVideoId]: { status: "completed" },
      },
    };

    if (!nextExists) {
      updateProgress(updatedCurrent);
      setShowConfirm(false);
      return;
    }

    const nextIndex = currentIndex + 1;
    const nextVideoId = videos[nextIndex].id;
    const nextStatus = updatedCurrent.videos[nextVideoId]?.status;

    const finalProgress: Progress = {
      ...updatedCurrent,
      currentVideoId: nextVideoId,
      videos: {
        ...updatedCurrent.videos,
        [nextVideoId]: {
          status: nextStatus === "completed" ? "completed" : "in_progress",
        },
      },
    };

    updateProgress(finalProgress);
    setCurrentIndex(nextIndex);
    setShowConfirm(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const continueLater = () => {
    const currentVideoId = videos[currentIndex].id;

    const updated: Progress = {
      ...progress,
      currentVideoId,
      videos: {
        ...progress.videos,
        [currentVideoId]: {
          status:
            progress.videos[currentVideoId]?.status === "completed"
              ? "completed"
              : "in_progress",
        },
      },
    };

    updateProgress(updated);
    setShowConfirm(false);
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
    saveProgress(defaultProgress);
    setCurrentIndex(0);
    setShowConfirm(false);
  };

  const getStatusLabel = (videoId: string) => {
    const status = progress.videos[videoId]?.status;

    if (status === "completed") {
      return {
        text: "Fullført",
        className: "text-green-600",
      };
    }

    if (status === "in_progress") {
      return {
        text: "Pågår",
        className: "text-amber-600",
      };
    }

    return {
      text: "Ikke startet",
      className: "text-gray-400",
    };
  };

  return (
    <>
      <main className="min-h-screen bg-white p-4 max-w-md mx-auto space-y-6 pb-32">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold">Tema: Valgfrihet</h1>
          <p className="text-gray-600">{progressText}</p>
        </header>

        <div className="flex gap-3">
          <button
            onClick={resetProgress}
            className="rounded-xl border px-4 py-2 text-sm font-medium"
          >
            Nullstill progresjon
          </button>
        </div>

        <section className="space-y-4">
          {videos.map((v, idx) => {
            const isActive = idx === currentIndex;
            const status = getStatusLabel(v.id);

            return (
              <div key={v.id} className="rounded-2xl border p-4 space-y-3">
                <button
                  onClick={() => selectVideo(idx)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-lg font-medium">{v.title}</span>
                    <span className={`text-sm font-semibold ${status.className}`}>
                      {status.text}
                    </span>
                  </div>
                </button>

                {isActive && (
                  <div className="relative overflow-hidden rounded-2xl border pt-[56.25%]">
                    <iframe
                      key={v.id}
                      src={v.url}
                      loading="lazy"
                      title={v.title}
                      allowFullScreen
                      allow="encrypted-media; fullscreen; microphone;"
                      className="absolute left-0 top-0 h-full w-full border-0"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </section>

        <div className="sticky bottom-24 bg-white pt-2">
          <button
            onClick={handleContinueClick}
            className={`w-full rounded-2xl py-4 text-lg font-semibold ${
              nextExists ? "bg-black text-white" : "bg-gray-900 text-white"
            }`}
          >
            {nextExists ? "FORTSETT" : "AVSLUTT"}
          </button>
        </div>
      </main>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 space-y-4 shadow-xl">
            <h2 className="text-xl font-semibold">Har du fullført videoen?</h2>
            <p className="text-sm text-gray-600">
              Velg <span className="font-medium">Ja</span> hvis du har sett ferdig.
              Ellers kan videoen stå som <span className="font-medium">Pågår</span>.
            </p>

            <div className="space-y-3">
              <button
                onClick={markAsCompletedAndContinue}
                className="w-full rounded-2xl bg-black py-3 text-white font-semibold"
              >
                Ja, marker som fullført
              </button>

              <button
                onClick={continueLater}
                className="w-full rounded-2xl border py-3 font-semibold"
              >
                Nei, fortsett senere
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner">
        <div className="max-w-md mx-auto flex justify-around py-4 text-sm font-medium">
          <button className="flex flex-col items-center">
            🏠
            <span>Hjem</span>
          </button>

          <button className="flex flex-col items-center">
            📚
            <span>Tema</span>
          </button>

          <button className="flex flex-col items-center">
            🌐
            <span>Språk</span>
          </button>
        </div>
      </nav>
    </>
  );
}