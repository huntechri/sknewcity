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
    <section data-oid="layb74f">
      <div
        className="container max-w-8xl mx-auto px-3 sm:px-5 2xl:px-0"
        data-oid="8nmci6_"
      >
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-10" data-oid="_96a1.2">
          <div className="relative" data-oid="73ctf3y">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
              data-oid="etp980m"
            >
              <CarouselContent data-oid="raj35wk">
                {featuredProperty.map((item, index) => (
                  <CarouselItem key={index} data-oid="tncvosv">
                    <Image
                      src={item.scr}
                      alt={item.alt}
                      width={680}
                      height={530}
                      className="rounded-2xl w-full h-540"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      data-oid="v9hwt00"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div
              className="absolute left-2/5 sm:left-2/5 md:left-2/5 bg-dark/50 rounded-full py-1.5 sm:py-2.5 bottom-5 sm:bottom-10 flex justify-center mt-2 sm:mt-4 gap-1.5 sm:gap-2.5 px-2 sm:px-2.5"
              data-oid="qa2rbnh"
            >
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                  title={`Слайд ${index + 1}`}
                  data-oid="s8-8qs4"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10" data-oid="xn_hmhx">
            <div data-oid=":-rsqgy">
              <p
                className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2 items-center"
                data-oid="5rcu0i6"
              >
                <Icon
                  icon="ph:house-simple-fill"
                  className="text-lg sm:text-2xl text-primary "
                  data-oid="7uwrs7m"
                />

                <span data-oid="-7qq6s1">Проект месяца</span>
              </p>
              <h2
                className="text-2xl sm:text-3xl md:text-5xl lg:text-52 font-medium text-dark dark:text-white"
                data-oid="v:13tz."
              >
                Сканди-минимализм, 68 м²
              </h2>
              <div className="flex items-center gap-2.5" data-oid="dgum6n8">
                <Icon
                  icon="ph:map-pin"
                  width={24}
                  height={24}
                  className="text-dark/50 dark:text-white/50 text-sm sm:text-lg"
                  data-oid="dn5-qiu"
                />

                <p
                  className="text-dark/50 dark:text-white/50 text-sm sm:text-base"
                  data-oid="lzihgsx"
                >
                  ЖК «Северный парк», Москва
                </p>
              </div>
            </div>
            <p
              className="text-base text-dark/50 dark:text-white/50 text-sm sm:text-base leading-6 sm:leading-7"
              data-oid="pspdev7"
            >
              Комплексный ремонт квартиры с разработкой проекта, заменой
              инженерии и подбором материалов. Выполнили демонтаж, черновые
              работы, электрику, сантехнику, финишную отделку и комплектацию.
            </p>
            <div
              className="grid grid-cols-2 gap-4 sm:gap-10"
              data-oid="azwvm1g"
            >
              <div className="flex items-center gap-4" data-oid="lhtwug2">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="jgp-d0g"
                >
                  <Image
                    src={"/images/hero/sofa.svg"}
                    alt="sofa"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="47-ep-2"
                  />

                  <Image
                    src={"/images/hero/dark-sofa.svg"}
                    alt="sofa"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="szmupmg"
                  />
                </div>
                <h6 className="" data-oid="uiguaru">
                  3 комнаты
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid="fpa6jn.">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="dbnkp8n"
                >
                  <Image
                    src={"/images/hero/tube.svg"}
                    alt="tube"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="7zi7ztv"
                  />

                  <Image
                    src={"/images/hero/dark-tube.svg"}
                    alt="tube"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="mnaky1j"
                  />
                </div>
                <h6 className="" data-oid="g929gf3">
                  2 санузла
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid="5ixrdyb">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="n65t_bv"
                >
                  <Image
                    src={"/images/hero/parking.svg"}
                    alt="parking"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="xj4rvsp"
                  />

                  <Image
                    src={"/images/hero/dark-parking.svg"}
                    alt="parking"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="zyt6ccu"
                  />
                </div>
                <h6 className="" data-oid="vxy-6re">
                  Срок 10 недель
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid="trcjydb">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="awmttr8"
                >
                  <Image
                    src={"/images/hero/bar.svg"}
                    alt="bar"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="qzkux42"
                  />

                  <Image
                    src={"/images/hero/dark-bar.svg"}
                    alt="bar"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="0:px7le"
                  />
                </div>
                <h6 className="" data-oid="1p5b6a8">
                  Гарантия 2 года
                </h6>
              </div>
            </div>
            <div
              className="flex gap-4 sm:gap-10 flex-col sm:flex-row"
              data-oid="_h1d4u_"
            >
              <Link
                href="/contactus"
                className="py-3 sm:py-4 px-6 sm:px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white text-sm sm:text-base"
                data-oid="bj16mw3"
              >
                Получить смету
              </Link>
              <div data-oid="7u3:jrh">
                <h4
                  className="text-2xl sm:text-3xl text-dark dark:text-white font-medium"
                  data-oid=":w9qdyo"
                >
                  от 1 250 000 ₽
                </h4>
                <p
                  className="text-xs sm:text-base text-dark/50"
                  data-oid="p-z4jgq"
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
