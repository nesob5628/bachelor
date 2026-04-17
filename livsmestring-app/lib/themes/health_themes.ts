/*
Countries and their languagecodes:
Norway: no
English: en
Arabic: ar
Farsi: fa
Kurmanji: ku
Somali: so
Spanish: es
Swahili: sw
Tamil: ta
Tigrinya: ti
Turkish: tr
Ukrainian: uk
Urdu: ur
*/

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
  uk: string;
  ur: string;
};

type Subtopic = {
  id: string;
  title: Translation;
};

type ThemeGroup = {
  id: string;
  title: Translation;
  subtopics: Subtopic[];
};

type HealthTheme = {
  id: string;
  title: Translation;
  subtopics?: Subtopic[];
  groups?: ThemeGroup[];
};

const emptyTranslations = (): Omit<Translation, "no" | "en"> => ({
  ar: "",
  fa: "",
  ku: "",
  so: "",
  es: "",
  sw: "",
  ta: "",
  ti: "",
  tr: "",
  uk: "",
  ur: "",
});

export const healthThemes: HealthTheme[] = [
  {
    id: "skeiv_verden",
    title: {
      no: "Skeiv verden",
      en: "Queer world",
      ...emptyTranslations(),
    },
    subtopics: [
      {
        id: "valgfrihet",
        title: {
          no: "Valgfrihet",
          en: "Freedom of choice",
          ar: "حرية الاختيار",
          fa: "آزادی انتخاب",
          ku: "Azadiya hilbijartinê",
          so: "Xorriyadda doorashada",
          es: "Libertad de elección",
          sw: "Uhuru wa kuchagua",
          ta: "",
          ti: "ናይ ምምራጽ ናጽነት",
          tr: "Tercih özgürlüğü",
          uk: "Свобода вибору",
          ur: "اختیار کا حق",
        },
      },
      {
        id: "sosiale_normer",
        title: {
          no: "Sosiale normer",
          en: "Social norms",
          ar: "الأعراف الاجتماعية",
          fa: "هنجارهای اجتماعی",
          ku: "Normên civakî",
          so: "Xeerarka bulshada",
          es: "Normas sociales",
          sw: "Kanuni za kijamii",
          ta: "",
          ti: "ማሕበራዊ ስርዓታት",
          tr: "Sosyal normlar",
          uk: "Соціальні норми",
          ur: "معاشرتی اصول",
        },
      },
      {
        id: "mangfold",
        title: {
          no: "Mangfold",
          en: "Diversity",
          ar: "التنوع",
          fa: "تنوع",
          ku: "Cûrbecûrî",
          so: "Kala duwanaansho",
          es: "Diversidad",
          sw: "Tofauti",
          ta: "",
          ti: "ብዙሕነት",
          tr: "Çeşitlilik",
          uk: "Різноманітність",
          ur: "تنوع",
        },
      },
      {
        id: "diskriminering",
        title: {
          no: "Diskriminering",
          en: "Discrimination",
          ar: "التمييز",
          fa: "تبعیض",
          ku: "Cudakirin",
          so: "Takoorid",
          es: "Discriminación",
          sw: "Ubaguzi",
          ta: "",
          ti: "ምግላል",
          tr: "Ayrımcılık",
          uk: "Дискримінація",
          ur: "امتیازی سلوک",
        },
      },
    ],
  },

  {
    id: "vold_i_naere_relasjoner",
    title: {
      no: "Vold i nære relasjoner",
      en: "Violence in close relationships",
      ...emptyTranslations(),
    },
    subtopics: [
      { id: "introduksjon", title: { no: "Introduksjon", en: "Introduction", ...emptyTranslations() } },
      { id: "nye_ord", title: { no: "Nye ord", en: "New words", ...emptyTranslations() } },
      { id: "typer_vold", title: { no: "Typer vold", en: "Types of violence", ...emptyTranslations() } },
      { id: "naere_relasjoner", title: { no: "Nære relasjoner", en: "Close relationships", ...emptyTranslations() } },
      { id: "avvergingsplikt", title: { no: "Avvergingsplikt", en: "Duty to prevent harm", ...emptyTranslations() } },
      { id: "taushetsplikt", title: { no: "Taushetsplikt", en: "Duty of confidentiality", ...emptyTranslations() } },
      { id: "tegn_paa_vold", title: { no: "Tegn på vold", en: "Signs of violence", ...emptyTranslations() } },
      { id: "hvem_kan_hjelpe_1", title: { no: "Hvem kan hjelpe, 1", en: "Who can help, part 1", ...emptyTranslations() } },
      { id: "hvem_kan_hjelpe_2", title: { no: "Hvem kan hjelpe, 2", en: "Who can help, part 2", ...emptyTranslations() } },
      { id: "case", title: { no: "Case", en: "Case", ...emptyTranslations() } },
    ],
  },

  {
    id: "mat_og_helse",
    title: {
      no: "Mat og helse",
      en: "Food and health",
      ...emptyTranslations(),
    },
    subtopics: [
      { id: "introduksjon", title: { no: "Introduksjon", en: "Introduction", ...emptyTranslations() } },
      { id: "kosthold", title: { no: "Kosthold", en: "Diet", ...emptyTranslations() } },
      { id: "naering_1", title: { no: "Næring i mat, del 1", en: "Nutrition in food, part 1", ...emptyTranslations() } },
      { id: "naering_2", title: { no: "Næring i mat, del 2", en: "Nutrition in food, part 2", ...emptyTranslations() } },
      { id: "frukt_og_gront", title: { no: "Frukt og grønt", en: "Fruit and vegetables", ...emptyTranslations() } },
      { id: "sukker", title: { no: "Sukker", en: "Sugar", ...emptyTranslations() } },
      { id: "case", title: { no: "Case", en: "Case", ...emptyTranslations() } },
      { id: "diabetes", title: { no: "Diabetes", en: "Diabetes", ...emptyTranslations() } },
      { id: "munnhelse", title: { no: "Munnhelse", en: "Oral health", ...emptyTranslations() } },
      { id: "matfett", title: { no: "Matfett", en: "Dietary fat", ...emptyTranslations() } },
      { id: "sjomat", title: { no: "Sjømat", en: "Seafood", ...emptyTranslations() } },
      { id: "melkeprodukter", title: { no: "Melkeprodukter", en: "Dairy products", ...emptyTranslations() } },
      { id: "korn", title: { no: "Korn", en: "Grains", ...emptyTranslations() } },
      { id: "salt", title: { no: "Salt", en: "Salt", ...emptyTranslations() } },
      { id: "hygiene", title: { no: "Hygiene", en: "Hygiene", ...emptyTranslations() } },
      { id: "oppsummering", title: { no: "Oppsummering", en: "Summary", ...emptyTranslations() } },
    ],
  },

  {
    id: "fysisk_aktivitet",
    title: {
      no: "Fysisk aktivitet",
      en: "Physical activity",
      ...emptyTranslations(),
    },
    subtopics: [
      { id: "introduksjon", title: { no: "Introduksjon", en: "Introduction", ...emptyTranslations() } },
      { id: "vaer_fysisk_aktiv", title: { no: "Vær fysisk aktiv", en: "Be physically active", ...emptyTranslations() } },
      { id: "intensivtrening", title: { no: "Intensivtrening", en: "High-intensity training", ...emptyTranslations() } },
      { id: "styrketrening", title: { no: "Styrketrening", en: "Strength training", ...emptyTranslations() } },
      { id: "energiinntak_og_energiforbruk", title: { no: "Energiinntak og energiforbruk", en: "Energy intake and expenditure", ...emptyTranslations() } },
      { id: "blodsukker", title: { no: "Blodsukker", en: "Blood sugar", ...emptyTranslations() } },
      { id: "kolesterol", title: { no: "Kolesterol", en: "Cholesterol", ...emptyTranslations() } },
      { id: "blodtrykk", title: { no: "Blodtrykk", en: "Blood pressure", ...emptyTranslations() } },
      { id: "kreft", title: { no: "Kreft", en: "Cancer", ...emptyTranslations() } },
      { id: "hjernen", title: { no: "Hjernen", en: "The brain", ...emptyTranslations() } },
      { id: "smerte", title: { no: "Smerte", en: "Pain", ...emptyTranslations() } },
      { id: "muskler_og_skjelett", title: { no: "Muskler og skjelett", en: "Muscles and skeleton", ...emptyTranslations() } },
      { id: "andre_aspekter", title: { no: "Andre aspekter", en: "Other aspects", ...emptyTranslations() } },
      { id: "caser", title: { no: "Caser", en: "Cases", ...emptyTranslations() } },
      { id: "oppsummering", title: { no: "Oppsummering", en: "Summary", ...emptyTranslations() } },
    ],
  },

  {
    id: "munnhelse",
    title: {
      no: "Munnhelse",
      en: "Oral health",
      ...emptyTranslations(),
    },
    subtopics: [
      { id: "introduksjon", title: { no: "Introduksjon", en: "Introduction", ...emptyTranslations() } },
      { id: "nye_ord", title: { no: "Nye ord", en: "New words", ...emptyTranslations() } },
      { id: "rettigheter", title: { no: "Rettigheter", en: "Rights", ...emptyTranslations() } },
      { id: "hold_tennene_rene", title: { no: "Hold tennene rene", en: "Keep your teeth clean", ...emptyTranslations() } },
      { id: "tannhelsekontroll", title: { no: "Gå til tannhelsekontroll", en: "Go to a dental check-up", ...emptyTranslations() } },
      { id: "kostraad_munnhelse", title: { no: "Kostråd for munnhelsen", en: "Dietary advice for oral health", ...emptyTranslations() } },
      { id: "munnhelse_hos_barn", title: { no: "Munnhelse hos barn", en: "Oral health in children", ...emptyTranslations() } },
    ],
  },

  {
    id: "psykisk_helse",
    title: {
      no: "Psykisk helse",
      en: "Mental health",
      ...emptyTranslations(),
    },
    groups: [
      {
        id: "psykisk_helse",
        title: {
          no: "Psykisk helse",
          en: "Mental health",
          ...emptyTranslations(),
        },
        subtopics: [
          { id: "introduksjon", title: { no: "Introduksjon", en: "Introduction", ...emptyTranslations() } },
          { id: "nye_ord", title: { no: "Nye ord", en: "New words", ...emptyTranslations() } },
          { id: "psykisk_helse", title: { no: "Psykisk helse", en: "Mental health", ...emptyTranslations() } },
          { id: "psykiske_helseplager", title: { no: "Psykisk helseplager", en: "Mental health challenges", ...emptyTranslations() } },
          { id: "psykiske_lidelser", title: { no: "Psykiske lidelser", en: "Mental disorders", ...emptyTranslations() } },
          { id: "hvordan_ta_vare_paa_din_psykiske_helse", title: { no: "Hvordan ta vare på din psykiske helse", en: "How to take care of your mental health", ...emptyTranslations() } },
          { id: "hvor_faa_hjelp", title: { no: "Hvor få hjelp", en: "Where to get help", ...emptyTranslations() } },
          { id: "oppsummering", title: { no: "Oppsummering", en: "Summary", ...emptyTranslations() } },
        ],
      },
      {
        id: "fastlege",
        title: {
          no: "Fastlege",
          en: "General practitioner",
          ...emptyTranslations(),
        },
        subtopics: [
          { id: "introduksjon", title: { no: "Introduksjon", en: "Introduction", ...emptyTranslations() } },
          { id: "nye_ord", title: { no: "Nye ord", en: "New words", ...emptyTranslations() } },
          { id: "fastlege", title: { no: "Fastlege", en: "General practitioner", ...emptyTranslations() } },
          { id: "rettigheter", title: { no: "Rettigheter", en: "Rights", ...emptyTranslations() } },
          { id: "oppsummering", title: { no: "Oppsummering", en: "Summary", ...emptyTranslations() } },
        ],
      },
      {
        id: "stress",
        title: {
          no: "Stress",
          en: "Stress",
          ...emptyTranslations(),
        },
        subtopics: [
          { id: "introduksjon", title: { no: "Introduksjon", en: "Introduction", ...emptyTranslations() } },
          { id: "nye_ord", title: { no: "Nye ord", en: "New words", ...emptyTranslations() } },
          { id: "stress", title: { no: "Stress", en: "Stress", ...emptyTranslations() } },
          { id: "stress_norge", title: { no: "Stress som ny i Norge", en: "Stress as a newcomer in Norway", ...emptyTranslations() } },
          { id: "haandtere_stress", title: { no: "Håndtere stress", en: "Managing stress", ...emptyTranslations() } },
          { id: "oppsummering", title: { no: "Oppsummering", en: "Summary", ...emptyTranslations() } },
        ],
      },
      {
        id: "mobbing",
        title: {
          no: "Mobbing",
          en: "Bullying",
          ...emptyTranslations(),
        },
        subtopics: [
          { id: "introduksjon", title: { no: "Introduksjon", en: "Introduction", ...emptyTranslations() } },
          { id: "nye_ord", title: { no: "Nye ord", en: "New words", ...emptyTranslations() } },
          { id: "mobbing", title: { no: "Mobbing", en: "Bullying", ...emptyTranslations() } },
          { id: "konsekvenser", title: { no: "Konsekvenser", en: "Consequences", ...emptyTranslations() } },
          { id: "mobberen", title: { no: "Mobberen", en: "The bully", ...emptyTranslations() } },
          { id: "hvor_faa_stotte", title: { no: "Hvor få støtte", en: "Where to get support", ...emptyTranslations() } },
          { id: "har_du_mobbet_noen", title: { no: "Har du mobbet noen", en: "Have you bullied someone", ...emptyTranslations() } },
          { id: "oppsummering", title: { no: "Oppsummering", en: "Summary", ...emptyTranslations() } },
        ],
      },
    ],
  },

  {
    id: "kvinnens_helse",
    title: {
      no: "Kvinnens reproduktive helse",
      en: "Women's reproductive health",
      ...emptyTranslations(),
    },
    subtopics: [
      { id: "ytre_kjonnsorganer", title: { no: "Kvinnens ytre kjønnsorganer", en: "Women’s external genitalia", ...emptyTranslations() } },
      { id: "indre_kjonnsorganer", title: { no: "Kvinnens indre kjønnsorganer", en: "Women’s internal reproductive organs", ...emptyTranslations() } },
      { id: "menstruasjon", title: { no: "Menstruasjon", en: "Menstruation", ...emptyTranslations() } },
      { id: "prevensjon", title: { no: "Prevensjon", en: "Contraception", ...emptyTranslations() } },
    ],
  },
];