import React from 'react';
import BaseProjectLayout from './BaseProjectLayout';
import { PropertyHomes, Testimonial } from '@/app/types/properyHomes';

interface ProjectProps {
    item: PropertyHomes;
    testimonials: Testimonial[] | null;
}

const ModernFlatProject: React.FC<ProjectProps> = ({ item, testimonials }) => {
    // We can customize this specific project layout here
    return (
        <div>
            {/* Custom Banner or anything unique for Project 1 */}
            <div className="bg-dark py-4 text-center text-white text-sm">
                Спецпредложение для ЖК «Скандинавия»: Дизайн-проект в подарок!
            </div>

            <BaseProjectLayout item={item} testimonials={testimonials} />

            {/* We could add more unique sections here */}
            <div className="container mx-auto px-5 mb-20 text-center">
                <p className="text-dark/50 dark:text-white/50 italic">
                    * Данный проект был реализован с использованием экологически чистых материалов.
                </p>
            </div>
        </div>
    );
};

export default ModernFlatProject;
