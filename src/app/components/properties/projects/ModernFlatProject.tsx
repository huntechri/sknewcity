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
            <div className="bg-dark px-4 py-3 text-center text-xs leading-relaxed text-white sm:py-4 sm:text-sm">
                <p className="mx-auto max-w-3xl text-balance break-words">
                    Спецпредложение для ЖК «Скандинавия»: Дизайн-проект в подарок!
                </p>
            </div>

            <BaseProjectLayout item={item} testimonials={testimonials} />

            {/* We could add more unique sections here */}
            <div className="container mx-auto mb-20 px-4 text-center sm:px-5">
                <p className="text-dark/50 dark:text-white/50 italic">
                    * Данный проект был реализован с использованием экологически чистых материалов.
                </p>
            </div>
        </div>
    );
};

export default ModernFlatProject;
