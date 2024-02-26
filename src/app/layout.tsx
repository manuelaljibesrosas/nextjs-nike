import type { Metadata } from 'next'
import '@/styles/globals.scss'
import Navigation from '@/components/navigation/navigation'
import Footer from '@/components/footer/footer'
import { helveticaNeue } from '@/assets/fonts'

export const metadata: Metadata = {
  title: {
    default: 'Nike. Just Do it. Nike.com',
    template: '%s. Nike.com',
  },
  description:
    'Nike delivers innovative products, experiences and services to inspire athletes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={helveticaNeue.className}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
