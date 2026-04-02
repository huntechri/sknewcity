import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Icon } from "@iconify/react";

const faqs = [
  {
    q: "Как зафиксировать конечную стоимость ремонта?",
    a: "Стоимость фиксируется в договоре на основании детальной сметы, составленной после выезда инженера и проведения точных замеров. После подписания сумма не меняется, если не вносятся правки в проект по вашей инициативе.",
  },
  {
    q: "Кто занимается закупкой и доставкой материалов?",
    a: "Мы берем на себя полный цикл снабжения: от выбора проверенных поставщиков до разгрузки и подъема материала на этаж. Весь процесс отображается в вашем личном кабинете с чеками и накладными.",
  },
  {
    q: "Как осуществляется контроль качества работ?",
    a: "На каждом объекте работает прораб, контролирующий ежедневное выполнение. Также мы проводим независимый технадзор на скрытых этапах работ (электрика, гидроизоляция) с предоставлением фотоотчетов.",
  },
  {
    q: "Предоставляете ли вы гарантию на ремонт?",
    a: "Да, мы предоставляем официальную гарантию на все виды общестроительных и инженерных работ сроком 2 года. Все гарантийные обязательства прописаны в договоре.",
  },
];

const RenovationFAQ = () => {
  return (
    <section
      className="py-10 pb-0 bg-white dark:bg-black relative overflow-hidden transition-colors duration-500"
      data-oid="u7ozdb8"
    >
      {/* Ambient spatial elements */}
      <div
        className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-x-1/2"
        data-oid="s6ifklg"
      ></div>
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4"
        data-oid="lssbos0"
      ></div>

      <div
        className="container max-w-7xl mx-auto px-5 relative z-10"
        data-oid="-9p6rn:"
      >
        <div
          className="flex flex-col lg:flex-row gap-20 items-start"
          data-oid="h6jaevy"
        >
          <div className="lg:w-1/3" data-oid="qb:c..c">
            <div className="lg:sticky lg:top-32" data-oid="atpsisv">
              <div
                className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2.5 items-center mb-4"
                data-oid="o:hmln-"
              >
                <Icon
                  icon="ph:house-simple-fill"
                  className="text-lg sm:text-2xl text-primary"
                  data-oid=":jhxgzj"
                />

                <span data-oid="aqxw8jb">Вопросы и ответы</span>
              </div>
              <h2
                className="text-3xl sm:text-5xl font-bold text-dark dark:text-white mb-8 leading-tight tracking-tight"
                data-oid="7d2xg:9"
              >
                Часто <br data-oid="lwas9t2" />
                задаваемые <br data-oid="eseqkom" />
                вопросы
                <span
                  className="text-primary block mt-2 text-2xl sm:text-4xl"
                  data-oid="4onwde-"
                >
                  FAQ
                </span>
              </h2>
              <p
                className="text-dark/50 dark:text-white/50 text-lg leading-relaxed max-w-xs mb-8"
                data-oid="oxpt3cc"
              >
                Собрали самое важное, что стоит знать перед началом работ.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 w-full lg:min-h-[480px]" data-oid="wqb5zb7">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              data-oid="wglcsuj"
            >
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="transition-all duration-700 ease-out group/ladder sm:pl-(--ladder-offset)"
                  style={
                    {
                      "--ladder-offset": `${idx * 12}px`,
                    } as React.CSSProperties
                  }
                  data-oid="8m1kr4y"
                >
                  <AccordionItem
                    value={`faq-${idx}`}
                    className="border border-dark/5 dark:border-white/5 rounded-2xl overflow-hidden bg-dark/2 dark:bg-white/2 backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:bg-dark/4 dark:hover:bg-white/4 data-[state=open]:border-primary/40 data-[state=open]:shadow-2xl data-[state=open]:shadow-primary/10 group"
                    data-oid="kiqyvlk"
                  >
                    <AccordionTrigger
                      className="hover:no-underline py-6 px-8 text-left group"
                      data-oid="-aq:3gd"
                    >
                      <div
                        className="flex items-center gap-6 w-full pr-4"
                        data-oid="j9dps-n"
                      >
                        <div
                          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-700 group-hover:scale-110 group-data-[state=open]:bg-primary group-data-[state=open]:text-white group-data-[state=open]:rotate-360"
                          data-oid="8edaxxa"
                        >
                          <span
                            className="text-base font-black"
                            data-oid="5rhelx_"
                          >
                            {idx + 1}
                          </span>
                        </div>
                        <span
                          className="text-lg sm:text-xl font-bold text-dark dark:text-white transition-colors duration-500 group-data-[state=open]:text-primary leading-tight"
                          data-oid="4bwh:bu"
                        >
                          {faq.q}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-0" data-oid="b2m3c7t">
                      <div
                        className="px-8 pb-8 pl-0 sm:pl-18"
                        data-oid="2rn.63y"
                      >
                        <div
                          className="flex gap-5 items-start mb-6"
                          data-oid="llewbgx"
                        >
                          <div
                            className="w-px h-full min-h-[40px] bg-primary/30 rounded-full mt-1 shrink-0"
                            data-oid="97o9zoz"
                          ></div>
                          <p
                            className="text-dark/70 dark:text-white/70 text-base sm:text-lg leading-relaxed transition-colors duration-500"
                            data-oid=":1xo3ii"
                          >
                            {faq.a}
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-2.5 text-primary font-bold text-xs uppercase tracking-[0.2em] cursor-pointer hover:opacity-70 transition-opacity group/btn w-fit"
                          data-oid="6b_j5ez"
                        >
                          <span data-oid="mg58j:f">Подробнее</span>
                          <Icon
                            icon="ph:arrow-right-bold"
                            className="transition-transform group-hover/btn:translate-x-1"
                            data-oid="dzh523m"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenovationFAQ;
