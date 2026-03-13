
import BlogList from "@/app/components/blog";
import HeroSub from "@/app/components/shared/hero-sub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
    "Блог о ремонте | Homely",
    description: "Статьи Homely о ремонте квартир: бюджет, сроки, материалы, дизайн-проект и практические советы по отделке.",
    alternates: {
        canonical: "/blogs",
    },
};

const Blog = () => {
    return (
        <>
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
