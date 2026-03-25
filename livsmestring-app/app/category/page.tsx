"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { clearSelectedLanguage, getProgress, setCategory } from "@/lib/storage";

export default function CategoryPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const progress = getProgress();

    if (!progress.selectedLanguage) {
      router.replace("/language");
      return;
    }

    setReady(true);
  }, [router]);

  const handleChangeLanguage = () => {
    clearSelectedLanguage();
    router.push("/language");
  };

  if (!ready) {
    return (
      <main className="pkt-container">
        <p>Laster...</p>
      </main>
    );
  }

  return (
    <main className="pkt-container">
      <button
        type="button"
        onClick={handleChangeLanguage}
        className="pkt-button pkt-button--tertiary"
      >
        ← Bytt språk
      </button>

      <div className="category-grid">
        <Link
          href="/category/helse"
          className="pkt-linkcard pkt-linkcard--blue"
          onClick={() => setCategory("helse")}
        >
          <div className="pkt-linkcard__title">Helse</div>
          <div className="pkt-linkcard__text">
            Velg temaer og videoer innen helse.
          </div>
        </Link>

        <Link
          href="/category/karriere"
          className="pkt-linkcard pkt-linkcard--blue"
          onClick={() => setCategory("karriere")}
        >
          <div className="pkt-linkcard__title">Karriere</div>
          <div className="pkt-linkcard__text">
            Velg temaer og videoer innen karriere.
          </div>
        </Link>
      </div>
    </main>
  );
}