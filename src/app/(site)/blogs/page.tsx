
import BlogList from "@/app/components/blog";
import HeroSub from "@/app/components/shared/hero-sub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
    "Блог о ремонте | Homely",
};

const Blog = () => {
    return (
        <>
            <HeroSub
                title="Статьи о ремонте квартир"
                description="Практические советы, чек-листы и разборы типовых ошибок."
                badge="Blog"
            />
            <BlogList />
        </>
    );
};

export default Blog;
