import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ghanshyam Gadekar - AI Engineer",
  description: "AI/ML Engineer specializing in Computer Vision, NLP, and Machine Learning solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn("min-h-screen bg-black text-white font-sans antialiased", inter.className)}>{children}</body>
    </html>
  )
}



import './globals.css'