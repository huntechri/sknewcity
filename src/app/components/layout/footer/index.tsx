import Link from "next/link";
import { Icon } from "@iconify/react";
import { footerLinks } from "@/lib/layout-data";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark" data-oid="rww4l1p">
      <div
        className="container mx-auto max-w-8xl px-4 pt-12 sm:px-6 sm:pt-14 lg:px-0"
        data-oid="0up-he7"
      >
        <div
          className="flex flex-col gap-8 border-b border-white/10 pb-12 sm:pb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-11"
          data-oid="yoktv3y"
        >
          <p
            className="max-w-sm text-sm leading-relaxed text-white lg:max-w-1/5"
            data-oid="5fbswsn"
          >
            Получайте новости, полезные советы и специальные предложения.
          </p>
          <div
            className="flex w-full flex-col gap-5 lg:flex-1 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
            data-oid="itn3:18"
          >
            <div
              className="order-2 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center lg:order-1"
              data-oid="mxh14kf"
            >
              <input
                type="email"
                placeholder="Введите email"
                className="w-full min-w-0 rounded-full bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white focus-visible:outline-0 sm:px-6 sm:py-4 sm:text-base"
                data-oid="gup5jt_"
              />

              <button
                className="w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-dark duration-300 hover:cursor-pointer hover:bg-primary hover:text-white sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                data-oid="1rr18j-"
              >
                Подписаться
              </button>
            </div>
            <p
              className="order-1 max-w-xl text-xs leading-relaxed text-white/40 sm:text-sm lg:order-2 lg:max-w-45p"
              data-oid="ad0vvs8"
            >
              Подписываясь, вы соглашаетесь получать письма. Можно отписаться в
              любой момент.
            </p>
          </div>
          <div
            className="flex w-full items-center justify-between gap-6 sm:w-auto"
            data-oid="31:2_0:"
          >
            <Link
              href="tel:+79167673434"
              className="flex items-center gap-2 text-white hover:text-primary duration-300 group"
              data-oid="footer-phone"
            >
              <Icon
                icon="ph:phone-fill"
                width={20}
                height={20}
                data-oid="phone-icon"
              />
              <span className="text-sm font-semibold sm:text-base whitespace-nowrap" data-oid="phone-text">
                +7 916 767-34-34
              </span>
            </Link>

            <div className="flex items-center gap-6" data-oid="social-links">
              <Link
                href="https://t.me/sknewcity444"
                target="_blank"
                rel="noopener noreferrer"
                data-oid="yei9jm_"
              >
                <Icon
                  icon="ph:telegram-logo-bold"
                  width={24}
                  height={24}
                  className="text-white hover:text-primary duration-300"
                  data-oid="-f_8e35"
                />
              </Link>
              <Link
                href="https://vk.com/sk_new_city"
                target="_blank"
                rel="noopener noreferrer"
                data-oid="xk1lj2-"
              >
                <Icon
                  icon="fa6-brands:vk"
                  width={24}
                  height={24}
                  className="text-white hover:text-primary duration-300"
                  data-oid="84qda04"
                />
              </Link>
              <Link
                href="https://max.ru/id7733427438_biz"
                target="_blank"
                rel="noopener noreferrer"
                data-oid="hampyd:"
              >
                <Icon
                  icon="ph:chat-circle-bold"
                  width={24}
                  height={24}
                  className="text-white hover:text-primary duration-300"
                  data-oid="9gt4l_n"
                />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="py-10 sm:py-16 border-b border-white/10"
          data-oid="3gyq21q"
        >
          <div
            className="grid grid-cols-12 gap-6 md:gap-10 items-start"
            data-oid="._f-6o0"
          >
            <div className="md:col-span-5 col-span-12" data-oid="3i7pt_:">
              <h2
                className="mb-4 max-w-2xl text-2xl font-medium leading-[1.15] text-white text-balance sm:mb-6 sm:text-3xl md:text-4xl lg:text-32"
                data-oid="jfmefn6"
              >
                Готовы к ремонту? Свяжитесь с нами сегодня.
              </h2>
              <Link
                href="/contactus"
                className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white duration-300 hover:cursor-pointer hover:bg-white hover:text-dark sm:px-8 sm:py-4 sm:text-base"
                data-oid="ole-11x"
              >
                Получить консультацию
              </Link>
            </div>
            
            <div
              className="md:col-span-3 sm:col-span-6 col-span-12"
              data-oid="a1de2lj"
            >
              <div className="grid grid-cols-2 gap-x-4 md:grid-cols-1 md:gap-3" data-oid="06wi35x">
                {footerLinks.map((item, index: number) => (
                  <div key={index} data-oid="bld2pq0">
                    <Link
                      href={item.href}
                      className="text-white/40 text-xs sm:text-xm hover:text-white"
                      data-oid="s0pgmss"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="md:col-span-4 col-span-12"
              data-oid="rfgqupy"
            >
              <div className="w-full overflow-hidden rounded-xl h-[250px] border border-white/5" data-oid="map-wrapper">
                <div 
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ 
                    __html: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A30c8f9b8b5b948495556485fe2965c30f455ce71c2009443593171a344d59955&amp;width=100%25&amp;height=250&amp;lang=ru_RU&amp;scroll=true"></script>` 
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-start justify-between gap-4 py-6 sm:gap-6 md:flex-row md:flex-nowrap md:items-center"
          data-oid="xpa7v6u"
        >
          <p className="text-white/40 text-sm " data-oid="9zysgt.">
            ©2025 sk-new-city.ru — все права защищены
          </p>
          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8"
            data-oid="o80v02f"
          >
            <Link
              href="/terms-and-conditions"
              className="text-white/40 hover:text-primary text-sm"
              data-oid="td3yq8p"
            >
              Условия
            </Link>
            <Link
              href="/privacy-policy"
              className="text-white/40 hover:text-primary text-sm"
              data-oid="dxyiwb2"
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
