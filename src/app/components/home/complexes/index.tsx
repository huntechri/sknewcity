"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Complex } from "@/app/types/complex";

const logoSizes = "(max-width: 768px) 140px, 200px";

const ResidentialComplexes = ({ complexes }: { complexes: Complex[] }) => {
  if (complexes.length === 0) return null;

  return (
    <section
      className="bg-white dark:bg-dark overflow-hidden py-16 md:py-24 relative"
      id="complexes"
      data-oid="-bt8iy7"
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        data-oid="z3u3qno"
      >
        <div
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[80px] md:blur-[120px]"
          data-oid="xzbs99x"
        ></div>
      </div>

      <div
        className="container mx-auto max-w-8xl px-5 2xl:px-0 mb-10 md:mb-16 relative z-10"
        data-oid="rp7w8dq"
      >
        <div
          className="flex flex-col items-center text-center gap-3"
          data-oid="tox1jlv"
        >
          <div
            className="flex gap-2.5 items-center justify-center"
            data-oid="8p.h9-l"
          >
            <Icon
              icon="ph:house-simple-fill"
              className="text-2xl text-primary"
              data-oid="-24azfc"
            />
            <p
              className="text-base font-semibold text-dark/75 dark:text-white/75 uppercase tracking-wider"
              data-oid="98l--9-"
            >
              Наши объекты
            </p>
          </div>
          <h2
            className="lg:text-52 md:text-40 text-32 font-medium text-dark dark:text-white leading-tight tracking-tight"
            data-oid="l6ypspa"
          >
            На каких ЖК мы работаем?
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group" data-oid="sn9an6d">
        <div
          className="py-4 md:py-8 animate-marquee whitespace-nowrap flex items-center"
          data-oid="dkep-8e"
        >
          {complexes.concat(complexes).map((complex, index) => (
            <div
              key={index}
              className="mx-8 md:mx-16 flex items-center justify-center transition-all duration-500 hover:scale-110 group/item min-w-[140px] md:min-w-[200px]"
              data-oid="qsb9j2i"
            >
              <div
                className="h-12 md:h-20 flex items-center justify-center transition-colors overflow-hidden"
                data-oid="oz3nzf5"
              >
                {complex.logoDark ? (
                  <>
                    <div className="dark:hidden" data-oid="4qn:kw5">
                      <Image
                        src={complex.logo as string}
                        alt={complex.name}
                        width={240}
                        height={80}
                        className="object-contain h-12 md:h-20 w-auto opacity-80 group-hover/item:opacity-100 transition-opacity"
                        loading="lazy"
                        sizes={logoSizes}
                        data-oid="b7oo9sc"
                      />
                    </div>
                    <div className="hidden dark:block" data-oid="ikhom6y">
                      <Image
                        src={complex.logoDark}
                        alt={complex.name}
                        width={240}
                        height={80}
                        className="object-contain h-12 md:h-20 w-auto opacity-80 group-hover/item:opacity-100 transition-opacity"
                        loading="lazy"
                        sizes={logoSizes}
                        data-oid="roo450g"
                      />
                    </div>
                  </>
                ) : complex.logo ? (
                  <Image
                    src={complex.logo}
                    alt={complex.name}
                    width={240}
                    height={80}
                    className="object-contain h-12 md:h-20 w-auto opacity-80 group-hover/item:opacity-100 transition-opacity"
                    loading="lazy"
                    sizes={logoSizes}
                    data-oid="1-:xq53"
                  />
                ) : (
                  <div
                    className="flex flex-col items-center gap-2 md:gap-3 opacity-40 group-hover/item:opacity-100 transition-opacity"
                    data-oid="nhtvgjz"
                  >
                    <Icon
                      icon={complex.icon || "ph:buildings-fill"}
                      className="text-4xl md:text-6xl text-dark dark:text-white transition-colors group-hover/item:text-primary"
                      data-oid="uqej8lr"
                    />
                    <span
                      className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-dark dark:text-white font-bold"
                      data-oid="vk9inm2"
                    >
                      {complex.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className="absolute top-0 py-4 md:py-8 animate-marquee2 whitespace-nowrap flex items-center"
          data-oid="8l165je"
        >
          {complexes.concat(complexes).map((complex, index) => (
            <div
              key={index}
              className="mx-8 md:mx-16 flex items-center justify-center transition-all duration-500 hover:scale-110 group/item min-w-[140px] md:min-w-[200px]"
              data-oid="vnpy.cm"
            >
              <div
                className="h-12 md:h-20 flex items-center justify-center transition-colors overflow-hidden"
                data-oid="whs7sw6"
              >
                {complex.logoDark ? (
                  <>
                    <div className="dark:hidden" data-oid="m1svb6s">
                      <Image
                        src={complex.logo as string}
                        alt={complex.name}
                        width={240}
                        height={80}
                        className="object-contain h-12 md:h-20 w-auto opacity-80 group-hover/item:opacity-100 transition-opacity"
                        loading="lazy"
                        sizes={logoSizes}
                        data-oid="hfop0x9"
                      />
                    </div>
                    <div className="hidden dark:block" data-oid="7cl1166">
                      <Image
                        src={complex.logoDark}
                        alt={complex.name}
                        width={240}
                        height={80}
                        className="object-contain h-12 md:h-20 w-auto opacity-80 group-hover/item:opacity-100 transition-opacity"
                        loading="lazy"
                        sizes={logoSizes}
                        data-oid="x92tdor"
                      />
                    </div>
                  </>
                ) : complex.logo ? (
                  <Image
                    src={complex.logo}
                    alt={complex.name}
                    width={240}
                    height={80}
                    className="object-contain h-12 md:h-20 w-auto opacity-80 group-hover/item:opacity-100 transition-opacity"
                    loading="lazy"
                    sizes={logoSizes}
                    data-oid="rvisl0f"
                  />
                ) : (
                  <div
                    className="flex flex-col items-center gap-2 md:gap-3 opacity-40 group-hover/item:opacity-100 transition-opacity"
                    data-oid="9xdb3-p"
                  >
                    <Icon
                      icon={complex.icon || "ph:buildings-fill"}
                      className="text-4xl md:text-6xl text-dark dark:text-white transition-colors group-hover/item:text-primary"
                      data-oid="_gb4lp:"
                    />
                    <span
                      className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-dark dark:text-white font-bold"
                      data-oid="79hwrjy"
                    >
                      {complex.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fading edges for smoother look */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-dark to-transparent z-10"
          data-oid="g0glmdv"
        ></div>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-dark to-transparent z-10"
          data-oid="0of2vul"
        ></div>
      </div>

      <style jsx data-oid="kj9b9m3">{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-marquee {
            animation-duration: 60s;
          }
          .animate-marquee2 {
            animation-duration: 60s;
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .group:hover .animate-marquee,
        .group:hover .animate-marquee2 {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ResidentialComplexes;
