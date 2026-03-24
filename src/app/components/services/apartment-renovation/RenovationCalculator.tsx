"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Slider } from "@/app/components/ui/slider";
import { Card } from "@/app/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

const renovationTypes = [
  {
    id: "cosmetic",
    title: "Косметический",
    price: 25000,
    desc: "Освежить интерьер без перепланировки",
  },
  {
    id: "capital",
    title: "Капитальный",
    price: 35000,
    desc: "С заменой инженерии и выравниванием",
  },
  {
    id: "designer",
    title: "Дизайнерский",
    price: 40000,
    desc: "По индивидуальному дизайн-проекту",
  },
];

const RenovationCalculator = () => {
  const [area, setArea] = useState([45]);
  const [type, setType] = useState("capital");

  const currentType = useMemo(
    () => renovationTypes.find((t) => t.id === type) || renovationTypes[1],
    [type],
  );
  const totalPrice = useMemo(
    () => area[0] * currentType.price,
    [area, currentType],
  );
  const duration = useMemo(() => {
    return 20 + area[0] * 3;
  }, [area]);

  return (
    <section
      id="calculator"
      className="py-10 bg-white dark:bg-black text-dark dark:text-white overflow-hidden relative transition-colors duration-300"
      data-oid="2ihl.1."
    >
      {/* Background elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"
        data-oid="t7v:0ha"
      ></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-skyblue/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 opacity-30"
        data-oid="fag415p"
      ></div>

      <div
        className="container max-w-8xl mx-auto px-5 relative z-10"
        data-oid="h6f0bjw"
      >
        <div className="text-center mb-16" data-oid=":71bpig">
          <div
            className="flex gap-2.5 items-center justify-center mb-6"
            data-oid="jmujw90"
          >
            <Icon
              icon="ph:house-simple-fill"
              className="text-2xl text-primary"
              data-oid="q8uxsvw"
            />

            <p
              className="text-base font-semibold text-dark/75 dark:text-white/75 uppercase tracking-wider"
              data-oid="bdrshnq"
            >
              Калькулятор стоимости
            </p>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-dark dark:text-white mb-6 leading-tight"
            data-oid="i0.:wq2"
          >
            Узнайте примерную стоимость{" "}
            <br className="hidden sm:block" data-oid="hu2l8kn" /> вашего ремонта
            за 1 минуту
          </h2>
          <p
            className="text-dark/50 dark:text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
            data-oid="faucc5-"
          >
            Точная смета составляется инженером после замера.{" "}
            <br className="hidden sm:block" data-oid="r16h20h" /> Расчёт
            является предварительным и не включает материалы.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
          data-oid="58fz7.h"
        >
          <div
            className="lg:col-span-8 lg:h-[455px] flex flex-col justify-between bg-white dark:bg-white/5 backdrop-blur-sm p-5 sm:p-8 rounded-[32px] border border-dark/10 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-none"
            data-oid=".yb21wh"
          >
            {/* Area Selector */}
            <div className="space-y-4" data-oid="h_9fpfx">
              <div
                className="flex justify-between items-end"
                data-oid="2fitq6a"
              >
                <h4
                  className="text-lg sm:text-xl font-extrabold tracking-tight text-black dark:text-white"
                  data-oid="c270i1t"
                >
                  Площадь помещения
                </h4>
                <div
                  className="text-2xl sm:text-3xl font-black text-primary"
                  data-oid="c5.zty7"
                >
                  {area[0]}{" "}
                  <span
                    className="text-base sm:text-lg font-bold opacity-60 ml-1 text-black dark:text-white"
                    data-oid="_tzu6xr"
                  >
                    м²
                  </span>
                </div>
              </div>
              <div className="relative py-4" data-oid="6:3q0fw">
                <Slider
                  defaultValue={[45]}
                  max={250}
                  min={20}
                  step={1}
                  onValueChange={setArea}
                  className="relative flex items-center select-none touch-none w-full h-5"
                  data-oid="9w01ozq"
                />
              </div>
              <div
                className="flex justify-between text-black dark:text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest opacity-60"
                data-oid="9iqbdpq"
              >
                <span data-oid="0-q5pp.">20 м²</span>
                <span data-oid="4n:5dd.">250 м²</span>
              </div>
            </div>

            {/* Renovation Type */}
            <div className="space-y-4 mt-2 sm:mt-0" data-oid="_vv.m5d">
              <h4
                className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-black dark:text-white opacity-60"
                data-oid="kcp991e"
              >
                Выбор типа ремонта
              </h4>

              <Tabs
                defaultValue="capital"
                className="w-full"
                onValueChange={setType}
                data-oid="7tr8.lr"
              >
                <TabsList
                  className="flex flex-row h-11 sm:h-12 p-1 bg-gray-200/50 dark:bg-white/10 rounded-full w-full border border-dark/5 dark:border-white/5"
                  data-oid="lhd-5vo"
                >
                  {renovationTypes.map((t) => (
                    <TabsTrigger
                      key={t.id}
                      value={t.id}
                      className="flex-1 rounded-full text-[10px] xs:text-[11px] sm:text-[13px] font-bold text-black dark:text-white data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-500 px-1"
                      data-oid="atpe77t"
                    >
                      {t.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div
                className="relative flex items-center bg-gray-100 dark:bg-white/5 rounded-2xl p-3 sm:p-4 border border-dark/5 dark:border-white/10 transition-all duration-300"
                data-oid="00plolt"
              >
                <div
                  className="p-2 bg-primary/10 rounded-xl mr-3 sm:mr-4 shrink-0"
                  data-oid="edvua-v"
                >
                  <Icon
                    icon="ph:info-fill"
                    className="text-primary text-xl sm:text-2xl"
                    data-oid="g1bjjgd"
                  />
                </div>
                <p
                  className="text-black dark:text-white text-[12px] sm:text-[13px] leading-snug font-bold italic"
                  data-oid="cfmqnft"
                >
                  {currentType.desc}
                </p>
              </div>
            </div>

            {/* Quick features */}
            <div
              className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-2 pt-4 sm:pt-5 border-t border-dark/10 dark:border-white/5 mt-4 sm:mt-0"
              data-oid="hn_mcy."
            >
              <div
                className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black text-black dark:text-white opacity-70"
                data-oid="c1wzj.0"
              >
                <Icon
                  icon="ph:check-circle-fill"
                  className="text-primary text-sm sm:text-base"
                  data-oid="-xa5:wl"
                />

                <span data-oid="sce_mn3">Замер бесплатно</span>
              </div>
              <div
                className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black text-black dark:text-white opacity-70"
                data-oid="i9-znap"
              >
                <Icon
                  icon="ph:check-circle-fill"
                  className="text-primary text-sm sm:text-base"
                  data-oid="mtve74m"
                />

                <span data-oid="6a5b7ro">Смета за 24ч</span>
              </div>
              <div
                className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black text-black dark:text-white opacity-70"
                data-oid="th5t8l3"
              >
                <Icon
                  icon="ph:check-circle-fill"
                  className="text-primary text-sm sm:text-base"
                  data-oid="2hri92l"
                />

                <span data-oid="pz62ia7">Фикс. сроки</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:h-[455px]" data-oid="cs2k0mo">
            <Card
              className="bg-primary h-full p-6 sm:p-8 rounded-[32px] border-none text-white shadow-2xl shadow-primary/40 flex flex-col justify-between transform transition-transform hover:scale-[1.01]"
              data-oid="6nqir03"
            >
              <div
                className="space-y-6 sm:space-y-8 flex-1 flex flex-col justify-between"
                data-oid="yqecfql"
              >
                <div data-oid="tr6amm:">
                  <span
                    className="text-white text-[10px] uppercase tracking-[0.3em] font-black italic mb-2 block"
                    data-oid="jdy93fw"
                  >
                    Ориентировочно
                  </span>
                  <div
                    className="text-4xl xs:text-5xl sm:text-6xl font-black tracking-tighter text-white break-words"
                    data-oid="panwzgw"
                  >
                    {totalPrice.toLocaleString()}
                    <span
                      className="text-xl sm:text-2xl ml-1 font-bold opacity-80"
                      data-oid="-76hpmo"
                    >
                      ₽
                    </span>
                  </div>
                </div>

                <div
                  className="space-y-4 sm:space-y-5 border-t border-white/20 pt-6 sm:pt-8"
                  data-oid="u:33_8v"
                >
                  <div
                    className="flex justify-between items-center text-sm font-bold"
                    data-oid="3lshxl3"
                  >
                    <span
                      className="text-white uppercase tracking-widest text-[9px] sm:text-[10px]"
                      data-oid="wy_d3u5"
                    >
                      Срок реализации
                    </span>
                    <span
                      className="bg-white text-primary px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black shadow-lg"
                      data-oid="6vxdwi2"
                    >
                      ~ {duration} дней
                    </span>
                  </div>
                  <div
                    className="flex justify-between items-center text-sm font-bold"
                    data-oid="-p-5475"
                  >
                    <span
                      className="text-white uppercase tracking-widest text-[9px] sm:text-[10px]"
                      data-oid="9la.2:-"
                    >
                      Тип работ
                    </span>
                    <span
                      className="text-white text-sm sm:text-base font-black border-b-2 border-white/30"
                      data-oid="fi0dvht"
                    >
                      {currentType.title}
                    </span>
                  </div>
                </div>

                <Link href="/contactus" className="w-full" data-oid="3c9n8t6">
                  <button
                    className="w-full bg-white text-primary py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500 shadow-2xl active:scale-[0.97] mt-6 lg:mt-0"
                    data-oid="kc4lyce"
                  >
                    Получить смету
                  </button>
                </Link>

                <p
                  className="text-center text-[10px] text-white/50 leading-relaxed italic uppercase tracking-tighter"
                  data-oid="d.c7dkk"
                >
                  * Предварительный расчет, не является публичной офертой. Для
                  точного расчета пригласите инженера на замер.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenovationCalculator;
