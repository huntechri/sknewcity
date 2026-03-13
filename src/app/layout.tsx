import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

import ScrollToTop from './components/scroll-to-top';
import SmoothScrollProvider from '@/providers/SmoothScrollProvider';

const font = Bricolage_Grotesque({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sk-new-city.ru';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ремонт квартир под ключ в Москве | Homely Renovation',
    template: '%s',
  },
  description: 'Homely Renovation выполняет ремонт квартир и коммерческих помещений в Москве: смета, дизайн, инженерия, отделка и комплектация под ключ.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    title: 'Ремонт квартир под ключ в Москве | Homely Renovation',
    description: 'Проекты и услуги по ремонту квартир: дизайн, отделка, инженерия и комплектация.',
    siteName: 'Homely Renovation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ремонт квартир под ключ в Москве | Homely Renovation',
    description: 'Проекты и услуги по ремонту квартир: дизайн, отделка, инженерия и комплектация.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <NextTopLoader color="#07be8a" />

        <SmoothScrollProvider>
          <ThemeProvider
            attribute='class'
            enableSystem={true}
            defaultTheme='light'>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </SmoothScrollProvider>

      </body>
    </html>
  )
}
