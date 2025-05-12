"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
      className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm"
    >
      {language === "ar" ? t("switchToEnglish") : t("switchToArabic")}
    </Button>
  )
}
