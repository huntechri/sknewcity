import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Services = () => {
  return (
    <section className="relative overflow-hidden" data-oid="r5-sbk6">
      <div className="absolute left-0 top-0 hidden sm:block" data-oid="2v6o1ti">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
          data-oid="u31kzoz"
        />

        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
          data-oid="tjzeviv"
        />
      </div>
      <div
        className="container max-w-8xl mx-auto px-3 sm:px-5 2xl:px-0 relative z-10"
        data-oid="zuwn1xx"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-center gap-4 sm:gap-6 lg:gap-10"
          data-oid="0ta:wt:"
        >
          <div className="lg:col-span-6 col-span-1" data-oid="bg8ea-q">
            <p
              className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2.5 items-center"
              data-oid="qm8ovli"
            >
              <Icon
                icon="ph:house-simple-fill"
                className="text-lg sm:text-2xl text-primary "
                data-oid="6s86kyw"
              />

              <span data-oid="89qe6n8">Направления</span>
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-5xl lg:text-52 mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white"
              data-oid="ihknzdc"
            >
              Реализуем проекты в разных форматах
            </h2>
            <p
              className="text-dark/50 dark:text-white/50 text-sm sm:text-base md:text-lg lg:max-w-full leading-[1.3] md:max-w-3/4"
              data-oid="r9t1rtl"
            >
              От дизайна до финальной отделки — берём на себя все этапы работы.
            </p>
            <Link
              href="/properties"
              className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300"
              data-oid="0ww:.n5"
            >
              Смотреть проекты
            </Link>
          </div>
          <div className="lg:col-span-6 col-span-1" data-oid="harzb30">
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="j6adai."
            >
              <Link href="/apartment-renovation" data-oid="zsav4fv">
                <Image
                  src="/images/categories/villas.jpg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  data-oid="uqpldee"
                />
              </Link>
              <Link
                href="/apartment-renovation"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="fhz.cwj"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="uug1q52"
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid="rbqisv6"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="q_x3v7i"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="cm_mxjp"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="fvnrg7_"
                  >
                    Ремонт квартиры
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="f3yvu9t"
                  >
                    Полный цикл работ от проекта до сдачи
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-1" data-oid="-0kz8p5">
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="5k-4s0f"
            >
              <Link href="/properties?category=capital" data-oid="pc07bye">
                <Image
                  src="/images/categories/luxury-villa.jpg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  data-oid=":ye3uun"
                />
              </Link>
              <Link
                href="/properties?category=capital"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="o54nui6"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="vv96150"
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid=":.been2"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="t2:ip:."
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="9a0942:"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="_pp7qr3"
                  >
                    Ремонт загородного дома
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="n.:bgfs"
                  >
                    Комфорт и надёжность на годы
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="sm:col-span-1 lg:col-span-3 col-span-1"
            data-oid="5iyojq3"
          >
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="iqf.0og"
            >
              <Link href="/properties?category=designer" data-oid="ivbbfrl">
                <Image
                  src="/images/categories/appartment.jpg"
                  alt="villas"
                  width={320}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  data-oid=":maz_43"
                />
              </Link>
              <Link
                href="/properties?category=designer"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="msbg4rg"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="x3xid1c"
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid="djuwz2h"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="z6kndph"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="61369n9"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="x4tl4sd"
                  >
                    Дизайн проект
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="7p:w_m6"
                  >
                    Планировки, визуализация и рабочая документация
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="sm:col-span-1 lg:col-span-3 col-span-1"
            data-oid="i.s4ntu"
          >
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="5zdx-iy"
            >
              <Link href="/properties?category=commercial" data-oid="tabz4e6">
                <Image
                  src="/images/categories/office.jpg"
                  alt="office"
                  width={320}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  data-oid="jc.jnz0"
                />
              </Link>
              <Link
                href="/properties?category=commercial"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="gt:fm5z"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="vn_:y1a"
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid="kd2lfzl"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="9y0_ngd"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="hozu5re"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="pgddd.a"
                  >
                    Ремонт коммерческих помещений
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="li.rroo"
                  >
                    С учётом бизнес-задач и эксплуатационных требований
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
