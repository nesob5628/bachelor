"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Redirect the root route to language selection on first load.
  useEffect(() => {
    router.replace("/language");
  }, [router]);

  return null;
}