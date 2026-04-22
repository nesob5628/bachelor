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
  subtheme: {
    empty: string;
    themeFallback: string;
  };
};

export const translations: Record<string, Translation> = {
  no: {
    markDone: "Marker som fullført",
    done: "Fullført",
    loading: "Laster...",
    category: {
      changeLanguage: "Tilbake til språk",
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
    subtheme: {
      empty: "Det finnes ingen videoer her enda",
      themeFallback: "Tema",
    },
  },

  en: {
    markDone: "Mark as completed",
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
    subtheme: {
      empty: "There are no videos here yet",
      themeFallback: "Theme",
    },
  },

  tr: {
    markDone: "Tamamlandı olarak işaretle",
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
    subtheme: {
      empty: "Burada henüz video yok",
      themeFallback: "Tema",
    },
  },

  ta: {
    markDone: "முடிந்தது என குறிக்கவும்",
    done: "முடிந்தது",
    loading: "ஏற்றப்படுகிறது...",
    category: {
      changeLanguage: "மொழிக்கு திரும்பு",
      healthTitle: "ஆரோக்கியம்",
      careerTitle: "தொழில்",
      backToCategories: "பிரிவுகளுக்கு திரும்பு",
      backToThemes: "தலைப்புகளுக்கு திரும்பு",
    },
    menu: {
      home: "முகப்பு",
      health: "ஆரோக்கியம்",
      career: "தொழில்",
      language: "மொழி",
    },
    subtheme: {
      empty: "இங்கே இன்னும் வீடியோக்கள் இல்லை",
      themeFallback: "தலைப்பு",
    },
  },
};