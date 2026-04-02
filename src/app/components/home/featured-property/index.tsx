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
    <section data-oid=".q89kzb">
      <div
        className="container max-w-8xl mx-auto px-3 sm:px-5 2xl:px-0"
        data-oid="zqv20rt"
      >
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-10" data-oid="y-:du4v">
          <div className="relative" data-oid="jc.klfp">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
              data-oid="wj:-c-w"
            >
              <CarouselContent data-oid="_.qza48">
                {featuredProperty.map((item, index) => (
                  <CarouselItem key={index} data-oid="kzz8619">
                    <Image
                      src={item.scr}
                      alt={item.alt}
                      width={680}
                      height={530}
                      className="rounded-2xl w-full h-540"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      data-oid="yfduvqz"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div
              className="absolute left-2/5 sm:left-2/5 md:left-2/5 bg-dark/50 rounded-full py-1.5 sm:py-2.5 bottom-5 sm:bottom-10 flex justify-center mt-2 sm:mt-4 gap-1.5 sm:gap-2.5 px-2 sm:px-2.5"
              data-oid="bde6y.k"
            >
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                  title={`Слайд ${index + 1}`}
                  data-oid="z5lpy7t"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10" data-oid="4o6d1.o">
            <div data-oid="._06ef6">
              <p
                className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2 items-center"
                data-oid="zcacv0d"
              >
                <Icon
                  icon="ph:house-simple-fill"
                  className="text-lg sm:text-2xl text-primary "
                  data-oid="hvoi39b"
                />

                <span data-oid="jpkgvz.">Проект месяца</span>
              </p>
              <h2
                className="text-2xl sm:text-3xl md:text-5xl lg:text-52 font-medium text-dark dark:text-white"
                data-oid="vl48ta5"
              >
                Сканди-минимализм, 68 м²
              </h2>
              <div className="flex items-center gap-2.5" data-oid=":cz7qc5">
                <Icon
                  icon="ph:map-pin"
                  width={24}
                  height={24}
                  className="text-dark/50 dark:text-white/50 text-sm sm:text-lg"
                  data-oid="ofyqsy3"
                />

                <p
                  className="text-dark/50 dark:text-white/50 text-sm sm:text-base"
                  data-oid="nn4:z53"
                >
                  ЖК «Северный парк», Москва
                </p>
              </div>
            </div>
            <p
              className="text-base text-dark/50 dark:text-white/50 text-sm sm:text-base leading-6 sm:leading-7"
              data-oid="ri9chmo"
            >
              Комплексный ремонт квартиры с разработкой проекта, заменой
              инженерии и подбором материалов. Выполнили демонтаж, черновые
              работы, электрику, сантехнику, финишную отделку и комплектацию.
            </p>
            <div
              className="grid grid-cols-2 gap-4 sm:gap-10"
              data-oid="pk38jk4"
            >
              <div className="flex items-center gap-4" data-oid="y651:y2">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="jbdisny"
                >
                  <Image
                    src={"/images/hero/sofa.svg"}
                    alt="sofa"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid=":klx.fh"
                  />

                  <Image
                    src={"/images/hero/dark-sofa.svg"}
                    alt="sofa"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="vc1btaw"
                  />
                </div>
                <h6 className="" data-oid="e.fl.:q">
                  3 комнаты
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid=".9qn.xd">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="qx:56v3"
                >
                  <Image
                    src={"/images/hero/tube.svg"}
                    alt="tube"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="2ka1i:b"
                  />

                  <Image
                    src={"/images/hero/dark-tube.svg"}
                    alt="tube"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="4mdyssv"
                  />
                </div>
                <h6 className="" data-oid="-1609d_">
                  2 санузла
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid="qs_:_ig">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="ygp4pss"
                >
                  <Image
                    src={"/images/hero/parking.svg"}
                    alt="parking"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="phss64i"
                  />

                  <Image
                    src={"/images/hero/dark-parking.svg"}
                    alt="parking"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="kf:7__r"
                  />
                </div>
                <h6 className="" data-oid="7ef2gyu">
                  Срок 10 недель
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid="lfsqsib">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="0atzduh"
                >
                  <Image
                    src={"/images/hero/bar.svg"}
                    alt="bar"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="sogq7sd"
                  />

                  <Image
                    src={"/images/hero/dark-bar.svg"}
                    alt="bar"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="wqqq2es"
                  />
                </div>
                <h6 className="" data-oid="::a2u_1">
                  Гарантия 2 года
                </h6>
              </div>
            </div>
            <div
              className="flex gap-4 sm:gap-10 flex-col sm:flex-row"
              data-oid="zorkd3s"
            >
              <Link
                href="/contactus"
                className="py-3 sm:py-4 px-6 sm:px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white text-sm sm:text-base"
                data-oid="gy8kbs0"
              >
                Получить смету
              </Link>
              <div data-oid="jahfur7">
                <h4
                  className="text-2xl sm:text-3xl text-dark dark:text-white font-medium"
                  data-oid="3etd-ig"
                >
                  от 1 250 000 ₽
                </h4>
                <p
                  className="text-xs sm:text-base text-dark/50"
                  data-oid="umyer87"
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
