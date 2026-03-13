import Image from "next/image";
import { Icon } from "@iconify/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";

const stages = [
    {
        id: "stage-1",
        title: "Демонтаж и планировка",
        icon: "ph:wall-bold",
        description: "Подготовка: снос перегородок, очистка стен и полов, возведение новых конструкций согласно проекта.",
        details: ["Вынос мусора", "Закупка материалов", "Разметка геометрии"]
    },
    {
        id: "stage-2",
        title: "Черновые работы",
        icon: "ph:hammer-bold",
        description: "Выравнивание всех поверхностей: штукатурка стен по маякам, стяжка пола, подготовка под чистовую отделку.",
        details: ["Грунтовка", "Герметизация стыков", "Гидроизоляция мокрых зон"]
    },
    {
        id: "stage-3",
        title: "Инженерные системы",
        icon: "ph:lightning-bold",
        description: "Монтаж инженерных коммуникаций: черновая электрика, сантехническая разводка, отопление и вентиляция.",
        details: ["Прокладка кабелей", "Сборка электрощита", "Установка коллекторов"]
    },
    {
        id: "stage-4",
        title: "Чистовая отделка",
        icon: "ph:paint-brush-broad-bold",
        description: "Финишные декоративные работы: укладка плитки, покраска стен, поклейка обоев, монтаж напольных покрытий.",
        details: ["Установка розеток", "Монтаж сантехники", "Плинтусы и декор"]
    },
    {
        id: "stage-5",
        title: "Клининг и сдача",
        icon: "ph:sparkle-bold",
        description: "Профессиональная уборка после ремонта и передача объекта заказчику с полным комплектом документов.",
        details: ["Удаление строительной пыли", "Проверка систем", "Подписание акта"]
    }
];

const RenovationWorks = () => {
    return (
        <section className="py-10 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
            <div className="absolute left-0 top-0 hidden sm:block pointer-events-none opacity-50">
                <Image
                    src="/images/categories/Vector.svg"
                    alt="vector"
                    width={800}
                    height={1050}
                    className="dark:hidden"
                    unoptimized={true}
                />
                <Image
                    src="/images/categories/Vector-dark.svg"
                    alt="vector"
                    width={800}
                    height={1050}
                    className="hidden dark:block"
                />
            </div>
            <div className="container max-w-8xl mx-auto px-5 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                    <div className="md:w-1/2">
                        <div className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2.5 items-center mb-4">
                            <Icon icon="ph:house-simple-fill" className="text-lg sm:text-2xl text-primary" />
                            <span>Как мы работаем</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-bold text-dark dark:text-white mb-8 leading-tight">
                            Этапы работ
                        </h2>
                        <p className="text-dark/60 dark:text-white/60 text-lg mb-10 leading-relaxed max-w-lg">
                            Мы разделили процесс на чёткие технологические этапы, чтобы вы могли контролировать качество и сроки на каждом шаге.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-dark/5 dark:bg-white/5 border border-dark/10 dark:border-white/10 transition-colors hover:bg-dark/10 dark:hover:bg-white/10">
                                <Icon icon="ph:check-circle-fill" className="text-primary text-3xl mb-4" />
                                <h4 className="font-bold text-dark dark:text-white mb-2">Технадзор</h4>
                                <p className="text-xs text-dark/50 dark:text-white/50">3-ступенчатый контроль</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-dark/5 dark:bg-white/5 border border-dark/10 dark:border-white/10 transition-colors hover:bg-dark/10 dark:hover:bg-white/10">
                                <Icon icon="ph:file-text-fill" className="text-primary text-3xl mb-4" />
                                <h4 className="font-bold text-dark dark:text-white mb-2">Отчетность</h4>
                                <p className="text-xs text-dark/50 dark:text-white/50">Еженедельные отчеты</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {stages.map((stage) => (
                                <AccordionItem
                                    key={stage.id}
                                    value={stage.id}
                                    className="border border-dark/10 dark:border-white/10 rounded-3xl overflow-hidden transition-[border-color,box-shadow] duration-1000 data-[state=open]:border-primary/40 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/5 group/item"
                                >
                                    <AccordionTrigger className="hover:no-underline py-6 px-6 group transition-colors duration-300 hover:bg-dark/2 dark:hover:bg-white/2">
                                        <div className="flex items-center gap-5 text-left w-full">
                                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-[transform,background-color,color,box-shadow] duration-1000 group-hover:scale-110 group-data-[state=open]:bg-primary group-data-[state=open]:text-white group-data-[state=open]:rotate-360 group-data-[state=open]:shadow-lg group-data-[state=open]:shadow-primary/30">
                                                <Icon icon={stage.icon} className="text-3xl" />
                                            </div>
                                            <span className="text-xl font-bold text-black dark:text-white transition-[color,transform] duration-500 group-hover:translate-x-1 group-data-[state=open]:text-primary pr-4">{stage.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-10">
                                        <div className="pl-0 sm:pl-[76px]">
                                            <p className="text-black/80 dark:text-white/80 mb-8 text-lg leading-relaxed font-medium transition-colors duration-300">
                                                {stage.description}
                                            </p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                                {stage.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-center gap-4 text-base text-black dark:text-white font-medium group transition-[transform,color] duration-300 hover:translate-x-1">
                                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                                                            <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition-all"></div>
                                                        </div>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RenovationWorks;
