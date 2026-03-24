import { Metadata } from "next";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getPostBySlug, getPostSlugs } from "@/lib/markdown";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import StructuredData from "@/app/components/seo/StructuredData";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await params;
  const post = getPostBySlug(data.slug, [
    "title",
    "author",
    "coverImage",
    "detail",
  ]);

  const siteName = process.env.SITE_NAME || "SK New City";

  if (post) {
    const metadata: Metadata = {
      title: `${post.title || "Статья"} | ${siteName}`,
      description:
        typeof post.detail === "string"
          ? post.detail
          : "Полезная статья о ремонте квартир и отделочных работах от SK New City.",
      alternates: {
        canonical: `/blogs/${data.slug}`,
      },
      openGraph: {
        title: `${post.title || "Статья"} | ${siteName}`,
        description:
          typeof post.detail === "string"
            ? post.detail
            : "Полезная статья о ремонте квартир и отделочных работах от SK New City.",
        images: typeof post.coverImage === "string" ? [post.coverImage] : [],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };

    return metadata;
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }
}

export default async function Post({ params }: Props) {
  const data = await params;
  const post = getPostBySlug(data.slug, [
    "title",
    "author",
    "authorImage",
    "content",
    "coverImage",
    "date",
    "tag",
    "detail",
  ]);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content || "");
  const structuredData = [
    getArticleSchema({
      title: post.title || "Статья",
      description: post.detail || "Полезная статья о ремонте квартир.",
      path: `/blogs/${data.slug}`,
      image: post.coverImage,
      publishedTime: post.date,
      author: post.author || "SK New City",
    }),
    getBreadcrumbSchema([
      { name: "Главная", path: "/" },
      { name: "Блог", path: "/blogs" },
      { name: post.title || "Статья", path: `/blogs/${data.slug}` },
    ]),
  ];

  return (
    <>
      <StructuredData data={structuredData} data-oid="jeqr.o_" />
      <section className="relative pt-44! pb-0!" data-oid="8de3fva">
        <div
          className="container max-w-8xl mx-auto md:px-0 px-4"
          data-oid="wfez:6g"
        >
          <div data-oid="6iet3ki">
            <div data-oid="fvdd-an">
              <Link
                href="/blogs"
                className="flex items-center gap-3 text-white bg-primary py-3 px-4 rounded-full w-fit hover:bg-dark duration-300"
                data-oid="v-uk5xn"
              >
                <Icon
                  icon={"ph:arrow-left"}
                  width={20}
                  height={20}
                  className=""
                  data-oid="qq:d4d_"
                />

                <span data-oid="3:iv34_">Назад к статьям</span>
              </Link>
              <h1
                className="text-dark dark:text-white md:text-52 text-40 leading-[1.2] font-semibold pt-7"
                data-oid="_6pnjqf"
              >
                {post.title}
              </h1>
              <h6
                className="text-xm mt-5 text-dark dark:text-white"
                data-oid="v-pa54a"
              >
                {post.detail}
              </h6>
            </div>
            <div
              className="flex items-center justify-between gap-6 mt-12"
              data-oid="1gp8jlb"
            >
              <div className="flex items-center gap-4" data-oid="q3qd9q7">
                <Image
                  src={post.authorImage}
                  alt={`Автор статьи ${post.author}`}
                  className="bg-no-repeat bg-contain inline-block rounded-full w-12! h-12!"
                  width={48}
                  height={48}
                  quality={100}
                  unoptimized={true}
                  data-oid="x8zxgb:"
                />

                <div data-oid="5g:b01:">
                  <span
                    className="text-xm text-dark dark:text-white"
                    data-oid="iq840h3"
                  >
                    {post.author}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-7" data-oid="2skogq3">
                <div className="flex items-center gap-4" data-oid="kg-5_-u">
                  <Icon
                    icon={"ph:clock"}
                    width={20}
                    height={20}
                    className=""
                    data-oid=":yypcal"
                  />

                  <span
                    className="text-base text-dark font-medium dark:text-white"
                    data-oid="082bus9"
                  >
                    {format(new Date(post.date), "MMM dd, yyyy")}
                  </span>
                </div>
                <div
                  className="py-2.5 px-5 bg-dark/5 rounded-full dark:bg-white/15"
                  data-oid="h_19tg9"
                >
                  <p
                    className="text-sm font-semibold text-dark dark:text-white"
                    data-oid="ljosf53"
                  >
                    {post.tag}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="z-20 mt-12 overflow-hidden rounded"
            data-oid="-ejw3m7"
          >
            <Image
              src={post.coverImage}
              alt={post.title || "Обложка статьи"}
              width={1170}
              height={766}
              quality={100}
              className="h-full w-full object-cover object-center rounded-3xl"
              data-oid="d8nnyjg"
            />
          </div>
        </div>
      </section>
      <section className="pt-12!" data-oid="9-ke-_q">
        <div className="container max-w-8xl mx-auto px-4" data-oid="ayit4-j">
          <div
            className="-mx-4 flex flex-wrap justify-center"
            data-oid="uywc:5-"
          >
            <div className="blog-details markdown xl:pr-10" data-oid="6ip74w0">
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                data-oid="s:gzgzv"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
