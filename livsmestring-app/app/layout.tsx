"use client";

import "./globals.scss";
import Script from "next/script";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import FooterMenu from "@/components/FooterMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Script
          src="https://punkt-cdn.oslo.kommune.no/16/elements/pkt-progressbar.js"
          type="module"
          strategy="afterInteractive"
        />

        <Header />

        <main>{children}</main>

        {pathname !== "/language" && (
          <div className="mobile-footer">
            <FooterMenu />
          </div>
        )}
      </body>
    </html>
  );
}