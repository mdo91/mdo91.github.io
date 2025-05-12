"use client"

import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("title")}</h3>
            <p className="text-gray-400 max-w-md">{t("platformDescription")}</p>
          </div>
          <div className="md:text-right">
            <h3 className="text-xl font-bold mb-4">{t("contact")}</h3>
            <p className="text-gray-400">{t("email_contact")}</p>
            <p className="text-gray-400">{t("phone_contact")}</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} {t("title")}. {t("copyright")}.
          </p>
        </div>
      </div>
    </footer>
  )
}
