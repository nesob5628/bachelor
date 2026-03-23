"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getProgress } from "@/lib/storage";

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

  function handleChangeLanguage() {
    router.push("/language");
  }

  if (!ready) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Laster...</p>
      </main>
    );
  }

  return (
    <main className="pkt-container">
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleChangeLanguage}>Bytt språk</button>
      </div>

      <div className="category-grid">
        <Link href="/category/helse" className="pkt-linkcard pkt-linkcard--blue">
          <div className="pkt-linkcard__title">Helse</div>
          <div className="pkt-linkcard__text">
            Velg temaer og videoer innen helse.
          </div>
        </Link>
      </div>
    </main>
  );
}