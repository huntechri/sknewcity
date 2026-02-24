"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Icon } from '@iconify/react'

type StatItem = {
  label: string
  value: number
  suffix?: string
  prefix?: string
  icon: string
}

const Hero: React.FC = () => {
  const statsRef = useRef<HTMLDivElement | null>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0])

  const stats: StatItem[] = useMemo(
    () => [
      {
        label: 'Опыт',
        value: 7,
        suffix: '+ лет',
        icon: 'ph:briefcase-bold',
      },
      {
        label: 'Гарантия',
        value: 2,
        suffix: ' года',
        icon: 'ph:shield-check-bold',
      },
      {
        label: 'Проектов',
        value: 300,
        suffix: '+',
        icon: 'ph:buildings-bold',
      },
      {
        label: 'Стоимость работ за м²',
        value: 30000,
        prefix: 'от ',
        suffix: ' руб.',
        icon: 'ph:currency-rub-bold',
      },
    ],
    []
  )

  useEffect(() => {
    if (!statsRef.current || hasAnimated) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setCounts(stats.map((item) => item.value))
      setHasAnimated(true)
      return
    }

    const duration = 3200
    const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5)

    const startAnimation = () => {
      if (hasAnimated) return
      const start = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = easeOutQuint(progress)
        setCounts(stats.map((item) => Math.round(item.value * eased)))

        if (progress < 1) {
          requestAnimationFrame(tick)
        } else {
          setHasAnimated(true)
        }
      }

      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(statsRef.current)

    return () => observer.disconnect()
  }, [hasAnimated, stats])
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative'>
        <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68'>
          <div className='relative text-white dark:text-dark text-center md:text-start z-10'>
            <p className='text-inherit text-xm font-medium'>Москва и МО</p>
            <h1 className='text-inherit text-6xl sm:text-9xl font-semibold tracking-wide md:max-w-45p mt-4 mb-6'>
              Строительная компания
            </h1>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4'>
              <Link href="/contactus" className='px-8 py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-base font-semibold rounded-full hover:cursor-pointer'>
                Рассчитать стоимость
              </Link>
              <Link href={"/properties"} className='px-8 py-4 border border-white dark:border-dark bg-transparent text-white dark:text-dark hover:bg-white dark:hover:bg-dark dark:hover:text-white hover:text-dark duration-300 text-base font-semibold rounded-full hover:cursor-pointer'>
                Смотреть проекты
              </Link>
            </div>
          </div>
          <div className='hidden md:block absolute -top-2 -right-68'>
            <Image
              src={'/images/hero/heroBanner.png'}
              alt='heroImg'
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>
        <div
          ref={statsRef}
          className='md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-12 px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24'
        >
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 dark:text-white text-black'>
            {stats.map((item, index) => (
              <div key={item.label} className='flex flex-col items-center gap-3 rounded-2xl bg-white/0 dark:bg-white/0 text-center'>
                <div className='bg-dark/5 dark:bg-white/5 p-2.5 rounded-[10px] w-fit'>
                  <Icon
                    icon={item.icon}
                    width={28}
                    height={28}
                    className='text-dark dark:text-white'
                    aria-hidden='true'
                  />
                </div>
                <p className='text-2xl sm:text-3xl font-medium text-inherit leading-none w-full'>
                  <span className='inline-flex items-baseline justify-center gap-0 min-h-[2.25rem] w-full'>
                    {item.prefix}
                    <span className='inline-block tabular-nums text-center'>
                      {counts[index].toLocaleString('ru-RU')}
                    </span>
                    {item.suffix}
                  </span>
                </p>
                <p className='text-sm sm:text-base font-normal text-black/50 dark:text-white/50 text-center'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
