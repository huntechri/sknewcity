import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/app/types/blog";
import { format } from "date-fns";
import Link from "next/link";

const BlogCard: FC<{ blog: Blog }> = ({ blog }) => {
  const { title, coverImage, date, slug, tag } = blog;
  return (
    <Link
      href={`/blogs/${slug}`}
      aria-label="blog cover 5xl:h-full 5xl:inline-block"
      className="gap-4 group"
      data-oid="_g7kkl0"
    >
      <div
        className="overflow-hidden rounded-2xl flex-shrink-0"
        data-oid="9kzwj1."
      >
        <Image
          src={coverImage!}
          alt={title || "Обложка статьи"}
          className="transition group-hover:scale-110"
          width={190}
          height={163}
          style={{ width: "100%", height: "100%" }}
          loading="lazy"
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 30vw"
          data-oid="o:xprv7"
        />
      </div>
      <div className="flex justify-between items-center" data-oid="wu3j:mj">
        <div data-oid="6cp2wi0">
          <h3
            className="mt-2 text-xl font-medium text-dark dark:text-white group-hover:text-primary"
            data-oid="eig-12p"
          >
            {title}
          </h3>
          <span
            className="text-base font-medium dark:text-white/50 text-dark/50 leading-loose"
            data-oid="u:jf652"
          >
            {format(new Date(date), "MMM dd, yyyy")}
          </span>
        </div>
        <div
          className="py-2.5 px-5 bg-dark/5 rounded-full dark:bg-white/15"
          data-oid="xn2j4ds"
        >
          <p
            className="text-sm font-semibold text-dark dark:text-white"
            data-oid="u_1cxfg"
          >
            {tag}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
