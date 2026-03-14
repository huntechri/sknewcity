"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const GetInTouch: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setShouldLoadVideo(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px 0px" }
        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div ref={sectionRef} className="relative rounded-t-2xl overflow-hidden">
                    {/* Background Fallback/Layer */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b,transparent_55%),linear-gradient(135deg,#0f172a,#334155)]" />

                    {shouldLoadVideo && (
                        <video
                            className="w-full h-full absolute top-0 left-0 object-cover z-0"
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-label="Видео-фон с современным интерьером"
                        >
                            <source src="https://videos.pexels.com/video-files/7233782/7233782-hd_1920_1080_25fps.mp4" type="video/mp4" />
                        </video>
                    )}

                    <div className="relative z-10 bg-black/30 lg:py-64 md:py-28 py-20 px-4">
                        <div className="flex flex-col items-center gap-6 sm:gap-8">
                            <h2 className='text-white text-xl sm:text-3xl lg:text-52 lg:max-w-3/4 text-center font-medium leading-tight'>
                                Пространства, в которых удобно жить. Ремонт под ваш стиль и бюджет.
                            </h2>
                            <Link href="/contactus" className='bg-white py-3 sm:py-4 px-6 sm:px-8 rounded-full text-dark hover:bg-dark hover:text-white duration-300 text-sm sm:text-base'>
                                Заказать консультацию
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full py-4 sm:py-5 bg-primary rounded-b-2xl overflow-hidden">
                    <div className="flex items-center gap-6 sm:gap-10 md:gap-20 lg:gap-40 animate-slide px-3 sm:px-5">
                        <p className='text-white text-xs sm:text-sm md:text-base lg:text-base whitespace-nowrap relative after:absolute after:w-10 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-16 sm:after:-right-32'>
                            БЕСПЛАТНЫЙ РАСЧЁТ СМЕТЫ — РЕМОНТ БЕЗ СЮРПРИЗОВ!
                        </p>
                        <p className='text-white text-xs sm:text-sm md:text-base lg:text-base whitespace-nowrap relative after:absolute after:w-10 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-16 sm:after:-right-32'>
                            ФИКСИРОВАННАЯ СМЕТА И ПОНЯТНЫЕ СРОКИ НА КАЖДЫЙ ПРОЕКТ!
                        </p>
                        <p className='text-white text-xs sm:text-sm md:text-base lg:text-base whitespace-nowrap relative after:absolute after:w-10 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-16 sm:after:-right-32'>
                            БЕСПЛАТНЫЙ РАСЧЁТ СМЕТЫ — РЕМОНТ БЕЗ СЮРПРИЗОВ!
                        </p>
                        <p className='text-white text-xs sm:text-sm md:text-base lg:text-base whitespace-nowrap relative after:absolute after:w-10 sm:after:w-20 after:h-px after:bg-white after:top-2 sm:after:top-3 after:-right-16 sm:after:-right-32'>
                            ФИКСИРОВАННАЯ СМЕТА И ПОНЯТНЫЕ СРОКИ НА КАЖДЫЙ ПРОЕКТ!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
