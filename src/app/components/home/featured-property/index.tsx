"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../ui/carousel";
import { FeaturedProperty as FeaturedPropertyItem } from "@/app/types/featuredProperty";

const FeaturedProperty: React.FC<{
  featuredProperty: FeaturedPropertyItem[];
}> = ({ featuredProperty }) => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section data-oid="fq3fitj">
      <div
        className="container max-w-8xl mx-auto px-3 sm:px-5 2xl:px-0"
        data-oid="p6e0r1l"
      >
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-10" data-oid="nk0.6kp">
          <div className="relative" data-oid="1qlgz6-">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
              data-oid="9p-.wxp"
            >
              <CarouselContent data-oid="4_c5snf">
                {featuredProperty.map((item, index) => (
                  <CarouselItem key={index} data-oid="cysc3gk">
                    <Image
                      src={item.scr}
                      alt={item.alt}
                      width={680}
                      height={530}
                      className="rounded-2xl w-full h-540"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      data-oid="6fzin7q"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div
              className="absolute left-2/5 sm:left-2/5 md:left-2/5 bg-dark/50 rounded-full py-1.5 sm:py-2.5 bottom-5 sm:bottom-10 flex justify-center mt-2 sm:mt-4 gap-1.5 sm:gap-2.5 px-2 sm:px-2.5"
              data-oid="l-0gcmm"
            >
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                  title={`Слайд ${index + 1}`}
                  data-oid="t6std_v"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10" data-oid="c7-bqno">
            <div data-oid="gyrtv.c">
              <p
                className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2 items-center"
                data-oid="gzz1plf"
              >
                <Icon
                  icon="ph:house-simple-fill"
                  className="text-lg sm:text-2xl text-primary "
                  data-oid="x8zl6gd"
                />

                <span data-oid="3gdlzmf">Проект месяца</span>
              </p>
              <h2
                className="text-2xl sm:text-3xl md:text-5xl lg:text-52 font-medium text-dark dark:text-white"
                data-oid="evvk-tx"
              >
                Сканди-минимализм, 68 м²
              </h2>
              <div className="flex items-center gap-2.5" data-oid="a_oufcm">
                <Icon
                  icon="ph:map-pin"
                  width={24}
                  height={24}
                  className="text-dark/50 dark:text-white/50 text-sm sm:text-lg"
                  data-oid="_u1bx4l"
                />

                <p
                  className="text-dark/50 dark:text-white/50 text-sm sm:text-base"
                  data-oid="ym1l656"
                >
                  ЖК «Северный парк», Москва
                </p>
              </div>
            </div>
            <p
              className="text-base text-dark/50 dark:text-white/50 text-sm sm:text-base leading-6 sm:leading-7"
              data-oid="qosuco0"
            >
              Комплексный ремонт квартиры с разработкой проекта, заменой
              инженерии и подбором материалов. Выполнили демонтаж, черновые
              работы, электрику, сантехнику, финишную отделку и комплектацию.
            </p>
            <div
              className="grid grid-cols-2 gap-4 sm:gap-10"
              data-oid=":pctnnc"
            >
              <div className="flex items-center gap-4" data-oid="lm87spf">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="d08w5e9"
                >
                  <Image
                    src={"/images/hero/sofa.svg"}
                    alt="sofa"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="_ku9nb_"
                  />

                  <Image
                    src={"/images/hero/dark-sofa.svg"}
                    alt="sofa"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="6pf.fe5"
                  />
                </div>
                <h6 className="" data-oid="f-lkp.:">
                  3 комнаты
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid="xq211u5">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="pic97pa"
                >
                  <Image
                    src={"/images/hero/tube.svg"}
                    alt="tube"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="h4t9r:7"
                  />

                  <Image
                    src={"/images/hero/dark-tube.svg"}
                    alt="tube"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="9gnpn5n"
                  />
                </div>
                <h6 className="" data-oid="n_t1w6m">
                  2 санузла
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid="-en6zt1">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="fae41t2"
                >
                  <Image
                    src={"/images/hero/parking.svg"}
                    alt="parking"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="rhcbegd"
                  />

                  <Image
                    src={"/images/hero/dark-parking.svg"}
                    alt="parking"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="zsjim4p"
                  />
                </div>
                <h6 className="" data-oid="6tk66:h">
                  Срок 10 недель
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid="cwz4dyk">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="z5vhgit"
                >
                  <Image
                    src={"/images/hero/bar.svg"}
                    alt="bar"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="y25kg8_"
                  />

                  <Image
                    src={"/images/hero/dark-bar.svg"}
                    alt="bar"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="8bfyet:"
                  />
                </div>
                <h6 className="" data-oid="pgl0bxx">
                  Гарантия 2 года
                </h6>
              </div>
            </div>
            <div
              className="flex gap-4 sm:gap-10 flex-col sm:flex-row"
              data-oid="h6g31lf"
            >
              <Link
                href="/contactus"
                className="py-3 sm:py-4 px-6 sm:px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white text-sm sm:text-base"
                data-oid="e1ne8z7"
              >
                Получить смету
              </Link>
              <div data-oid="-uas-dg">
                <h4
                  className="text-2xl sm:text-3xl text-dark dark:text-white font-medium"
                  data-oid="i3uvuq5"
                >
                  от 1 250 000 ₽
                </h4>
                <p
                  className="text-xs sm:text-base text-dark/50"
                  data-oid="-h:em8e"
                >
                  Стоимость работ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;
