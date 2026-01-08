import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Jasper Schminke Portfolio',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ paddingTop: '100px' }}>
          {children}
        </div>
      </body>
    </html>
  )
}

