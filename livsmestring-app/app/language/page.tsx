"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getProgress } from "@/lib/storage";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const progress = getProgress();

    if (progress.language) {
      router.replace("/category");
    } else {
      router.replace("/language");
    }
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p>Laster...</p>
    </main>
  );
}