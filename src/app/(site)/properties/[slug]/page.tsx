import { Metadata } from "next";
import { notFound } from "next/navigation";
import Details from "@/app/components/properties/property-detail";
import { testimonials } from "@/lib/page-data";
import { getPropertyBySlug, propertyHomes } from "@/lib/property-data";

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
            title: "Проект не найден | Homely",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    return {
        title: `${item.name} | ${item.location} | Homely`,
        description: item.description?.[0] ?? `Проект ${item.name} от Homely в ${item.location}. Фото, объём работ и стоимость ремонта.`,
        alternates: {
            canonical: `/properties/${item.slug}`,
        },
        openGraph: {
            title: `${item.name} | Homely`,
            description: item.description?.[0] ?? `Реализованный проект ремонта ${item.name}.`,
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

    return <Details item={item} testimonials={testimonials} />;
};

export default page;
