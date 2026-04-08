"use client";

import { useEffect, useState } from "react";
import Loader from "./loading"; // juster path hvis nødvendig

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 sek så du rekker å se den
  }, []);

  if (loading) return <Loader />;

  return <div>Test side</div>;
}