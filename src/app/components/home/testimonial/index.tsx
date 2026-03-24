"use client";
import * as React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../ui/carousel";

const Testimonial = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [testimonials, setTestimonials] = React.useState<any>(null);

  React.useEffect(() => {
    if (!api) return;

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

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTestimonials(data?.testimonials);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section
      className="bg-dark relative overflow-hidden"
      id="testimonial"
      data-oid="ncysw9j"
    >
      <div className="absolute right-0" data-oid="qd3awt2">
        <Image
          src="/images/testimonial/Vector.png"
          alt="victor"
          width={700}
          height={1039}
          unoptimized={true}
          data-oid="h:to-.0"
        />
      </div>
      <div
        className="container max-w-8xl mx-auto px-5 2xl:px-0"
        data-oid="57ypkq."
      >
        <div className="flex flex-col gap-4" data-oid="kc.l:dy">
          <div data-oid="puxi70h">
            <p
              className="text-white text-base font-semibold flex gap-2"
              data-oid="btantz_"
            >
              <Icon
                icon="ph:house-simple-fill"
                className="text-2xl text-primary"
                data-oid="8a4jegt"
              />
              Отзывы
            </p>
            <h2
              className="lg:text-52 text-40 font-medium text-white"
              data-oid="9airv1r"
            >
              Что говорят клиенты
            </h2>
          </div>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
          data-oid="4o_n9x6"
        >
          <CarouselContent data-oid="gy6tecl">
            {testimonials &&
              testimonials?.map((item: any, index: any) => (
                <CarouselItem key={index} className="mt-9" data-oid="vjns-hd">
                  <div
                    className="lg:flex items-center gap-11"
                    data-oid="tyj_b.h"
                  >
                    <div
                      className="flex items-start gap-11 lg:pr-20"
                      data-oid="l4n7fz4"
                    >
                      <div
                        className="shrink-0 hidden lg:block"
                        data-oid="m37izep"
                      >
                        <div
                          className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center"
                          data-oid=":0sbcgy"
                        >
                          <Icon
                            icon="ph:quotes-fill"
                            width={32}
                            height={32}
                            className="text-yellow-500"
                            data-oid="w_aua1d"
                          />
                        </div>
                      </div>
                      <div data-oid="_a3f6k2">
                        <h4
                          className="text-white lg:text-3xl text-xl font-normal leading-relaxed italic"
                          data-oid="730::69"
                        >
                          &quot;{item.review}&quot;
                        </h4>
                        <div
                          className="flex items-center mt-8 gap-6"
                          data-oid="l:59k6e"
                        >
                          <div
                            className="w-16 h-16 rounded-full overflow-hidden border border-white/10 shrink-0"
                            data-oid="m_rrnaa"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                              unoptimized={true}
                              data-oid="9b3613c"
                            />
                          </div>
                          <div data-oid="m9s0uzj">
                            <h6
                              className="text-white text-xl font-medium"
                              data-oid="_ximlw."
                            >
                              {item.name}
                            </h6>
                            <div
                              className="flex items-center gap-2"
                              data-oid=":y_srg5"
                            >
                              <p
                                className="text-white/40 text-sm"
                                data-oid="2mov2v9"
                              >
                                {item.position}
                              </p>
                              <span
                                className="w-1 h-1 rounded-full bg-white/20"
                                data-oid="utuek:-"
                              ></span>
                              <span
                                className="text-xs text-green-500 flex items-center gap-1"
                                data-oid="am1hqfg"
                              >
                                <Icon
                                  icon="material-symbols:check-circle-rounded"
                                  data-oid="y:y7-mi"
                                />
                                Подтверждено
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full max-w-[440px] aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 hidden lg:block"
                      data-oid="fcwqcdt"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={440}
                        height={440}
                        className="w-full h-full object-cover"
                        unoptimized={true}
                        data-oid="596y_5l"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
        <div
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2.5 p-2.5 bg-white/20 rounded-full"
          data-oid="6.rp8ue"
        >
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
              data-oid="etmpn6n"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
