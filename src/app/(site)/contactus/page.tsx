import { Metadata } from 'next'
import ContactPage from '@/app/components/contact/ContactPage'

export const metadata: Metadata = {
  title: 'Контакты | Homely Renovation',
  description: 'Свяжитесь с Homely Renovation в Москве: консультация, расчёт стоимости ремонта, адрес, телефон и форма заявки.',
  alternates: {
    canonical: '/contactus',
  },
}

export default function ContactUsPage() {
  return <ContactPage />
}
