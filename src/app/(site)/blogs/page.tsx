import BlogList from "@/app/components/blog";
import HeroSub from "@/app/components/shared/hero-sub";
import StructuredData from "@/app/components/seo/StructuredData";
import { Metadata } from "next";
import { getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Блог о ремонте | SK New City",
  description:
    "Статьи SK New City о ремонте квартир и отделочных работах: смета, сроки, материалы, дизайн-проект, ошибки ремонта и советы по Москве.",
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
        data-oid=".oov_sd"
      />

      <HeroSub
        title="Статьи о ремонте квартир"
        description="Практические советы, чек-листы и разборы типовых ошибок."
        badge="Blog"
        as="h1"
        data-oid="x_-d21o"
      />

      <BlogList data-oid="u.ot70s" />
    </>
  );
};

export default Blog;
