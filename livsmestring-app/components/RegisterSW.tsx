"use client";

import { useEffect } from "react";

export default function RegisterSW() {
  // Register the service worker on client mount to enable offline support and caching.
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch((error) =>
          console.error("Service worker registration failed:", error)
        );
    }
  }, []);

  // This component renders nothing; it only performs the registration side effect.
  return null;
}