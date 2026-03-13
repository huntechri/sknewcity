import Link from "next/link";
import { Icon } from "@iconify/react";
import { useMemo } from "react";

const RenovationHero = () => {
    const stats = useMemo(() => [
        {
            label: 'Гарантия на работы',
            value: '2 года',
            icon: 'ph:shield-check-bold',
        },
        {
            label: 'Срок реализации',
            value: 'от 45 дней',
            icon: 'ph:calendar-bold',
        },
        {
            label: 'Соблюдение сметы',
            value: '100%',
            icon: 'ph:chart-line-up-bold',
        },
        {
            label: 'Личный менеджер',
            value: '24/7',
            icon: 'ph:users-three-bold',
        },
    ], []);

    return (
        <section className="py-0! bg-white dark:bg-black transition-colors duration-300">
            <div className="h-svh min-h-[700px] overflow-hidden relative flex flex-col justify-center">
                {/* Video Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
                    >
                        <source src="/videos/moscow-city-night.mp4" type="video/mp4" />
                    </video>
                    {/* Color Overlays */}
                    <div className="absolute inset-0 bg-black/40 z-0" />
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-white dark:to-black transition-colors duration-300 z-0" />
                </div>

                <div className="grow flex flex-col justify-center py-20">
                    <div className="container max-w-8xl mx-auto px-3 sm:px-5 2xl:px-0 relative z-10 text-white dark:text-white transition-colors duration-300">
                        <div className="relative text-inherit text-center md:text-start z-10 md:mb-12">
                            <p className='text-inherit text-xs sm:text-xm font-medium uppercase tracking-widest invisible mb-2' aria-hidden="true">Услуги Homely</p>
                            <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-wide text-inherit md:max-w-45p mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                                Ремонт
                            </h1>

                            <p className="text-inherit opacity-100 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl font-medium drop-shadow-md">
                                Реализуем интерьеры для жизни. Полный цикл работ — от черновой отделки до авторского надзора.
                            </p>

                            <div className="flex flex-col xs:flex-row justify-center md:justify-start gap-3 sm:gap-4">
                                <Link
                                    href="#calculator"
                                    className="px-6 sm:px-8 py-3 sm:py-4 border border-white bg-white text-dark duration-300 hover:bg-transparent hover:text-white text-sm sm:text-base font-semibold rounded-full hover:cursor-pointer text-center active:scale-95"
                                >
                                    Рассчитать стоимость
                                </Link>
                                <Link
                                    href="/contactus"
                                    className="px-6 sm:px-8 py-3 sm:py-4 border border-white bg-transparent text-white hover:bg-white hover:text-dark duration-300 text-sm sm:text-base font-semibold rounded-full hover:cursor-pointer text-center active:scale-95"
                                >
                                    Получить консультацию
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-8 sm:py-12 px-4 sm:px-8 mobile:px-6 sm:mobile:px-16 md:pl-16 md:pr-[295px] rounded-t-3xl md:rounded-none md:rounded-tl-2xl z-10 border-t border-dark/5 dark:border-white/10 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)] dark:shadow-none">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10 text-black dark:text-white">
                        {stats.map((item) => (
                            <div key={item.label} className='flex flex-col items-center gap-2 sm:gap-3 rounded-2xl bg-white/0 dark:bg-white/0 text-center'>
                                <div className='bg-black/10 dark:bg-white/5 p-1.5 sm:p-2.5 rounded-[10px] w-fit'>
                                    <Icon
                                        icon={item.icon}
                                        width={24}
                                        height={24}
                                        className='text-black dark:text-white sm:w-7 sm:h-7'
                                        aria-hidden='true'
                                    />
                                </div>
                                <p className='text-lg sm:text-2xl md:text-3xl font-medium text-inherit leading-none w-full'>
                                    <span className='inline-flex items-baseline justify-center gap-0 min-h-6 sm:min-h-9 md:w-[200px] w-full'>
                                        <span className='inline-block tabular-nums text-center'>
                                            {item.value}
                                        </span>
                                    </span>
                                </p>
                                <p className='text-sm sm:text-base font-normal text-black/60 dark:text-white/60 text-center'>
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

export default RenovationHero;
