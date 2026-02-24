import React from 'react';
import BaseProjectLayout from './BaseProjectLayout';
import { PropertyHomes, Testimonial } from '@/app/types/properyHomes';
import { Icon } from '@iconify/react';

interface ProjectProps {
    item: PropertyHomes;
    testimonials: Testimonial[] | null;
}

const FullHouseProject: React.FC<ProjectProps> = ({ item, testimonials }) => {
    return (
        <div className="bg-white dark:bg-dark">
            {/* Unique Header for Full House */}
            <div className="bg-primary/5 py-12 border-b border-primary/10">
                <div className="container mx-auto px-5 text-center">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Премиум Объект
                    </span>
                    <h2 className="text-4xl font-bold mt-4 text-dark dark:text-white">ЖК «FULL HOUSE»</h2>
                    <p className="text-dark/60 dark:text-white/60 mt-2 max-w-2xl mx-auto">
                        Эксклюзивный проект капитального ремонта с полной заменой инженерных систем и авторским сопровождением.
                    </p>
                </div>
            </div>

            <BaseProjectLayout item={item} testimonials={testimonials} />

            {/* Unique Section: Technical Specs */}
            <div className="bg-dark text-white py-16">
                <div className="container mx-auto px-5">
                    <h3 className="text-3xl font-bold mb-10 text-center">Технические особенности</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center p-6 border border-white/10 rounded-2xl">
                            <Icon icon="ph:thermometer-hot-light" width={48} className="text-primary mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Микроклимат</h4>
                            <p className="text-white/60 text-center text-sm">Система приточно-вытяжной вентиляции с рекуперацией тепла.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 border border-white/10 rounded-2xl">
                            <Icon icon="ph:lightning-light" width={48} className="text-primary mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Энергоэффективность</h4>
                            <p className="text-white/60 text-center text-sm">Полное светодиодное освещение и умные реле управления нагрузкой.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 border border-white/10 rounded-2xl">
                            <Icon icon="ph:drop-light" width={48} className="text-primary mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Аква-стоп</h4>
                            <p className="text-white/60 text-center text-sm">8 датчиков протечки с автоматическим перекрытием стояков.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullHouseProject;
