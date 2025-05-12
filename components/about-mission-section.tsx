"use client"

import { useLanguage } from "@/components/language-provider"

const cards = [
  {
    icon: "🤝",
    titleKey: "aboutMission1Title",
    descKey: "aboutMission1Desc",
  },
  {
    icon: "🏗️",
    titleKey: "aboutMission2Title",
    descKey: "aboutMission2Desc",
  },
  {
    icon: "🌱",
    titleKey: "aboutMission3Title",
    descKey: "aboutMission3Desc",
  },
]

export function AboutMissionSection() {
  const { t } = useLanguage()
  return (
    <section className="bg-white py-16 border-b border-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">{t("aboutMission")}</h2>
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gradient-to-b from-purple-50/60 via-white to-white rounded-xl shadow p-8">
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-purple-800 mb-2 text-center">{t(card.titleKey as any)}</h3>
              <p className="text-gray-700 text-center text-lg">{t(card.descKey as any)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 