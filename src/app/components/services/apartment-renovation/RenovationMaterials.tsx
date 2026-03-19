import Image from "next/image";
import { Icon } from "@iconify/react";

const materials = [
  { name: "REHAU", type: "Трубопроводы и отопление", logo: "rehau-logo.svg" },
  { name: "FAR", type: "Сантехническая арматура", logo: "far-logo.svg" },
  { name: "ABB", type: "Электрооборудование", logo: "abb-logo.svg" },
  { name: "KNAUF", type: "Строительные смеси", logo: "knauf-logo.svg" },
  {
    name: "Tikkurila",
    type: "Лакокрасочные материалы",
    logo: "tikkurila-logo.svg",
  },
  {
    name: "Kerama Marazzi",
    type: "Керамогранит и плитка",
    logo: "kerama-logo.svg",
  },
];

const RenovationMaterials = () => {
  return (
    <section
      className="py-10 bg-white dark:bg-black overflow-hidden relative"
      data-oid="y2d4v_0"
    >
      <div
        className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-dark/5 dark:via-white/5 to-transparent"
        data-oid="585o2a:"
      ></div>
      <div className="container max-w-8xl mx-auto px-5" data-oid="v.r6idi">
        <div className="text-center mb-20 max-w-3xl mx-auto" data-oid="nkycoca">
          <h2
            className="text-3xl sm:text-5xl font-bold text-dark dark:text-white mb-6"
            data-oid="ddlhbbb"
          >
            Работаем только с{" "}
            <span
              className="text-primary underline underline-offset-8 decoration-primary/30"
              data-oid="90xj5_-"
            >
              проверенным
            </span>{" "}
            материалом
          </h2>
          <p
            className="text-dark/50 dark:text-white/50 text-lg leading-relaxed"
            data-oid="0mr.pz5"
          >
            Мы закупаем материалы напрямую у дилеров и крупных федеральных сетей
            (Петрович, Леруа Мерлен), гарантируя подлинность и лучшую цену.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
          data-oid="8sgkqz8"
        >
          <div className="relative group" data-oid="v1owchh">
            <div
              className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
              data-oid="lq3m.35"
            ></div>
            <Image
              src="/images/categories/luxury-villa.jpg"
              alt="Материалы для ремонта"
              width={600}
              height={400}
              className="rounded-[40px] relative z-10 w-full object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              data-oid="c4v4xbu"
            />

            <div
              className="absolute -bottom-6 -right-6 bg-white dark:bg-black p-8 rounded-3xl shadow-2xl z-20 hidden lg:block border border-black/5 dark:border-white/5"
              data-oid="p2k6duh"
            >
              <div className="flex flex-col gap-1" data-oid="anw6y53">
                <span
                  className="text-primary text-4xl font-black"
                  data-oid="2m008_8"
                >
                  20%
                </span>
                <span
                  className="text-dark dark:text-white font-bold max-w-[120px] leading-tight"
                  data-oid="n6.9o71"
                >
                  Экономии на закупках за счет объемов
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-8" data-oid="xt7chl1">
            <div className="space-y-4 group" data-oid="dlszco9">
              <div
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6"
                data-oid="zrxcvze"
              >
                <Icon
                  icon="ph:package-bold"
                  className="text-3xl"
                  data-oid="5xnyn5i"
                />
              </div>
              <h3
                className="text-2xl font-bold text-dark dark:text-white"
                data-oid="30r8jtb"
              >
                Прозрачная логистика
              </h3>
              <p
                className="text-dark/60 dark:text-white/60 leading-relaxed text-lg"
                data-oid="bm47nqa"
              >
                Все счета и накладные доступны в личном кабинете. Вы платите
                только за реально доставленный и использованный материал.
              </p>
            </div>
            <div
              className="space-y-4 border-t border-dark/5 dark:border-white/5 pt-8 group"
              data-oid="7:oku93"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:-rotate-6"
                data-oid="f7vo-3i"
              >
                <Icon
                  icon="ph:shield-checkered-bold"
                  className="text-3xl"
                  data-oid="1lp-fg9"
                />
              </div>
              <h3
                className="text-2xl font-bold text-dark dark:text-white"
                data-oid="at3ghk6"
              >
                Контроль качества
              </h3>
              <p
                className="text-dark/60 dark:text-white/60 leading-relaxed text-lg"
                data-oid="0l3zgo-"
              >
                Любая партия товара проходит входной контроль прорабом. При
                обнаружении брака — замена за наш счет в течение 24 часов.
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-primary/5 dark:bg-white/5 rounded-[40px] p-10 sm:p-20 border border-primary/10"
          data-oid="l_ece3x"
        >
          <div
            className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16"
            data-oid="d7wwa0."
          >
            <div className="text-center lg:text-left" data-oid="d8xgw6_">
              <h4
                className="text-2xl sm:text-3xl font-bold text-dark dark:text-white"
                data-oid="7w:c80t"
              >
                Предпочитаемые бренды
              </h4>
              <p
                className="text-dark/50 dark:text-white/50 mt-2"
                data-oid="1vkdh7i"
              >
                Мировые стандарты надежности и экологичности
              </p>
            </div>
            <div
              className="h-px w-full lg:w-1/3 bg-black/10 dark:bg-white/10"
              data-oid="_jsa9sk"
            ></div>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
            data-oid="q.:lxv7"
          >
            {materials.map((m, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-4 group cursor-help"
                data-oid="eid:gk3"
              >
                <div
                  className="text-dark dark:text-white font-black text-xl tracking-tighter group-hover:text-primary transition-colors"
                  data-oid="k7blg5n"
                >
                  {m.name}
                </div>
                <span
                  className="text-[10px] text-center text-dark/30 dark:text-white/30 uppercase tracking-widest"
                  data-oid="0:3ah7:"
                >
                  {m.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenovationMaterials;
