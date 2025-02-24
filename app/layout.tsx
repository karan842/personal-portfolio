import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Karan Shingde | AI Engineer & Innovator",
  description: "AI Engineer building intelligent solutions, AI agents, and ML applications.",
  keywords: "AI Engineer, Machine Learning, Generative AI Specialist, AI Consultant, Karan Shingde",
  openGraph: {
    title: "Karan Shingde | AI Engineer & Innovator",
    description: "AI Engineer building intelligent solutions, AI agents, and ML applications.",
    // url: "https://yourdomain.com", // Update this when you deploy
    type: "website",
    image: "/app/assets/karan-front.png", // Local path for development
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Shingde | AI Engineer & Innovator",
    description: "AI Engineer building intelligent solutions, AI agents, and ML applications.",
    image: "/app/assets/karan-front.png", // Local path for development
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

