import { Metadata } from "next";
import { notFound } from "next/navigation";
import Details from "@/app/components/properties/property-detail";
import StructuredData from "@/app/components/seo/StructuredData";
import { testimonials } from "@/lib/page-data";
import { getPropertyBySlug, propertyHomes } from "@/lib/property-data";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return propertyHomes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPropertyBySlug(slug);

  if (!item) {
    return {
      title: "Проект не найден | SK New City",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${item.name} | ${item.location} | SK New City`,
    description:
      item.description?.[0] ??
      `Проект ремонта ${item.name} от СК Новый Город в ${item.location}. Фото, объём работ, отделка и стоимость ремонта.`,
    alternates: {
      canonical: `/properties/${item.slug}`,
    },
    openGraph: {
      title: `${item.name} | SK New City`,
      description:
        item.description?.[0] ??
        `Реализованный проект ремонта квартиры от СК Новый Город.`,
      images: item.images[0] ? [item.images[0].src] : [],
    },
  };
}

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const item = getPropertyBySlug(slug);

  if (!item) {
    notFound();
  }

  const structuredData = [
    getServiceSchema({
      name: `${item.name} — проект ремонта`,
      description:
        item.description?.[0] ??
        `Проект ремонта ${item.name} в ${item.location}.`,
      path: `/properties/${item.slug}`,
    }),
    getBreadcrumbSchema([
      { name: "Главная", path: "/" },
      { name: "Проекты", path: "/properties" },
      { name: item.name, path: `/properties/${item.slug}` },
    ]),
  ];

  return (
    <>
      <StructuredData data={structuredData} data-oid="ty.bhy6" />
      <Details item={item} testimonials={testimonials} data-oid="t4flxfv" />
    </>
  );
};

export default page;
