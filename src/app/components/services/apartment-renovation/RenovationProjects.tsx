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
      data-oid="xqyfjcp"
    >
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"
        data-oid="5iry_bo"
      ></div>
      <div
        className="container max-w-8xl mx-auto px-5 relative z-10"
        data-oid="pte-ba:"
      >
        <div
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
          data-oid="hkwou7o"
        >
          <div className="max-w-2xl" data-oid="6j.ftjs">
            <div
              className="inline-flex items-center gap-2 text-primary font-bold mb-4"
              data-oid="qu9s9lr"
            >
              <span className="w-10 h-0.5 bg-primary" data-oid="lbiobru"></span>
              Наше портфолио
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-dark dark:text-white"
              data-oid="qpu9v.a"
            >
              Реализованные объекты
            </h2>
          </div>
          <button
            className="flex items-center gap-2 text-dark dark:text-white font-bold hover:text-primary transition-colors group"
            data-oid="3jgi:g:"
          >
            Смотреть все проекты
            <Icon
              icon="ph:arrow-right-bold"
              className="group-hover:translate-x-1 transition-transform"
              data-oid="oadvuyj"
            />
          </button>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          data-oid="8ru6:cj"
        >
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 dark:bg-white/5 rounded-[40px] overflow-hidden border border-dark/5 dark:border-white/5 hover:border-primary/20 transition-all duration-500 shadow-xl shadow-dark/5 dark:shadow-none hover:-translate-y-2"
              data-oid=":xt73y7"
            >
              <div
                className="relative h-[300px] sm:h-[400px] overflow-hidden"
                data-oid="_1aqjr1"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-oid="s-8qltz"
                />

                <div
                  className="absolute top-6 left-6 flex gap-2"
                  data-oid="fhi8-rz"
                >
                  <Badge
                    className="bg-white/90 text-dark backdrop-blur-md px-4 py-1 rounded-full border-none font-bold"
                    data-oid="eo033cd"
                  >
                    {p.area}
                  </Badge>
                  <Badge
                    className="bg-primary text-white px-4 py-1 rounded-full border-none font-bold"
                    data-oid="qo:_8w4"
                  >
                    {p.duration}
                  </Badge>
                </div>
              </div>
              <div className="p-8 sm:p-12" data-oid="gq3y.wo">
                <div
                  className="text-primary text-sm font-bold uppercase tracking-widest mb-2"
                  data-oid="fk81i8y"
                >
                  {p.type}
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-dark dark:text-white mb-6 underline underline-offset-12 decoration-primary/20 group-hover:decoration-primary group-hover:underline-offset-16 transition-all duration-500"
                  data-oid="xswi1zq"
                >
                  {p.title}
                </h3>
                <p
                  className="text-dark/60 dark:text-white/60 text-lg mb-8 leading-relaxed"
                  data-oid="oz37inv"
                >
                  {p.description}
                </p>
                <div
                  className="grid grid-cols-2 gap-4 border-t border-dark/10 dark:border-white/10 pt-8"
                  data-oid="xz.tk0q"
                >
                  <div className="flex flex-col" data-oid="156.44.">
                    <span
                      className="text-xs text-dark/40 dark:text-white/40 uppercase"
                      data-oid="w9eb4bk"
                    >
                      Локация
                    </span>
                    <span
                      className="font-bold text-dark dark:text-white"
                      data-oid="za1-kd."
                    >
                      Москва, ЦАО
                    </span>
                  </div>
                  <div className="flex flex-col" data-oid="u6.cte7">
                    <span
                      className="text-xs text-dark/40 dark:text-white/40 uppercase"
                      data-oid="86u5:t6"
                    >
                      Статус
                    </span>
                    <span
                      className="font-bold text-primary flex items-center gap-1"
                      data-oid="i60rrpi"
                    >
                      <span
                        className="w-2 h-2 rounded-full bg-primary animate-pulse"
                        data-oid="kmut49c"
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
