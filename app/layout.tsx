import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Reval — Tasaciones que captan propiedades',
  description:
    'Generá tasaciones profesionales con análisis comparativo de mercado y cerrá más captaciones con datos reales.',
  keywords: ['tasaciones inmobiliarias', 'CMA', 'agencias inmobiliarias', 'valuación de propiedades', 'LATAM'],
  openGraph: {
    title: 'Reval — Tasaciones que captan propiedades',
    description: 'Cerrá más captaciones con tasaciones basadas en comparables reales del mercado.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-[#0B0B0C] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  )
}
