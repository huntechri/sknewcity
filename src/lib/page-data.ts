import { Complex } from '@/app/types/complex';
import { FeaturedProperty } from '@/app/types/featuredProperty';
import { Testimonial } from '@/app/types/testimonial';

export const featuredProperty: FeaturedProperty[] = [
  {
    scr: '/images/featuredproperty/image-1.jpg',
    alt: 'Интерьер реализованного проекта ремонта квартиры',
  },
  {
    scr: '/images/featuredproperty/image-2.jpg',
    alt: 'Гостиная после капитального ремонта',
  },
  {
    scr: '/images/featuredproperty/image-3.jpg',
    alt: 'Современная отделка кухни-гостиной',
  },
  {
    scr: '/images/featuredproperty/image-4.jpg',
    alt: 'Детали отделки и декора в проекте SK New City',
  },
];

export const testimonials: Testimonial[] = [
  {
    image: '/images/testimonial/smiths.jpg',
    name: 'Илья',
    review:
      'SK «Новый Город» сделал ремонт на ура: соблюдены сроки, бюджет и высочайшее качество отделки. Команда профессиональна и внимательна к деталям. Рекомендую!',
    position: 'Заказчик',
  },
  {
    image: '/images/testimonial/johns.jpg',
    name: 'Игорь',
    review:
      'Превосходный профессионализм, уложились в срок и качественное исполнение. Персональное внимание к заказчикам и ответственный подход к ремонту',
    position: 'Заказчик',
  },
];

export const complexes: Complex[] = [
  { name: 'ЖК «ALIA»', logo: '/images/complexes/alia-dark.png.png', logoDark: '/images/complexes/alia-light.png.png' },
  { name: 'ЖК «City Bay»', logo: '/images/complexes/citybay-dark.png.png', logoDark: '/images/complexes/citybay-light.png.png' },
  { name: 'ЖК «Headliner»', logo: '/images/complexes/headliner-dark.png.png', logoDark: '/images/complexes/headliner-light.png.png' },
  { name: 'ЖК «MOD»', logo: '/images/complexes/mod-dark.png.png', logoDark: '/images/complexes/mod-light.png.png' },
  { name: 'ЖК «Остров»', logo: '/images/complexes/ostrov-dark.png.png', logoDark: '/images/complexes/ostrov-light.png.png' },
  { name: 'ЖК «Primavera»', logo: '/images/complexes/primavera-dark.png.png', logoDark: '/images/complexes/primavera-light.png.png' },
  { name: 'ЖК «Тушино-2018»', logo: '/images/complexes/tushino-dark.png.png', logoDark: '/images/complexes/tushino-light.png.png' },
  { name: 'ЖК «FULL HOUSE»', logo: '/images/complexes/fullhouse-dark.png.png', logoDark: '/images/complexes/fullhouse-light.png.png' },
  { name: 'ЖК «Событие»', logo: '/images/complexes/sobytie-dark.png.png', logoDark: '/images/complexes/sobytie-light.png.png' },
];
