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
    <section data-oid="3hep2bj">
      <div
        className="container max-w-8xl mx-auto px-3 sm:px-5 2xl:px-0"
        data-oid="shi:an5"
      >
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-10" data-oid="f54ta8y">
          <div className="relative" data-oid="o4018c-">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
              data-oid="685:w7o"
            >
              <CarouselContent data-oid="838z_kb">
                {featuredProperty.map((item, index) => (
                  <CarouselItem key={index} data-oid="yht7no:">
                    <Image
                      src={item.scr}
                      alt={item.alt}
                      width={680}
                      height={530}
                      className="rounded-2xl w-full h-540"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      data-oid=":.48h62"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div
              className="absolute left-2/5 sm:left-2/5 md:left-2/5 bg-dark/50 rounded-full py-1.5 sm:py-2.5 bottom-5 sm:bottom-10 flex justify-center mt-2 sm:mt-4 gap-1.5 sm:gap-2.5 px-2 sm:px-2.5"
              data-oid="ka0xfxa"
            >
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                  title={`Слайд ${index + 1}`}
                  data-oid="lyp9jax"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10" data-oid="vwotr61">
            <div data-oid="iy6ezou">
              <p
                className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2 items-center"
                data-oid="s1yk62l"
              >
                <Icon
                  icon="ph:house-simple-fill"
                  className="text-lg sm:text-2xl text-primary "
                  data-oid="j:d0e9n"
                />
                <span data-oid="5oc2r9l">Проект месяца</span>
              </p>
              <h2
                className="text-2xl sm:text-3xl md:text-5xl lg:text-52 font-medium text-dark dark:text-white"
                data-oid="z0jk43z"
              >
                Сканди-минимализм, 68 м²
              </h2>
              <div className="flex items-center gap-2.5" data-oid="dyl224x">
                <Icon
                  icon="ph:map-pin"
                  width={24}
                  height={24}
                  className="text-dark/50 dark:text-white/50 text-sm sm:text-lg"
                  data-oid="sks:jf9"
                />
                <p
                  className="text-dark/50 dark:text-white/50 text-sm sm:text-base"
                  data-oid="xko9j7p"
                >
                  ЖК «Северный парк», Москва
                </p>
              </div>
            </div>
            <p
              className="text-base text-dark/50 dark:text-white/50 text-sm sm:text-base leading-6 sm:leading-7"
              data-oid="eziu5g9"
            >
              Комплексный ремонт квартиры с разработкой проекта, заменой
              инженерии и подбором материалов. Выполнили демонтаж, черновые
              работы, электрику, сантехнику, финишную отделку и комплектацию.
            </p>
            <div
              className="grid grid-cols-2 gap-4 sm:gap-10"
              data-oid="h434ew4"
            >
              <div className="flex items-center gap-4" data-oid="h1ekic4">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="tqknd88"
                >
                  <Image
                    src={"/images/hero/sofa.svg"}
                    alt="sofa"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="r_su4xv"
                  />

                  <Image
                    src={"/images/hero/dark-sofa.svg"}
                    alt="sofa"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="zqb-iu3"
                  />
                </div>
                <h6 className="" data-oid=":lx1xy4">
                  3 комнаты
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid="gjd5xis">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="ybs8c10"
                >
                  <Image
                    src={"/images/hero/tube.svg"}
                    alt="tube"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid=":r0jt5f"
                  />

                  <Image
                    src={"/images/hero/dark-tube.svg"}
                    alt="tube"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="f8_-e45"
                  />
                </div>
                <h6 className="" data-oid="rvh3egn">
                  2 санузла
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid="5190ytg">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="b073s._"
                >
                  <Image
                    src={"/images/hero/parking.svg"}
                    alt="parking"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="fsk0fx4"
                  />

                  <Image
                    src={"/images/hero/dark-parking.svg"}
                    alt="parking"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="yl0jh0d"
                  />
                </div>
                <h6 className="" data-oid="faqls8-">
                  Срок 10 недель
                </h6>
              </div>
              <div className="flex items-center gap-4" data-oid="qz1.yx1">
                <div
                  className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]"
                  data-oid="n5-0f--"
                >
                  <Image
                    src={"/images/hero/bar.svg"}
                    alt="bar"
                    width={24}
                    height={24}
                    className="block dark:hidden"
                    unoptimized={true}
                    data-oid="wna8kfb"
                  />

                  <Image
                    src={"/images/hero/dark-bar.svg"}
                    alt="bar"
                    width={24}
                    height={24}
                    className="hidden dark:block"
                    unoptimized={true}
                    data-oid="1miwmfg"
                  />
                </div>
                <h6 className="" data-oid="idfgjs6">
                  Гарантия 2 года
                </h6>
              </div>
            </div>
            <div
              className="flex gap-4 sm:gap-10 flex-col sm:flex-row"
              data-oid="kcw5.z0"
            >
              <Link
                href="/contactus"
                className="py-3 sm:py-4 px-6 sm:px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white text-sm sm:text-base"
                data-oid="5ud2nfg"
              >
                Получить смету
              </Link>
              <div data-oid="z.7jbdv">
                <h4
                  className="text-2xl sm:text-3xl text-dark dark:text-white font-medium"
                  data-oid="zaj3qy5"
                >
                  от 1 250 000 ₽
                </h4>
                <p
                  className="text-xs sm:text-base text-dark/50"
                  data-oid="aysam6c"
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
