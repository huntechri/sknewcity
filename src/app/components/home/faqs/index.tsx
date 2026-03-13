import { Icon } from '@iconify/react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-2 gap-10 ">
                    <div className='lg:mx-0 mx-auto'>
                        <Image
                            src="/images/faqs/faq-image.png"
                            alt='image'
                            width={680}
                            height={644}
                            className='lg:w-full'
                            unoptimized={true}
                        />
                    </div>
                    <div className='lg:px-12 px-3 sm:px-5'>
                        <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2">
                            <Icon icon="ph:house-simple-fill" className="text-lg sm:text-2xl text-primary " />
                            FAQs
                        </p>
                        <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-52 leading-[1.2] font-medium text-dark dark:text-white'>
                            Всё о ремонте квартир
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 text-sm sm:text-base md:text-base sm:pr-8 md:pr-20'>
                            Собрали ответы на частые вопросы о сроках, смете, материалах и гарантиях.
                        </p>
                        <div className="my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-4">
                                <AccordionItem value="item-1" className="border-b border-dark/10 dark:border-white/10 px-2 transition-all hover:bg-dark/2 dark:hover:bg-white/2 rounded-xl">
                                    <AccordionTrigger className="hover:no-underline py-5 text-lg font-bold">1. Можно ли сделать ремонт по моему проекту?</AccordionTrigger>
                                    <AccordionContent className="text-base leading-relaxed opacity-80">
                                        Да, мы работаем по вашему проекту или разработаем его вместе с дизайнером.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className="border-b border-dark/10 dark:border-white/10 px-2 transition-all hover:bg-dark/2 dark:hover:bg-white/2 rounded-xl">
                                    <AccordionTrigger className="hover:no-underline py-5 text-lg font-bold">2. Как формируется смета?</AccordionTrigger>
                                    <AccordionContent className="text-base leading-relaxed opacity-80">
                                        Смета составляется по замерам и ТЗ, фиксируется перед стартом работ.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className="border-b border-dark/10 dark:border-white/10 px-2 transition-all hover:bg-dark/2 dark:hover:bg-white/2 rounded-xl">
                                    <AccordionTrigger className="hover:no-underline py-5 text-lg font-bold">3. Какие сроки ремонта квартиры?</AccordionTrigger>
                                    <AccordionContent className="text-base leading-relaxed opacity-80">
                                        В среднем от 6 до 12 недель в зависимости от объёма работ и сложности проекта.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
