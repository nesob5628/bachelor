"use client";

export default function Home() {

  const speak = () => {
    const text =
      "";

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <main className="min-h-screen bg-white p-4 space-y-6">
      <h1 className="text-xl font-semibold">
        Test av Synthesia-video
      </h1>

      <button
        onClick={speak}
        className="w-full rounded-2xl bg-black text-white py-4 text-lg"
      >
        🔊 Les opp på tamil
      </button>

      <div className="mx-auto w-full max-w-md">
  <div className="relative overflow-hidden rounded-2xl border pt-[56.25%]">
    <iframe
      src="https://share.synthesia.io/embeds/videos/46623012-eb25-4ed7-abd0-2600205c214c"
      loading="lazy"
      title="Synthesia video player - 1. Valgfrihet"
      allowFullScreen
      allow="encrypted-media; fullscreen; microphone;"
      className="absolute left-0 top-0 h-full w-full border-0"
    />
  </div>
</div>
    </main>
  );
}