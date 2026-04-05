"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { clearSelectedLanguage, getProgress, setCategory } from "@/lib/storage";
import FooterMenu from "../footerMenu";

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
    <><main className="pkt-container">
      <button
        type="button"
        onClick={handleChangeLanguage}
        className="pkt-button pkt-button--white return-button"
      >
        <img
          src="https://punkt-cdn.oslo.kommune.no/16/icons/arrow-return.svg"
          alt="Tilbake"
          className="return-icon" />
        Bytt språk
      </button>

      <div className="category-grid">
        <Link
          href="/category/helse"
          className="pkt-linkcard pkt-linkcard--blue"
          onClick={() => setCategory("helse")}
        >
          <div className="pkt-linkcard__title-wrapper">
            <img
              src="https://punkt-cdn.oslo.kommune.no/16/icons/ecg-heart.svg"
              alt="Helse"
              className="pkt-linkcard__icon" />
            <div className="pkt-linkcard__title">Helse</div>
          </div>
          <div className="pkt-linkcard__text">
            Velg temaer og videoer innen helse.
          </div>
        </Link>

        <Link
          href="/category/karriere"
          className="pkt-linkcard pkt-linkcard--blue"
          onClick={() => setCategory("karriere")}
        >
          <div className="pkt-linkcard__title-wrapper">
            <img
              src="https://punkt-cdn.oslo.kommune.no/16/icons/briefcase.svg"
              alt="Karriere"
              className="pkt-linkcard__icon" />
            <div className="pkt-linkcard__title">Karriere</div>
          </div>
          <div className="pkt-linkcard__text">
            Velg temaer og videoer innen karriere.
          </div>
        </Link>
      </div>
    </main><FooterMenu /></>
  );
} 
