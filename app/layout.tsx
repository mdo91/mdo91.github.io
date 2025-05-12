import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { Toaster } from "@/components/toaster"
import { LanguageProvider } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// Load Tahoma font for Arabic
const tahoma = localFont({
  src: [
    {
      path: "../public/fonts/tahoma.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/tahoma-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tahoma",
})

export const metadata: Metadata = {
  title: "Rebuild Syria - Coming Soon",
  description:
    "Connecting civil engineers and architects with real estate associations to rebuild demolished cities in Syria.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} ${tahoma.variable}`}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
