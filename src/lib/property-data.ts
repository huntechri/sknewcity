import { PropertyHomes } from '@/app/types/properyHomes';

const TRANSLIT_MAP: Record<string, string> = {
  'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
  'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
  'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
  'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
  'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
  'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '',
  'э': 'e', 'ю': 'yu', 'я': 'ya',
};

export function generateSlug(location: string, name: string): string {
  // Извлекаем название ЖК из строки вида 'ЖК «ALIA», Москва'
  const zhkMatch = location.match(/«([^»]+)»/);
  const zhkName = zhkMatch ? `zhk ${zhkMatch[1]}` : location;

  // Убираем «м²» и лишние символы из наименования объекта
  const cleanName = name.replace(/м²/g, '').replace(/[,\.]/g, '-');

  return [zhkName, cleanName]
    .join(' ')
    .toLowerCase()
    .split('')
    .map((char) => TRANSLIT_MAP[char] ?? char)
    .join('')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const propertyHomes: PropertyHomes[] = [
  {
    name: 'Квартира 111 м²',
    slug: generateSlug('ЖК «ALIA», Москва', 'Квартира 111 м²'),
    category: 'capital',
    location: 'ЖК «ALIA», Москва',
    rate: '3 000 000 ₽',
    beds: 3,
    baths: 2,
    area: 111,
    images: [
      { src: '/images/property/property-1/property-cover-1.jpg' },
      { src: '/images/property/property-1/property-1.jpg' },
      { src: '/images/property/property-1/property-2.jpg' },
      { src: '/images/property/property-1/property-3.jpg' },
    ],
    description: [
      'Проект ремонта квартиры площадью 111 м² в современном стиле. Выполнили полный цикл работ — от замеров до чистовой отделки и установки сантехники. Смета фиксируется до старта, сроки — по договору.',
      'В рамках работ выполнены демонтаж отделки от застройщика (WhiteBox), выравнивание стен и пола, разводка электрики и сантехники, установка освещения, укладка напольных покрытий и монтаж дверей, покраска стен. Отдельное внимание — шумоизоляции и эргономике.',
    ],
    workItems: [
      { title: 'Перепланировка', icon: 'ph:blueprint' },
      { title: 'Черновые работы', icon: 'ph:hammer' },
      { title: 'Электрика', icon: 'ph:lightning' },
      { title: 'Сантехника', icon: 'ph:drop' },
      { title: 'Кондиционирование', icon: 'ph:snowflake' },
      { title: 'Вентиляция', icon: 'ph:wind' },
      { title: 'Шумоизоляция', icon: 'ph:speaker-slash' },
      { title: 'Стяжка пола', icon: 'ph:square-half-bottom' },
      { title: 'Стены под покраску', icon: 'ph:paint-roller' },
      { title: 'ГКЛ потолок под покраску', icon: 'ph:selection-background' },
      { title: 'Укладка напольных покрытий', icon: 'ph:hexagon' },
      { title: 'Облицовка керамогранитом', icon: 'ph:grid-four' },
    ],
  },
  {
    name: 'Квартира 106 м²',
    slug: generateSlug('ЖК «FULL HOUSE», Москва', 'Квартира 106 м²'),
    category: 'capital',
    location: 'ЖК «FULL HOUSE», Москва',
    rate: 'от 4 500 000 ₽',
    beds: 3,
    baths: 2,
    area: 106,
    images: [
      { src: '/images/property/property-2/property-cover-2.jpg' },
      { src: '/images/property/property-2/property-1.jpg' },
      { src: '/images/property/property-2/property-2.jpg' },
      { src: '/images/property/property-2/property-3.jpg' },
    ],
    description: [
      'Капитальный ремонт в ЖК «FULL HOUSE». Мы превратили бетонную коробку в уютное современное пространство.',
      'Были проложены все инженерные коммуникации, выполнена перепланировка для увеличения полезной площади.',
    ],
    workItems: [
      { title: 'Перепланировка', icon: 'ph:blueprint' },
      { title: 'Черновые работы', icon: 'ph:hammer' },
      { title: 'Электрика', icon: 'ph:lightning' },
      { title: 'Сантехника', icon: 'ph:drop' },
      { title: 'Кондиционирование', icon: 'ph:snowflake' },
      { title: 'Вентиляция', icon: 'ph:wind' },
      { title: 'Шумоизоляция', icon: 'ph:speaker-slash' },
      { title: 'Стяжка пола', icon: 'ph:square-half-bottom' },
      { title: 'Стены под покраску', icon: 'ph:paint-roller' },
      { title: 'ГКЛ потолок под покраску', icon: 'ph:selection-background' },
      { title: 'Укладка напольных покрытий', icon: 'ph:hexagon' },
      { title: 'Облицовка керамогранитом', icon: 'ph:grid-four' },
    ],
  },
  {
    name: 'Квартира 110 м²',
    slug: generateSlug('ЖК «Кутузовград», Москва', 'Квартира 110 м²'),
    category: 'capital',
    location: 'ЖК «Кутузовград», Москва',
    rate: '3 250 000 ₽',
    beds: 3,
    baths: 2,
    area: 110,
    images: [
      { src: '/images/property/property-3/property-cover-3.jpg' },
      { src: '/images/property/property-3/property-1.jpg' },
      { src: '/images/property/property-3/property-2.jpg' },
      { src: '/images/property/property-3/property-3.jpg' },
    ],
    description: [
      'Дизайнерский ремонт квартиры в ЖК «Кутузовград», с авторским надзором и подбором всех чистовых материалов.',
      'Фокус проекта — точная реализация визуальной концепции, выверенная электрика и встроенные системы хранения.',
    ],
    workItems: [
      { title: 'Перепланировка', icon: 'ph:blueprint' },
      { title: 'Черновые работы', icon: 'ph:hammer' },
      { title: 'Электрика', icon: 'ph:lightning' },
      { title: 'Сантехника', icon: 'ph:drop' },
      { title: 'Кондиционирование', icon: 'ph:snowflake' },
      { title: 'Вентиляция', icon: 'ph:wind' },
      { title: 'Шумоизоляция', icon: 'ph:speaker-slash' },
      { title: 'Стяжка пола', icon: 'ph:square-half-bottom' },
      { title: 'Стены под покраску', icon: 'ph:paint-roller' },
      { title: 'ГКЛ потолок под покраску', icon: 'ph:selection-background' },
      { title: 'Укладка напольных покрытий', icon: 'ph:hexagon' },
      { title: 'Облицовка керамогранитом', icon: 'ph:grid-four' },
    ],
  },
  {
    name: 'Квартира 104 м²',
    slug: generateSlug('ЖК «Alia», Москва', 'Квартира 104 м²'),
    category: 'capital',
    location: 'ЖК «Alia», Москва',
    rate: '3 000 000 ₽',
    beds: 2,
    baths: 2,
    area: 104,
    images: [
      { src: '/images/property/property-4/property-cover-4.jpg' },
      { src: '/images/property/property-4/property-1.jpg' },
      { src: '/images/property/property-4/property-2.jpg' },
      { src: '/images/property/property-4/property-3.jpg' },
    ],
    description: [
      'Капитальный ремонт компактной квартиры с обновлением отделки, освещения и сантехнических зон.',
      'Проект ориентирован на быстрый запуск работ и прогнозируемый бюджет без переплат.',
    ],
    workItems: [
      { title: 'Перепланировка', icon: 'ph:blueprint' },
      { title: 'Черновые работы', icon: 'ph:wall' },
      { title: 'Электрика', icon: 'ph:lightning' },
      { title: 'Сантехника', icon: 'ph:pipe' },
      { title: 'Кондиционирование', icon: 'ph:snowflake' },
      { title: 'Вентиляция', icon: 'ph:wind' },
      { title: 'Шумоизоляция', icon: 'ph:speaker-slash' },
      { title: 'Стяжка пола', icon: 'ph:square-half-bottom' },
      { title: 'Стены под покраску', icon: 'ph:paint-roller' },
      { title: 'ГКЛ потолок под покраску', icon: 'ph:ceiling-light' },
      { title: 'Укладка напольных покрытий', icon: 'ph:hexagon' },
      { title: 'Облицовка керамогранитом', icon: 'ph:grid-four' },
    ],
  },
  {
    name: 'Квартира 36 м²',
    slug: generateSlug('ЖК «ALIA», Москва', 'Квартира 36 м²'),
    category: 'capital',
    location: 'ЖК «ALIA», Москва',
    rate: '1 380 000 ₽',
    beds: 1,
    baths: 1,
    area: 36,
    images: [
      { src: '/images/property/property-5/property-cover-5.jpg' },
      { src: '/images/property/property-5/property-1.jpg' },
      { src: '/images/property/property-5/property-2.jpg' },
      { src: '/images/property/property-5/property-3.jpg' },
    ],
    description: [
      'Дизайнерский ремонт квартиры с полной заменой инженерии, выравниванием поверхностей и читовой отделкой.',
    ],
  },
  {
    name: 'Коммерческий ремонт 87,5 м²',
    slug: generateSlug('ЖК «Событие», Москва', 'Коммерческий ремонт 87-5 м²'),
    category: 'capital',
    location: 'ЖК «Событие», Москва',
    rate: '3 500 000 ₽',
    beds: 2,
    baths: 2,
    area: 87.5,
    images: [
      { src: '/images/property/property-6/property-cover-6.jpg' },
      { src: '/images/property/property-6/property-1.jpg' },
      { src: '/images/property/property-6/property-2.jpg' },
      { src: '/images/property/property-6/property-3.jpg' },
    ],
    description: [
      'Коммерческий ремонт офиса с подготовкой инженерных сетей, перегородок и зон общего пользования.',
    ],
  },
];

export function getPropertyBySlug(slug: string) {
  return propertyHomes.find((item) => item.slug === slug) ?? null;
}
