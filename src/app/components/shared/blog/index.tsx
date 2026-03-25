import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { getAllPosts } from "../../../../lib/markdown";
import BlogCard from "./blogCard";

interface Blog {
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  slug: string;
  detail: string;
  tag: string;
}

const BlogSmall: React.FC = () => {
  // Get all posts and map over them to ensure each field is a string
  const posts: Blog[] = getAllPosts([
    "title",
    "date",
    "excerpt",
    "coverImage",
    "slug",
    "tag",
  ])
    .map((item) => ({
      title: typeof item.title === "string" ? item.title : String(item.title),
      date: typeof item.date === "string" ? item.date : String(item.date),
      excerpt:
        typeof item.excerpt === "string" ? item.excerpt : String(item.excerpt),
      coverImage:
        typeof item.coverImage === "string"
          ? item.coverImage
          : String(item.coverImage),
      slug: typeof item.slug === "string" ? item.slug : String(item.slug),
      detail:
        typeof item.detail === "string" ? item.detail : String(item.detail),
      tag: typeof item.tag === "string" ? item.tag : String(item.tag),
    }))
    .slice(0, 3);

  return (
    <section data-oid="l5g3toz">
      <div
        className="container max-w-8xl mx-auto px-5 2xl:px-0"
        data-oid="8yyysz5"
      >
        <div
          className="flex justify-between md:items-end items-start mb-10 md:flex-row flex-col"
          data-oid=":_xse61"
        >
          <div data-oid=":_xd99x">
            <p
              className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2"
              data-oid="oy3d0:m"
            >
              <Icon
                icon="ph:house-simple-fill"
                className="text-2xl text-primary"
                aria-label="Home icon"
                data-oid="t-v:pb9"
              />
              Blog
            </p>
            <h2
              className="lg:text-52 text-40 font-medium dark:text-white"
              data-oid="4_l4bih"
            >
              Полезные статьи о ремонте
            </h2>
            <p
              className="text-dark/50 dark:text-white/50 text-xm"
              data-oid="6te6f2b"
            >
              Советы по планированию ремонта, выбору материалов и контролю
              качества.
            </p>
          </div>
          <Link
            href="/blogs"
            className="bg-dark dark:bg-white text-white dark:text-dark py-4 px-8 rounded-full hover:bg-primary duration-300"
            aria-label="Read all blog articles"
            data-oid="g6xjz1l"
          >
            Читать статьи
          </Link>
        </div>
        <div
          className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-12"
          data-oid="l2r.bd."
        >
          {posts.map((blog, i) => (
            <div key={i} className="w-full" data-oid="w4rc7rr">
              <BlogCard blog={blog} data-oid="btdr82r" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSmall;
