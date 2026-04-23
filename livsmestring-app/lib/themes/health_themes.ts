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

const emptyTranslations = (): Omit<Translation, "no" | "en" | "tr"> => ({
  ar: "",
  fa: "",
  ku: "",
  so: "",
  es: "",
  sw: "",
  ta: "",
  ti: "",
  ur: "",
});

export const healthThemes: HealthTheme[] = [
  {
    id: "skeiv_verden",
    title: {
      no: "Skeiv verden",
      en: "Queer world",
      tr: "Kuir dünya",
      ...emptyTranslations(),
    },
    subtopics: [
      {
        id: "valgfrihet",
        title: {
          no: "Valgfrihet",
          en: "Freedom of choice",
          tr: "Tercih özgürlüğü",
          ...emptyTranslations(),
        },
      },
      {
        id: "sosiale_normer",
        title: {
          no: "Sosiale normer",
          en: "Social norms",
          tr: "Sosyal normlar",
          ...emptyTranslations(),
        },
      },
      {
        id: "mangfold",
        title: {
          no: "Mangfold",
          en: "Diversity",
          tr: "Toplumsal çeşitlilik",
          ...emptyTranslations(),
        },
      },
      {
        id: "diskriminering",
        title: {
          no: "Diskriminering",
          en: "Discrimination",
          tr: "Ayrımcılık",
          ...emptyTranslations(),
        },
      },
    ],
  },

  {
    id: "vold_i_naere_relasjoner",
    title: {
      no: "Vold i nære relasjoner",
      en: "Violence in close relationships",
      tr: "Yakın ilişkilerde şiddet",
      ...emptyTranslations(),
    },
    subtopics: [
      {
        id: "introduksjon",
        title: {
          no: "Introduksjon",
          en: "Introduction",
          tr: "Giriş",
          ...emptyTranslations(),
        },
      },
      {
        id: "nye_ord",
        title: {
          no: "Nye ord",
          en: "New words",
          tr: "Yeni kelimeler",
          ...emptyTranslations(),
        },
      },
      {
        id: "typer_vold",
        title: {
          no: "Typer vold",
          en: "Types of violence",
          tr: "Şiddet türleri",
          ...emptyTranslations(),
        },
      },
      {
        id: "naere_relasjoner",
        title: {
          no: "Nære relasjoner",
          en: "Close relationships",
          tr: "Yakın ilişkiler",
          ...emptyTranslations(),
        },
      },
      {
        id: "avvergingsplikt",
        title: {
          no: "Avvergingsplikt",
          en: "Duty to prevent harm",
          tr: "Önleme yükümlülüğü",
          ...emptyTranslations(),
        },
      },
      {
        id: "taushetsplikt",
        title: {
          no: "Taushetsplikt",
          en: "Duty of confidentiality",
          tr: "Gizlilik yükümlülüğü",
          ...emptyTranslations(),
        },
      },
      {
        id: "tegn_paa_vold",
        title: {
          no: "Tegn på vold",
          en: "Signs of violence",
          tr: "Şiddetin işaretleri",
          ...emptyTranslations(),
        },
      },
      {
        id: "hvem_kan_hjelpe_1",
        title: {
          no: "Hvem kan hjelpe, 1",
          en: "Who can help, part 1",
          tr: "Kimler yardım edebilir, 1. kısım",
          ...emptyTranslations(),
        },
      },
      {
        id: "hvem_kan_hjelpe_2",
        title: {
          no: "Hvem kan hjelpe, 2",
          en: "Who can help, part 2",
          tr: "Kimler yardım edebilir, 2. kısım",
          ...emptyTranslations(),
        },
      },
      {
        id: "case",
        title: {
          no: "Case",
          en: "Case",
          tr: "Örnek vaka",
          ...emptyTranslations(),
        },
      },
    ],
  },

  {
    id: "mat_og_helse",
    title: {
      no: "Mat og helse",
      en: "Food and health",
      tr: "Beslenme ve sağlık",
      ...emptyTranslations(),
    },
    groups: [
      {
        id: "mat_og_naering",
        title: {
          no: "Mat og næring",
          en: "Food and nutrition",
          tr: "Beslenme ve gıda",
          ...emptyTranslations(),
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
            },
          },
          {
            id: "matkultur",
            title: {
              no: "Matkultur",
              en: "Food culture",
              tr: "Yemek kültürü",
              ...emptyTranslations(),
            },
          },
          {
            id: "naering_1",
            title: {
              no: "Næring i mat, del 1",
              en: "Nutrients in food, part 1",
              tr: "Yiyeceklerdeki besinler, 1. kısım",
              ...emptyTranslations(),
            },
          },
          {
            id: "naering_2",
            title: {
              no: "Næring i mat, del 2",
              en: "Nutrients in food, part 2",
              tr: "Gıdalardaki besin öğeleri, 2. kısım",
              ...emptyTranslations(),
            },
          },
        ],
      },
      {
        id: "matvalg_og_helse",
        title: {
          no: "Matvalg og helse",
          en: "Food choices and health",
          tr: "Besin seçimleri ve sağlık",
          ...emptyTranslations(),
        },
        subtopics: [
          {
            id: "frukt_og_gront",
            title: {
              no: "Frukt og grønt",
              en: "Fruit and vegetables",
              tr: "Meyve ve sebze",
              ...emptyTranslations(),
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
            },
          },
          {
            id: "ungaa_sukker",
            title: {
              no: "Unngå sukker",
              en: "Avoid sugar",
              tr: "Şekerden kaçınma",
              ...emptyTranslations(),
            },
          },
          {
            id: "case",
            title: {
              no: "Case",
              en: "Case",
              tr: "Örnek vaka",
              ...emptyTranslations(),
            },
          },
          {
            id: "diabetes",
            title: {
              no: "Diabetes",
              en: "Diabetes",
              tr: "Diyabet",
              ...emptyTranslations(),
            },
          },
          {
            id: "munnhelse",
            title: {
              no: "Munnhelse",
              en: "Oral health",
              tr: "Ağız sağlığı",
              ...emptyTranslations(),
            },
          },
        ],
      },
      {
        id: "matvarer_og_vaner",
        title: {
          no: "Matvarer og vaner",
          en: "Foods and habits",
          tr: "Gıdalar ve alışkanlıklar",
          ...emptyTranslations(),
        },
        subtopics: [
          {
            id: "matfett",
            title: {
              no: "Matfett",
              en: "Dietary fat",
              tr: "Yemeklik yağlar",
              ...emptyTranslations(),
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
            },
          },
          {
            id: "sjomat",
            title: {
              no: "Sjømat",
              en: "Seafood",
              tr: "Deniz ürünleri",
              ...emptyTranslations(),
            },
          },
          {
            id: "melkeprodukter",
            title: {
              no: "Melkeprodukter",
              en: "Dairy products",
              tr: "Süt ürünleri",
              ...emptyTranslations(),
            },
          },
          {
            id: "korn",
            title: {
              no: "Korn",
              en: "Grains",
              tr: "Tahıl",
              ...emptyTranslations(),
            },
          },
          {
            id: "salt",
            title: {
              no: "Salt",
              en: "Salt",
              tr: "Tuz",
              ...emptyTranslations(),
            },
          },
          {
            id: "hygiene",
            title: {
              no: "Hygiene",
              en: "Hygiene",
              tr: "Hijyen",
              ...emptyTranslations(),
            },
          },
          {
            id: "case",
            title: {
              no: "Case",
              en: "Case",
              tr: "Örnek vaka",
              ...emptyTranslations(),
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
            },
          },
        ],
      },
    ],
  },

  {
    id: "fysisk_aktivitet",
    title: {
      no: "Fysisk aktivitet",
      en: "Physical activity",
      tr: "Fiziksel aktivite",
      ...emptyTranslations(),
    },
    groups: [
      {
        id: "kom_i_gang_med_aktivitet",
        title: {
          no: "Kom i gang med aktivitet",
          en: "Getting started with physical activity",
          tr: "Fiziksel aktiviteye başlamak",
          ...emptyTranslations(),
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
            },
          },
          {
            id: "vaer_fysisk_aktiv",
            title: {
              no: "Vær fysisk aktiv",
              en: "Be physically active",
              tr: "Fiziksel olarak aktif olun",
              ...emptyTranslations(),
            },
          },
          {
            id: "intensivtrening",
            title: {
              no: "Intensivtrening",
              en: "High-intensity training",
              tr: "Yoğun antrenman",
              ...emptyTranslations(),
            },
          },
          {
            id: "styrketrening",
            title: {
              no: "Styrketrening",
              en: "Strength training",
              tr: "Ağırlık antrenmanı",
              ...emptyTranslations(),
            },
          },
          {
            id: "energiinntak_og_energiforbruk",
            title: {
              no: "Energiinntak og energiforbruk",
              en: "Energy intake and expenditure",
              tr: "Enerji alımı ve tüketimi",
              ...emptyTranslations(),
            },
          },
        ],
      },
      {
        id: "hva_skjer_i_kroppen",
        title: {
          no: "Hva skjer i kroppen?",
          en: "What happens in the body?",
          tr: "Vücutta neler oluyor?",
          ...emptyTranslations(),
        },
        subtopics: [
          {
            id: "blodsukker",
            title: {
              no: "Blodsukker",
              en: "Blood sugar",
              tr: "Kan şekeri",
              ...emptyTranslations(),
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
            },
          },
          {
            id: "kolestrol",
            title: {
              no: "Kolestrol",
              en: "Cholesterol",
              tr: "Kolesterol",
              ...emptyTranslations(),
            },
          },
          {
            id: "blodtrykk",
            title: {
              no: "Blodtrykk",
              en: "Blood pressure",
              tr: "Kan basıncı",
              ...emptyTranslations(),
            },
          },
          {
            id: "kreft",
            title: {
              no: "Kreft",
              en: "Cancer",
              tr: "Kanser",
              ...emptyTranslations(),
            },
          },
          {
            id: "hjernen",
            title: {
              no: "Hjernen",
              en: "The brain",
              tr: "Beyin",
              ...emptyTranslations(),
            },
          },
          {
            id: "smerte",
            title: {
              no: "Smerte",
              en: "Pain",
              tr: "Ağrı",
              ...emptyTranslations(),
            },
          },
          {
            id: "muskler_og_skjelett",
            title: {
              no: "Muskler og skjelett",
              en: "Muscles and skeleton",
              tr: "Kas ve iskelet",
              ...emptyTranslations(),
            },
          },
        ],
      },
      {
        id: "helse_i_hverdagen",
        title: {
          no: "Helse i hverdagen",
          en: "Health in everyday life",
          tr: "Günlük hayatta sağlık",
          ...emptyTranslations(),
        },
        subtopics: [
          {
            id: "andre_aspekter",
            title: {
              no: "Andre aspekter",
              en: "Other aspects",
              tr: "Diğer hususlar",
              ...emptyTranslations(),
            },
          },
          {
            id: "caser",
            title: {
              no: "Caser",
              en: "Cases",
              tr: "Örnek vakalar",
              ...emptyTranslations(),
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
            },
          },
        ],
      },
    ],
  },

  {
    id: "munnhelse",
    title: {
      no: "Munnhelse",
      en: "Oral health",
      tr: "Ağız sağlığı",
      ...emptyTranslations(),
    },
    subtopics: [
      {
        id: "introduksjon",
        title: {
          no: "Introduksjon",
          en: "Introduction",
          tr: "Giriş",
          ...emptyTranslations(),
        },
      },
      {
        id: "nye_ord",
        title: {
          no: "Nye ord",
          en: "New words",
          tr: "Yeni kelimeler",
          ...emptyTranslations(),
        },
      },
      {
        id: "rettigheter",
        title: {
          no: "Rettigheter",
          en: "Rights",
          tr: "Haklar",
          ...emptyTranslations(),
        },
      },
      {
        id: "hold_tennene_rene",
        title: {
          no: "Hold tennene rene",
          en: "Keep your teeth clean",
          tr: "Dişlerinizi temiz tutun",
          ...emptyTranslations(),
        },
      },
      {
        id: "gaa_til_tannhelsekontroll",
        title: {
          no: "Gå til tannhelsekontroll",
          en: "Go for a dental check-up",
          tr: "Diş sağlığı kontrolüne gidin",
          ...emptyTranslations(),
        },
      },
      {
        id: "kostraad_munnhelse",
        title: {
          no: "Kostråd for munnhelsen",
          en: "Dietary advice for oral health",
          tr: "Ağız sağlığı için beslenme tavsiyeleri",
          ...emptyTranslations(),
        },
      },
      {
        id: "munnhelse_hos_barn",
        title: {
          no: "Munnhelse hos barn",
          en: "Oral health in children",
          tr: "Çocuklar için ağız sağlığı",
          ...emptyTranslations(),
        },
      },
    ],
  },

  {
    id: "psykisk_helse",
    title: {
      no: "Psykisk helse",
      en: "Mental health",
      tr: "Ruh sağlığı",
      ...emptyTranslations(),
    },
    groups: [
      {
        id: "psykisk_helse",
        title: {
          no: "Psykisk helse",
          en: "Mental health",
          tr: "Ruh sağlığı",
          ...emptyTranslations(),
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
            },
          },
          {
            id: "psykisk_helse",
            title: {
              no: "Psykisk helse",
              en: "Mental health",
              tr: "Ruh sağlığı",
              ...emptyTranslations(),
            },
          },
          {
            id: "psykiske_helseplager",
            title: {
              no: "Psykisk helseplager",
              en: "Mental health problems",
              tr: "Ruh sağlığı sorunları",
              ...emptyTranslations(),
            },
          },
          {
            id: "psykiske_lidelser",
            title: {
              no: "Psykiske lidelser",
              en: "Mental disorders",
              tr: "Ruhsal bozukluklar",
              ...emptyTranslations(),
            },
          },
          {
            id: "case",
            title: {
              no: "Case",
              en: "Case",
              tr: "Örnek vaka",
              ...emptyTranslations(),
            },
          },
          {
            id: "hvordan_ta_vare_paa_din_psykiske_helse",
            title: {
              no: "Hvordan ta vare på din psykiske helse",
              en: "How to take care of your mental health",
              tr: "Ruh sağlığınıza nasıl dikkat etmelisiniz?",
              ...emptyTranslations(),
            },
          },
        ],
      },
      {
        id: "hvor_faa_hjelp",
        title: {
          no: "Hvor få hjelp",
          en: "Where to get help",
          tr: "Nereden yardım alabilirsiniz?",
          ...emptyTranslations(),
        },
        subtopics: [
          {
            id: "hvor_faa_hjelp",
            title: {
              no: "Hvor få hjelp",
              en: "Where to get help",
              tr: "Nereden yardım alabilirsiniz?",
              ...emptyTranslations(),
            },
          },
          {
            id: "krise_og_ulykke",
            title: {
              no: "Krise og ulykke",
              en: "Crisis and emergency situations",
              tr: "Kriz ve kaza",
              ...emptyTranslations(),
            },
          },
          {
            id: "legevakt_og_akutt_hjelp",
            title: {
              no: "Legevakt og akutt hjelp",
              en: "Urgent medical help",
              tr: "Acil servis ve acil yardım",
              ...emptyTranslations(),
            },
          },
          {
            id: "tjenester_i_oslo_kommune",
            title: {
              no: "Tjenester i Oslo kommune",
              en: "Services in Oslo municipality",
              tr: "Oslo belediyesi hizmetleri",
              ...emptyTranslations(),
            },
          },
          {
            id: "frivillige_organisasjoner_i_oslo",
            title: {
              no: "Frivillige organisasjoner i Oslo",
              en: "Voluntary organisations in Oslo",
              tr: "Oslo'daki gönüllü kuruluşlar",
              ...emptyTranslations(),
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
            },
          },
        ],
      },
      {
        id: "fastlege",
        title: {
          no: "Fastlege",
          en: "General practitioner",
          tr: "Aile hekimi",
          ...emptyTranslations(),
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
            },
          },
          {
            id: "fastlege",
            title: {
              no: "Fastlege",
              en: "General practitioner",
              tr: "Aile hekimi",
              ...emptyTranslations(),
            },
          },
          {
            id: "rettigheter",
            title: {
              no: "Rettigheter",
              en: "Rights",
              tr: "Haklar",
              ...emptyTranslations(),
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
            },
          },
        ],
      },
      {
        id: "stress",
        title: {
          no: "Stress",
          en: "Stress",
          tr: "Stres",
          ...emptyTranslations(),
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
            },
          },
          {
            id: "stress",
            title: {
              no: "Stress",
              en: "Understanding stress",
              tr: "Stres",
              ...emptyTranslations(),
            },
          },
          {
            id: "stress_som_ny_i_norge",
            title: {
              no: "Stress som ny i Norge",
              en: "Stress as a newcomer to Norway",
              tr: "Norveç'te yeni olanlar için stres",
              ...emptyTranslations(),
            },
          },
          {
            id: "case",
            title: {
              no: "Case",
              en: "Case",
              tr: "Örnek vaka",
              ...emptyTranslations(),
            },
          },
          {
            id: "haandtere_stress",
            title: {
              no: "Håndtere stress",
              en: "Managing stress",
              tr: "Stresi yönetmek",
              ...emptyTranslations(),
            },
          },
          {
            id: "case",
            title: {
              no: "Case",
              en: "Case",
              tr: "Örnek vaka",
              ...emptyTranslations(),
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
            },
          },
        ],
      },
      {
        id: "mobbing",
        title: {
          no: "Mobbing",
          en: "Bullying",
          tr: "Zorbalık",
          ...emptyTranslations(),
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
            },
          },
          {
            id: "mobbing",
            title: {
              no: "Mobbing",
              en: "Bullying",
              tr: "Zorbalık",
              ...emptyTranslations(),
            },
          },
          {
            id: "konsekvenser",
            title: {
              no: "Konsekvenser",
              en: "Consequences",
              tr: "Sonuçlar",
              ...emptyTranslations(),
            },
          },
          {
            id: "mobberen",
            title: {
              no: "Mobberen",
              en: "The bully",
              tr: "Zorba",
              ...emptyTranslations(),
            },
          },
          {
            id: "hvor_faa_stotte",
            title: {
              no: "Hvor få støtte",
              en: "Where to get support",
              tr: "Nereden destek alabilirsiniz?",
              ...emptyTranslations(),
            },
          },
          {
            id: "har_du_mobbet_noen",
            title: {
              no: "Har du mobbet noen",
              en: "Have you been a bully?",
              tr: "Birine zorbalık yaptınız mı?",
              ...emptyTranslations(),
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
            },
          },
        ],
      },
    ],
  },

  {
    id: "kvinners_reproduktive_helse",
    title: {
      no: "Kvinners reproduktive helse",
      en: "Women's reproductive health",
      tr: "Kadın üreme sağlığı",
      ...emptyTranslations(),
    },
    subtopics: [
      {
        id: "ytre_kjonnsorganer",
        title: {
          no: "Kvinnens ytre kjønnsorganer",
          en: "Women's external genitalia",
          tr: "Kadının dış cinsel organları",
          ...emptyTranslations(),
        },
      },
      {
        id: "indre_kjonnsorganer",
        title: {
          no: "Kvinnens indre kjønnsorganer",
          en: "Women's internal reproductive organs",
          tr: "Kadının iç üreme organları",
          ...emptyTranslations(),
        },
      },
      {
        id: "menstruasjon",
        title: {
          no: "Menstruasjon",
          en: "Menstruation",
          tr: "Menstrüasyon",
          ...emptyTranslations(),
        },
      },
      {
        id: "prevensjon",
        title: {
          no: "Prevensjon",
          en: "Contraception",
          tr: "Doğum kontrolü",
          ...emptyTranslations(),
        },
      },
    ],
  },
];