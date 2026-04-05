import "./globals.scss";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Livsmestring",
  description: "Livsmestring-app",
};

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
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}