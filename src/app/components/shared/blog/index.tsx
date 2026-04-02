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
    <section data-oid="6tptzgi">
      <div
        className="container max-w-8xl mx-auto px-5 2xl:px-0"
        data-oid="n-4bw7-"
      >
        <div
          className="flex justify-between md:items-end items-start mb-10 md:flex-row flex-col"
          data-oid="e3srog9"
        >
          <div data-oid="-u_dig0">
            <p
              className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2"
              data-oid="39y023d"
            >
              <Icon
                icon="ph:house-simple-fill"
                className="text-2xl text-primary"
                aria-label="Home icon"
                data-oid="brsdf.w"
              />
              Blog
            </p>
            <h2
              className="lg:text-52 text-40 font-medium dark:text-white"
              data-oid="gaqmz-r"
            >
              Полезные статьи о ремонте
            </h2>
            <p
              className="text-dark/50 dark:text-white/50 text-xm"
              data-oid="33l.jui"
            >
              Советы по планированию ремонта, выбору материалов и контролю
              качества.
            </p>
          </div>
          <Link
            href="/blogs"
            className="bg-dark dark:bg-white text-white dark:text-dark py-4 px-8 rounded-full hover:bg-primary duration-300"
            aria-label="Read all blog articles"
            data-oid="l9hgosp"
          >
            Читать статьи
          </Link>
        </div>
        <div
          className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-12"
          data-oid="ryo7a:4"
        >
          {posts.map((blog, i) => (
            <div key={i} className="w-full" data-oid="unmvd:7">
              <BlogCard blog={blog} data-oid="q3m:1.:" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSmall;
