const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sk-new-city.ru';

export const companyName = 'SK New City';
export const companyPhone = '+7 (916) 767-34-34';
export const companyEmail = 'info@sk-new-city.ru';
export const companyAddress = 'г. Москва, ул. Митинская, д. 26';
export const companyLegalName = 'СК Новый Город';

export const homeFaqs = [
  {
    question: 'Можно ли сделать ремонт по моему проекту?',
    answer: 'Да, мы работаем по вашему проекту или разработаем его вместе с дизайнером.',
  },
  {
    question: 'Как формируется смета?',
    answer: 'Смета составляется по замерам и техническому заданию, после чего фиксируется перед стартом работ.',
  },
  {
    question: 'Какие сроки ремонта квартиры?',
    answer: 'В среднем ремонт занимает от 6 до 12 недель в зависимости от площади, состава работ и сложности проекта.',
  },
];

export const renovationFaqs = [
  {
    question: 'Как зафиксировать конечную стоимость ремонта?',
    answer:
      'Стоимость фиксируется в договоре на основании детальной сметы после выезда инженера и точных замеров. Она меняется только при изменении проекта по инициативе заказчика.',
  },
  {
    question: 'Кто занимается закупкой и доставкой материалов?',
    answer:
      'Мы берём на себя полный цикл снабжения: подбор поставщиков, закупку, доставку, разгрузку и контроль документов.',
  },
  {
    question: 'Как осуществляется контроль качества работ?',
    answer:
      'За объектом закрепляется прораб, а скрытые этапы работ проходят дополнительный технадзор с фотоотчётами.',
  },
  {
    question: 'Предоставляете ли вы гарантию на ремонт?',
    answer:
      'Да, мы предоставляем официальную гарантию на общестроительные и инженерные работы сроком 2 года.',
  },
];

export function getSiteUrl() {
  return siteUrl;
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'HomeAndConstructionBusiness'],
    '@id': `${siteUrl}#organization`,
    name: companyName,
    alternateName: ['СК Новый Город', 'SK Новый Город'],
    url: siteUrl,
    email: companyEmail,
    telephone: companyPhone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      streetAddress: 'ул. Митинская, д. 26',
      addressCountry: 'RU',
    },
    areaServed: {
      '@type': 'City',
      name: 'Москва',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyPhone,
      contactType: 'customer service',
      areaServed: 'RU',
      availableLanguage: ['ru'],
    },
    sameAs: [
      'https://t.me/sknewcity444',
      'https://vk.com/sk_new_city',
      'https://max.ru/id7733427438_biz',
    ],
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: companyName,
    inLanguage: 'ru',
  };
}

export function getFaqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedTime: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedTime,
    dateModified: article.publishedTime,
    mainEntityOfPage: `${siteUrl}${article.path}`,
    image: article.image ? [`${siteUrl}${article.image}`] : undefined,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@id': `${siteUrl}#organization`,
    },
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: `${siteUrl}${service.path}`,
    provider: {
      '@id': `${siteUrl}#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Москва',
    },
  };
}
