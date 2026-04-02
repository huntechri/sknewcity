import { Metadata } from "next";
import PropertiesListing from "@/app/components/properties/property-list";
import StructuredData from "@/app/components/seo/StructuredData";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo";
export const metadata: Metadata = {
  title: "Проекты ремонта квартир | SK New City",
  description:
    "Портфолио СК Новый Город: реальные проекты ремонта квартир и отделочных работ в Москве с фото, площадью, сметой и форматом ремонта.",
  alternates: {
    canonical: "/properties",
  },
};

type PropertiesPageProps = {
  searchParams: Promise<{ category?: string }>;
};

const page = async ({ searchParams }: PropertiesPageProps) => {
  const params = await searchParams;
  const structuredData = [
    getServiceSchema({
      name: "Портфолио ремонта квартир",
      description:
        "Реализованные проекты ремонта квартир и коммерческих помещений с фото, площадью и описанием работ.",
      path: "/properties",
    }),
    getBreadcrumbSchema([
      { name: "Главная", path: "/" },
      { name: "Проекты", path: "/properties" },
    ]),
  ];

  return (
    <>
      <StructuredData data={structuredData} data-oid="vmnh1ds" />
      <PropertiesListing categoryParam={params.category} data-oid="v-kg.3g" />
    </>
  );
};

export default page;
