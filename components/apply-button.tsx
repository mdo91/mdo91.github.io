"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function ApplyButton() {
  const { t } = useLanguage()

  const scrollToForm = () => {
    const formSection = document.getElementById('apply-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button
      onClick={scrollToForm}
      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {t("applyNow")}
    </Button>
  )
} 