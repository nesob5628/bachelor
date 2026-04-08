"use client";

import "./globals.scss";
import Link from "next/link";
import { clearSelectedLanguage } from "@/lib/storage";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        

        <div className="header-icons">
          <Link href="/category" aria-label="Gå til hjemsiden">
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
          <Link href="/category/helse" aria-label="Gå til helsesiden">
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
          <Link href="/category/karriere" aria-label="Gå til karrieresiden">
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
          <Link href="/language" aria-label="Gå til språksiden">
            <img
              src="https://punkt-cdn.oslo.kommune.no/16/icons/language.svg"
              alt=""
              className="header-icon"
              width={24} onClick={clearSelectedLanguage}
              height={24}
            />
          </Link>
        </div>




      
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}