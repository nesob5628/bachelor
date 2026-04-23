type Translation = {
  no: string;
  en: string;
  ar: string;
  fa: string;
  ku: string;
  so: string;
  es: string;
  sw: string;
  ta: string;
  ti: string;
  tr: string;
  ur: string;
};

type Subtopic = {
  id: string;
  title: Translation;
};

type CareerTheme = {
  id: string;
  title: Translation;
  subtopics?: Subtopic[];
};

const emptyTranslations = (): Omit<Translation, "no" | "en" | "ta" | "tr"> => ({
  ar: "",
  fa: "",
  ku: "",
  so: "",
  es: "",
  sw: "",
  ti: "",
  ur: "",
});

export const careerThemes: CareerTheme[] = [
  {
    id: "meg_i_kontekst",
    title: {
      no: "Meg i kontekst",
      en: "Me in context",
      ta: "சூழல் தொடர்பாக எனது நிலை",
      tr: "Bağlamda ben",
      ...emptyTranslations(),
    },
    subtopics: [
      {
        id: "introduksjon",
        title: {
          no: "Introduksjon",
          en: "Introduction",
          ta: "அறிமுகம்",
          tr: "Giriş",
          ...emptyTranslations(),
        },
      },
      {
        id: "nye_ord",
        title: {
          no: "Nye ord",
          en: "New words",
          ta: "புதிய சொற்கள்",
          tr: "Yeni kelimeler",
          ...emptyTranslations(),
        },
      },
      {
        id: "egenskaper",
        title: {
          no: "Egenskaper",
          en: "Personal qualities",
          ta: "தனிப்பட்ட குணநலன்கள்",
          tr: "Nitelikler",
          ...emptyTranslations(),
        },
      },
      {
        id: "refleksjonsoppgave",
        title: {
          no: "Refleksjonsoppgave",
          en: "Reflective task",
          ta: "பிரதிபலிப்புப் பணி",
          tr: "Düşünme alıştırması",
          ...emptyTranslations(),
        },
      },
      {
        id: "interesser",
        title: {
          no: "Interesser",
          en: "Interest",
          ta: "ஆர்வங்கள்",
          tr: "İlgi alanları",
          ...emptyTranslations(),
        },
      },
      {
        id: "oppgave",
        title: {
          no: "Oppgave",
          en: "Task",
          ta: "பணி",
          tr: "Görev",
          ...emptyTranslations(),
        },
      },
      {
        id: "verdier",
        title: {
          no: "Verdier",
          en: "Values",
          ta: "மதிப்புகள்",
          tr: "Değerler",
          ...emptyTranslations(),
        },
      },
      {
        id: "refleksjonsoppgave",
        title: {
          no: "Refleksjonsoppgave",
          en: "Reflective task",
          ta: "பிரதிபலிப்புப் பணி",
          tr: "Düşünme alıştırması",
          ...emptyTranslations(),
        },
      },
      {
        id: "roller",
        title: {
          no: "Roller",
          en: "Roles",
          ta: "பாத்திரங்கள்",
          tr: "Roller",
          ...emptyTranslations(),
        },
      },
      {
        id: "case",
        title: {
          no: "Case",
          en: "Case",
          ta: "வழக்கு",
          tr: "Örnek",
          ...emptyTranslations(),
        },
      },
      {
        id: "oppsummering",
        title: {
          no: "Oppsummering",
          en: "Summary",
          ta: "சுருக்கம்",
          tr: "Özet",
          ...emptyTranslations(),
        },
      },
    ],
  },
  {
    id: "muligheter_og_begrensninger",
    title: {
      no: "Muligheter og begrensninger",
      en: "Opportunities and limitations",
      ta: "சாத்தியங்கள் மற்றும் வரம்புகள்",
      tr: "Fırsatlar ve kısıtlamalar",
      ...emptyTranslations(),
    },
    subtopics: [
      {
        id: "introduksjon",
        title: {
          no: "Introduksjon",
          en: "Introduction",
          ta: "அறிமுகம்",
          tr: "Giriş",
          ...emptyTranslations(),
        },
      },
      {
        id: "nye_ord",
        title: {
          no: "Nye ord",
          en: "New words",
          ta: "புதிய சொற்கள்",
          tr: "Yeni kelimeler",
          ...emptyTranslations(),
        },
      },
      {
        id: "mulighetshorisont",
        title: {
          no: "Mulighetshorisont",
          en: "Horizon of possibilities",
          ta: "சாத்தியக்கூறுகளின் விளிம்பு",
          tr: "Gelecek olanakları",
          ...emptyTranslations(),
        },
      },
      {
        id: "begrensninger",
        title: {
          no: "Begrensninger",
          en: "Limitations",
          ta: "வரம்புகள்",
          tr: "Kısıtlamalar",
          ...emptyTranslations(),
        },
      },
      {
        id: "case",
        title: {
          no: "Case",
          en: "Case",
          ta: "வழக்கு",
          tr: "Örnek",
          ...emptyTranslations(),
        },
      },
      {
        id: "refleksjonsoppgave",
        title: {
          no: "Refleksjonsoppgave",
          en: "Reflective task",
          ta: "பிரதிபலிப்புப் பணி",
          tr: "Düşünme alıştırması",
          ...emptyTranslations(),
        },
      },
      {
        id: "tankefeller",
        title: {
          no: "Tankefeller",
          en: "Thought traps",
          ta: "சிந்தனையில் ஆழ்தல்",
          tr: "Düşünce tuzakları",
          ...emptyTranslations(),
        },
      },
      {
        id: "religion",
        title: {
          no: "Religion",
          en: "Religion",
          ta: "மதம்",
          tr: "Dinin",
          ...emptyTranslations(),
        },
      },
      {
        id: "oppsummering",
        title: {
          no: "Oppsummering",
          en: "Summary",
          ta: "சுருக்கம்",
          tr: "Özet",
          ...emptyTranslations(),
        },
      },
    ],
  },
  {
    id: "valg_og_tilfeldigheter",
    title: {
      no: "Valg og tilfeldigheter",
      en: "Choices and coincidences",
      ta: "தேர்வு மற்றும் வாய்ப்பு",
      tr: "Seçim ve tesadüfler",
      ...emptyTranslations(),
    },
    subtopics: [
      {
        id: "introduksjon",
        title: {
          no: "Introduksjon",
          en: "Introduction",
          ta: "அறிமுகம்",
          tr: "Giriş",
          ...emptyTranslations(),
        },
      },
      {
        id: "nye_ord",
        title: {
          no: "Nye ord",
          en: "New words",
          ta: "புதிய சொற்கள்",
          tr: "Yeni kelimeler",
          ...emptyTranslations(),
        },
      },
      {
        id: "egne_valg",
        title: {
          no: "Egne valg",
          en: "Own choices",
          ta: "சொந்தத் தேர்வுகள்",
          tr: "Özseçim",
          ...emptyTranslations(),
        },
      },
      {
        id: "case",
        title: {
          no: "Case",
          en: "Case",
          ta: "வழக்கு",
          tr: "Örnek",
          ...emptyTranslations(),
        },
      },
      {
        id: "gode_tilfeldigheter",
        title: {
          no: "Gode tilfeldigheter",
          en: "Good coincidences",
          ta: "நல்ல தற்செயல் நிகழ்வுகள்",
          tr: "İyi tesadüfler",
          ...emptyTranslations(),
        },
      },
      {
        id: "case",
        title: {
          no: "Case",
          en: "Case",
          ta: "வழக்கு",
          tr: "Örnek",
          ...emptyTranslations(),
        },
      },
      {
        id: "refleksjonsoppgave",
        title: {
          no: "Refleksjonsoppgave",
          en: "Reflective task",
          ta: "பிரதிபலிப்புப் பணி",
          tr: "Düşünme alıştırması",
          ...emptyTranslations(),
        },
      },
      {
        id: "oppsummering",
        title: {
          no: "Oppsummering",
          en: "Summary",
          ta: "சுருக்கம்",
          tr: "Özet",
          ...emptyTranslations(),
        },
      },
    ],
  },
  {
    id: "tilpasning_og_motstand",
    title: {
      no: "Tilpasning og motstand",
      en: "Adaptation and resistance",
      ta: "தழுவல் மற்றும் எதிர்ப்பு",
      tr: "Adaptasyon ve direnç",
      ...emptyTranslations(),
    },
    subtopics: [
      {
        id: "introduksjon",
        title: {
          no: "Introduksjon",
          en: "Introduction",
          ta: "அறிமுகம்",
          tr: "Giriş",
          ...emptyTranslations(),
        },
      },
      {
        id: "nye_ord",
        title: {
          no: "Nye ord",
          en: "New words",
          ta: "புதிய சொற்கள்",
          tr: "Yeni kelimeler",
          ...emptyTranslations(),
        },
      },
      {
        id: "case",
        title: {
          no: "Case",
          en: "Case",
          ta: "வழக்குகள்",
          tr: "Örnek",
          ...emptyTranslations(),
        },
      },
      {
        id: "refleksjonsoppgave",
        title: {
          no: "Refleksjonsoppgave",
          en: "Reflective task",
          ta: "பிரதிபலிப்புப் பணி",
          tr: "Düşünme alıştırması",
          ...emptyTranslations(),
        },
      },
      {
        id: "oppsummering",
        title: {
          no: "Oppsummering",
          en: "Summary",
          ta: "சுருக்கம்",
          tr: "Özet",
          ...emptyTranslations(),
        },
      },
    ],
  },
  {
    id: "endring_og_stabilitet",
    title: {
      no: "Endring og stabilitet",
      en: "Change and stability",
      ta: "மாற்றம் மற்றும் நிலைத்தன்மை",
      tr: "Değişim ve İstikrar",
      ...emptyTranslations(),
    },
    subtopics: [
      {
        id: "introduksjon",
        title: {
          no: "Introduksjon",
          en: "Introduction",
          ta: "அறிமுகம்",
          tr: "Giriş",
          ...emptyTranslations(),
        },
      },
      {
        id: "nye_ord",
        title: {
          no: "Nye ord",
          en: "New words",
          ta: "புதிய சொற்கள்",
          tr: "Yeni kelimeler",
          ...emptyTranslations(),
        },
      },
      {
        id: "endring",
        title: {
          no: "Endring",
          en: "Change",
          ta: "மாற்றம்",
          tr: "Değişim",
          ...emptyTranslations(),
        },
      },
      {
        id: "stabilitet",
        title: {
          no: "Stabilitet",
          en: "Stability",
          ta: "நிலைப்புத்தன்மை",
          tr: "İstikrar",
          ...emptyTranslations(),
        },
      },
      {
        id: "case",
        title: {
          no: "Case",
          en: "Case",
          ta: "வழக்குகள்",
          tr: "Örnek",
          ...emptyTranslations(),
        },
      },
      {
        id: "refleksjonsoppgave",
        title: {
          no: "Refleksjonsoppgave",
          en: "Reflective task",
          ta: "பிரதிபலிப்புப் பணி",
          tr: "Düşünme alıştırması",
          ...emptyTranslations(),
        },
      },
      {
        id: "oppsummering",
        title: {
          no: "Oppsummering",
          en: "Summary",
          ta: "சுருக்கம்",
          tr: "Özet",
          ...emptyTranslations(),
        },
      },
    ],
  },
];