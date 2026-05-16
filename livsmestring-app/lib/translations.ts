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
  subtopic: {
    empty: string;
    emptyDescription: string;
    themeFallback: string;
  };
};

export const translations: Record<string, Translation> = {
  no: {
    markDone: "Marker som fullført",
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
    subtopic: {
      empty: "Det finnes ingen videoer her enda",
      emptyDescription:
        "Det finnes foreløpig ingen videoer på dette språket for dette undertemaet.",
      themeFallback: "Tema",
    },
  },

  en: {
    markDone: "Mark as completed",
    done: "Completed",
    loading: "Loading...",
    category: {
      changeLanguage: "Change language",
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
    subtopic: {
      empty: "There are no videos here yet",
      emptyDescription:
        "There are currently no videos in this language for this subtopic.",
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
    theme: {
      empty: "Burada henüz video yok",
      emptyDescription:
        "Bu konu için bu dilde şu anda video bulunmamaktadır.",
    },
    subtopic: {
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
    subtopic: {
      empty: "இங்கே இன்னும் காணொளிகள் இல்லை",
      emptyDescription:
        "இந்த உட்தலைப்பிற்கு தமிழ் மொழியில் தற்போது எந்த காணொளிகளும் இல்லை.",
      themeFallback: "தலைப்பு",
    },
  },
  
  ar: {
    markDone: "وضع علامة مكتمل",
    done: "مكتمل",
    loading: "جارٍ التحميل...",
    category: {
      changeLanguage: "تغيير اللغة",
      healthTitle: "الصحة",
      careerTitle: "المهنة",
      backToCategories: "العودة إلى الفئات",
      backToThemes: "العودة إلى المواضيع",
    },
    menu: {
      home: "الرئيسية",
      health: "الصحة",
      career: "المهنة",
      language: "اللغة",
    },
    theme: {
      empty: "لا توجد مقاطع فيديو هنا بعد",
      emptyDescription:
        "لا توجد حالياً مقاطع فيديو بهذه اللغة لهذا الموضوع.",
    },
    subtopic: {
      empty: "لا توجد مقاطع فيديو هنا بعد",
      emptyDescription:
        "لا توجد حالياً مقاطع فيديو بهذه اللغة لهذا الموضوع الفرعي.",
      themeFallback: "موضوع",
    },
  },
  
  fa: {
    markDone: "علامت‌گذاری به عنوان تکمیل‌شده",
    done: "تکمیل شد",
    loading: "در حال بارگذاری...",
    category: {
      changeLanguage: "تغییر زبان",
      healthTitle: "سلامت",
      careerTitle: "شغل",
      backToCategories: "بازگشت به دسته‌بندی‌ها",
      backToThemes: "بازگشت به موضوعات",
    },
    menu: {
      home: "خانه",
      health: "سلامت",
      career: "شغل",
      language: "زبان",
    },
    theme: {
      empty: "هنوز ویدیویی اینجا وجود ندارد",
      emptyDescription:
        "در حال حاضر هیچ ویدیویی به این زبان برای این موضوع وجود ندارد.",
    },
    subtopic: {
      empty: "هنوز ویدیویی اینجا وجود ندارد",
      emptyDescription:
        "در حال حاضر هیچ ویدیویی به این زبان برای این زیرموضوع وجود ندارد.",
      themeFallback: "موضوع",
    },
  },
 
  ku: {
    markDone: "Wekî qedandî nîşan bide",
    done: "Qediya",
    loading: "Tê barkirin...",
    category: {
      changeLanguage: "Zimanê biguhere",
      healthTitle: "Tenduristî",
      careerTitle: "Karîyer",
      backToCategories: "Vegere kategoriyên",
      backToThemes: "Vegere mijarên",
    },
    menu: {
      home: "Mal",
      health: "Tenduristî",
      career: "Karîyer",
      language: "Ziman",
    },
    theme: {
      empty: "Hîn vîdyo li vir tune ne",
      emptyDescription:
        "Niha ji bo vê mijarê bi vî zimanî vîdyo tune ne.",
    },
    subtopic: {
      empty: "Hîn vîdyo li vir tune ne",
      emptyDescription:
        "Niha ji bo vê binermijarê bi vî zimanî vîdyo tune ne.",
      themeFallback: "Mijar",
    },
  },
 
  so: {
    markDone: "U calaamadee dhamaystiran",
    done: "Dhamaystiran",
    loading: "Waa la rarayo...",
    category: {
      changeLanguage: "Beddel luuqadda",
      healthTitle: "Caafimaadka",
      careerTitle: "Xirfadda",
      backToCategories: "Ku noqo qaybaha",
      backToThemes: "Ku noqo mawduucyada",
    },
    menu: {
      home: "Guriga",
      health: "Caafimaadka",
      career: "Xirfadda",
      language: "Luuqadda",
    },
    theme: {
      empty: "Halkan weli ma jiraan fiidiyowyada",
      emptyDescription:
        "Hadda ma jiraan fiidiyooyin luuqaddan ku jira mawduucan.",
    },
    subtopic: {
      empty: "Halkan weli ma jiraan fiidiyowyada",
      emptyDescription:
        "Hadda ma jiraan fiidiyooyin luuqaddan ku jira mawduucan hoosaadka.",
      themeFallback: "Mawduuca",
    },
  },
 
  es: {
    markDone: "Marcar como completado",
    done: "Completado",
    loading: "Cargando...",
    category: {
      changeLanguage: "Cambiar idioma",
      healthTitle: "Salud",
      careerTitle: "Carrera",
      backToCategories: "Volver a las categorías",
      backToThemes: "Volver a los temas",
    },
    menu: {
      home: "Inicio",
      health: "Salud",
      career: "Carrera",
      language: "Idioma",
    },
    theme: {
      empty: "Aún no hay videos aquí",
      emptyDescription:
        "Actualmente no hay videos en este idioma para este tema.",
    },
    subtopic: {
      empty: "Aún no hay videos aquí",
      emptyDescription:
        "Actualmente no hay videos en este idioma para este subtema.",
      themeFallback: "Tema",
    },
  },
 
  sw: {
    markDone: "Weka alama kama imekamilika",
    done: "Imekamilika",
    loading: "Inapakia...",
    category: {
      changeLanguage: "Badilisha lugha",
      healthTitle: "Afya",
      careerTitle: "Kazi",
      backToCategories: "Rudi kwenye makundi",
      backToThemes: "Rudi kwenye mada",
    },
    menu: {
      home: "Nyumbani",
      health: "Afya",
      career: "Kazi",
      language: "Lugha",
    },
    theme: {
      empty: "Hakuna video hapa bado",
      emptyDescription:
        "Kwa sasa hakuna video katika lugha hii kwa mada hii.",
    },
    subtopic: {
      empty: "Hakuna video hapa bado",
      emptyDescription:
        "Kwa sasa hakuna video katika lugha hii kwa mada ndogo hii.",
      themeFallback: "Mada",
    },
  },
  
  ti: {
    markDone: "ከምዝተወደአ ምልክት ግበር",
    done: "ተወዲኡ",
    loading: "ይጽዓን ኣሎ...",
    category: {
      changeLanguage: "ቋንቋ ቀይር",
      healthTitle: "ጥዕና",
      careerTitle: "ሞያ",
      backToCategories: "ናብ ዝርዝር ኣርእስቲ ተመለስ",
      backToThemes: "ናብ ኣርእስቲ ተመለስ",
    },
    menu: {
      home: "መበቆል",
      health: "ጥዕና",
      career: "ሞያ",
      language: "ቋንቋ",
    },
    theme: {
      empty: "ገና ቪድዮ የለን",
      emptyDescription:
        "ኣብዚ ቋንቋ ንዚ ኣርእስቲ ሕጂ ቪድዮ የለን።",
    },
    subtopic: {
      empty: "ገና ቪድዮ የለን",
      emptyDescription:
        "ኣብዚ ቋንቋ ንዚ ንኡስ ኣርእስቲ ሕጂ ቪድዮ የለን።",
      themeFallback: "ኣርእስቲ",
    },
  },
  
  ur: {
    markDone: "مکمل کے طور پر نشان زد کریں",
    done: "مکمل",
    loading: "لوڈ ہو رہا ہے...",
    category: {
      changeLanguage: "زبان تبدیل کریں",
      healthTitle: "صحت",
      careerTitle: "کیریئر",
      backToCategories: "زمروں پر واپس جائیں",
      backToThemes: "موضوعات پر واپس جائیں",
    },
    menu: {
      home: "گھر",
      health: "صحت",
      career: "کیریئر",
      language: "زبان",
    },
    theme: {
      empty: "ابھی یہاں کوئی ویڈیو نہیں ہے",
      emptyDescription:
        "اس موضوع کے لیے اس زبان میں فی الحال کوئی ویڈیو نہیں ہے۔",
    },
    subtopic: {
      empty: "ابھی یہاں کوئی ویڈیو نہیں ہے",
      emptyDescription:
        "اس ذیلی موضوع کے لیے اس زبان میں فی الحال کوئی ویڈیو نہیں ہے۔",
      themeFallback: "موضوع",
    },
  },
 
};