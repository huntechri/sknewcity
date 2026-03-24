import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sk-new-city.ru";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ремонт квартир под ключ в Москве | SK New City | СК Новый Город",
    template: "%s",
  },
  description:
    "СК Новый Город (SK New City) выполняет ремонт квартир под ключ в Москве: черновая и чистовая отделка, капитальный и дизайнерский ремонт, инженерия, комплектация и авторский контроль.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    title: "Ремонт квартир под ключ в Москве | SK New City | СК Новый Город",
    description:
      "СК Новый Город: ремонт квартир, отделочные работы, инженерия, дизайн-проект и реализованные объекты в Москве.",
    siteName: "SK New City",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ремонт квартир под ключ в Москве | SK New City",
    description:
      "Ремонт квартир и отделочные работы в Москве от СК Новый Город.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="bg-white dark:bg-black antialiased">
        <NextTopLoader color="#07be8a" />

        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="light"
          >
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
