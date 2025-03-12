import type React from "react"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Previsão do Tempo",
  description: "Aplicação de previsão do tempo usando WeatherAPI.com",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

