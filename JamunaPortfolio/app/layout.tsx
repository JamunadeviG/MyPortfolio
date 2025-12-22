import type { Metadata } from 'next'
import './globals.css'



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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased relative overflow-x-hidden selection:bg-primary/30">
        {/* Main content */}
        <div className="relative z-30 pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
