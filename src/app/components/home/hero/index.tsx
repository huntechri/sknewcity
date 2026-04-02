"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@iconify/react";

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: string;
};

const Hero: React.FC = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  const stats: StatItem[] = useMemo(
    () => [
      {
        label: "Опыт",
        value: 7,
        suffix: "+ лет",
        icon: "ph:briefcase-bold",
      },
      {
        label: "Гарантия",
        value: 2,
        suffix: " года",
        icon: "ph:shield-check-bold",
      },
      {
        label: "Проектов",
        value: 300,
        suffix: "+",
        icon: "ph:buildings-bold",
      },
      {
        label: "Стоимость работ за м²",
        value: 30000,
        prefix: "от ",
        suffix: " руб.",
        icon: "ph:currency-rub-bold",
      },
    ],

    [],
  );

  useEffect(() => {
    if (!statsRef.current || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setCounts(stats.map((item) => item.value));
      setHasAnimated(true);
      return;
    }

    const duration = 3200;
    const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

    const startAnimation = () => {
      if (hasAnimated) return;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = easeOutQuint(progress);
        setCounts(stats.map((item) => Math.round(item.value * eased)));

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, [hasAnimated, stats]);
  return (
    <section className="!py-0" data-oid="72c-weu">
      <div
        className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative"
        data-oid="eev:j2x"
      >
        <div
          className="container max-w-8xl mx-auto px-3 sm:px-5 2xl:px-0 pt-20 sm:pt-32 md:pt-60 md:pb-68"
          data-oid="on4bk.c"
        >
          <div
            className="relative text-white dark:text-dark text-center md:text-start z-10"
            data-oid="jutzw.q"
          >
            <p
              className="text-inherit text-xs sm:text-xm font-medium"
              data-oid="3hwsf7i"
            >
              Строительная компания
            </p>
            <h1
              className="text-inherit text-3xl xs:text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-wider mt-2 sm:mt-4 mb-4 sm:mb-6 leading-tight"
              data-oid="iu9d2w-"
            >
              SK NEW CITY
            </h1>
            <div
              className="flex flex-col xs:flex-row justify-center md:justify-start gap-3 sm:gap-4"
              data-oid="2fq1a45"
            >
              <Link
                href="/contactus"
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white dark:border-black bg-white dark:bg-black text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-sm sm:text-base font-semibold rounded-full hover:cursor-pointer"
                data-oid="_zqyhum"
              >
                Рассчитать стоимость
              </Link>
              <Link
                href={"/properties"}
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white dark:border-black bg-transparent text-white dark:text-dark hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-dark duration-300 text-sm sm:text-base font-semibold rounded-full hover:cursor-pointer"
                data-oid="er0ellu"
              >
                Смотреть проекты
              </Link>
            </div>
          </div>
          <div
            className="hidden md:block absolute top-[92px] -right-68"
            data-oid="temo1i1"
          >
            <Image
              src={"/images/hero/heroBanner.png"}
              alt="heroImg"
              width={1082}
              height={1016}
              priority
              sizes="(max-width: 1280px) 45vw, 1082px"
              data-oid="9bpklwq"
            />
          </div>
        </div>
        <div
          ref={statsRef}
          className="md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-8 sm:py-12 px-4 sm:px-8 mobile:px-6 sm:mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-16 sm:mt-24 z-10"
          data-oid="j7xiq91"
        >
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10 dark:text-white text-black"
            data-oid="lu.6jem"
          >
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 sm:gap-3 rounded-2xl bg-white/0 dark:bg-white/0 text-center"
                data-oid="5f70ebg"
              >
                <div
                  className="bg-dark/5 dark:bg-white/5 p-1.5 sm:p-2.5 rounded-[10px] w-fit"
                  data-oid=".hyq_f8"
                >
                  <Icon
                    icon={item.icon}
                    width={24}
                    height={24}
                    className="text-dark dark:text-white sm:w-7 sm:h-7"
                    aria-hidden="true"
                    data-oid="jowmxxx"
                  />
                </div>
                <p
                  className="text-lg sm:text-2xl md:text-3xl font-medium text-inherit leading-none w-full"
                  data-oid="fng51dw"
                >
                  <span
                    className="inline-flex items-baseline justify-center gap-0 min-h-6 sm:min-h-9 md:w-[200px] w-full"
                    data-oid="l-7zmv1"
                  >
                    {item.prefix}
                    <span
                      className="inline-block tabular-nums text-center"
                      data-oid="b77mdrv"
                    >
                      {counts[index].toLocaleString("ru-RU")}
                    </span>
                    {item.suffix}
                  </span>
                </p>
                <p
                  className="text-sm sm:text-base font-normal text-black/50 dark:text-white/50 text-center"
                  data-oid="d7uv2mk"
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
