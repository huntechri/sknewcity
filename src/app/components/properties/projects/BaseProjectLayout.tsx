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
      data-oid=":ysz-52"
    >
      <div
        className="container mx-auto max-w-8xl px-4 sm:px-6 2xl:px-0"
        data-oid="3ciyxp6"
      >
        <div
          className="grid grid-cols-12 items-end gap-4 sm:gap-6"
          data-oid="g2iq:0c"
        >
          <div className="lg:col-span-8 col-span-12" data-oid="lqb9kvh">
            <h1
              className="lg:text-52 text-32 sm:text-40 font-semibold leading-[1.05] text-dark dark:text-white"
              data-oid="snh7o_q"
            >
              {item?.name}
            </h1>
            <div className="mt-2 flex items-center gap-2.5" data-oid="4i.6h27">
              <Icon
                icon="ph:map-pin"
                width={24}
                height={24}
                className="h-5 w-5 text-dark/50 dark:text-white/50 sm:h-6 sm:w-6"
                data-oid=".wdpvic"
              />

              <p
                className="text-sm text-dark/50 dark:text-white/50 sm:text-xm overflow-visible"
                data-oid="2cnxx5b"
              >
                {item?.location}
              </p>
            </div>
          </div>
          <div
            className="lg:col-span-4 col-span-12 flex flex-col gap-6"
            data-oid="-63a:7n"
          >
            <div
              className="grid grid-cols-3 overflow-hidden rounded-2xl border border-black/10 dark:border-white/20 sm:flex sm:rounded-none sm:border-0"
              data-oid="8gimt:c"
            >
              <div
                className="flex min-w-0 flex-col gap-2 border-e border-black/10 px-3 py-4 dark:border-white/20 sm:pr-8 sm:pl-0 sm:py-0"
                data-oid="1tpfp9b"
              >
                <Icon
                  icon={"solar:bed-linear"}
                  width={20}
                  height={20}
                  data-oid="qaczk4y"
                />

                <p
                  className="text-sm leading-tight font-normal text-black dark:text-white mobile:text-base"
                  data-oid="snlurza"
                >
                  {item?.beds} комнаты
                </p>
              </div>
              <div
                className="flex min-w-0 flex-col gap-2 border-e border-black/10 px-3 py-4 dark:border-white/20 sm:px-8 sm:py-0"
                data-oid=".5d13u2"
              >
                <Icon
                  icon={"solar:bath-linear"}
                  width={20}
                  height={20}
                  data-oid="fbd4f-6"
                />

                <p
                  className="text-sm leading-tight font-normal text-black dark:text-white mobile:text-base"
                  data-oid="e4s_813"
                >
                  {item?.baths} санузла
                </p>
              </div>
              <div
                className="flex min-w-0 flex-col gap-2 px-3 py-4 sm:pl-8 sm:pr-0 sm:py-0"
                data-oid="kznevo4"
              >
                <Icon
                  icon={"lineicons:arrow-all-direction"}
                  width={20}
                  height={20}
                  data-oid="4j32wht"
                />

                <p
                  className="text-sm leading-tight font-normal text-black dark:text-white mobile:text-base"
                  data-oid="z8latm6"
                >
                  {item?.area}m<sup data-oid="xbck7_3">2</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        {item?.images?.length > 0 && (
          <ProjectImageGallery
            images={item.images}
            projectName={item.name}
            data-oid="zptayqt"
          />
        )}
        <div className="grid grid-cols-12 gap-8 mt-10" data-oid="iutiemf">
          <div className="lg:col-span-8 col-span-12" data-oid="32wb0xu">
            <h3 className="text-xl font-medium" data-oid="ig_ssh0">
              Детали проекта
            </h3>
            <div
              className="my-8 flex flex-col gap-6 border-y border-dark/10 py-8 dark:border-white/20 sm:gap-8"
              data-oid="hgc74b9"
            >
              {item?.features ? (
                item.features.map((feature, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 sm:gap-6"
                    data-oid="zeuubto"
                  >
                    <div className="shrink-0 pt-1" data-oid=":8jqi92">
                      {feature.image ? (
                        <>
                          <Image
                            src={feature.image}
                            width={400}
                            height={500}
                            alt=""
                            className="w-8 h-8 dark:hidden"
                            unoptimized={true}
                            data-oid="gj38xtr"
                          />

                          <Image
                            src={feature.image.replace(".svg", "-white.svg")}
                            width={400}
                            height={500}
                            alt=""
                            className="w-8 h-8 dark:block hidden"
                            unoptimized={true}
                            data-oid="oq095:-"
                          />
                        </>
                      ) : (
                        <Icon
                          icon={feature.icon}
                          width={32}
                          height={32}
                          className="text-primary"
                          data-oid="dt6_3_9"
                        />
                      )}
                    </div>
                    <div className="min-w-0" data-oid="i0e6p47">
                      <h3
                        className="text-base text-dark dark:text-white sm:text-xm"
                        data-oid="ym7_o5."
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed text-dark/50 dark:text-white/50 sm:text-base"
                        data-oid="ekzb08y"
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="flex items-start gap-4 sm:gap-6"
                  data-oid="0n642ez"
                >
                  <div className="shrink-0 pt-1" data-oid="pdy1q8c">
                    <Image
                      src="/images/SVGs/property-details.svg"
                      width={400}
                      height={500}
                      alt=""
                      className="w-8 h-8 dark:hidden"
                      unoptimized={true}
                      data-oid="9:mu-gm"
                    />

                    <Image
                      src="/images/SVGs/property-details-white.svg"
                      width={400}
                      height={500}
                      alt=""
                      className="w-8 h-8 dark:block hidden"
                      unoptimized={true}
                      data-oid="_y411o8"
                    />
                  </div>
                  <div className="min-w-0" data-oid="9ho7kf-">
                    <h3
                      className="text-base text-dark dark:text-white sm:text-xm"
                      data-oid="sfzgy90"
                    >
                      Состав работ
                    </h3>
                    <p
                      className="text-sm leading-relaxed text-dark/50 dark:text-white/50 sm:text-base"
                      data-oid=".s5rqr:"
                    >
                      Демонтаж, черновые работы, электрика, сантехника, финишная
                      отделка.
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-5" data-oid="c5u3ced">
              {item?.description ? (
                item.description.map((paragraph: string, idx: number) => (
                  <p
                    key={idx}
                    className="text-sm leading-relaxed text-dark dark:text-white sm:text-xm"
                    data-oid="g30u517"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p
                  className="text-sm leading-relaxed text-dark dark:text-white sm:text-xm"
                  data-oid="l2zg3qt"
                >
                  Проект ремонта квартиры в современном стиле.
                </p>
              )}
            </div>
          </div>
          <div
            className="lg:col-span-4 col-span-12 flex flex-col gap-6"
            data-oid="g2fk3ve"
          >
            <div
              className="relative z-10 overflow-hidden rounded-2xl bg-primary/10 p-5 sm:p-8"
              data-oid="gbmg5k6"
            >
              <h4
                className="text-2xl font-medium text-dark dark:text-white sm:text-3xl"
                data-oid="3e-_ln9"
              >
                {item?.rate}
              </h4>
              <p
                className="text-sm text-dark/50 dark:text-white"
                data-oid="iwaij-e"
              >
                Стоимость работ
              </p>
              <Link
                href="/contactus"
                className="mt-6 block w-full rounded-full bg-primary px-6 py-3.5 text-center text-base text-white duration-300 hover:cursor-pointer hover:bg-dark sm:mt-8 sm:px-8 sm:py-4"
                data-oid="o:ec2yg"
              >
                Получить консультацию
              </Link>
              <div
                className="absolute -right-8 top-4 -z-[1] opacity-70 sm:right-0 sm:opacity-100"
                data-oid="x2w.8vv"
              >
                <Image
                  src="/images/properties/vector.svg"
                  width={400}
                  height={500}
                  alt="vector"
                  className="w-40 sm:w-auto"
                  unoptimized={true}
                  data-oid="q30ijbj"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-8 border-t border-dark/5 py-8 dark:border-white/15 lg:mt-10"
          data-oid="tz70ybc"
        >
          <h3 className="text-xl font-medium" data-oid="gyo9sm.">
            Что входит в работы
          </h3>
          <div
            className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12 xl:gap-y-8"
            data-oid="u8a_rmx"
          >
            {item?.workItems ? (
              item.workItems.map((work, idx: number) => (
                <div
                  key={idx}
                  className="flex min-h-20 items-center gap-3 rounded-2xl border border-dark/10 p-4 dark:border-white/10"
                  data-oid="h8mmfuv"
                >
                  <Icon
                    icon={work.icon}
                    width={28}
                    height={28}
                    className="shrink-0 text-primary sm:h-8 sm:w-8"
                    data-oid="ttnuqcl"
                  />

                  <p
                    className="font-medium text-dark dark:text-white"
                    data-oid="4f2arpj"
                  >
                    {work.title}
                  </p>
                </div>
              ))
            ) : (
              <div
                className="flex min-h-20 items-center gap-3 rounded-2xl border border-dark/10 p-4 dark:border-white/10"
                data-oid="ajuowox"
              >
                <Icon
                  icon="ph:paint-brush-household"
                  width={28}
                  height={28}
                  className="shrink-0 text-primary sm:h-8 sm:w-8"
                  data-oid="j3szdt9"
                />

                <p
                  className="font-medium text-dark dark:text-white"
                  data-oid="g-i2zv8"
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
