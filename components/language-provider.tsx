"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { Language } from "@/lib/i18n"
import { translations } from "@/lib/i18n"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.en) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  // Set direction and font based on language
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language

    // Add or remove the Arabic font class
    if (language === "ar") {
      document.documentElement.classList.add("font-tahoma")
    } else {
      document.documentElement.classList.remove("font-tahoma")
    }
  }, [language])

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
