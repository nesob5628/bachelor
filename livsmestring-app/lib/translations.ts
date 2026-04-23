type Translation = {
  markDone: string;
  done: string;
  loading: string;
  category: {
    changeLanguage: string;
    healthTitle: string;
    careerTitle: string;
    backToCategories: string;
    backToThemes: string;
  };
  menu: {
    home: string;
    health: string;
    career: string;
    language: string;
  };
  theme: {
    empty: string;
    emptyDescription: string;
  };
  subtheme: {
    empty: string;
    emptyDescription: string;
    themeFallback: string;
  };
};

export const translations: Record<string, Translation> = {
  no: {
    markDone: "Fullført video",
    done: "Fullført",
    loading: "Laster...",
    category: {
      changeLanguage: "Bytt språk",
      healthTitle: "Helse",
      careerTitle: "Karriere",
      backToCategories: "Tilbake til kategorier",
      backToThemes: "Tilbake til temaer",
    },
    menu: {
      home: "Hjem",
      health: "Helse",
      career: "Karriere",
      language: "Språk",
    },
    theme: {
      empty: "Det finnes ingen videoer her enda",
      emptyDescription:
        "Det finnes foreløpig ingen videoer på dette språket for dette temaet.",
    },
    subtheme: {
      empty: "Det finnes ingen videoer her enda",
      emptyDescription:
        "Det finnes foreløpig ingen videoer på dette språket for dette undertemaet.",
      themeFallback: "Tema",
    },
  },

  en: {
    markDone: "Completed video",
    done: "Completed",
    loading: "Loading...",
    category: {
      changeLanguage: "Back to language",
      healthTitle: "Health",
      careerTitle: "Career",
      backToCategories: "Back to categories",
      backToThemes: "Back to themes",
    },
    menu: {
      home: "Home",
      health: "Health",
      career: "Career",
      language: "Language",
    },
    theme: {
      empty: "There are no videos here yet",
      emptyDescription:
        "There are currently no videos in this language for this topic.",
    },
    subtheme: {
      empty: "There are no videos here yet",
      emptyDescription:
        "There are currently no videos in this language for this subtopic.",
      themeFallback: "Theme",
    },
  },

  tr: {
    markDone: "Video tamamlandı",
    done: "Tamamlandı",
    loading: "Yükleniyor...",
    category: {
      changeLanguage: "Dile geri dön",
      healthTitle: "Sağlık",
      careerTitle: "Kariyer",
      backToCategories: "Kategorilere geri dön",
      backToThemes: "Temalara geri dön",
    },
    menu: {
      home: "Ana sayfa",
      health: "Sağlık",
      career: "Kariyer",
      language: "Dil",
    },
    theme: {
      empty: "Burada henüz video yok",
      emptyDescription:
        "Bu konu için bu dilde şu anda video bulunmamaktadır.",
    },
    subtheme: {
      empty: "Burada henüz video yok",
      emptyDescription:
        "Bu alt konu için bu dilde şu anda video bulunmamaktadır.",
      themeFallback: "Tema",
    },
  },

  ta: {
    markDone: "முடிந்ததாக குறிக்கவும்",
    done: "முடிந்தது",
    loading: "ஏற்றப்படுகிறது...",
    category: {
      changeLanguage: "மொழியை மாற்று",
      healthTitle: "ஆரோக்கியம்",
      careerTitle: "தொழில்",
      backToCategories: "பிரிவுகளுக்கு திரும்பு",
      backToThemes: "கருப்பொருள்களுக்கு திரும்பு",
    },
    menu: {
      home: "முகப்பு",
      health: "ஆரோக்கியம்",
      career: "தொழில்",
      language: "மொழி", 
    },
    theme: {
      empty: "இங்கே இன்னும் காணொளிகள் இல்லை",
      emptyDescription:
        "இந்த தலைப்பிற்கு தமிழ் மொழியில் தற்போது எந்த காணொளிகளும் இல்லை.",
    },
    subtheme: {
      empty: "இங்கே இன்னும் காணொளிகள் இல்லை",
      emptyDescription:
        "இந்த உட்தலைப்பிற்கு தமிழ் மொழியில் தற்போது எந்த காணொளிகளும் இல்லை.",
      themeFallback: "தலைப்பு",
    },
  }
};