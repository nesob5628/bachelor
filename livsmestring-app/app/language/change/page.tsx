"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { clearSelectedLanguage } from "@/lib/storage";
import Loading from "@/components/Loading";

export default function ChangeLanguagePage() {
  const router = useRouter();

  useEffect(() => {
    clearSelectedLanguage();
    window.dispatchEvent(new Event("languageChanged"));
    router.replace("/language");
  }, [router]);

  return <Loading />;
}
