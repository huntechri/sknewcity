"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Slider } from "@/app/components/ui/slider";
import { Card } from "@/app/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

const renovationTypes = [
    { id: "cosmetic", title: "Косметический", price: 25000, desc: "Освежить интерьер без перепланировки" },
    { id: "capital", title: "Капитальный", price: 35000, desc: "С заменой инженерии и выравниванием" },
    { id: "designer", title: "Дизайнерский", price: 40000, desc: "По индивидуальному дизайн-проекту" }
];

const RenovationCalculator = () => {
    const [area, setArea] = useState([45]);
    const [type, setType] = useState("capital");

    const currentType = useMemo(() => renovationTypes.find(t => t.id === type) || renovationTypes[1], [type]);
    const totalPrice = useMemo(() => area[0] * currentType.price, [area, currentType]);
    const duration = useMemo(() => {
        return 20 + (area[0] * 3);
    }, [area]);

    return (
        <section id="calculator" className="py-10 bg-white dark:bg-black text-dark dark:text-white overflow-hidden relative transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-skyblue/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 opacity-30"></div>

            <div className="container max-w-8xl mx-auto px-5 relative z-10">
                <div className="text-center mb-16">
                    <div className='flex gap-2.5 items-center justify-center mb-6'>
                        <Icon icon="ph:house-simple-fill" className="text-2xl text-primary" />
                        <p className='text-base font-semibold text-dark/75 dark:text-white/75 uppercase tracking-wider'>
                            Калькулятор стоимости
                        </p>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold text-dark dark:text-white mb-6 leading-tight">
                        Узнайте примерную стоимость <br className="hidden sm:block" /> вашего ремонта за 1 минуту
                    </h2>
                    <p className="text-dark/50 dark:text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
                        Точная смета составляется инженером после замера. <br className="hidden sm:block" /> Расчёт является предварительным и не включает материалы.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    <div className="lg:col-span-8 lg:h-[455px] flex flex-col justify-between bg-white dark:bg-white/5 backdrop-blur-sm p-5 sm:p-8 rounded-[32px] border border-dark/10 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-none">
                        {/* Area Selector */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <h4 className="text-lg sm:text-xl font-extrabold tracking-tight text-black dark:text-white">Площадь помещения</h4>
                                <div className="text-2xl sm:text-3xl font-black text-primary">{area[0]} <span className="text-base sm:text-lg font-bold opacity-60 ml-1 text-black dark:text-white">м²</span></div>
                            </div>
                            <div className="relative py-4">
                                <Slider
                                    defaultValue={[45]}
                                    max={250}
                                    min={20}
                                    step={1}
                                    onValueChange={setArea}
                                    className="relative flex items-center select-none touch-none w-full h-5"
                                />
                            </div>
                            <div className="flex justify-between text-black dark:text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest opacity-60">
                                <span>20 м²</span>
                                <span>250 м²</span>
                            </div>
                        </div>

                        {/* Renovation Type */}
                        <div className="space-y-4 mt-2 sm:mt-0">
                            <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-black dark:text-white opacity-60">Выбор типа ремонта</h4>

                            <Tabs defaultValue="capital" className="w-full" onValueChange={setType}>
                                <TabsList className="flex flex-row h-11 sm:h-12 p-1 bg-gray-200/50 dark:bg-white/10 rounded-full w-full border border-dark/5 dark:border-white/5">
                                    {renovationTypes.map((t) => (
                                        <TabsTrigger
                                            key={t.id}
                                            value={t.id}
                                            className="flex-1 rounded-full text-[10px] xs:text-[11px] sm:text-[13px] font-bold text-black dark:text-white data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-500 px-1"
                                        >
                                            {t.title}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </Tabs>

                            <div className="relative flex items-center bg-gray-100 dark:bg-white/5 rounded-2xl p-3 sm:p-4 border border-dark/5 dark:border-white/10 transition-all duration-300">
                                <div className="p-2 bg-primary/10 rounded-xl mr-3 sm:mr-4 shrink-0">
                                    <Icon icon="ph:info-fill" className="text-primary text-xl sm:text-2xl" />
                                </div>
                                <p className="text-black dark:text-white text-[12px] sm:text-[13px] leading-snug font-bold italic">
                                    {currentType.desc}
                                </p>
                            </div>
                        </div>

                        {/* Quick features */}
                        <div className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-2 pt-4 sm:pt-5 border-t border-dark/10 dark:border-white/5 mt-4 sm:mt-0">
                            <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black text-black dark:text-white opacity-70">
                                <Icon icon="ph:check-circle-fill" className="text-primary text-sm sm:text-base" />
                                <span>Замер бесплатно</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black text-black dark:text-white opacity-70">
                                <Icon icon="ph:check-circle-fill" className="text-primary text-sm sm:text-base" />
                                <span>Смета за 24ч</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black text-black dark:text-white opacity-70">
                                <Icon icon="ph:check-circle-fill" className="text-primary text-sm sm:text-base" />
                                <span>Фикс. сроки</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 lg:h-[455px]">
                        <Card className="bg-primary h-full p-6 sm:p-8 rounded-[32px] border-none text-white shadow-2xl shadow-primary/40 flex flex-col justify-between transform transition-transform hover:scale-[1.01]">
                            <div className="space-y-6 sm:space-y-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <span className="text-white text-[10px] uppercase tracking-[0.3em] font-black italic mb-2 block">Ориентировочно</span>
                                    <div className="text-4xl xs:text-5xl sm:text-6xl font-black tracking-tighter text-white break-words">
                                        {totalPrice.toLocaleString()}<span className="text-xl sm:text-2xl ml-1 font-bold opacity-80">₽</span>
                                    </div>
                                </div>

                                <div className="space-y-4 sm:space-y-5 border-t border-white/20 pt-6 sm:pt-8">
                                    <div className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-white uppercase tracking-widest text-[9px] sm:text-[10px]">Срок реализации</span>
                                        <span className="bg-white text-primary px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black shadow-lg">~ {duration} дней</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-bold">
                                        <span className="text-white uppercase tracking-widest text-[9px] sm:text-[10px]">Тип работ</span>
                                        <span className="text-white text-sm sm:text-base font-black border-b-2 border-white/30">{currentType.title}</span>
                                    </div>
                                </div>

                                <Link href="/contactus" className="w-full">
                                    <button className="w-full bg-white text-primary py-4 sm:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500 shadow-2xl active:scale-[0.97] mt-6 lg:mt-0">
                                        Получить смету
                                    </button>
                                </Link>

                                <p className="text-center text-[10px] text-white/50 leading-relaxed italic uppercase tracking-tighter">
                                    * Предварительный расчет, не является публичной офертой.
                                    Для точного расчета пригласите инженера на замер.
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
