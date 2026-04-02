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
      data-oid="2f9jzz6"
    >
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"
        data-oid="7nq6rne"
      ></div>
      <div
        className="container max-w-8xl mx-auto px-5 relative z-10"
        data-oid="vueoedi"
      >
        <div
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
          data-oid="cr5v0hz"
        >
          <div className="max-w-2xl" data-oid="u2i:3ss">
            <div
              className="inline-flex items-center gap-2 text-primary font-bold mb-4"
              data-oid="3r1.pa7"
            >
              <span className="w-10 h-0.5 bg-primary" data-oid="cnx8vri"></span>
              Наше портфолио
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-dark dark:text-white"
              data-oid="8sjln:y"
            >
              Реализованные объекты
            </h2>
          </div>
          <button
            className="flex items-center gap-2 text-dark dark:text-white font-bold hover:text-primary transition-colors group"
            data-oid="ys_032e"
          >
            Смотреть все проекты
            <Icon
              icon="ph:arrow-right-bold"
              className="group-hover:translate-x-1 transition-transform"
              data-oid="_2uciyq"
            />
          </button>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          data-oid=":r2ww_n"
        >
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 dark:bg-white/5 rounded-[40px] overflow-hidden border border-dark/5 dark:border-white/5 hover:border-primary/20 transition-all duration-500 shadow-xl shadow-dark/5 dark:shadow-none hover:-translate-y-2"
              data-oid="g:7towj"
            >
              <div
                className="relative h-[300px] sm:h-[400px] overflow-hidden"
                data-oid="rc66z53"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-oid="rl_-6rc"
                />

                <div
                  className="absolute top-6 left-6 flex gap-2"
                  data-oid="58-.dvx"
                >
                  <Badge
                    className="bg-white/90 text-dark backdrop-blur-md px-4 py-1 rounded-full border-none font-bold"
                    data-oid="toyu22l"
                  >
                    {p.area}
                  </Badge>
                  <Badge
                    className="bg-primary text-white px-4 py-1 rounded-full border-none font-bold"
                    data-oid="kp.un9j"
                  >
                    {p.duration}
                  </Badge>
                </div>
              </div>
              <div className="p-8 sm:p-12" data-oid="vwcxh7u">
                <div
                  className="text-primary text-sm font-bold uppercase tracking-widest mb-2"
                  data-oid="bo.mcsk"
                >
                  {p.type}
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-dark dark:text-white mb-6 underline underline-offset-12 decoration-primary/20 group-hover:decoration-primary group-hover:underline-offset-16 transition-all duration-500"
                  data-oid="w_:u-pf"
                >
                  {p.title}
                </h3>
                <p
                  className="text-dark/60 dark:text-white/60 text-lg mb-8 leading-relaxed"
                  data-oid="6ubvdle"
                >
                  {p.description}
                </p>
                <div
                  className="grid grid-cols-2 gap-4 border-t border-dark/10 dark:border-white/10 pt-8"
                  data-oid="g-vp.u0"
                >
                  <div className="flex flex-col" data-oid="xcivb8r">
                    <span
                      className="text-xs text-dark/40 dark:text-white/40 uppercase"
                      data-oid="e1himsy"
                    >
                      Локация
                    </span>
                    <span
                      className="font-bold text-dark dark:text-white"
                      data-oid="mv6hnmo"
                    >
                      Москва, ЦАО
                    </span>
                  </div>
                  <div className="flex flex-col" data-oid="pkxywbz">
                    <span
                      className="text-xs text-dark/40 dark:text-white/40 uppercase"
                      data-oid="l3ew:6m"
                    >
                      Статус
                    </span>
                    <span
                      className="font-bold text-primary flex items-center gap-1"
                      data-oid="x0ox-y9"
                    >
                      <span
                        className="w-2 h-2 rounded-full bg-primary animate-pulse"
                        data-oid="n9i4mo6"
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
