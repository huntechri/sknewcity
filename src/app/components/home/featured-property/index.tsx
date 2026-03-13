"use client";
import * as React from "react";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../../ui/carousel";

const FeaturedProperty: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [featuredProprty, setFeaturedProprty] = React.useState<any>(null);
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

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/page-data')
          if (!res.ok) throw new Error('Failed to fetch')
          const data = await res.json()
          setFeaturedProprty(data?.featuredProprty)
        } catch (error) {
          console.error('Error fetching services:', error)
        }
      }
      fetchData()
    }, [])


  return (
    <section>
      <div className="container max-w-8xl mx-auto px-3 sm:px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-10">
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {featuredProprty && featuredProprty?.map((item:any, index:any) => (
                  <CarouselItem key={index}>
                    <Image
                      src={item.scr}
                      alt={item.alt}
                      width={680}
                      height={530}
                      className="rounded-2xl w-full h-540"
                      unoptimized={true}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute left-2/5 sm:left-2/5 md:left-2/5 bg-dark/50 rounded-full py-1.5 sm:py-2.5 bottom-5 sm:bottom-10 flex justify-center mt-2 sm:mt-4 gap-1.5 sm:gap-2.5 px-2 sm:px-2.5">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                  title={`Слайд ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2 items-center">
                <Icon icon="ph:house-simple-fill" className="text-lg sm:text-2xl text-primary " />
                <span>Проект месяца</span>
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-52 font-medium text-dark dark:text-white">
                Сканди-минимализм, 68 м²
              </h2>
              <div className="flex items-center gap-2.5">
                <Icon icon="ph:map-pin" width={24} height={24} className="text-dark/50 dark:text-white/50 text-sm sm:text-lg" />
                <p className="text-dark/50 dark:text-white/50 text-sm sm:text-base">
                  ЖК «Северный парк», Москва
                </p>
              </div>
            </div>
            <p className="text-base text-dark/50 dark:text-white/50 text-sm sm:text-base leading-6 sm:leading-7">
              Комплексный ремонт квартиры с разработкой проекта, заменой инженерии и подбором материалов. Выполнили
              демонтаж, черновые работы, электрику, сантехнику, финишную отделку и комплектацию.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-10">
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={'/images/hero/sofa.svg'}
                    alt='sofa'
                    width={24}
                    height={24}
                    className='block dark:hidden'
                    unoptimized={true}
                  />
                  <Image
                    src={'/images/hero/dark-sofa.svg'}
                    alt='sofa'
                    width={24}
                    height={24}
                    className='hidden dark:block'
                    unoptimized={true}
                  />
                </div>
                <h6 className="">3 комнаты</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={'/images/hero/tube.svg'}
                    alt='tube'
                    width={24}
                    height={24}
                    className='block dark:hidden'
                    unoptimized={true}
                  />
                  <Image
                    src={'/images/hero/dark-tube.svg'}
                    alt='tube'
                    width={24}
                    height={24}
                    className='hidden dark:block'
                    unoptimized={true}
                  />
                </div>
                <h6 className="">2 санузла</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={'/images/hero/parking.svg'}
                    alt='parking'
                    width={24}
                    height={24}
                    className='block dark:hidden'
                    unoptimized={true}
                  />
                  <Image
                    src={'/images/hero/dark-parking.svg'}
                    alt='parking'
                    width={24}
                    height={24}
                    className='hidden dark:block'
                    unoptimized={true}
                  />
                </div>
                <h6 className="">Срок 10 недель</h6>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
                  <Image
                    src={'/images/hero/bar.svg'}
                    alt='bar'
                    width={24}
                    height={24}
                    className='block dark:hidden'
                    unoptimized={true}
                  />
                  <Image
                    src={'/images/hero/dark-bar.svg'}
                    alt='bar'
                    width={24}
                    height={24}
                    className='hidden dark:block'
                    unoptimized={true}
                  />
                </div>
                <h6 className="">Гарантия 2 года</h6>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-10 flex-col sm:flex-row">
              <Link href="/contactus" className="py-3 sm:py-4 px-6 sm:px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white text-sm sm:text-base">
                Получить смету
              </Link>
              <div>
                <h4 className="text-2xl sm:text-3xl text-dark dark:text-white font-medium">
                  от 1 250 000 ₽
                </h4>
                <p className="text-xs sm:text-base text-dark/50">
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
