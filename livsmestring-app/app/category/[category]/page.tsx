'use client';

import { useParams, useRouter } from 'next/navigation';
import { getProgress, setProgress } from "@/lib/storage";
import { healthThemes } from "@/lib/themes/health_themes";
import { careerThemes } from "@/lib/themes/career_themes";
import Link from 'next/link';


export default function Page() {
  const params = useParams();
  const router = useRouter();

  const category = params.category as 'helse' | 'karriere';

  const progress = getProgress();
  const language = progress.selectedLanguage || "no";

  const themes = category === "helse" ? healthThemes : careerThemes;

  const handleClick = (themeId: string) => {
    if (!language) return;

    setProgress({
      ...progress,
      languages: {
        ...progress.languages,
        [language]: {
          ...progress.languages[language],
          category,
          theme: themeId,
        },
      },
    });

    router.push(`/category/${category}/${themeId}`);
  };
  return (
    <>
      <main className="pkt-container">
        <div className="category-grid">
          {themes.map((item: any) => (
            <div
              key={item.id}
              className="pkt-linkcard"
              onClick={() => handleClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="pkt-linkcard__title">
                {item.title[language] || item.title.no}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

