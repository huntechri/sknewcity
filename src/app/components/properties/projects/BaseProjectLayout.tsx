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
      data-oid="6_ik32b"
    >
      <div
        className="container mx-auto max-w-8xl px-4 sm:px-6 2xl:px-0"
        data-oid="rd.uy8g"
      >
        <div
          className="grid grid-cols-12 items-end gap-4 sm:gap-6"
          data-oid="aivx4wd"
        >
          <div className="lg:col-span-8 col-span-12" data-oid="j-pinuh">
            <h1
              className="lg:text-52 text-32 sm:text-40 font-semibold leading-[1.05] text-dark dark:text-white"
              data-oid="abncr3x"
            >
              {item?.name}
            </h1>
            <div className="mt-2 flex items-center gap-2.5" data-oid="x-ud0-n">
              <Icon
                icon="ph:map-pin"
                width={24}
                height={24}
                className="h-5 w-5 text-dark/50 dark:text-white/50 sm:h-6 sm:w-6"
                data-oid="heb-79h"
              />

              <p
                className="text-sm text-dark/50 dark:text-white/50 sm:text-xm overflow-visible"
                data-oid="ofibyh_"
              >
                {item?.location}
              </p>
            </div>
          </div>
          <div
            className="lg:col-span-4 col-span-12 flex flex-col gap-6"
            data-oid=".al9nwi"
          >
            <div
              className="grid grid-cols-3 overflow-hidden rounded-2xl border border-black/10 dark:border-white/20 sm:flex sm:rounded-none sm:border-0"
              data-oid="p__yq0s"
            >
              <div
                className="flex min-w-0 flex-col gap-2 border-e border-black/10 px-3 py-4 dark:border-white/20 sm:pr-8 sm:pl-0 sm:py-0"
                data-oid="0ri96xl"
              >
                <Icon
                  icon={"solar:bed-linear"}
                  width={20}
                  height={20}
                  data-oid="w4.3:d3"
                />

                <p
                  className="text-sm leading-tight font-normal text-black dark:text-white mobile:text-base"
                  data-oid="erzx0:r"
                >
                  {item?.beds} комнаты
                </p>
              </div>
              <div
                className="flex min-w-0 flex-col gap-2 border-e border-black/10 px-3 py-4 dark:border-white/20 sm:px-8 sm:py-0"
                data-oid="qt.:.41"
              >
                <Icon
                  icon={"solar:bath-linear"}
                  width={20}
                  height={20}
                  data-oid="1d:6dak"
                />

                <p
                  className="text-sm leading-tight font-normal text-black dark:text-white mobile:text-base"
                  data-oid="_0egzie"
                >
                  {item?.baths} санузла
                </p>
              </div>
              <div
                className="flex min-w-0 flex-col gap-2 px-3 py-4 sm:pl-8 sm:pr-0 sm:py-0"
                data-oid="zs5.icm"
              >
                <Icon
                  icon={"lineicons:arrow-all-direction"}
                  width={20}
                  height={20}
                  data-oid="bhrswfq"
                />

                <p
                  className="text-sm leading-tight font-normal text-black dark:text-white mobile:text-base"
                  data-oid="-umu125"
                >
                  {item?.area}m<sup data-oid="6j4l6p7">2</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        {item?.images?.length > 0 && (
          <ProjectImageGallery
            images={item.images}
            projectName={item.name}
            data-oid="lr6jjze"
          />
        )}
        <div className="grid grid-cols-12 gap-8 mt-10" data-oid="b64-bl-">
          <div className="lg:col-span-8 col-span-12" data-oid="o21to5m">
            <h3 className="text-xl font-medium" data-oid=":idyy2_">
              Детали проекта
            </h3>
            <div
              className="my-8 flex flex-col gap-6 border-y border-dark/10 py-8 dark:border-white/20 sm:gap-8"
              data-oid="r_za.nb"
            >
              {item?.features ? (
                item.features.map((feature, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 sm:gap-6"
                    data-oid="42090t_"
                  >
                    <div className="shrink-0 pt-1" data-oid="_.gutnj">
                      {feature.image ? (
                        <>
                          <Image
                            src={feature.image}
                            width={400}
                            height={500}
                            alt=""
                            className="w-8 h-8 dark:hidden"
                            unoptimized={true}
                            data-oid="9w1q18_"
                          />

                          <Image
                            src={feature.image.replace(".svg", "-white.svg")}
                            width={400}
                            height={500}
                            alt=""
                            className="w-8 h-8 dark:block hidden"
                            unoptimized={true}
                            data-oid="omtc1nr"
                          />
                        </>
                      ) : (
                        <Icon
                          icon={feature.icon}
                          width={32}
                          height={32}
                          className="text-primary"
                          data-oid="owpx1n9"
                        />
                      )}
                    </div>
                    <div className="min-w-0" data-oid="c0fqpw7">
                      <h3
                        className="text-base text-dark dark:text-white sm:text-xm"
                        data-oid="4buvxhz"
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed text-dark/50 dark:text-white/50 sm:text-base"
                        data-oid=".s5cvmn"
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="flex items-start gap-4 sm:gap-6"
                  data-oid="ydsi46-"
                >
                  <div className="shrink-0 pt-1" data-oid="81kd.7c">
                    <Image
                      src="/images/SVGs/property-details.svg"
                      width={400}
                      height={500}
                      alt=""
                      className="w-8 h-8 dark:hidden"
                      unoptimized={true}
                      data-oid="i9k0q6o"
                    />

                    <Image
                      src="/images/SVGs/property-details-white.svg"
                      width={400}
                      height={500}
                      alt=""
                      className="w-8 h-8 dark:block hidden"
                      unoptimized={true}
                      data-oid="8p8bgug"
                    />
                  </div>
                  <div className="min-w-0" data-oid="bf.-x3:">
                    <h3
                      className="text-base text-dark dark:text-white sm:text-xm"
                      data-oid="2al1e6b"
                    >
                      Состав работ
                    </h3>
                    <p
                      className="text-sm leading-relaxed text-dark/50 dark:text-white/50 sm:text-base"
                      data-oid="kx00j0r"
                    >
                      Демонтаж, черновые работы, электрика, сантехника, финишная
                      отделка.
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-5" data-oid="oe0_hkg">
              {item?.description ? (
                item.description.map((paragraph: string, idx: number) => (
                  <p
                    key={idx}
                    className="text-sm leading-relaxed text-dark dark:text-white sm:text-xm"
                    data-oid="pkrubjf"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p
                  className="text-sm leading-relaxed text-dark dark:text-white sm:text-xm"
                  data-oid="f:03bdo"
                >
                  Проект ремонта квартиры в современном стиле.
                </p>
              )}
            </div>
          </div>
          <div
            className="lg:col-span-4 col-span-12 flex flex-col gap-6"
            data-oid="5ltplb_"
          >
            <div
              className="relative z-10 overflow-hidden rounded-2xl bg-primary/10 p-5 sm:p-8"
              data-oid="jma5cde"
            >
              <h4
                className="text-2xl font-medium text-dark dark:text-white sm:text-3xl"
                data-oid="umzh9gg"
              >
                {item?.rate}
              </h4>
              <p
                className="text-sm text-dark/50 dark:text-white"
                data-oid="ftdzm4:"
              >
                Стоимость работ
              </p>
              <Link
                href="/contactus"
                className="mt-6 block w-full rounded-full bg-primary px-6 py-3.5 text-center text-base text-white duration-300 hover:cursor-pointer hover:bg-dark sm:mt-8 sm:px-8 sm:py-4"
                data-oid=":_re2d5"
              >
                Получить консультацию
              </Link>
              <div
                className="absolute -right-8 top-4 -z-[1] opacity-70 sm:right-0 sm:opacity-100"
                data-oid="y-omdr7"
              >
                <Image
                  src="/images/properties/vector.svg"
                  width={400}
                  height={500}
                  alt="vector"
                  className="w-40 sm:w-auto"
                  unoptimized={true}
                  data-oid="d67llxp"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-8 border-t border-dark/5 py-8 dark:border-white/15 lg:mt-10"
          data-oid="b:lpzpi"
        >
          <h3 className="text-xl font-medium" data-oid="32r1i5a">
            Что входит в работы
          </h3>
          <div
            className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12 xl:gap-y-8"
            data-oid="i44.1ck"
          >
            {item?.workItems ? (
              item.workItems.map((work, idx: number) => (
                <div
                  key={idx}
                  className="flex min-h-20 items-center gap-3 rounded-2xl border border-dark/10 p-4 dark:border-white/10"
                  data-oid="ik9t4s5"
                >
                  <Icon
                    icon={work.icon}
                    width={28}
                    height={28}
                    className="shrink-0 text-primary sm:h-8 sm:w-8"
                    data-oid="r6-.5lh"
                  />

                  <p
                    className="font-medium text-dark dark:text-white"
                    data-oid="edxcmys"
                  >
                    {work.title}
                  </p>
                </div>
              ))
            ) : (
              <div
                className="flex min-h-20 items-center gap-3 rounded-2xl border border-dark/10 p-4 dark:border-white/10"
                data-oid="jg6_9qj"
              >
                <Icon
                  icon="ph:paint-brush-household"
                  width={28}
                  height={28}
                  className="shrink-0 text-primary sm:h-8 sm:w-8"
                  data-oid="ss7tbqg"
                />

                <p
                  className="font-medium text-dark dark:text-white"
                  data-oid="qa6q05g"
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
