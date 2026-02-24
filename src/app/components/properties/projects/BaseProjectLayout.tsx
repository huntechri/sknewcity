import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { PropertyHomes, Testimonial } from '@/app/types/properyHomes';

interface BaseProjectLayoutProps {
    item: PropertyHomes;
    testimonials: Testimonial[] | null;
}

const BaseProjectLayout: React.FC<BaseProjectLayoutProps> = ({ item, testimonials }) => {
    return (
        <section className="!pt-44 pb-20 relative" >
            <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
                <div className="grid grid-cols-12 items-end gap-6">
                    <div className="lg:col-span-8 col-span-12">
                        <h1 className='lg:text-52 text-40 font-semibold text-dark dark:text-white'>{item?.name}</h1>
                        <div className="flex gap-2.5">
                            <Icon icon="ph:map-pin" width={24} height={24} className="text-dark/50 dark:text-white/50" />
                            <p className='text-dark/50 dark:text-white/50 text-xm'>{item?.location}</p>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className='flex'>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8'>
                                <Icon icon={'solar:bed-linear'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.beds} комнаты
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8'>
                                <Icon icon={'solar:bath-linear'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.baths} санузла
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pr-8'>
                                <Icon
                                    icon={'lineicons:arrow-all-direction'}
                                    width={20}
                                    height={20}
                                />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.area}m<sup>2</sup>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-8 gap-8">
                    <div className="lg:col-span-8 col-span-12 row-span-2">
                        {item?.images && item?.images[0] && (
                            <div className="w-full h-[540px]">
                                <Image
                                    src={item.images[0]?.src}
                                    alt="Main Property Image"
                                    width={400}
                                    height={500}
                                    className="rounded-2xl w-full h-full object-cover"
                                    unoptimized={true}
                                />
                            </div>
                        )}
                    </div>
                    <div className="lg:col-span-4 lg:block hidden w-full h-[335px]">
                        {item?.images && item?.images[1] && (
                            <Image src={item.images[1]?.src} alt="Property Image 2" width={400} height={500} className="rounded-2xl w-full h-full object-cover" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6 w-full h-[155px]">
                        {item?.images && item?.images[2] && (
                            <Image src={item.images[2]?.src} alt="Property Image 3" width={400} height={500} className="rounded-2xl w-full h-full object-cover" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6 w-full h-[155px]">
                        {item?.images && item?.images[3] && (
                            <Image src={item.images[3]?.src} alt="Property Image 4" width={400} height={500} className="rounded-2xl w-full h-full object-cover" unoptimized={true} />
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-8 mt-10">
                    <div className="lg:col-span-8 col-span-12">
                        <h3 className='text-xl font-medium'>Детали проекта</h3>
                        <div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-8">
                            {item?.features ? (
                                item.features.map((feature, idx: number) => (
                                    <div key={idx} className="flex items-center gap-6">
                                        <div>
                                            {feature.image ? (
                                                <>
                                                    <Image src={feature.image} width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                                    <Image src={feature.image.replace('.svg', '-white.svg')} width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                                </>
                                            ) : (
                                                <Icon icon={feature.icon} width={32} height={32} className="text-primary" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className='text-dark dark:text-white text-xm'>{feature.title}</h3>
                                            <p className='text-base text-dark/50 dark:text-white/50'>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex items-center gap-6">
                                    <div>
                                        <Image src="/images/SVGs/property-details.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                        <Image src="/images/SVGs/property-details-white.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                    </div>
                                    <div>
                                        <h3 className='text-dark dark:text-white text-xm'>Состав работ</h3>
                                        <p className='text-base text-dark/50 dark:text-white/50'>
                                            Демонтаж, черновые работы, электрика, сантехника, финишная отделка.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-5">
                            {item?.description ? (
                                item.description.map((paragraph: string, idx: number) => (
                                    <p key={idx} className='text-dark dark:text-white text-xm'>
                                        {paragraph}
                                    </p>
                                ))
                            ) : (
                                <p className='text-dark dark:text-white text-xm '>
                                    Проект ремонта квартиры в современном стиле.
                                </p>
                            )}
                        </div>
                        <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
                            <h3 className='text-xl font-medium'>Что входит в работы</h3>
                            <div className="flex flex-wrap gap-x-12 gap-y-8 mt-8">
                                {item?.workItems ? (
                                    item.workItems.map((work, idx: number) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <Icon icon={work.icon} width={32} height={32} className="text-primary" />
                                            <p className="text-dark dark:text-white font-medium">{work.title}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex items-center gap-4">
                                        <Icon icon="ph:paint-brush-household" width={32} height={32} className="text-primary" />
                                        <p className="text-dark dark:text-white font-medium">Стандартные работы</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
                            <h4 className='text-dark text-3xl font-medium dark:text-white'>
                                {item?.rate}
                            </h4>
                            <p className='text-sm text-dark/50 dark:text-white'>Стоимость работ</p>
                            <Link href="#" className='py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer'>
                                Получить консультацию
                            </Link>
                            <div className="absolute right-0 top-4 -z-[1]">
                                <Image src="/images/properties/vector.svg" width={400} height={500} alt="vector" unoptimized={true} />
                            </div>
                        </div>

                        {testimonials && testimonials?.slice(0, 1).map((testimonial: Testimonial, index: number) => (
                            <div key={index} className="border p-10 rounded-2xl border-dark/10 dark:border-white/20 mt-6 flex flex-col gap-6 bg-white/5 backdrop-blur-sm shadow-xl">
                                <p className='text-xm text-dark dark:text-white italic leading-relaxed font-light'>&quot;{testimonial.review}&quot;</p>
                                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={64}
                                            height={64}
                                            className='w-full h-full object-cover'
                                            unoptimized={true}
                                        />
                                    </div>
                                    <div className="">
                                        <h3 className='text-xm text-dark dark:text-white font-medium'>{testimonial.name}</h3>
                                        <div className="flex items-center gap-2">
                                            <h4 className='text-sm text-dark/50 dark:text-white/50'>{testimonial.position}</h4>
                                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                            <span className="text-[10px] text-green-500 flex items-center gap-1 font-medium">
                                                <Icon icon="material-symbols:check-circle-rounded" />
                                                Подтверждено
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BaseProjectLayout;
