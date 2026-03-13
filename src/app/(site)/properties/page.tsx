import { Metadata } from "next";
import PropertiesListing from "@/app/components/properties/property-list";

export const metadata: Metadata = {
    title: "Проекты ремонта | Homely",
    description: "Портфолио Homely Renovation: реальные проекты ремонта квартир и коммерческих помещений с фото, метражом и форматом работ.",
    alternates: {
        canonical: "/properties",
    },
};

type PropertiesPageProps = {
    searchParams: Promise<{ category?: string }>;
};

const page = async ({ searchParams }: PropertiesPageProps) => {
    const params = await searchParams;

    return (
        <PropertiesListing categoryParam={params.category} />
    );
};

export default page;
