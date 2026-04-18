import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Livsmestring",
    short_name: "Livsmestring",
    description: "En læringsapp for livsmestring i et nytt land",
    start_url: "/",
    display: "standalone",
    background_color: "#D0BFAE",
    theme_color: "#2A2859",
    lang: "no",
    orientation: "portrait",
    scope: "/",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}