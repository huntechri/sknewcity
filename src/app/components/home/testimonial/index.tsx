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
      data-oid="cl9jd5_"
    >
      <div className="absolute right-0" data-oid="mz4042z">
        <Image
          src="/images/testimonial/Vector.png"
          alt="victor"
          width={700}
          height={1039}
          unoptimized={true}
          data-oid="ri13frp"
        />
      </div>
      <div
        className="container max-w-8xl mx-auto px-5 2xl:px-0"
        data-oid="c1_auuu"
      >
        <div className="flex flex-col gap-4" data-oid="9d9fzno">
          <div data-oid="m-g:n_y">
            <p
              className="text-white text-base font-semibold flex gap-2"
              data-oid="fef8l:f"
            >
              <Icon
                icon="ph:house-simple-fill"
                className="text-2xl text-primary"
                data-oid="uiz0lz2"
              />
              Отзывы
            </p>
            <h2
              className="lg:text-52 text-40 font-medium text-white"
              data-oid="41f2-w4"
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
          data-oid="rp36_dp"
        >
          <CarouselContent data-oid="tqs37jx">
            {testimonials &&
              testimonials?.map((item: any, index: any) => (
                <CarouselItem key={index} className="mt-9" data-oid=":0y6_9p">
                  <div
                    className="lg:flex items-center gap-11"
                    data-oid="k3z2t0l"
                  >
                    <div
                      className="flex items-start gap-11 lg:pr-20"
                      data-oid="ybbbvpy"
                    >
                      <div
                        className="shrink-0 hidden lg:block"
                        data-oid="t92qbsd"
                      >
                        <div
                          className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center"
                          data-oid="o.kd:88"
                        >
                          <Icon
                            icon="ph:quotes-fill"
                            width={32}
                            height={32}
                            className="text-yellow-500"
                            data-oid="801yknf"
                          />
                        </div>
                      </div>
                      <div data-oid="-x9e-14">
                        <h4
                          className="text-white lg:text-3xl text-xl font-normal leading-relaxed italic"
                          data-oid="73ixxu6"
                        >
                          &quot;{item.review}&quot;
                        </h4>
                        <div
                          className="flex items-center mt-8 gap-6"
                          data-oid="0ecns44"
                        >
                          <div
                            className="w-16 h-16 rounded-full overflow-hidden border border-white/10 shrink-0"
                            data-oid="wjkp7dk"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                              unoptimized={true}
                              data-oid="s9t09b9"
                            />
                          </div>
                          <div data-oid="t0znxt8">
                            <h6
                              className="text-white text-xl font-medium"
                              data-oid="yvd4_w1"
                            >
                              {item.name}
                            </h6>
                            <div
                              className="flex items-center gap-2"
                              data-oid="q4ofit5"
                            >
                              <p
                                className="text-white/40 text-sm"
                                data-oid="p-bwbko"
                              >
                                {item.position}
                              </p>
                              <span
                                className="w-1 h-1 rounded-full bg-white/20"
                                data-oid=".3_2a.9"
                              ></span>
                              <span
                                className="text-xs text-green-500 flex items-center gap-1"
                                data-oid="w4-kw7b"
                              >
                                <Icon
                                  icon="material-symbols:check-circle-rounded"
                                  data-oid="bs9wof3"
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
                      data-oid="4s7:2ns"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={440}
                        height={440}
                        className="w-full h-full object-cover"
                        unoptimized={true}
                        data-oid="8qdqat8"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
        <div
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2.5 p-2.5 bg-white/20 rounded-full"
          data-oid="hf3v11n"
        >
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full ${current === index + 1 ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
              data-oid="vx58tlv"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
