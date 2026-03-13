import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Services = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0 hidden sm:block">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-3 sm:px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-center gap-4 sm:gap-6 lg:gap-10">
          <div className="lg:col-span-6 col-span-1">
            <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2.5 items-center">
              <Icon icon="ph:house-simple-fill" className="text-lg sm:text-2xl text-primary " />
              <span>Направления</span>
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-52 mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
              Реализуем проекты в разных форматах
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-sm sm:text-base md:text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              От дизайна до финальной отделки — берём на себя все этапы работы.
            </p>
            <Link href="/properties" className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300">
              Смотреть проекты
            </Link>
          </div>
          <div className="lg:col-span-6 col-span-1">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto">
              <Link href="/apartment-renovation">
                <Image
                  src="/images/categories/villas.jpg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
              </Link>
              <Link href="/apartment-renovation" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500">
                <div className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-2 sm:p-4">
                    <Icon icon="ph:arrow-right" width={20} height={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2.5">
                  <h3 className="text-white text-lg sm:text-2xl">
                    Ремонт квартиры
                  </h3>
                  <p className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6">
                    Полный цикл работ от проекта до сдачи
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-1">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto">
              <Link href="/properties?category=capital">
                <Image
                  src="/images/categories/luxury-villa.jpg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
              </Link>
              <Link href="/properties?category=capital" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500">
                <div className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-2 sm:p-4">
                    <Icon icon="ph:arrow-right" width={20} height={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2.5">
                  <h3 className="text-white text-lg sm:text-2xl">
                    Ремонт загородного дома
                  </h3>
                  <p className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6">
                    Комфорт и надёжность на годы
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="sm:col-span-1 lg:col-span-3 col-span-1">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto">
              <Link href="/properties?category=designer">
                <Image
                  src="/images/categories/appartment.jpg"
                  alt="villas"
                  width={320}
                  height={386}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
              </Link>
              <Link href="/properties?category=designer" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500">
                <div className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-2 sm:p-4">
                    <Icon icon="ph:arrow-right" width={20} height={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2.5">
                  <h3 className="text-white text-lg sm:text-2xl">
                    Дизайн проект
                  </h3>
                  <p className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6">
                    Планировки, визуализация и рабочая документация
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="sm:col-span-1 lg:col-span-3 col-span-1">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto">
              <Link href="/properties?category=commercial">
                <Image
                  src="/images/categories/office.jpg"
                  alt="office"
                  width={320}
                  height={386}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
              </Link>
              <Link href="/properties?category=commercial" className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500">
                <div className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-2 sm:p-4">
                    <Icon icon="ph:arrow-right" width={20} height={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:gap-2.5">
                  <h3 className="text-white text-lg sm:text-2xl">
                    Ремонт коммерческих помещений
                  </h3>
                  <p className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6">
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
