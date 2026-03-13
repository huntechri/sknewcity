import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Icon } from "@iconify/react";

const faqs = [
    {
        q: "Как зафиксировать конечную стоимость ремонта?",
        a: "Стоимость фиксируется в договоре на основании детальной сметы, составленной после выезда инженера и проведения точных замеров. После подписания сумма не меняется, если не вносятся правки в проект по вашей инициативе."
    },
    {
        q: "Кто занимается закупкой и доставкой материалов?",
        a: "Мы берем на себя полный цикл снабжения: от выбора проверенных поставщиков до разгрузки и подъема материала на этаж. Весь процесс отображается в вашем личном кабинете с чеками и накладными."
    },
    {
        q: "Как осуществляется контроль качества работ?",
        a: "На каждом объекте работает прораб, контролирующий ежедневное выполнение. Также мы проводим независимый технадзор на скрытых этапах работ (электрика, гидроизоляция) с предоставлением фотоотчетов."
    },
    {
        q: "Предоставляете ли вы гарантию на ремонт?",
        a: "Да, мы предоставляем официальную гарантию на все виды общестроительных и инженерных работ сроком 2 года. Все гарантийные обязательства прописаны в договоре."
    }
];

const RenovationFAQ = () => {
    return (
        <section className="py-10 pb-0 bg-white dark:bg-black relative overflow-hidden transition-colors duration-500">
            {/* Ambient spatial elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-x-1/2"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4"></div>

            <div className="container max-w-7xl mx-auto px-5 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-32">
                            <div className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2.5 items-center mb-4">
                                <Icon icon="ph:house-simple-fill" className="text-lg sm:text-2xl text-primary" />
                                <span>Вопросы и ответы</span>
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-bold text-dark dark:text-white mb-8 leading-tight tracking-tight">
                                Часто <br />задаваемые <br />вопросы
                                <span className="text-primary block mt-2 text-2xl sm:text-4xl">FAQ</span>
                            </h2>
                            <p className="text-dark/50 dark:text-white/50 text-lg leading-relaxed max-w-xs mb-8">
                                Собрали самое важное, что стоит знать перед началом работ.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-2/3 w-full lg:min-h-[480px]">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="transition-all duration-700 ease-out group/ladder sm:pl-(--ladder-offset)"
                                    style={{ "--ladder-offset": `${idx * 12}px` } as React.CSSProperties}
                                >
                                    <AccordionItem
                                        value={`faq-${idx}`}
                                        className="border border-dark/5 dark:border-white/5 rounded-2xl overflow-hidden bg-dark/2 dark:bg-white/2 backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:bg-dark/4 dark:hover:bg-white/4 data-[state=open]:border-primary/40 data-[state=open]:shadow-2xl data-[state=open]:shadow-primary/10 group"
                                    >
                                        <AccordionTrigger className="hover:no-underline py-6 px-8 text-left group">
                                            <div className="flex items-center gap-6 w-full pr-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-700 group-hover:scale-110 group-data-[state=open]:bg-primary group-data-[state=open]:text-white group-data-[state=open]:rotate-360">
                                                    <span className="text-base font-black">{idx + 1}</span>
                                                </div>
                                                <span className="text-lg sm:text-xl font-bold text-dark dark:text-white transition-colors duration-500 group-data-[state=open]:text-primary leading-tight">
                                                    {faq.q}
                                                </span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="p-0">
                                            <div className="px-8 pb-8 pl-0 sm:pl-18">
                                                <div className="flex gap-5 items-start mb-6">
                                                    <div className="w-px h-full min-h-[40px] bg-primary/30 rounded-full mt-1 shrink-0"></div>
                                                    <p className="text-dark/70 dark:text-white/70 text-base sm:text-lg leading-relaxed transition-colors duration-500">
                                                        {faq.a}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2.5 text-primary font-bold text-xs uppercase tracking-[0.2em] cursor-pointer hover:opacity-70 transition-opacity group/btn w-fit">
                                                    <span>Подробнее</span>
                                                    <Icon icon="ph:arrow-right-bold" className="transition-transform group-hover/btn:translate-x-1" />
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
