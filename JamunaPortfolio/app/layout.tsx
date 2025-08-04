import type { Metadata } from 'next'
import './globals.css'
import GlowingDotsBackground from '../components/glowing-dots-background'

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Cool glowing background',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-white font-sans antialiased relative overflow-x-hidden">
        {/* Glowing background */}
        <GlowingDotsBackground />

        {/* Main content - ensure it's above glowing dots */}
        <div className="relative z-30">
          {children}
        </div>
      </body>
    </html>
  )
}
