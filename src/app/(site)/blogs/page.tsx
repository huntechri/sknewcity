
import BlogList from "@/app/components/blog";
import HeroSub from "@/app/components/shared/hero-sub";
import StructuredData from "@/app/components/seo/StructuredData";
import { Metadata } from "next";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title:
    "Блог о ремонте | SK New City",
    description: "Статьи SK New City о ремонте квартир и отделочных работах: смета, сроки, материалы, дизайн-проект, ошибки ремонта и советы по Москве.",
    alternates: {
        canonical: "/blogs",
    },
};

const Blog = () => {
    return (
        <>
            <StructuredData
                data={getBreadcrumbSchema([
                    { name: "Главная", path: "/" },
                    { name: "Блог", path: "/blogs" },
                ])}
            />
            <HeroSub
                title="Статьи о ремонте квартир"
                description="Практические советы, чек-листы и разборы типовых ошибок."
                badge="Blog"
                as="h1"
            />
            <BlogList />
        </>
    );
};

export default Blog;
