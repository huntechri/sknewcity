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
      data-oid="7rros8x"
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        data-oid="i1mrky-"
      >
        <div
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[80px] md:blur-[120px]"
          data-oid="1rzzeuz"
        ></div>
      </div>

      <div
        className="container mx-auto max-w-8xl px-5 2xl:px-0 mb-10 md:mb-16 relative z-10"
        data-oid="tf.7.6p"
      >
        <div
          className="flex flex-col items-center text-center gap-3"
          data-oid="bdilxaf"
        >
          <div
            className="flex gap-2.5 items-center justify-center"
            data-oid="w5t7-37"
          >
            <Icon
              icon="ph:house-simple-fill"
              className="text-2xl text-primary"
              data-oid="tsnbu0q"
            />

            <p
              className="text-base font-semibold text-dark/75 dark:text-white/75 uppercase tracking-wider"
              data-oid="n.mshj3"
            >
              Наши объекты
            </p>
          </div>
          <h2
            className="lg:text-52 md:text-40 text-32 font-medium text-dark dark:text-white leading-tight tracking-tight"
            data-oid="re:av_s"
          >
            На каких ЖК мы работаем?
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group" data-oid="elfbdwv">
        <div
          className="py-4 md:py-8 animate-marquee whitespace-nowrap flex items-center"
          data-oid="8wo4fvu"
        >
          {complexes.concat(complexes).map((complex, index) => (
            <div
              key={index}
              className="mx-8 md:mx-16 flex items-center justify-center transition-all duration-500 hover:scale-110 group/item min-w-[140px] md:min-w-[200px]"
              data-oid="2v565qy"
            >
              <div
                className="h-12 md:h-20 flex items-center justify-center transition-colors overflow-hidden"
                data-oid="94iqkwk"
              >
                {complex.logoDark ? (
                  <>
                    <div className="dark:hidden" data-oid="49bwe3g">
                      <Image
                        src={complex.logo as string}
                        alt={complex.name}
                        width={240}
                        height={80}
                        className="object-contain h-12 md:h-20 w-auto opacity-80 group-hover/item:opacity-100 transition-opacity"
                        loading="lazy"
                        sizes={logoSizes}
                        data-oid="gj3_00s"
                      />
                    </div>
                    <div className="hidden dark:block" data-oid="nj0k2ys">
                      <Image
                        src={complex.logoDark}
                        alt={complex.name}
                        width={240}
                        height={80}
                        className="object-contain h-12 md:h-20 w-auto opacity-80 group-hover/item:opacity-100 transition-opacity"
                        loading="lazy"
                        sizes={logoSizes}
                        data-oid="1.:eb_4"
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
                    data-oid="_im9-ls"
                  />
                ) : (
                  <div
                    className="flex flex-col items-center gap-2 md:gap-3 opacity-40 group-hover/item:opacity-100 transition-opacity"
                    data-oid="l5xwulv"
                  >
                    <Icon
                      icon={complex.icon || "ph:buildings-fill"}
                      className="text-4xl md:text-6xl text-dark dark:text-white transition-colors group-hover/item:text-primary"
                      data-oid="4.mkgt3"
                    />

                    <span
                      className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-dark dark:text-white font-bold"
                      data-oid="klqhqam"
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
          className="absolute top-0 py-4 md:py-8 animate-marquee2 whitespace-nowrap items-center grid"
          data-oid="oufmd1w"
        >
          {complexes.concat(complexes).map((complex, index) => (
            <div
              key={index}
              className="mx-8 md:mx-16 flex items-center justify-center transition-all duration-500 hover:scale-110 group/item min-w-[140px] md:min-w-[200px]"
              data-oid="y05mhro"
            >
              <div
                className="h-12 md:h-20 flex items-center justify-center transition-colors overflow-hidden"
                data-oid="76h5oqm"
              >
                {complex.logoDark ? (
                  <>
                    <div className="dark:hidden" data-oid="flb_ie6">
                      <Image
                        src={complex.logo as string}
                        alt={complex.name}
                        width={240}
                        height={80}
                        className="object-contain h-12 md:h-20 w-auto opacity-80 group-hover/item:opacity-100 transition-opacity"
                        loading="lazy"
                        sizes={logoSizes}
                        data-oid="d2ilq8t"
                      />
                    </div>
                    <div className="hidden dark:block" data-oid="r0j3vq3">
                      <Image
                        src={complex.logoDark}
                        alt={complex.name}
                        width={240}
                        height={80}
                        className="object-contain h-12 md:h-20 w-auto opacity-80 group-hover/item:opacity-100 transition-opacity"
                        loading="lazy"
                        sizes={logoSizes}
                        data-oid="rf-dsy."
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
                    data-oid="5cyy7c9"
                  />
                ) : (
                  <div
                    className="flex flex-col items-center gap-2 md:gap-3 opacity-40 group-hover/item:opacity-100 transition-opacity"
                    data-oid="n1s168-"
                  >
                    <Icon
                      icon={complex.icon || "ph:buildings-fill"}
                      className="text-4xl md:text-6xl text-dark dark:text-white transition-colors group-hover/item:text-primary"
                      data-oid="vgkg_32"
                    />

                    <span
                      className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-dark dark:text-white font-bold"
                      data-oid="n_ilfi-"
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
          data-oid="yxukm5d"
        ></div>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-dark to-transparent z-10"
          data-oid="x0e:.qo"
        ></div>
      </div>

      <style jsx data-oid="hf5q61a">{`
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
