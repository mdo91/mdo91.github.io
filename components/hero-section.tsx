"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { ApplyButton } from "@/components/apply-button"

export function HeroSection() {
  const { t, language } = useLanguage()

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-purple-100/60 via-white to-white">
      {/* Removed decorative faded squares */}
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 flex items-center min-h-[90vh] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          <div className={`space-y-6 ${language === "ar" ? "lg:order-1" : "lg:order-none"}`}>
            <div className="inline-block px-3 py-1 text-sm font-medium text-white bg-purple-600 rounded-full">
              {t("comingSoon")}
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">{t("title")}</h1>
              <img src="/sflag.png" alt="Syria Flag" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-gray-200 shadow" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl">{t("description")}</p>
            <div className="pt-4">
              <ApplyButton />
            </div>
          </div>
          <div className={`relative h-64 sm:h-80 lg:h-96 ${language === "ar" ? "lg:order-none" : "lg:order-1"}`}>
            <Image
              src="/Syria-section-first.jpg"
              alt="Rebuilding cities"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
      {/* Animated Arrow */}
      <button
        aria-label="Scroll to form"
        onClick={() => {
          const formSection = document.getElementById('apply-form')
          if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 focus:outline-none"
        style={{ background: 'none', border: 'none' }}
      >
        <svg
          className="animate-bounce"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5v14m0 0l-7-7m7 7l7-7"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  )
}
