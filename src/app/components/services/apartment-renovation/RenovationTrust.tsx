import { Icon } from "@iconify/react";

const trustItems = [
  {
    title: "Фиксированная смета",
    description:
      "Стоимость работ является фиксированной и не изменяется в процессе выполнения.",
    icon: "ph:scales-bold",
  },
  {
    title: "Работа по договору",
    description:
      "Заключаем официальный договор с четкой фиксацией сроков, стоимости и обязательств.",
    icon: "ph:file-text-bold",
  },
  {
    title: "Оплата по факту",
    description: "Вы платите только за выполненные и принятые этапы работ.",
    icon: "ph:wallet-bold",
  },
  {
    title: "График работ",
    description:
      "Четкое планирование каждого дня. Вы заранее знаете, что будет происходить завтра.",
    icon: "ph:calendar-check-bold",
  },
];

const RenovationTrust = () => {
  return (
    <section
      className="py-10 bg-white dark:bg-black relative overflow-hidden"
      data-oid="b.:rcvt"
    >
      <div
        className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-x-1/2"
        data-oid="qftlth3"
      ></div>
      <div
        className="container max-w-8xl mx-auto px-5 relative z-10"
        data-oid="c98.n_b"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          data-oid="our1_:8"
        >
          <div data-oid="-ziq-5h">
            <div
              className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2.5 items-center mb-4"
              data-oid="vw8y6xi"
            >
              <Icon
                icon="ph:house-simple-fill"
                className="text-lg sm:text-2xl text-primary"
                data-oid="ulw2a4j"
              />

              <span data-oid="peu3zoc">Надежность</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-dark dark:text-white mb-8 leading-tight"
              data-oid="lsd96t8"
            >
              Почему доверяют <br data-oid="81zb:or" /> именно нам?
            </h2>
            <p
              className="text-dark/50 dark:text-white/50 text-lg mb-12 leading-relaxed max-w-xl"
              data-oid="y_41ltn"
            >
              Ремонт — это серьезная инвестиция. Мы создали систему, которая
              минимизирует ваши риски и делает процесс максимально прозрачным и
              спокойным.
            </p>

            <div className="flex flex-col gap-6" data-oid="v8ucf7o">
              <div
                className="flex items-start gap-5 p-6 rounded-3xl bg-white dark:bg-white/5 border border-dark/5 dark:border-white/10 hover:border-primary/30 transition-all duration-300 group shadow-lg shadow-dark/5 dark:shadow-none"
                data-oid="giu_.5n"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all"
                  data-oid="eip874f"
                >
                  <Icon
                    icon="ph:certificate-bold"
                    className="text-3xl"
                    data-oid="n9lga1q"
                  />
                </div>
                <div data-oid="-bm8i5m">
                  <h4
                    className="text-xl font-bold text-dark dark:text-white mb-2"
                    data-oid="z:6k16u"
                  >
                    Аккредитованная компания
                  </h4>
                  <p
                    className="text-dark/40 dark:text-white/40 text-sm"
                    data-oid="2j_ypa9"
                  >
                    Член СРО, имеем все необходимые допуски к инженерным и
                    строительным работам.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            data-oid="u.0:kdp"
          >
            {trustItems.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] bg-white dark:bg-white/5 border border-dark/5 dark:border-white/5 hover:border-primary/20 transition-all duration-300 shadow-xl shadow-dark/5 dark:shadow-none group"
                data-oid="9-us0k9"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all"
                  data-oid="tw5.vmq"
                >
                  <Icon
                    icon={item.icon}
                    className="text-2xl"
                    data-oid="03l82yv"
                  />
                </div>
                <h4
                  className="text-xl font-bold text-dark dark:text-white mb-4"
                  data-oid="_::3pgm"
                >
                  {item.title}
                </h4>
                <p
                  className="text-dark/40 dark:text-white/40 text-sm leading-relaxed"
                  data-oid="y.ginas"
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenovationTrust;
