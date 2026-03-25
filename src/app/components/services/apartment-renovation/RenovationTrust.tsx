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
      data-oid="l_18a4z"
    >
      <div
        className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-x-1/2"
        data-oid="u:ywvo5"
      ></div>
      <div
        className="container max-w-8xl mx-auto px-5 relative z-10"
        data-oid="m7h01ec"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          data-oid="lok55-o"
        >
          <div data-oid="w:fbdo4">
            <div
              className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2.5 items-center mb-4"
              data-oid="y43tm83"
            >
              <Icon
                icon="ph:house-simple-fill"
                className="text-lg sm:text-2xl text-primary"
                data-oid="qq0-iq5"
              />

              <span data-oid="-4.j-8z">Надежность</span>
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-dark dark:text-white mb-8 leading-tight"
              data-oid="x_xn_dj"
            >
              Почему доверяют <br data-oid="pwvmwut" /> именно нам?
            </h2>
            <p
              className="text-dark/50 dark:text-white/50 text-lg mb-12 leading-relaxed max-w-xl"
              data-oid="dw_kgt5"
            >
              Ремонт — это серьезная инвестиция. Мы создали систему, которая
              минимизирует ваши риски и делает процесс максимально прозрачным и
              спокойным.
            </p>

            <div className="flex flex-col gap-6" data-oid="-7gsa2c">
              <div
                className="flex items-start gap-5 p-6 rounded-3xl bg-white dark:bg-white/5 border border-dark/5 dark:border-white/10 hover:border-primary/30 transition-all duration-300 group shadow-lg shadow-dark/5 dark:shadow-none"
                data-oid="dsv9wds"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all"
                  data-oid="bu6-s4o"
                >
                  <Icon
                    icon="ph:certificate-bold"
                    className="text-3xl"
                    data-oid="ngr2-8_"
                  />
                </div>
                <div data-oid="3uqj89b">
                  <h4
                    className="text-xl font-bold text-dark dark:text-white mb-2"
                    data-oid="q0x5b75"
                  >
                    Аккредитованная компания
                  </h4>
                  <p
                    className="text-dark/40 dark:text-white/40 text-sm"
                    data-oid="o83fezo"
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
            data-oid="bcuh_6-"
          >
            {trustItems.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] bg-white dark:bg-white/5 border border-dark/5 dark:border-white/5 hover:border-primary/20 transition-all duration-300 shadow-xl shadow-dark/5 dark:shadow-none group"
                data-oid="r8gs1xe"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all"
                  data-oid="gw:-phw"
                >
                  <Icon
                    icon={item.icon}
                    className="text-2xl"
                    data-oid="aslw660"
                  />
                </div>
                <h4
                  className="text-xl font-bold text-dark dark:text-white mb-4"
                  data-oid="9jy7ksi"
                >
                  {item.title}
                </h4>
                <p
                  className="text-dark/40 dark:text-white/40 text-sm leading-relaxed"
                  data-oid="a542tjb"
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
