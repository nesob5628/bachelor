"use client";
import "./globals.scss";
import Link from "next/link";
import { clearSelectedLanguage } from "@/lib/storage";
import { useState } from "react";
import { usePathname } from "next/navigation";
import FooterMenu from "./footerMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <html lang="no">
      <head>
        <link
          rel="stylesheet"
          href="https://punkt-cdn.oslo.kommune.no/16/css/pkt.min.css"
        />
      </head>
      <body>
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

          <div className="header-actions">
            <button
              type="button"
              className="header-menu-toggle"
              aria-controls="header-action-menu"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <img
                src="https://punkt-cdn.oslo.kommune.no/16/icons/menu.svg"
                alt=""
                width={24}
                height={24}
              />
            </button>

            <div
              id="header-action-menu"
              className={`header-actions-menu ${menuOpen ? "is-open" : ""}`}
            >
              <div className="header-icons">
                <Link href="/category" aria-label="Gå til hjemsiden" onClick={() => setMenuOpen(false)}>
                  <img
                    src="https://punkt-cdn.oslo.kommune.no/16/icons/home.svg"
                    alt=""
                    className="header-icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>

              <div className="header-icons">
                <Link href="/category/helse" aria-label="Gå til helsesiden" onClick={() => setMenuOpen(false)}>
                  <img
                    src="https://punkt-cdn.oslo.kommune.no/16/icons/ecg-heart.svg"
                    alt=""
                    className="header-icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>

              <div className="header-icons">
                <Link href="/category/karriere" aria-label="Gå til karrieresiden" onClick={() => setMenuOpen(false)}>
                  <img
                    src="https://punkt-cdn.oslo.kommune.no/16/icons/briefcase.svg"
                    alt=""
                    className="header-icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>

              <div className="header-icons">
                <Link href="/language" aria-label="Gå til språksiden" onClick={() => setMenuOpen(false)}>
                  <img
                    src="https://punkt-cdn.oslo.kommune.no/16/icons/language.svg"
                    alt=""
                    className="header-icon"
                    width={24}
                    height={24}
                    onClick={clearSelectedLanguage}
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {pathname !== '/language' && (
          <div className="mobile-footer">
            <FooterMenu />
          </div>
        )}
      </body>
    </html>
  );
}