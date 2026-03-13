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

export const metadata: Metadata = {
  title: 'Ремонт квартир под ключ | Homely Renovation',
  description: 'Проекты и услуги по ремонту квартир: дизайн, отделка, инженерия и комплектация.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
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
