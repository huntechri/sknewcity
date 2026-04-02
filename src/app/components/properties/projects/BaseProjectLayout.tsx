import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { PropertyHomes, Testimonial } from "@/app/types/properyHomes";
import ProjectImageGallery from "./ProjectImageGallery";

interface BaseProjectLayoutProps {
  item: PropertyHomes;
  testimonials: Testimonial[] | null;
}

const BaseProjectLayout: React.FC<BaseProjectLayoutProps> = ({
  item,
  testimonials,
}) => {
  return (
    <section
      className="relative pb-16 pt-28 sm:pb-20 sm:pt-44"
      data-oid="r22xp5_"
    >
      <div
        className="container mx-auto max-w-8xl px-4 sm:px-6 2xl:px-0"
        data-oid="j56b72b"
      >
        <div
          className="grid grid-cols-12 items-end gap-4 sm:gap-6"
          data-oid="dh7xska"
        >
          <div className="lg:col-span-8 col-span-12" data-oid="0fjb6vf">
            <h1
              className="lg:text-52 text-32 sm:text-40 font-semibold leading-[1.05] text-dark dark:text-white"
              data-oid="o.3l_tl"
            >
              {item?.name}
            </h1>
            <div className="mt-2 flex items-center gap-2.5" data-oid="p1bh0n2">
              <Icon
                icon="ph:map-pin"
                width={24}
                height={24}
                className="h-5 w-5 text-dark/50 dark:text-white/50 sm:h-6 sm:w-6"
                data-oid="kmpcesz"
              />

              <p
                className="text-sm text-dark/50 dark:text-white/50 sm:text-xm overflow-visible"
                data-oid="eca8c8-"
              >
                {item?.location}
              </p>
            </div>
          </div>
          <div
            className="lg:col-span-4 col-span-12 flex flex-col gap-6"
            data-oid="jzple:l"
          >
            <div
              className="grid grid-cols-3 overflow-hidden rounded-2xl border border-black/10 dark:border-white/20 sm:flex sm:rounded-none sm:border-0"
              data-oid=".my2ctd"
            >
              <div
                className="flex min-w-0 flex-col gap-2 border-e border-black/10 px-3 py-4 dark:border-white/20 sm:pr-8 sm:pl-0 sm:py-0"
                data-oid="wtv.t:h"
              >
                <Icon
                  icon={"solar:bed-linear"}
                  width={20}
                  height={20}
                  data-oid="v_td09i"
                />

                <p
                  className="text-sm leading-tight font-normal text-black dark:text-white mobile:text-base"
                  data-oid=".8x.p0u"
                >
                  {item?.beds} комнаты
                </p>
              </div>
              <div
                className="flex min-w-0 flex-col gap-2 border-e border-black/10 px-3 py-4 dark:border-white/20 sm:px-8 sm:py-0"
                data-oid="azqu7av"
              >
                <Icon
                  icon={"solar:bath-linear"}
                  width={20}
                  height={20}
                  data-oid="p7lxrjn"
                />

                <p
                  className="text-sm leading-tight font-normal text-black dark:text-white mobile:text-base"
                  data-oid="-80x2sk"
                >
                  {item?.baths} санузла
                </p>
              </div>
              <div
                className="flex min-w-0 flex-col gap-2 px-3 py-4 sm:pl-8 sm:pr-0 sm:py-0"
                data-oid="rhynji-"
              >
                <Icon
                  icon={"lineicons:arrow-all-direction"}
                  width={20}
                  height={20}
                  data-oid="m.-j8p4"
                />

                <p
                  className="text-sm leading-tight font-normal text-black dark:text-white mobile:text-base"
                  data-oid="21_l5.w"
                >
                  {item?.area}m<sup data-oid="6vz18i7">2</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        {item?.images?.length > 0 && (
          <ProjectImageGallery
            images={item.images}
            projectName={item.name}
            data-oid="yicwl10"
          />
        )}
        <div className="grid grid-cols-12 gap-8 mt-10" data-oid="91w9xqk">
          <div className="lg:col-span-8 col-span-12" data-oid="2r403ru">
            <h3 className="text-xl font-medium" data-oid="xu7ck.:">
              Детали проекта
            </h3>
            <div
              className="my-8 flex flex-col gap-6 border-y border-dark/10 py-8 dark:border-white/20 sm:gap-8"
              data-oid="a.2.y3."
            >
              {item?.features ? (
                item.features.map((feature, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 sm:gap-6"
                    data-oid="7w1ddtt"
                  >
                    <div className="shrink-0 pt-1" data-oid="n4jd4z1">
                      {feature.image ? (
                        <>
                          <Image
                            src={feature.image}
                            width={400}
                            height={500}
                            alt=""
                            className="w-8 h-8 dark:hidden"
                            unoptimized={true}
                            data-oid="0-llob_"
                          />

                          <Image
                            src={feature.image.replace(".svg", "-white.svg")}
                            width={400}
                            height={500}
                            alt=""
                            className="w-8 h-8 dark:block hidden"
                            unoptimized={true}
                            data-oid=".60bf4v"
                          />
                        </>
                      ) : (
                        <Icon
                          icon={feature.icon}
                          width={32}
                          height={32}
                          className="text-primary"
                          data-oid="g:ksl.9"
                        />
                      )}
                    </div>
                    <div className="min-w-0" data-oid="jrqfq3o">
                      <h3
                        className="text-base text-dark dark:text-white sm:text-xm"
                        data-oid="inhixoo"
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed text-dark/50 dark:text-white/50 sm:text-base"
                        data-oid="ng6_6k3"
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="flex items-start gap-4 sm:gap-6"
                  data-oid="2i1dgdj"
                >
                  <div className="shrink-0 pt-1" data-oid="dk1es.i">
                    <Image
                      src="/images/SVGs/property-details.svg"
                      width={400}
                      height={500}
                      alt=""
                      className="w-8 h-8 dark:hidden"
                      unoptimized={true}
                      data-oid="niu9eh."
                    />

                    <Image
                      src="/images/SVGs/property-details-white.svg"
                      width={400}
                      height={500}
                      alt=""
                      className="w-8 h-8 dark:block hidden"
                      unoptimized={true}
                      data-oid=":cillzy"
                    />
                  </div>
                  <div className="min-w-0" data-oid="a3j0ebw">
                    <h3
                      className="text-base text-dark dark:text-white sm:text-xm"
                      data-oid="zl4kt14"
                    >
                      Состав работ
                    </h3>
                    <p
                      className="text-sm leading-relaxed text-dark/50 dark:text-white/50 sm:text-base"
                      data-oid="vdjzdb2"
                    >
                      Демонтаж, черновые работы, электрика, сантехника, финишная
                      отделка.
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-5" data-oid="pjip9ml">
              {item?.description ? (
                item.description.map((paragraph: string, idx: number) => (
                  <p
                    key={idx}
                    className="text-sm leading-relaxed text-dark dark:text-white sm:text-xm"
                    data-oid="1y9twjr"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p
                  className="text-sm leading-relaxed text-dark dark:text-white sm:text-xm"
                  data-oid="0lm2pbz"
                >
                  Проект ремонта квартиры в современном стиле.
                </p>
              )}
            </div>
          </div>
          <div
            className="lg:col-span-4 col-span-12 flex flex-col gap-6"
            data-oid="mz3qvdk"
          >
            <div
              className="relative z-10 overflow-hidden rounded-2xl bg-primary/10 p-5 sm:p-8"
              data-oid="ogc8sfy"
            >
              <h4
                className="text-2xl font-medium text-dark dark:text-white sm:text-3xl"
                data-oid="d:xv-hy"
              >
                {item?.rate}
              </h4>
              <p
                className="text-sm text-dark/50 dark:text-white"
                data-oid="omjgvys"
              >
                Стоимость работ
              </p>
              <Link
                href="/contactus"
                className="mt-6 block w-full rounded-full bg-primary px-6 py-3.5 text-center text-base text-white duration-300 hover:cursor-pointer hover:bg-dark sm:mt-8 sm:px-8 sm:py-4"
                data-oid="f3m9-qs"
              >
                Получить консультацию
              </Link>
              <div
                className="absolute -right-8 top-4 -z-[1] opacity-70 sm:right-0 sm:opacity-100"
                data-oid="uvq6da2"
              >
                <Image
                  src="/images/properties/vector.svg"
                  width={400}
                  height={500}
                  alt="vector"
                  className="w-40 sm:w-auto"
                  unoptimized={true}
                  data-oid="bj.4qf6"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-8 border-t border-dark/5 py-8 dark:border-white/15 lg:mt-10"
          data-oid="nx9gx9t"
        >
          <h3 className="text-xl font-medium" data-oid="n65v15x">
            Что входит в работы
          </h3>
          <div
            className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12 xl:gap-y-8"
            data-oid="kfu33uy"
          >
            {item?.workItems ? (
              item.workItems.map((work, idx: number) => (
                <div
                  key={idx}
                  className="flex min-h-20 items-center gap-3 rounded-2xl border border-dark/10 p-4 dark:border-white/10"
                  data-oid="4mzo5hu"
                >
                  <Icon
                    icon={work.icon}
                    width={28}
                    height={28}
                    className="shrink-0 text-primary sm:h-8 sm:w-8"
                    data-oid="16m_1iv"
                  />

                  <p
                    className="font-medium text-dark dark:text-white"
                    data-oid="7r:h9b5"
                  >
                    {work.title}
                  </p>
                </div>
              ))
            ) : (
              <div
                className="flex min-h-20 items-center gap-3 rounded-2xl border border-dark/10 p-4 dark:border-white/10"
                data-oid="7:ncsr:"
              >
                <Icon
                  icon="ph:paint-brush-household"
                  width={28}
                  height={28}
                  className="shrink-0 text-primary sm:h-8 sm:w-8"
                  data-oid="18tj:u0"
                />

                <p
                  className="font-medium text-dark dark:text-white"
                  data-oid="082juqx"
                >
                  Стандартные работы
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseProjectLayout;
