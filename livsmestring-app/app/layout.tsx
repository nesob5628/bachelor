import "./globals.css";
import type { Metadata } from "next";

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
        <script
        src="https://punkt-cdn.oslo.kommune.no/16/elements/pkt-button.js"
        type="module"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}