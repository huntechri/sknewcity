import type { Metadata } from "next";
import RenovationHero from "@/app/components/services/apartment-renovation/RenovationHero";
import RenovationWorks from "@/app/components/services/apartment-renovation/RenovationWorks";
import RenovationCalculator from "@/app/components/services/apartment-renovation/RenovationCalculator";
import RenovationMaterials from "@/app/components/services/apartment-renovation/RenovationMaterials";
import RenovationFAQ from "@/app/components/services/apartment-renovation/RenovationFAQ";
import RenovationTrust from "@/app/components/services/apartment-renovation/RenovationTrust";
import RenovationCTA from "@/app/components/services/apartment-renovation/RenovationCTA";
import StructuredData from "@/app/components/seo/StructuredData";
import {
  getBreadcrumbSchema,
  getFaqSchema,
  getServiceSchema,
  renovationFaqs,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ремонт квартир под ключ в Москве | SK New City",
  description:
    "СК Новый Город выполняет ремонт квартир под ключ в Москве: капитальный, дизайнерский и косметический ремонт, отделочные работы, смета, гарантия 2 года и контроль качества.",
  alternates: {
    canonical: "/apartment-renovation",
  },
  openGraph: {
    title: "Ремонт квартир под ключ в Москве | SK New City",
    description:
      "Профессиональный ремонт квартир, отделка и инженерные работы в Москве от СК Новый Город.",
    images: ["/images/hero/heroBanner.png"],
  },
};

export default function ApartmentRenovationPage() {
  const structuredData = [
    getServiceSchema({
      name: "Ремонт квартир под ключ в Москве",
      description:
        "Полный цикл ремонта квартир: замер, смета, инженерия, отделка, снабжение и авторский контроль.",
      path: "/apartment-renovation",
    }),
    getFaqSchema(renovationFaqs),
    getBreadcrumbSchema([
      { name: "Главная", path: "/" },
      { name: "Ремонт квартир", path: "/apartment-renovation" },
    ]),
  ];

  return (
    <main className="bg-white dark:bg-dark" data-oid="5tyv5va">
      <StructuredData data={structuredData} data-oid="f5z-6h0" />
      <RenovationHero data-oid="jhnht:q" />
      <RenovationWorks data-oid="cyg8rwq" />
      <RenovationCalculator data-oid="81pm-ep" />
      <RenovationTrust data-oid="v0.yt:i" />
      <RenovationMaterials data-oid="8l2o4wr" />
      <RenovationFAQ data-oid="qstaw9s" />
      <RenovationCTA data-oid="0vm6wp6" />
    </main>
  );
}
