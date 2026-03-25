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
      data-oid="k6.d6yw"
    >
      <div
        className="overflow-hidden rounded-2xl flex-shrink-0"
        data-oid="wh9y9p0"
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
          data-oid="ayu.yil"
        />
      </div>
      <div className="flex justify-between items-center" data-oid="mrbb__h">
        <div data-oid="f0u-qna">
          <h3
            className="mt-2 text-xl font-medium text-dark dark:text-white group-hover:text-primary"
            data-oid="f:rcoo4"
          >
            {title}
          </h3>
          <span
            className="text-base font-medium dark:text-white/50 text-dark/50 leading-loose"
            data-oid="io1vfv2"
          >
            {format(new Date(date), "MMM dd, yyyy")}
          </span>
        </div>
        <div
          className="py-2.5 px-5 bg-dark/5 rounded-full dark:bg-white/15"
          data-oid="ydrsr-z"
        >
          <p
            className="text-sm font-semibold text-dark dark:text-white"
            data-oid="9magwfs"
          >
            {tag}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
