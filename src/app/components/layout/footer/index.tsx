"use client";
import Link from "next/link";
import { Icon } from "@iconify/react"
import { useEffect, useState } from "react";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/layout-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLinks(data?.footerLinks)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        <div className="flex lg:items-center justify-between items-end lg:gap-11 pb-14 border-b border-white/10 lg:flex-nowrap flex-wrap gap-6">
          <p className="text-white text-sm lg:max-w-1/5">
            Получайте новости, полезные советы и специальные предложения.
          </p>
          <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-2 sm:gap-3">
            <div className="flex gap-2 lg:order-1 order-2 flex-col sm:flex-row w-full sm:w-auto">
              <input type="email" placeholder="Введите email" className="rounded-full py-2 sm:py-4 px-3 sm:px-6 bg-white/10 placeholder:text-white text-white focus-visible:outline-0 text-sm sm:text-base" />
              <button className="text-dark bg-white py-2 sm:py-4 px-4 sm:px-8 font-semibold rounded-full hover:bg-primary hover:text-white duration-300 hover:cursor-pointer text-sm sm:text-base">
                Подписаться
              </button>
            </div>
            <p className="text-white/40 text-xs sm:text-sm lg:max-w-[45%] order-1 lg:order-2">
              Подписываясь, вы соглашаетесь получать письма. Можно отписаться в любой момент.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#">
              <Icon icon="ph:x-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="#">
              <Icon icon="ph:facebook-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="#">
              <Icon icon="ph:instagram-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
          </div>
        </div>
        <div className="py-10 sm:py-16 border-b border-white/10">
          <div className="grid grid-cols-12 gap-3 sm:gap-6 md:gap-10">
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-white leading-[1.2] text-2xl sm:text-3xl md:text-5xl lg:text-40 font-medium mb-4 sm:mb-6 lg:max-w-3/4">
                Готовы к ремонту без стресса? Свяжитесь с нами сегодня.
              </h2>
              <Link href="/contactus" className="bg-primary text-sm sm:text-base font-semibold py-3 sm:py-4 px-5 sm:px-8 rounded-full text-white hover:bg-white hover:text-dark duration-300 hover:cursor-pointer">
                Получить консультацию
              </Link>
            </div>
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-3 w-fit">
                {footerLinks?.slice(0, 4)?.map((item:any, index:any) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xs sm:text-xm hover:text-white">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-3 w-fit">
                {footerLinks?.slice(4, 8)?.map((item:any, index:any) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xs sm:text-xm hover:text-white">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-white/40 text-sm ">
            ©2025 sk-new-city.ru — все права защищены
          </p>
          <div className="flex gap-8 items-center">
            <Link href="/terms-and-conditions" className="text-white/40 hover:text-primary text-sm">
              Условия
            </Link>
            <Link href="/privacy-policy" className="text-white/40 hover:text-primary text-sm">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;