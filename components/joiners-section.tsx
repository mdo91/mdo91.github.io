"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"

export function JoinersSection() {
  const { t, language } = useLanguage()
  const [count, setCount] = useState(0)
  const target = 113

  useEffect(() => {
    let start = 0
    const duration = 1500 // ms
    const increment = Math.ceil(target / (duration / 16))
    const interval = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(interval)
  }, [])

  // Replace {count} in the localized string
  const description = t("joinersDescription").replace("{count}", count.toLocaleString(language === 'ar' ? 'ar' : 'en'))

  return (
    <section className="bg-white py-16 border-t border-b border-purple-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          {t("joinersTitle")}
        </h2>
        <div className="text-6xl font-extrabold text-purple-600 mb-4">
          {count}
        </div>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  )
} 