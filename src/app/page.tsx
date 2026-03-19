import { Metadata } from "next";
import Services from "./components/home/services";
import Hero from "./components/home/hero";
import Properties from "./components/home/properties";
import FeaturedProperty from "./components/home/featured-property";
import ResidentialComplexes from "./components/home/complexes";
import Testimonial from "./components/home/testimonial";
// import BlogSmall from './components/shared/blog'
import GetInTouch from "./components/home/get-in-touch";
import FAQ from "./components/home/faqs";
import StructuredData from "./components/seo/StructuredData";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getOrganizationSchema,
  getWebsiteSchema,
  homeFaqs,
} from "@/lib/seo";
export const metadata: Metadata = {
  title: "Ремонт квартир под ключ в Москве | SK New City | СК Новый Город",
  description:
    "СК Новый Город (SK New City) выполняет ремонт квартир под ключ в Москве: капитальный, косметический и дизайнерский ремонт, отделочные работы, инженерия и реализованные проекты.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ремонт квартир под ключ в Москве | SK New City | СК Новый Город",
    description:
      "Капитальный, косметический и дизайнерский ремонт квартир в Москве. Смета, сроки, контроль качества и реальные проекты СК Новый Город.",
    images: ["/images/hero/heroBanner.png"],
  },
};
import { featuredProperty, complexes } from "@/lib/page-data";

export default function Home() {
  const structuredData = [
    getOrganizationSchema(),
    getWebsiteSchema(),
    getFaqSchema(homeFaqs),
    getBreadcrumbSchema([{ name: "Главная", path: "/" }]),
  ];

  return (
    <main data-oid="rg:0:i5">
      <StructuredData data={structuredData} data-oid="j29en01" />
      <Hero data-oid="tfvnr57" />
      <Services data-oid="q3-a7ix" />
      <Properties data-oid="dsivgwb" />
      {/* <FeaturedProperty featuredProperty={featuredProperty} /> */}
      <ResidentialComplexes complexes={complexes} data-oid="86e45de" />
      {/* <Testimonial /> */}
      {/* <BlogSmall /> */}
      <GetInTouch data-oid="_wv-wke" />
      <FAQ data-oid="9wspy_s" />
    </main>
  );
}
