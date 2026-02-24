import { NextResponse } from "next/server";

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Проекты', href: '/properties' },
  { label: 'Контакты', href: '/contactus' },
]

const footerLinks = [
  { label: 'Косметический ремонт', href: '/properties?category=cosmetic' },
  { label: 'Капитальный ремонт', href: '/properties?category=capital' },
  { label: 'Дизайнерский ремонт', href: '/properties?category=designer' },
  { label: 'Контакты', href: '/contactus' },
  { label: '404', href: '/not-found' },
]

export const GET = async () => {
  return NextResponse.json({
    navLinks,
    footerLinks
  });
};
