import { Metadata } from "next";
import ContactPage from "@/app/components/contact/ContactPage";
import StructuredData from "@/app/components/seo/StructuredData";
import {
  companyAddress,
  companyEmail,
  companyPhone,
  getBreadcrumbSchema,
  getOrganizationSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Контакты | SK New City | СК Новый Город",
  description:
    "Свяжитесь с СК Новый Город (SK New City) в Москве: консультация по ремонту квартир, расчёт стоимости, адрес, телефон и форма заявки.",
  alternates: {
    canonical: "/contactus",
  },
};

export default function ContactUsPage() {
  const structuredData = [
    getOrganizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Контакты SK New City",
      description:
        "Контакты, адрес, телефон и форма заявки на ремонт квартир в Москве.",
      telephone: companyPhone,
      email: companyEmail,
      address: companyAddress,
    },
    getBreadcrumbSchema([
      { name: "Главная", path: "/" },
      { name: "Контакты", path: "/contactus" },
    ]),
  ];

  return (
    <>
      <StructuredData data={structuredData} data-oid="3l1qnyl" />
      <ContactPage data-oid="8l8l9xa" />
    </>
  );
}
