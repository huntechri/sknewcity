import { NextResponse } from "next/server";

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Ремонт квартир', href: '/apartment-renovation' },
  { label: 'Проекты', href: '/properties' },
  { label: 'Контакты', href: '/contactus' },
]

const footerLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Ремонт квартир', href: '/apartment-renovation' },
  { label: 'Проекты', href: '/properties' },
  { label: 'Контакты', href: '/contactus' },
]

export const GET = async () => {
  return NextResponse.json({
    navLinks,
    footerLinks
  });
};
