"use client";

import { useMemo, useState } from "react";

const videos = [
  {
    id: "1",
    title: "1. Hva er valgfrihet?",
    url: "https://share.synthesia.io/embeds/videos/46623012-eb25-4ed7-abd0-2600205c214c",
  },
  {
    id: "2",
    title: "2. Å ta egne valg",
    url: "https://share.synthesia.io/embeds/videos/46623012-eb25-4ed7-abd0-2600205c214c",
  },
  {
    id: "3",
    title: "3. Konsekvenser",
    url: "https://share.synthesia.io/embeds/videos/46623012-eb25-4ed7-abd0-2600205c214c",
  },
];

export default function TemaTest() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExists = currentIndex < videos.length - 1;

  const progressText = useMemo(
    () => `Video ${currentIndex + 1} av ${videos.length}`,
    [currentIndex]
  );

  const goNext = () => {
    if (!nextExists) return;
    setCurrentIndex((i) => i + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className="min-h-screen bg-white p-4 max-w-md mx-auto space-y-6 pb-32">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold">Tema: Valgfrihet</h1>
          <p className="text-gray-600">{progressText}</p>
        </header>

        {/* PUNKTLISTE */}
        <section className="space-y-4">
          {videos.map((v, idx) => {
            const isActive = idx === currentIndex;

            return (
              <div key={v.id} className="rounded-2xl border p-4 space-y-3">
                <button
                  onClick={() => setCurrentIndex(idx)}
                  className="w-full text-left text-lg font-medium"
                >
                  {v.title}
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

        {/* FORTSETT */}
        <div className="sticky bottom-24 bg-white pt-2">
          <button
            onClick={goNext}
            disabled={!nextExists}
            className={`w-full rounded-2xl py-4 text-lg font-semibold ${
              nextExists
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {nextExists ? "FORTSETT" : "FERDIG"}
          </button>
        </div>
      </main>

      {/* BUNNMENY */}
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