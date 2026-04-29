"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getProgress } from "@/lib/storage";
import { translations } from "@/lib/translations";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("no");
  const router = useRouter();
  const pathname = usePathname();


  const [hasLanguage, setHasLanguage] = useState(false);
  const isLanguagePage = pathname.startsWith("/language");
  const canNavigateCategories = hasLanguage && !isLanguagePage;

  useEffect(() => {
    const updateLanguage = () => {
      const progress = getProgress();
      setLanguage(progress.selectedLanguage || "no");
      setHasLanguage(!!progress.selectedLanguage);
    };

    updateLanguage();

    window.addEventListener("storage", updateLanguage);
    window.addEventListener("languageChanged", updateLanguage);

    return () => {
      window.removeEventListener("storage", updateLanguage);
      window.removeEventListener("languageChanged", updateLanguage);
    };
  }, []);

        useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const text = translations[language] || translations.no;

  return (
    <header className="oslo-header">
      <div className="brand-header">
        <Link href="/category" aria-label="Gå til kategorisiden">
          <img
            src="https://punkt-cdn.oslo.kommune.no/16/logos/oslologo.svg"
            alt="Oslo kommune"
            className="brand-header__logo"
          />
        </Link>
      </div>

      <div className="brand-livsmestring">
        <span className="brand-livsmestring__title">Livsmestring</span>
      </div>

      <div className="header-spacer" />

      {menuOpen && (
      <button
        type="button"
        className="header-menu-backdrop"
        aria-label="Lukk meny"
        onClick={() => setMenuOpen(false)}
      />
    )}

      <div className="header-actions">
        <button
          type="button"
          className="header-menu-toggle"
          aria-controls="header-action-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className={`hamburger ${menuOpen ? "is-open" : ""}`} aria-hidden="true">
            <span className="hamburger__part hamburger__part--top" />
            <span className="hamburger__part hamburger__part--x1" />
            <span className="hamburger__part hamburger__part--x2" />
            <span className="hamburger__part hamburger__part--bottom" />
          </div>
        </button>

        <div
          id="header-action-menu"
          className={`header-actions-menu ${menuOpen ? "is-open" : ""}`}
        >
          <div className="header-icons">
              <Link
                  href={canNavigateCategories ? "/category" : "#"}
                  onClick={(e) => {
                    if (!canNavigateCategories) {
                      e.preventDefault();
                      router.push("/language?change=true");
                    } else {
                      setMenuOpen(false);
                    }
                  }}
                  className="menu-item"
                >
              <img src="https://punkt-cdn.oslo.kommune.no/16/icons/home.svg" alt="" className="header-icon" />
              <span>{text.menu.home}</span>
            </Link>
          </div>

          <div className="header-icons">
            <Link
              href={canNavigateCategories ? "/category/helse" : "#"}
              onClick={(e) => {
                if (!canNavigateCategories) {
                  e.preventDefault();
                  router.push("/language?change=true");
                } else {
                  setMenuOpen(false);
                }
              }}
              className="menu-item"
            >
              <img src="https://punkt-cdn.oslo.kommune.no/16/icons/ecg-heart.svg" alt="" className="header-icon" />
              <span>{text.menu.health}</span>
            </Link>
          </div>

          <div className="header-icons">
            <Link
              href={canNavigateCategories ? "/category/karriere" : "#"}
              onClick={(e) => {
                if (!canNavigateCategories) {
                  e.preventDefault();
                  router.push("/language?change=true");
                } else {
                  setMenuOpen(false);
                }
              }}
              className="menu-item"
            >
              <img src="https://punkt-cdn.oslo.kommune.no/16/icons/briefcase.svg" alt="" className="header-icon" />
              <span>{text.menu.career}</span>
            </Link>
          </div>

          <div className="header-icons">
            <Link
              href="/language?change=true"
              onClick={() => {
                setMenuOpen(false);
              }}
              className="menu-item"
            >
              <img src="https://punkt-cdn.oslo.kommune.no/16/icons/language.svg" alt="" className="header-icon" />
              <span>{text.menu.language}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}