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
      <StructuredData data={structuredData} data-oid="7fvn3gy" />
      <section className="relative pt-44! pb-0!" data-oid="n7bc8uh">
        <div
          className="container max-w-8xl mx-auto md:px-0 px-4"
          data-oid="jgaz_hl"
        >
          <div data-oid="rzamia_">
            <div data-oid="yv:f:s0">
              <Link
                href="/blogs"
                className="flex items-center gap-3 text-white bg-primary py-3 px-4 rounded-full w-fit hover:bg-dark duration-300"
                data-oid="gbc56qd"
              >
                <Icon
                  icon={"ph:arrow-left"}
                  width={20}
                  height={20}
                  className=""
                  data-oid="zp5a.z9"
                />

                <span data-oid="7ois93u">Назад к статьям</span>
              </Link>
              <h1
                className="text-dark dark:text-white md:text-52 text-40 leading-[1.2] font-semibold pt-7"
                data-oid="w-wt1gm"
              >
                {post.title}
              </h1>
              <h6
                className="text-xm mt-5 text-dark dark:text-white"
                data-oid="f-u1e2l"
              >
                {post.detail}
              </h6>
            </div>
            <div
              className="flex items-center justify-between gap-6 mt-12"
              data-oid="6yhzb98"
            >
              <div className="flex items-center gap-4" data-oid="5:6n0l7">
                <Image
                  src={post.authorImage}
                  alt={`Автор статьи ${post.author}`}
                  className="bg-no-repeat bg-contain inline-block rounded-full w-12! h-12!"
                  width={48}
                  height={48}
                  quality={100}
                  unoptimized={true}
                  data-oid="-imx9.w"
                />

                <div data-oid="0bzl4i7">
                  <span
                    className="text-xm text-dark dark:text-white"
                    data-oid="bwnjbld"
                  >
                    {post.author}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-7" data-oid="tccj.01">
                <div className="flex items-center gap-4" data-oid="2t6by6a">
                  <Icon
                    icon={"ph:clock"}
                    width={20}
                    height={20}
                    className=""
                    data-oid="uw51xvv"
                  />

                  <span
                    className="text-base text-dark font-medium dark:text-white"
                    data-oid="km-2y8q"
                  >
                    {format(new Date(post.date), "MMM dd, yyyy")}
                  </span>
                </div>
                <div
                  className="py-2.5 px-5 bg-dark/5 rounded-full dark:bg-white/15"
                  data-oid="d9v3qkn"
                >
                  <p
                    className="text-sm font-semibold text-dark dark:text-white"
                    data-oid="_c9seaw"
                  >
                    {post.tag}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="z-20 mt-12 overflow-hidden rounded"
            data-oid="1ynn44j"
          >
            <Image
              src={post.coverImage}
              alt={post.title || "Обложка статьи"}
              width={1170}
              height={766}
              quality={100}
              className="h-full w-full object-cover object-center rounded-3xl"
              data-oid="_v809yq"
            />
          </div>
        </div>
      </section>
      <section className="pt-12!" data-oid="hb0a1gs">
        <div className="container max-w-8xl mx-auto px-4" data-oid="0bwc61f">
          <div
            className="-mx-4 flex flex-wrap justify-center"
            data-oid="0377rp3"
          >
            <div className="blog-details markdown xl:pr-10" data-oid="wzk::0t">
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                data-oid="lw.l84g"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
