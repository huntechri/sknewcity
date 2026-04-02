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
        data-oid="3:hd5n0"
      />

      <HeroSub
        title="Статьи о ремонте квартир"
        description="Практические советы, чек-листы и разборы типовых ошибок."
        badge="Blog"
        as="h1"
        data-oid="fco-ah6"
      />

      <BlogList data-oid="qe_5w5_" />
    </>
  );
};

export default Blog;
