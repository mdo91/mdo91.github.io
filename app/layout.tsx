import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DailyTaskr - A calm, focused daily planner",
  description: "A calm, focused daily planner that helps you plan with intention and finish with confidence. Add tasks in seconds, set a time and priority, and get gentle reminders right when you need them.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
