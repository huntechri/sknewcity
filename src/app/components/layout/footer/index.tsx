import Link from "next/link";
import { Icon } from "@iconify/react"
import { footerLinks } from "@/lib/layout-data";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl px-4 pt-12 sm:px-6 sm:pt-14 lg:px-0">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 sm:pb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-11">
          <p className="max-w-sm text-sm leading-relaxed text-white lg:max-w-1/5">
            Получайте новости, полезные советы и специальные предложения.
          </p>
          <div className="flex w-full flex-col gap-5 lg:flex-1 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="order-2 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center lg:order-1">
              <input type="email" placeholder="Введите email" className="w-full min-w-0 rounded-full bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white focus-visible:outline-0 sm:px-6 sm:py-4 sm:text-base" />
              <button className="w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-dark duration-300 hover:cursor-pointer hover:bg-primary hover:text-white sm:w-auto sm:px-8 sm:py-4 sm:text-base">
                Подписаться
              </button>
            </div>
            <p className="order-1 max-w-xl text-xs leading-relaxed text-white/40 sm:text-sm lg:order-2 lg:max-w-45p">
              Подписываясь, вы соглашаетесь получать письма. Можно отписаться в любой момент.
            </p>
          </div>
          <div className="flex w-full items-center gap-6 sm:w-auto">
            <Link href="https://t.me/sknewcity444" target="_blank" rel="noopener noreferrer">
              <Icon icon="ph:telegram-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="https://vk.com/sk_new_city" target="_blank" rel="noopener noreferrer">
              <Icon icon="fa6-brands:vk" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="https://max.ru/id7733427438_biz" target="_blank" rel="noopener noreferrer">
              <Icon icon="ph:chat-circle-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
          </div>
        </div>
        <div className="py-10 sm:py-16 border-b border-white/10">
          <div className="grid grid-cols-12 gap-3 sm:gap-6 md:gap-10">
            <div className="md:col-span-7 col-span-12">
              <h2 className="mb-4 max-w-2xl text-2xl font-medium leading-[1.15] text-white text-balance sm:mb-6 sm:text-3xl md:text-5xl lg:text-40 lg:max-w-3/4">
                Готовы к ремонту без стресса? Свяжитесь с нами сегодня.
              </h2>
              <Link href="/contactus" className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white duration-300 hover:cursor-pointer hover:bg-white hover:text-dark sm:px-8 sm:py-4 sm:text-base">
                Получить консультацию
              </Link>
            </div>
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex w-full flex-col gap-3">
                {footerLinks.slice(0, 4).map((item, index: number) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xs sm:text-xm hover:text-white">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex w-full flex-col gap-3">
                {footerLinks.slice(4, 8).map((item, index: number) => (
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
        <div className="flex flex-col items-start justify-between gap-4 py-6 sm:gap-6 md:flex-row md:flex-nowrap md:items-center">
          <p className="text-white/40 text-sm ">
            ©2025 sk-new-city.ru — все права защищены
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
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
