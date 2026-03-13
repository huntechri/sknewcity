'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import NavLink from './navigation/NavLink'

const Header: React.FC = () => {
  const [navLinks, setNavLinks] = useState<null | any[]>(null);
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const sideMenuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      setNavbarOpen(false)
    }
  }

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/layout-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setNavLinks(data?.navLinks)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [pathname, handleScroll])

  const isHeroHeader = pathname === '/' || pathname === '/apartment-renovation'

  return (
    <header className={`fixed h-20 sm:h-24 py-1 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-3 sm:px-4 ${sticky ? "top-2 sm:top-3" : "top-0"}`}>
      <nav className={`container mx-auto max-w-8xl flex items-center justify-between py-2 sm:py-4 duration-300 ${sticky ? "shadow-lg bg-white dark:bg-dark rounded-full top-5 px-3 sm:px-4 " : "shadow-none top-0"}`}>
        <div className='flex justify-between items-center gap-2 w-full'>
          <div>
            <Link href='/'>
              <Image
                src={'/images/header/dark-logo.svg'}
                alt='logo'
                width={120}
                height={54}
                unoptimized={true}
                className={`w-28 sm:w-40 h-auto ${isHeroHeader ? sticky ? "block dark:hidden" : "hidden" : sticky ? "block dark:hidden" : "block dark:hidden"}`}
              />
              <Image
                src={'/images/header/logo.svg'}
                alt='logo'
                width={120}
                height={54}
                unoptimized={true}
                className={`w-28 sm:w-40 h-auto ${isHeroHeader ? sticky ? "hidden dark:block" : "block" : sticky ? "dark:block hidden" : "dark:block hidden"}`}
              />
            </Link>
          </div>

          <div className='flex items-center gap-2 sm:gap-6'>

            <button
              className='hover:cursor-pointer'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label='Переключить тему'
              title='Переключить тему'
            >
              <Icon
                icon={'solar:sun-bold'}
                width={32}
                height={32}
                className={`dark:hidden block ${isHeroHeader
                  ? sticky
                    ? 'text-dark'
                    : 'text-white'
                  : 'text-dark'
                  }`}
              />
              <Icon
                icon={'solar:moon-bold'}
                width={32}
                height={32}
                className='dark:block hidden text-white'
              />
            </button>



            <div className={`hidden md:block`}>
              <Link href='#' className={`text-base text-inherit flex items-center gap-2 border-r pr-6 ${isHeroHeader
                ? sticky
                  ? 'text-dark dark:text-white hover:text-primary border-dark dark:border-white'
                  : 'text-white hover:text-primary'
                : 'text-dark hover:text-primary'
                }`}
              >
                <Icon icon={'ph:phone-bold'} width={24} height={24} />
                +7916-767-34-34
              </Link>
            </div>
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`flex items-center gap-3 p-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:cursor-pointer border ${isHeroHeader
                  ? sticky
                    ? 'text-white bg-dark dark:bg-white dark:text-dark dark:hover:text-white dark:hover:bg-dark hover:text-dark hover:bg-white border-dark dark:border-white'
                    : 'text-dark bg-white dark:text-dark hover:bg-transparent hover:text-white border-white'
                  : 'bg-dark text-white hover:bg-transparent hover:text-dark dark:bg-white dark:text-dark dark:hover:bg-transparent dark:hover:text-white duration-300'
                  }`}
                aria-label='Открыть меню'
                title='Открыть меню'>
                <span>
                  <Icon icon={'ph:list'} width={24} height={24} />
                </span>
                <span className='hidden sm:block'>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {
        navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )
      }

      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-full bg-dark shadow-lg transition-transform duration-300 max-w-sm sm:max-w-2xl ${navbarOpen ? 'translate-x-0' : 'translate-x-full'} z-50 px-6 sm:px-16 md:px-20 overflow-auto no-scrollbar`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className='flex items-center justify-start py-10'>
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label='Close mobile menu'
                className='bg-white p-3 rounded-full hover:cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'>
                  <path
                    fill='none'
                    stroke='black'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <nav className='flex flex-col items-start gap-4'>
              <ul className='w-full'>
                {navLinks && navLinks?.map((item: any, index: any) => (
                  <NavLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
                ))}
              </ul>
            </nav>
          </div>

          <div className='flex flex-col gap-1 my-16 text-white'>
            <p className='text-base sm:text-xm font-normal text-white/40'>
              Contact
            </p>
            <Link href="#" className='text-base sm:text-xm font-medium text-inherit hover:text-primary'>
              info@sk-new-city.ru
            </Link>
            <Link href="#" className='text-base sm:text-xm font-medium text-inherit hover:text-primary'>
              +7916-767-34-34
            </Link>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header
