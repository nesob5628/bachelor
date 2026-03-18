import { healthThemes } from "./themes/health_themes";
import { careerThemes } from "./themes/career_themes";
// midlertidig oversettelse av helse og karriere, må endres når vi har fått de språkene vi skal fokusere på
export const categories = [
  {
    id: "health",
    title: {
      no: "Helse",
      en: "Health",
      ar: "الصحة",
      fa: "سلامتی",
      ku: "Tenduristî",
      so: "Caafimaad",
      es: "Salud",
      sw: "Afya",
      ta: "ஆரோக்கியம்",
      ti: "ጥዕና",
      tr: "Sağlık",
      uk: "Здоров’я",
      ur: "صحت",
    },
    themes: healthThemes,
  },
  {
    id: "career",
    title: {
      no: "Karriere",
      en: "Career",
      ar: "المهنة",
      fa: "مسیر شغلی",
      ku: "Karîyer",
      so: "Xirfad",
      es: "Carrera",
      sw: "Kazi",
      ta: "தொழில்",
      ti: "ሞያ",
      tr: "Kariyer",
      uk: "Кар’єра",
      ur: "کیریئر",
    },
    themes: careerThemes,
  },
];