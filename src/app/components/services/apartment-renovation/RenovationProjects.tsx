import Image from "next/image";
import { Icon } from "@iconify/react";
import { Badge } from "@/app/components/ui/badge";

const projects = [
  {
    title: "ЖК 'Маяковский'",
    type: "Капитальный ремонт",
    area: "76 м²",
    duration: "65 дней",
    image: "/images/complexes/complex-1.jpg",
    description:
      "Полная замена инженерии, перепланировка и чистовая отделка в современном стиле.",
  },
  {
    title: "ЖК 'Пресня Сити'",
    type: "Дизайнерский ремонт",
    area: "112 м²",
    duration: "95 дней",
    image: "/images/complexes/complex-2.jpg",
    description:
      "Реализация проекта по авторскому дизайну с использованием премиальных материалов.",
  },
];

const RenovationProjects = () => {
  return (
    <section
      className="py-24 bg-white dark:bg-dark relative overflow-hidden"
      data-oid="m_fmmtm"
    >
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"
        data-oid="7l7.2c0"
      ></div>
      <div
        className="container max-w-8xl mx-auto px-5 relative z-10"
        data-oid="7xxne.e"
      >
        <div
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
          data-oid="e-nk1xv"
        >
          <div className="max-w-2xl" data-oid="a:.ymsy">
            <div
              className="inline-flex items-center gap-2 text-primary font-bold mb-4"
              data-oid="6g_v34t"
            >
              <span className="w-10 h-0.5 bg-primary" data-oid="1mn7:.5"></span>
              Наше портфолио
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-dark dark:text-white"
              data-oid="3-aa-ef"
            >
              Реализованные объекты
            </h2>
          </div>
          <button
            className="flex items-center gap-2 text-dark dark:text-white font-bold hover:text-primary transition-colors group"
            data-oid="td9hjp4"
          >
            Смотреть все проекты
            <Icon
              icon="ph:arrow-right-bold"
              className="group-hover:translate-x-1 transition-transform"
              data-oid="c75kb2r"
            />
          </button>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          data-oid="qty_uyt"
        >
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 dark:bg-white/5 rounded-[40px] overflow-hidden border border-dark/5 dark:border-white/5 hover:border-primary/20 transition-all duration-500 shadow-xl shadow-dark/5 dark:shadow-none hover:-translate-y-2"
              data-oid="kwbokf4"
            >
              <div
                className="relative h-[300px] sm:h-[400px] overflow-hidden"
                data-oid="62y11lm"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-oid="1j9f1fe"
                />

                <div
                  className="absolute top-6 left-6 flex gap-2"
                  data-oid="t3549xt"
                >
                  <Badge
                    className="bg-white/90 text-dark backdrop-blur-md px-4 py-1 rounded-full border-none font-bold"
                    data-oid="ok2mcse"
                  >
                    {p.area}
                  </Badge>
                  <Badge
                    className="bg-primary text-white px-4 py-1 rounded-full border-none font-bold"
                    data-oid="kqwwa0:"
                  >
                    {p.duration}
                  </Badge>
                </div>
              </div>
              <div className="p-8 sm:p-12" data-oid="6fb7zjs">
                <div
                  className="text-primary text-sm font-bold uppercase tracking-widest mb-2"
                  data-oid="fb-96b9"
                >
                  {p.type}
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-dark dark:text-white mb-6 underline underline-offset-12 decoration-primary/20 group-hover:decoration-primary group-hover:underline-offset-16 transition-all duration-500"
                  data-oid=".xplupy"
                >
                  {p.title}
                </h3>
                <p
                  className="text-dark/60 dark:text-white/60 text-lg mb-8 leading-relaxed"
                  data-oid="ird3azo"
                >
                  {p.description}
                </p>
                <div
                  className="grid grid-cols-2 gap-4 border-t border-dark/10 dark:border-white/10 pt-8"
                  data-oid="55wwfgz"
                >
                  <div className="flex flex-col" data-oid="a_g.io1">
                    <span
                      className="text-xs text-dark/40 dark:text-white/40 uppercase"
                      data-oid="e3._6xn"
                    >
                      Локация
                    </span>
                    <span
                      className="font-bold text-dark dark:text-white"
                      data-oid="ypqfj:a"
                    >
                      Москва, ЦАО
                    </span>
                  </div>
                  <div className="flex flex-col" data-oid="c_qlxi2">
                    <span
                      className="text-xs text-dark/40 dark:text-white/40 uppercase"
                      data-oid="4pl95i-"
                    >
                      Статус
                    </span>
                    <span
                      className="font-bold text-primary flex items-center gap-1"
                      data-oid="2yr2z48"
                    >
                      <span
                        className="w-2 h-2 rounded-full bg-primary animate-pulse"
                        data-oid="-9wa33g"
                      ></span>
                      Завершен
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RenovationProjects;
