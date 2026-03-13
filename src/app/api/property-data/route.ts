import { PropertyHomes } from '@/app/types/properyHomes';
import { NextResponse } from 'next/server';

const propertyHomes: PropertyHomes[] = [
  {
    name: 'Квартира 110 м²',
    slug: 'cosmetic-42',
    category: 'cosmetic',
    location: 'ЖК «ALIA», Москва',
    rate: 'от 320 000 ₽',
    beds: 3,
    baths: 2,
    area: 110,
    images: [
      { src: "/images/property/property-1/property-cover-1.jpg" },
      { src: "/images/property/property-1/property-1.jpg" },
      { src: "/images/property/property-1/property-2.jpg" },
      { src: "/images/property/property-1/property-3.jpg" }
    ],
    description: [
      "Проект ремонта квартиры площадью 110 м² в современном стиле. Выполнили полный цикл работ — от замеров до чистовой отделки и установки сантехники. Смета фиксируется до старта, сроки — по договору.",
      "В рамках работ выполнены демонтаж отделки от застройщика (WhiteBox), выравнивание стен и пола, разводка электрики и сантехники, установка освещения, укладка напольных покрытий и монтаж дверей, покраска стен. Отдельное внимание — шумоизоляции и эргономике.",
      "Кухня-гостиная зонирована лёгкими перегородками, предусмотрены скрытые системы хранения и тёплый пол в мокрых зонах.",
      "Финальная комплектация включает подбор материалов, контроль поставок и авторский надзор."
    ],
    features: [
      {
        title: "Состав работ",
        description: "Демонтаж отделки (WhiteBox), штукатурка под маяк, разводка инженерии Rehau, малярные работы, укладка паркета.",
        icon: "solar:settings-linear",
        image: "/images/SVGs/property-details.svg"
      },
      {
        title: "Инженерия и безопасность",
        description: "Умное освещение, датчики протечки, система вентиляции с фильтрацией воздуха, мастер-выключатель.",
        icon: "solar:shield-check-linear",
        image: "/images/SVGs/property-details.svg"
      },
      {
        title: "Качество и гарантия",
        description: "Тройной контроль качества: прораб, технадзор и автор проекта. Гарантия на все работы — 3 года.",
        icon: "solar:medal-star-linear",
        image: "/images/SVGs/property-details.svg"
      }
    ],
    workItems: [
      { title: "Покраска стен", icon: "ph:paint-brush-household" },
      { title: "Укладка паркета", icon: "ph:ruler" },
      { title: "Электрика", icon: "ph:lightning" },
      { title: "Сантехника", icon: "ph:drop" },
      { title: "Умный дом", icon: "ph:cpu" }
    ]
  },
  {
    name: 'Квартира 110 м²',
    slug: 'capital-78',
    category: 'capital',
    location: 'ЖК «FULL HOUSE», Москва',
    rate: 'от 980 000 ₽',
    beds: 3,
    baths: 2,
    area: 78,
    images: [
      { src: "/images/property/property-2/property-cover-2.jpg" },
      { src: "/images/property/property-2/property-1.jpg" },
      { src: "/images/property/property-2/property-2.jpg" },
      { src: "/images/property/property-2/property-3.jpg" }
    ],
    description: [
      "Капитальный ремонт в ЖК «FULL HOUSE». Мы превратили бетонную коробку в уютное современное пространство.",
      "Были заменены все инженерные коммуникации, выполнена перепланировка для увеличения полезной площади кухни.",
      "В отделке использованы премиальные материалы: керамогранит, инженерная доска и декоративная штукатурка."
    ],
    features: [
      {
        title: "Перепланировка",
        description: "Объединение кухни и гостиной, создание мастер-спальни с гардеробом и собственным санузлом.",
        icon: "solar:ruler-pen-linear",
        image: "/images/SVGs/property-details.svg"
      },
      {
        title: "Премиальная отделка",
        description: "Итальянский керамогранит, шпонированные стеновые панели, скрытый плинтус и двери-невидимки.",
        icon: "solar:palet-linear",
        image: "/images/SVGs/property-details.svg"
      }
    ],
    workItems: [
      { title: "Перепланировка", icon: "ph:wall" },
      { title: "Теплый пол", icon: "ph:thermometer-hot" },
      { title: "Кондиционирование", icon: "ph:wind" },
      { title: "Шумоизоляция", icon: "ph:speaker-slash" }
    ]
  },
  {
    name: 'Квартира 87 м²',
    slug: 'designer-68',
    category: 'designer',
    location: 'ЖК «Событие», Москва',
    rate: 'от 1 250 000 ₽',
    beds: 3,
    baths: 2,
    area: 68,
    images: [
      { src: "/images/property/property-3/property-cover-3.jpg" },
      { src: "/images/property/property-3/property-1.jpg" },
      { src: "/images/property/property-3/property-2.jpg" },
      { src: "/images/property/property-3/property-3.jpg" }
    ]
  },
  {
    name: 'Квартира 109 м²',
    slug: 'cosmetic-35',
    category: 'cosmetic',
    location: 'ЖК «Остров», Москва',
    rate: 'от 290 000 ₽',
    beds: 1,
    baths: 1,
    area: 35,
    images: [
      { src: "/images/property/property-4/property-cover-4.jpg" },
      { src: "/images/property/property-4/property-1.jpg" },
      { src: "/images/property/property-4/property-2.jpg" },
      { src: "/images/property/property-4/property-3.jpg" }
    ]
  },
  {
    name: 'Капитальный ремонт 96 м²',
    slug: 'capital-96',
    category: 'capital',
    location: 'ЖК «Олимп», Москва',
    rate: 'от 1 380 000 ₽',
    beds: 4,
    baths: 2,
    area: 96,
    images: [
      { src: "/images/property/property-5/property-cover-5.jpg" },
      { src: "/images/property/property-5/property-1.jpg" },
      { src: "/images/property/property-5/property-2.jpg" },
      { src: "/images/property/property-5/property-3.jpg" }
    ]
  },
  {
    name: 'Коммерческий ремонт 120 м²',
    slug: 'commercial-120',
    category: 'commercial',
    location: 'БЦ «Сити», Москва',
    rate: 'от 1 900 000 ₽',
    beds: 6,
    baths: 2,
    area: 120,
    images: [
      { src: "/images/property/property-6/property-cover-6.jpg" },
      { src: "/images/property/property-6/property-1.jpg" },
      { src: "/images/property/property-6/property-2.jpg" },
      { src: "/images/property/property-6/property-3.jpg" }
    ]
  },
  {
    name: 'Косметический ремонт 48 м²',
    slug: 'cosmetic-48',
    category: 'cosmetic',
    location: 'ЖК «Берег», Новосибирск',
    rate: 'от 360 000 ₽',
    beds: 2,
    baths: 1,
    area: 48,
    images: [
      { src: "/images/property/property-9/property-cover-9.jpg" },
      { src: "/images/property/property-9/property-1.jpg" },
      { src: "/images/property/property-9/property-2.jpg" },
      { src: "/images/property/property-9/property-3.jpg" }
    ]
  },
];

export const GET = async () => {
  return NextResponse.json({ propertyHomes });
};
