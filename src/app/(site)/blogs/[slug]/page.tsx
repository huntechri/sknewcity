import { Metadata } from "next";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react'
import { getPostBySlug, getPostSlugs } from "@/lib/markdown";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";

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

    const siteName = process.env.SITE_NAME || "Homely Renovation";

    if (post) {
        const metadata: Metadata = {
            title: `${post.title || "Статья"} | ${siteName}`,
            description: typeof post.detail === "string" ? post.detail : "Полезная статья о ремонте квартир от Homely.",
            alternates: {
                canonical: `/blogs/${data.slug}`,
            },
            openGraph: {
                title: `${post.title || "Статья"} | ${siteName}`,
                description: typeof post.detail === "string" ? post.detail : "Полезная статья о ремонте квартир от Homely.",
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

    return (
        <>
            <section className="relative pt-44! pb-0!">
                <div className="container max-w-8xl mx-auto md:px-0 px-4">
                    <div>
                        <div>
                            <Link href="/blogs" className="flex items-center gap-3 text-white bg-primary py-3 px-4 rounded-full w-fit hover:bg-dark duration-300">
                                <Icon
                                    icon={'ph:arrow-left'}
                                    width={20}
                                    height={20}
                                    className=''
                                />
                                <span>Go Back</span>
                            </Link>
                            <h1 className="text-dark dark:text-white md:text-52 text-40 leading-[1.2] font-semibold pt-7">
                                {post.title}
                            </h1>
                            <h6 className="text-xm mt-5 text-dark dark:text-white">
                                {post.detail}
                            </h6>
                        </div>
                        <div className="flex items-center justify-between gap-6 mt-12">
                            <div className="flex items-center gap-4">
                                    <Image
                                        src={post.authorImage}
                                        alt={`Автор статьи ${post.author}`}
                                        className="bg-no-repeat bg-contain inline-block rounded-full w-12! h-12!"
                                        width={48}
                                        height={48}
                                    quality={100}
                                    unoptimized={true}
                                />
                                <div>
                                    <span className="text-xm text-dark dark:text-white">
                                        {post.author}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-7">
                                <div className="flex items-center gap-4">
                                    <Icon
                                        icon={'ph:clock'}
                                        width={20}
                                        height={20}
                                        className=''
                                    />
                                    <span className="text-base text-dark font-medium dark:text-white">
                                        {format(new Date(post.date), "MMM dd, yyyy")}
                                    </span>
                                </div>
                                <div className="py-2.5 px-5 bg-dark/5 rounded-full dark:bg-white/15">
                                    <p className="text-sm font-semibold text-dark dark:text-white">{post.tag}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="z-20 mt-12 overflow-hidden rounded">
                        <Image
                            src={post.coverImage}
                            alt={post.title || "Обложка статьи"}
                            width={1170}
                            height={766}
                            quality={100}
                            className="h-full w-full object-cover object-center rounded-3xl"
                        />
                    </div>
                </div>
            </section>
            <section className="pt-12!">
                <div className="container max-w-8xl mx-auto px-4">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="blog-details markdown xl:pr-10">
                            <div dangerouslySetInnerHTML={{ __html: content }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
