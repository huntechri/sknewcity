import Link from "next/link";
import { Icon } from "@iconify/react";
import { footerLinks } from "@/lib/layout-data";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark" data-oid="5jrdlor">
      <div
        className="container mx-auto max-w-8xl px-4 pt-12 sm:px-6 sm:pt-14 lg:px-0"
        data-oid="h132scp"
      >
        <div
          className="flex flex-col gap-8 border-b border-white/10 pb-12 sm:pb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-11"
          data-oid="fbscc5o"
        >
          <p
            className="max-w-sm text-sm leading-relaxed text-white lg:max-w-1/5"
            data-oid="nw7lnc4"
          >
            Получайте новости, полезные советы и специальные предложения.
          </p>
          <div
            className="flex w-full flex-col gap-5 lg:flex-1 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
            data-oid="klvi:ld"
          >
            <div
              className="order-2 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center lg:order-1"
              data-oid="_ui80t9"
            >
              <input
                type="email"
                placeholder="Введите email"
                className="w-full min-w-0 rounded-full bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white focus-visible:outline-0 sm:px-6 sm:py-4 sm:text-base"
                data-oid="k-d9eei"
              />

              <button
                className="w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-dark duration-300 hover:cursor-pointer hover:bg-primary hover:text-white sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                data-oid="21hulfa"
              >
                Подписаться
              </button>
            </div>
            <p
              className="order-1 max-w-xl text-xs leading-relaxed text-white/40 sm:text-sm lg:order-2 lg:max-w-45p"
              data-oid="kf.77uv"
            >
              Подписываясь, вы соглашаетесь получать письма. Можно отписаться в
              любой момент.
            </p>
          </div>
          <div
            className="flex w-full items-center gap-6 sm:w-auto"
            data-oid="ht-4fwp"
          >
            <Link
              href="https://t.me/sknewcity444"
              target="_blank"
              rel="noopener noreferrer"
              data-oid="cgt_bd3"
            >
              <Icon
                icon="ph:telegram-logo-bold"
                width={24}
                height={24}
                className="text-white hover:text-primary duration-300"
                data-oid="cu.0djd"
              />
            </Link>
            <Link
              href="https://vk.com/sk_new_city"
              target="_blank"
              rel="noopener noreferrer"
              data-oid="w3a5uvc"
            >
              <Icon
                icon="fa6-brands:vk"
                width={24}
                height={24}
                className="text-white hover:text-primary duration-300"
                data-oid="q-e8ono"
              />
            </Link>
            <Link
              href="https://max.ru/id7733427438_biz"
              target="_blank"
              rel="noopener noreferrer"
              data-oid="t-mc8o9"
            >
              <Icon
                icon="ph:chat-circle-bold"
                width={24}
                height={24}
                className="text-white hover:text-primary duration-300"
                data-oid="sxeo-h6"
              />
            </Link>
          </div>
        </div>
        <div
          className="py-10 sm:py-16 border-b border-white/10"
          data-oid="kdtyurv"
        >
          <div
            className="grid grid-cols-12 gap-3 sm:gap-6 md:gap-10"
            data-oid="260-xb6"
          >
            <div className="md:col-span-7 col-span-12" data-oid="sa99fnh">
              <h2
                className="mb-4 max-w-2xl text-2xl font-medium leading-[1.15] text-white text-balance sm:mb-6 sm:text-3xl md:text-5xl lg:text-40 lg:max-w-3/4"
                data-oid="9h3_1y5"
              >
                Готовы к ремонту без стресса? Свяжитесь с нами сегодня.
              </h2>
              <Link
                href="/contactus"
                className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white duration-300 hover:cursor-pointer hover:bg-white hover:text-dark sm:px-8 sm:py-4 sm:text-base"
                data-oid="eakm009"
              >
                Получить консультацию
              </Link>
            </div>
            <div
              className="md:col-span-3 sm:col-span-6 col-span-12"
              data-oid="wdceier"
            >
              <div className="flex w-full flex-col gap-3" data-oid="6xtnbad">
                {footerLinks.slice(0, 4).map((item, index: number) => (
                  <div key={index} data-oid="ph.sdp4">
                    <Link
                      href={item.href}
                      className="text-white/40 text-xs sm:text-xm hover:text-white"
                      data-oid="6jq:_4u"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="md:col-span-2 sm:col-span-6 col-span-12"
              data-oid="njv7089"
            >
              <div className="flex w-full flex-col gap-3" data-oid="gimu-60">
                {footerLinks.slice(4, 8).map((item, index: number) => (
                  <div key={index} data-oid="zv:v.jb">
                    <Link
                      href={item.href}
                      className="text-white/40 text-xs sm:text-xm hover:text-white"
                      data-oid="x748ylg"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-start justify-between gap-4 py-6 sm:gap-6 md:flex-row md:flex-nowrap md:items-center"
          data-oid="9.xfigb"
        >
          <p className="text-white/40 text-sm " data-oid="24o6tf7">
            ©2025 sk-new-city.ru — все права защищены
          </p>
          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8"
            data-oid="f:j5f18"
          >
            <Link
              href="/terms-and-conditions"
              className="text-white/40 hover:text-primary text-sm"
              data-oid="l3h1g52"
            >
              Условия
            </Link>
            <Link
              href="/privacy-policy"
              className="text-white/40 hover:text-primary text-sm"
              data-oid="2sate3z"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
