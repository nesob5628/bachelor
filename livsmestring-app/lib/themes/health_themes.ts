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

// Shared fallback values for languages without dedicated translations yet.
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

// Health themes are grouped into top-level topics and their subthemes.
export const healthThemes: HealthTheme[] = [
  {
    id: "skeiv_verden",
    title: {
      no: "Skeiv verden",
      en: "Queer world",
      tr: "Kuir dünya",
      ...emptyTranslations(),
      ta: "குவியர் உலகம்",
    },
    subtopics: [
      {
        id: "valgfrihet",
        title: {
          no: "Valgfrihet",
          en: "Freedom of choice",
          tr: "Tercih özgürlüğü",
          ...emptyTranslations(),
          ta: "தேர்வு சுதந்திரம்",
        },
      },
      {
        id: "sosiale_normer",
        title: {
          no: "Sosiale normer",
          en: "Social norms",
          tr: "Sosyal normlar",
          ...emptyTranslations(),
          ta: "சமூக விதிமுறைகள்",
        },
      },
      {
        id: "mangfold",
        title: {
          no: "Mangfold",
          en: "Diversity",
          tr: "Toplumsal çeşitlilik",
          ...emptyTranslations(),
          ta: "பன்முகத்தன்மை",
        },
      },
      {
        id: "diskriminering",
        title: {
          no: "Diskriminering",
          en: "Discrimination",
          tr: "Ayrımcılık",
          ...emptyTranslations(),
          ta: "பாகுபாடு",
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
      ta: "நெருங்கிய உறவுகளில் வன்முறை",
    },
    subtopics: [
      {
        id: "introduksjon",
        title: {
          no: "Introduksjon",
          en: "Introduction",
          tr: "Giriş",
          ...emptyTranslations(),
          ta: "அறிமுகம்",
        },
      },
      {
        id: "nye_ord",
        title: {
          no: "Nye ord",
          en: "New words",
          tr: "Yeni kelimeler",
          ...emptyTranslations(),
          ta: "புதிய வார்த்தைகள்",
        },
      },
      {
        id: "typer_vold",
        title: {
          no: "Typer vold",
          en: "Types of violence",
          tr: "Şiddet türleri",
          ...emptyTranslations(),
          ta: "வன்முறை வகைகள்",
        },
      },
      {
        id: "naere_relasjoner",
        title: {
          no: "Nære relasjoner",
          en: "Close relationships",
          tr: "Yakın ilişkiler",
          ...emptyTranslations(),
          ta: "நெருங்கிய உறவுகள்",
        },
      },
      {
        id: "avvergingsplikt",
        title: {
          no: "Avvergingsplikt",
          en: "Duty to prevent harm",
          tr: "Önleme yükümlülüğü",
          ...emptyTranslations(),
          ta: "தீங்கைத் தடுக்கும் கடமை",
        },
      },
      {
        id: "taushetsplikt",
        title: {
          no: "Taushetsplikt",
          en: "Duty of confidentiality",
          tr: "Gizlilik yükümlülüğü",
          ...emptyTranslations(),
          ta: "இரகசியக் கடமை",
        },
      },
      {
        id: "tegn_paa_vold",
        title: {
          no: "Tegn på vold",
          en: "Signs of violence",
          tr: "Şiddetin işaretleri",
          ...emptyTranslations(),
          ta: "வன்முறையின் அறிகுறிகள்",
        },
      },
      {
        id: "hvem_kan_hjelpe_1",
        title: {
          no: "Hvem kan hjelpe, 1",
          en: "Who can help, part 1",
          tr: "Kimler yardım edebilir, 1. kısım",
          ...emptyTranslations(),
          ta: "யார் உதவலாம், பாகம் 1",
        },
      },
      {
        id: "hvem_kan_hjelpe_2",
        title: {
          no: "Hvem kan hjelpe, 2",
          en: "Who can help, part 2",
          tr: "Kimler yardım edebilir, 2. kısım",
          ...emptyTranslations(),
          ta: "யார் உதவலாம், பாகம் 2",
        },
      },
      {
        id: "case",
        title: {
          no: "Case",
          en: "Case",
          tr: "Örnek vaka",
          ...emptyTranslations(),
          ta: "நிகழ்வு",
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
      ta: "உணவு மற்றும் ஆரோக்கியம்",
    },
    groups: [
      {
        id: "mat_og_naering",
        title: {
          no: "Mat og næring",
          en: "Food and nutrition",
          tr: "Beslenme ve gıda",
          ...emptyTranslations(),
          ta: "உணவு மற்றும் ஊட்டச்சத்து",
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
              ta: "அறிமுகம்",
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
              ta: "புதிய வார்த்தைகள்",
            },
          },
          {
            id: "matkultur",
            title: {
              no: "Matkultur",
              en: "Food culture",
              tr: "Yemek kültürü",
              ...emptyTranslations(),
              ta: "உணவு கலாச்சாரம்",
            },
          },
          {
            id: "naering_1",
            title: {
              no: "Næring i mat, del 1",
              en: "Nutrients in food, part 1",
              tr: "Yiyeceklerdeki besinler, 1. kısım",
              ...emptyTranslations(),
              ta: "உணவில் ஊட்டச்சத்துகள், பாகம் 1",
            },
          },
          {
            id: "naering_2",
            title: {
              no: "Næring i mat, del 2",
              en: "Nutrients in food, part 2",
              tr: "Gıdalardaki besin öğeleri, 2. kısım",
              ...emptyTranslations(),
              ta: "உணவில் ஊட்டச்சத்துகள், பாகம் 2",
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
          ta: "உணவு தேர்வு மற்றும் ஆரோக்கியம்",
        },
        subtopics: [
          {
            id: "frukt_og_gront",
            title: {
              no: "Frukt og grønt",
              en: "Fruit and vegetables",
              tr: "Meyve ve sebze",
              ...emptyTranslations(),
              ta: "பழங்கள் மற்றும் காய்கறிகள்",
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
              ta: "புதிய வார்த்தைகள்",
            },
          },
          {
            id: "ungaa_sukker",
            title: {
              no: "Unngå sukker",
              en: "Avoid sugar",
              tr: "Şekerden kaçınma",
              ...emptyTranslations(),
              ta: "சர்க்கரையை தவிர்க்கவும்",
            },
          },
          {
            id: "case",
            title: {
              no: "Case",
              en: "Case",
              tr: "Örnek vaka",
              ...emptyTranslations(),
              ta: "நிகழ்வு",
            },
          },
          {
            id: "diabetes",
            title: {
              no: "Diabetes",
              en: "Diabetes",
              tr: "Diyabet",
              ...emptyTranslations(),
              ta: "நீரிழிவு நோய்",
            },
          },
          {
            id: "munnhelse",
            title: {
              no: "Munnhelse",
              en: "Oral health",
              tr: "Ağız sağlığı",
              ...emptyTranslations(),
              ta: "வாய் ஆரோக்கியம்",
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
          ta: "உணவுப் பொருட்கள் மற்றும் பழக்கங்கள்",
        },
        subtopics: [
          {
            id: "matfett",
            title: {
              no: "Matfett",
              en: "Dietary fat",
              tr: "Yemeklik yağlar",
              ...emptyTranslations(),
              ta: "உணவு கொழுப்பு",
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
              ta: "புதிய வார்த்தைகள்",
            },
          },
          {
            id: "sjomat",
            title: {
              no: "Sjømat",
              en: "Seafood",
              tr: "Deniz ürünleri",
              ...emptyTranslations(),
              ta: "கடல் உணவு",
            },
          },
          {
            id: "melkeprodukter",
            title: {
              no: "Melkeprodukter",
              en: "Dairy products",
              tr: "Süt ürünleri",
              ...emptyTranslations(),
              ta: "பால் பொருட்கள்",
            },
          },
          {
            id: "korn",
            title: {
              no: "Korn",
              en: "Grains",
              tr: "Tahıl",
              ...emptyTranslations(),
              ta: "தானியங்கள்",
            },
          },
          {
            id: "salt",
            title: {
              no: "Salt",
              en: "Salt",
              tr: "Tuz",
              ...emptyTranslations(),
              ta: "உப்பு",
            },
          },
          {
            id: "hygiene",
            title: {
              no: "Hygiene",
              en: "Hygiene",
              tr: "Hijyen",
              ...emptyTranslations(),
              ta: "சுகாதாரம்",
            },
          },
          {
            id: "case",
            title: {
              no: "Case",
              en: "Case",
              tr: "Örnek vaka",
              ...emptyTranslations(),
              ta: "நிகழ்வு",
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
              ta: "சுருக்கம்",
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
      ta: "உடல் செயல்பாடு",
    },
    groups: [
      {
        id: "kom_i_gang_med_aktivitet",
        title: {
          no: "Kom i gang med aktivitet",
          en: "Getting started with physical activity",
          tr: "Fiziksel aktiviteye başlamak",
          ...emptyTranslations(),
          ta: "உடல் செயல்பாட்டை தொடங்குதல்",
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
              ta: "அறிமுகம்",
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
              ta: "புதிய வார்த்தைகள்",
            },
          },
          {
            id: "vaer_fysisk_aktiv",
            title: {
              no: "Vær fysisk aktiv",
              en: "Be physically active",
              tr: "Fiziksel olarak aktif olun",
              ...emptyTranslations(),
              ta: "உடல் ரீதியாக சுறுசுறுப்பாக இருங்கள்",
            },
          },
          {
            id: "intensivtrening",
            title: {
              no: "Intensivtrening",
              en: "High-intensity training",
              tr: "Yoğun antrenman",
              ...emptyTranslations(),
              ta: "அதிக தீவிர பயிற்சி",
            },
          },
          {
            id: "styrketrening",
            title: {
              no: "Styrketrening",
              en: "Strength training",
              tr: "Ağırlık antrenmanı",
              ...emptyTranslations(),
              ta: "வலிமை பயிற்சி",
            },
          },
          {
            id: "energiinntak_og_energiforbruk",
            title: {
              no: "Energiinntak og energiforbruk",
              en: "Energy intake and expenditure",
              tr: "Enerji alımı ve tüketimi",
              ...emptyTranslations(),
              ta: "ஆற்றல் உட்கொள்ளல் மற்றும் செலவு",
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
          ta: "உடலில் என்ன நடக்கிறது?",
        },
        subtopics: [
          {
            id: "blodsukker",
            title: {
              no: "Blodsukker",
              en: "Blood sugar",
              tr: "Kan şekeri",
              ...emptyTranslations(),
              ta: "இரத்த சர்க்கரை",
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
              ta: "புதிய வார்த்தைகள்",
            },
          },
          {
            id: "kolestrol",
            title: {
              no: "Kolestrol",
              en: "Cholesterol",
              tr: "Kolesterol",
              ...emptyTranslations(),
              ta: "கொலஸ்டிரால்",
            },
          },
          {
            id: "blodtrykk",
            title: {
              no: "Blodtrykk",
              en: "Blood pressure",
              tr: "Kan basıncı",
              ...emptyTranslations(),
              ta: "இரத்த அழுத்தம்",
            },
          },
          {
            id: "kreft",
            title: {
              no: "Kreft",
              en: "Cancer",
              tr: "Kanser",
              ...emptyTranslations(),
              ta: "புற்றுநோய்",
            },
          },
          {
            id: "hjernen",
            title: {
              no: "Hjernen",
              en: "The brain",
              tr: "Beyin",
              ...emptyTranslations(),
              ta: "மூளை",
            },
          },
          {
            id: "smerte",
            title: {
              no: "Smerte",
              en: "Pain",
              tr: "Ağrı",
              ...emptyTranslations(),
              ta: "வலி",
            },
          },
          {
            id: "muskler_og_skjelett",
            title: {
              no: "Muskler og skjelett",
              en: "Muscles and skeleton",
              tr: "Kas ve iskelet",
              ...emptyTranslations(),
              ta: "தசைகள் மற்றும் எலும்பு கட்டமைப்பு",
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
          ta: "அன்றாட வாழ்வில் ஆரோக்கியம்",
        },
        subtopics: [
          {
            id: "andre_aspekter",
            title: {
              no: "Andre aspekter",
              en: "Other aspects",
              tr: "Diğer hususlar",
              ...emptyTranslations(),
              ta: "மற்ற அம்சங்கள்",
            },
          },
          {
            id: "caser",
            title: {
              no: "Caser",
              en: "Cases",
              tr: "Örnek vakalar",
              ...emptyTranslations(),
              ta: "வழக்குகள்",
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
              ta: "சுருக்கம்",
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
      ta: "வாய் ஆரோக்கியம்",
    },
    subtopics: [
      {
        id: "introduksjon",
        title: {
          no: "Introduksjon",
          en: "Introduction",
          tr: "Giriş",
          ...emptyTranslations(),
          ta: "அறிமுகம்",
        },
      },
      {
        id: "nye_ord",
        title: {
          no: "Nye ord",
          en: "New words",
          tr: "Yeni kelimeler",
          ...emptyTranslations(),
          ta: "புதிய வார்த்தைகள்",
        },
      },
      {
        id: "rettigheter",
        title: {
          no: "Rettigheter",
          en: "Rights",
          tr: "Haklar",
          ...emptyTranslations(),
          ta: "உரிமைகள்",
        },
      },
      {
        id: "hold_tennene_rene",
        title: {
          no: "Hold tennene rene",
          en: "Keep your teeth clean",
          tr: "Dişlerinizi temiz tutun",
          ...emptyTranslations(),
          ta: "பற்களை சுத்தமாக வைக்கவும்",
        },
      },
      {
        id: "gaa_til_tannhelsekontroll",
        title: {
          no: "Gå til tannhelsekontroll",
          en: "Go for a dental check-up",
          tr: "Diş sağlığı kontrolüne gidin",
          ...emptyTranslations(),
          ta: "பல் ஆரோக்கிய பரிசோதனைக்கு செல்லுங்கள்",
        },
      },
      {
        id: "kostraad_munnhelse",
        title: {
          no: "Kostråd for munnhelsen",
          en: "Dietary advice for oral health",
          tr: "Ağız sağlığı için beslenme tavsiyeleri",
          ...emptyTranslations(),
          ta: "வாய் ஆரோக்கியத்திற்கான உணவு ஆலோசனை",
        },
      },
      {
        id: "munnhelse_hos_barn",
        title: {
          no: "Munnhelse hos barn",
          en: "Oral health in children",
          tr: "Çocuklar için ağız sağlığı",
          ...emptyTranslations(),
          ta: "குழந்தைகளின் வாய் ஆரோக்கியம்",
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
      ta: "மன ஆரோக்கியம்",
    },
    groups: [
      {
        id: "psykisk_helse",
        title: {
          no: "Psykisk helse",
          en: "Mental health",
          tr: "Ruh sağlığı",
          ...emptyTranslations(),
          ta: "மன ஆரோக்கியம்",
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
              ta: "அறிமுகம்",
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
              ta: "புதிய வார்த்தைகள்",
            },
          },
          {
            id: "psykisk_helse",
            title: {
              no: "Psykisk helse",
              en: "Mental health",
              tr: "Ruh sağlığı",
              ...emptyTranslations(),
              ta: "மன ஆரோக்கியம்",
            },
          },
          {
            id: "psykiske_helseplager",
            title: {
              no: "Psykisk helseplager",
              en: "Mental health problems",
              tr: "Ruh sağlığı sorunları",
              ...emptyTranslations(),
              ta: "மன ஆரோக்கிய பிரச்சினைகள்",
            },
          },
          {
            id: "psykiske_lidelser",
            title: {
              no: "Psykiske lidelser",
              en: "Mental disorders",
              tr: "Ruhsal bozukluklar",
              ...emptyTranslations(),
              ta: "மனநோய்கள்",
            },
          },
          {
            id: "case",
            title: {
              no: "Case",
              en: "Case",
              tr: "Örnek vaka",
              ...emptyTranslations(),
              ta: "நிகழ்வு",
            },
          },
          {
            id: "hvordan_ta_vare_paa_din_psykiske_helse",
            title: {
              no: "Hvordan ta vare på din psykiske helse",
              en: "How to take care of your mental health",
              tr: "Ruh sağlığınıza nasıl dikkat etmelisiniz?",
              ...emptyTranslations(),
              ta: "உங்கள் மன ஆரோக்கியத்தை எவ்வாறு கவனிப்பது",
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
          ta: "எங்கே உதவி பெறலாம்",
        },
        subtopics: [
          {
            id: "hvor_faa_hjelp",
            title: {
              no: "Hvor få hjelp",
              en: "Where to get help",
              tr: "Nereden yardım alabilirsiniz?",
              ...emptyTranslations(),
              ta: "எங்கே உதவி பெறலாம்",
            },
          },
          {
            id: "krise_og_ulykke",
            title: {
              no: "Krise og ulykke",
              en: "Crisis and emergency situations",
              tr: "Kriz ve kaza",
              ...emptyTranslations(),
              ta: "நெருக்கடி மற்றும் அவசர சூழ்நிலைகள்",
            },
          },
          {
            id: "legevakt_og_akutt_hjelp",
            title: {
              no: "Legevakt og akutt hjelp",
              en: "Urgent medical help",
              tr: "Acil servis ve acil yardım",
              ...emptyTranslations(),
              ta: "அவசர மருத்துவ உதவி",
            },
          },
          {
            id: "tjenester_i_oslo_kommune",
            title: {
              no: "Tjenester i Oslo kommune",
              en: "Services in Oslo municipality",
              tr: "Oslo belediyesi hizmetleri",
              ...emptyTranslations(),
              ta: "ஒஸ்லோ நகராட்சி சேவைகள்",
            },
          },
          {
            id: "frivillige_organisasjoner_i_oslo",
            title: {
              no: "Frivillige organisasjoner i Oslo",
              en: "Voluntary organisations in Oslo",
              tr: "Oslo'daki gönüllü kuruluşlar",
              ...emptyTranslations(),
              ta: "ஒஸ்லோவில் தன்னார்வ நிறுவனங்கள்",
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
              ta: "சுருக்கம்",
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
          ta: "பொது மருத்துவர்",
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
              ta: "அறிமுகம்",
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
              ta: "புதிய வார்த்தைகள்",
            },
          },
          {
            id: "fastlege",
            title: {
              no: "Fastlege",
              en: "General practitioner",
              tr: "Aile hekimi",
              ...emptyTranslations(),
              ta: "பொது மருத்துவர்",
            },
          },
          {
            id: "rettigheter",
            title: {
              no: "Rettigheter",
              en: "Rights",
              tr: "Haklar",
              ...emptyTranslations(),
              ta: "உரிமைகள்",
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
              ta: "சுருக்கம்",
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
          ta: "மன அழுத்தம்",
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
              ta: "அறிமுகம்",
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
              ta: "புதிய வார்த்தைகள்",
            },
          },
          {
            id: "stress",
            title: {
              no: "Stress",
              en: "Understanding stress",
              tr: "Stres",
              ...emptyTranslations(),
              ta: "மன அழுத்தம் புரிந்துகொள்ளல்",
            },
          },
          {
            id: "stress_som_ny_i_norge",
            title: {
              no: "Stress som ny i Norge",
              en: "Stress as a newcomer to Norway",
              tr: "Norveç'te yeni olanlar için stres",
              ...emptyTranslations(),
              ta: "நார்வேயில் புதியவராக மன அழுத்தம்",
            },
          },
          {
            id: "case",
            title: {
              no: "Case",
              en: "Case",
              tr: "Örnek vaka",
              ...emptyTranslations(),
              ta: "நிகழ்வு",
            },
          },
          {
            id: "haandtere_stress",
            title: {
              no: "Håndtere stress",
              en: "Managing stress",
              tr: "Stresi yönetmek",
              ...emptyTranslations(),
              ta: "மன அழுத்தத்தை நிர்வகித்தல்",
            },
          },
          {
            id: "case",
            title: {
              no: "Case",
              en: "Case",
              tr: "Örnek vaka",
              ...emptyTranslations(),
              ta: "நிகழ்வு",
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
              ta: "சுருக்கம்",
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
          ta: "கொடுமைப்படுத்துதல்",
        },
        subtopics: [
          {
            id: "introduksjon",
            title: {
              no: "Introduksjon",
              en: "Introduction",
              tr: "Giriş",
              ...emptyTranslations(),
              ta: "அறிமுகம்",
            },
          },
          {
            id: "nye_ord",
            title: {
              no: "Nye ord",
              en: "New words",
              tr: "Yeni kelimeler",
              ...emptyTranslations(),
              ta: "புதிய வார்த்தைகள்",
            },
          },
          {
            id: "mobbing",
            title: {
              no: "Mobbing",
              en: "Bullying",
              tr: "Zorbalık",
              ...emptyTranslations(),
              ta: "கொடுமைப்படுத்துதல்",
            },
          },
          {
            id: "konsekvenser",
            title: {
              no: "Konsekvenser",
              en: "Consequences",
              tr: "Sonuçlar",
              ...emptyTranslations(),
              ta: "விளைவுகள்",
            },
          },
          {
            id: "mobberen",
            title: {
              no: "Mobberen",
              en: "The bully",
              tr: "Zorba",
              ...emptyTranslations(),
              ta: "கொடுமைப்படுத்துபவர்",
            },
          },
          {
            id: "hvor_faa_stotte",
            title: {
              no: "Hvor få støtte",
              en: "Where to get support",
              tr: "Nereden destek alabilirsiniz?",
              ...emptyTranslations(),
              ta: "எங்கே ஆதரவு பெறலாம்",
            },
          },
          {
            id: "har_du_mobbet_noen",
            title: {
              no: "Har du mobbet noen",
              en: "Have you been a bully?",
              tr: "Birine zorbalık yaptınız mı?",
              ...emptyTranslations(),
              ta: "நீங்கள் யாரையாவது கொடுமைப்படுத்தியுள்ளீர்களா?",
            },
          },
          {
            id: "oppsummering",
            title: {
              no: "Oppsummering",
              en: "Summary",
              tr: "Özet",
              ...emptyTranslations(),
              ta: "சுருக்கம்",
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
      ta: "பெண்களின் இனப்பெருக்க ஆரோக்கியம்",
    },
    subtopics: [
      {
        id: "ytre_kjonnsorganer",
        title: {
          no: "Kvinnens ytre kjønnsorganer",
          en: "Women's external genitalia",
          tr: "Kadının dış cinsel organları",
          ...emptyTranslations(),
          ta: "பெண்களின் வெளிப்புற பிறப்புறுப்புகள்",
        },
      },
      {
        id: "indre_kjonnsorganer",
        title: {
          no: "Kvinnens indre kjønnsorganer",
          en: "Women's internal reproductive organs",
          tr: "Kadının iç üreme organları",
          ...emptyTranslations(),
          ta: "பெண்களின் உள் இனப்பெருக்க உறுப்புகள்",
        },
      },
      {
        id: "menstruasjon",
        title: {
          no: "Menstruasjon",
          en: "Menstruation",
          tr: "Menstrüasyon",
          ...emptyTranslations(),
          ta: "மாதவிடாய்",
        },
      },
      {
        id: "prevensjon",
        title: {
          no: "Prevensjon",
          en: "Contraception",
          tr: "Doğum kontrolü",
          ...emptyTranslations(),
          ta: "கருத்தடை",
        },
      },
    ],
  },
];
