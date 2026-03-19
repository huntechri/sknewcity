"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NavLink from "./navigation/NavLink";
import { navLinks } from "@/lib/layout-data";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const sideMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sideMenuRef.current &&
      !sideMenuRef.current.contains(event.target as Node)
    ) {
      setNavbarOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pathname, handleScroll]);

  const isHeroHeader = pathname === "/" || pathname === "/apartment-renovation";

  return (
    <header
      className={`fixed top-0 z-50 h-20 w-full bg-transparent px-3 py-1 transition-all duration-300 sm:h-24 sm:px-6 lg:px-0 ${sticky ? "top-2 sm:top-3" : "top-0"}`}
      data-oid=".f8ei_b"
    >
      <nav
        className={`container mx-auto flex max-w-8xl items-center justify-between py-1.5 duration-300 sm:py-4 ${sticky ? "rounded-full bg-white px-4 shadow-md dark:bg-dark sm:px-6 sm:shadow-lg" : "px-4 shadow-none sm:px-6"}`}
        data-oid="56:qfgz"
      >
        <div
          className="flex justify-between items-center gap-2 w-full"
          data-oid="qwzo-u2"
        >
          <div data-oid=".y_2m_g">
            <Link href="/" data-oid="_nhf7c:">
              <Image
                src={"/images/header/dark-logo.svg"}
                alt="logo"
                width={120}
                height={54}
                unoptimized={true}
                className={`w-28 sm:w-40 h-auto ${isHeroHeader ? (sticky ? "block dark:hidden" : "hidden") : sticky ? "block dark:hidden" : "block dark:hidden"}`}
                data-oid="qn1wfqh"
              />

              <Image
                src={"/images/header/logo.svg"}
                alt="logo"
                width={120}
                height={54}
                unoptimized={true}
                className={`w-28 sm:w-40 h-auto ${isHeroHeader ? (sticky ? "hidden dark:block" : "block") : sticky ? "dark:block hidden" : "dark:block hidden"}`}
                data-oid="uvzkv34"
              />
            </Link>
          </div>

          <div
            className="flex items-center gap-1.5 sm:gap-6"
            data-oid="qubv4bm"
          >
            <button
              className="rounded-full p-1 hover:cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Переключить тему"
              title="Переключить тему"
              data-oid="hommfah"
            >
              <Icon
                icon={"solar:sun-bold"}
                width={28}
                height={28}
                className={`block h-7 w-7 dark:hidden sm:h-8 sm:w-8 ${
                  isHeroHeader
                    ? sticky
                      ? "text-dark"
                      : "text-white"
                    : "text-dark"
                }`}
                data-oid="yfoma8m"
              />

              <Icon
                icon={"solar:moon-bold"}
                width={28}
                height={28}
                className="hidden h-7 w-7 text-white dark:block sm:h-8 sm:w-8"
                data-oid="s_-xl09"
              />
            </button>

            <div className={`hidden md:block`} data-oid="59i3zot">
              <Link
                href="tel:+79167673434"
                className={`text-base text-inherit flex items-center gap-2 border-r pr-6 ${
                  isHeroHeader
                    ? sticky
                      ? "text-dark dark:text-white hover:text-primary border-dark dark:border-white"
                      : "text-white hover:text-primary"
                    : "text-dark hover:text-primary"
                }`}
                data-oid="milwl:9"
              >
                <Icon
                  icon={"ph:phone-bold"}
                  width={24}
                  height={24}
                  data-oid="1o:0e_h"
                />
                +7916-767-34-34
              </Link>
            </div>
            <div data-oid="agsxcpt">
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`flex items-center gap-2 rounded-full border p-2 text-sm font-semibold hover:cursor-pointer sm:gap-3 sm:px-5 sm:py-3 sm:text-base ${
                  isHeroHeader
                    ? sticky
                      ? "text-white bg-dark dark:bg-white dark:text-dark dark:hover:text-white dark:hover:bg-dark hover:text-dark hover:bg-white border-dark dark:border-white"
                      : "text-dark bg-white dark:text-dark hover:bg-transparent hover:text-white border-white"
                    : "bg-dark text-white hover:bg-transparent hover:text-dark dark:bg-white dark:text-dark dark:hover:bg-transparent dark:hover:text-white duration-300"
                }`}
                aria-label="Открыть меню"
                title="Открыть меню"
                data-oid="4ta_:ve"
              >
                <span data-oid="7r.rqpj">
                  <Icon
                    icon={"ph:list"}
                    width={24}
                    height={24}
                    data-oid="50vhi_l"
                  />
                </span>
                <span className="hidden sm:block" data-oid="8vx6q1m">
                  Меню
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {navbarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          data-oid="b2rs3r_"
        />
      )}

      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 z-50 h-full w-[min(100%,22rem)] overflow-auto bg-dark px-5 shadow-lg transition-transform duration-300 no-scrollbar sm:w-full sm:max-w-2xl sm:px-16 md:px-20 ${navbarOpen ? "translate-x-0" : "translate-x-full"}`}
        data-oid="d:q:r08"
      >
        <div
          className="flex flex-col h-full justify-between"
          data-oid="..ppmds"
        >
          <div className="" data-oid="vdcl1ux">
            <div
              className="flex items-center justify-start py-10"
              data-oid="dpiiz5q"
            >
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label="Close mobile menu"
                className="rounded-full bg-white p-3 shadow-lg hover:cursor-pointer sm:p-4"
                data-oid="rjw123o"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-oid="xbz97_4"
                >
                  <path
                    fill="none"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    data-oid="qbhpv5s"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-start gap-4" data-oid="log:gj_">
              <ul className="w-full" data-oid="n5l2lop">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    item={item}
                    onClick={() => setNavbarOpen(false)}
                    data-oid="wfw4:jo"
                  />
                ))}
              </ul>
            </nav>
          </div>

          <div
            className="my-12 flex flex-col gap-1 text-white sm:my-16"
            data-oid="ti:609v"
          >
            <p
              className="text-base sm:text-xm font-normal text-white/40"
              data-oid="fv2l0x-"
            >
              Контакты
            </p>
            <Link
              href="mailto:info@sk-new-city.ru"
              className="text-base sm:text-xm font-medium text-inherit hover:text-primary"
              data-oid="_ptr.b3"
            >
              info@sk-new-city.ru
            </Link>
            <Link
              href="tel:+79167673434"
              className="text-base sm:text-xm font-medium text-inherit hover:text-primary"
              data-oid="m._qrjo"
            >
              +7916-767-34-34
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
