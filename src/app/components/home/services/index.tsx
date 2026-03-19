import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Services = () => {
  return (
    <section className="relative overflow-hidden" data-oid="a9locg1">
      <div className="absolute left-0 top-0 hidden sm:block" data-oid="k5y-k90">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
          data-oid="rk_-q:n"
        />

        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
          data-oid="qd_e_di"
        />
      </div>
      <div
        className="container max-w-8xl mx-auto px-3 sm:px-5 2xl:px-0 relative z-10"
        data-oid="f-4d8co"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-center gap-4 sm:gap-6 lg:gap-10"
          data-oid="0shpy0f"
        >
          <div className="lg:col-span-6 col-span-1" data-oid="mej15_x">
            <p
              className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2.5 items-center"
              data-oid="gl4ydct"
            >
              <Icon
                icon="ph:house-simple-fill"
                className="text-lg sm:text-2xl text-primary "
                data-oid="8c7ih6v"
              />
              <span data-oid="_v4y-yl">Направления</span>
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-5xl lg:text-52 mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white"
              data-oid="ufbuar:"
            >
              Реализуем проекты в разных форматах
            </h2>
            <p
              className="text-dark/50 dark:text-white/50 text-sm sm:text-base md:text-lg lg:max-w-full leading-[1.3] md:max-w-3/4"
              data-oid="3.vj9ml"
            >
              От дизайна до финальной отделки — берём на себя все этапы работы.
            </p>
            <Link
              href="/properties"
              className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300"
              data-oid="gw8f0k5"
            >
              Смотреть проекты
            </Link>
          </div>
          <div className="lg:col-span-6 col-span-1" data-oid="z0n7j11">
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="f6_kmue"
            >
              <Link href="/apartment-renovation" data-oid="2ettcfk">
                <Image
                  src="/images/categories/villas.jpg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  data-oid="0k14fzl"
                />
              </Link>
              <Link
                href="/apartment-renovation"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="oqoubdk"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="e6be8-."
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid="voh3obo"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="u9zz-ac"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="z8hpny9"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="4udu3rb"
                  >
                    Ремонт квартиры
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="lysvbb-"
                  >
                    Полный цикл работ от проекта до сдачи
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-1" data-oid="s3xxvq4">
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="q2x9j01"
            >
              <Link href="/properties?category=capital" data-oid="7l7xsk1">
                <Image
                  src="/images/categories/luxury-villa.jpg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  data-oid="q5gjhha"
                />
              </Link>
              <Link
                href="/properties?category=capital"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="rf7cvn5"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="7wvmjq."
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid="c8dd2go"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="a38p9vr"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="e2abo_o"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="oreymlu"
                  >
                    Ремонт загородного дома
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="_stdaor"
                  >
                    Комфорт и надёжность на годы
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="sm:col-span-1 lg:col-span-3 col-span-1"
            data-oid="xe4z.k."
          >
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="h2:22uj"
            >
              <Link href="/properties?category=designer" data-oid="a7g1sg5">
                <Image
                  src="/images/categories/appartment.jpg"
                  alt="villas"
                  width={320}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  data-oid="b0a:.j7"
                />
              </Link>
              <Link
                href="/properties?category=designer"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="897fg1-"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="y2j406k"
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid="-d:k54k"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="geuh5ql"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="mwtk87z"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="_j:c:ai"
                  >
                    Дизайн проект
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="z42msst"
                  >
                    Планировки, визуализация и рабочая документация
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="sm:col-span-1 lg:col-span-3 col-span-1"
            data-oid="errtdc-"
          >
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="re4-st6"
            >
              <Link href="/properties?category=commercial" data-oid="pj3rpj-">
                <Image
                  src="/images/categories/office.jpg"
                  alt="office"
                  width={320}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  data-oid="_p..6gp"
                />
              </Link>
              <Link
                href="/properties?category=commercial"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="bnmgogw"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="3x.62ih"
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid="c27:f-v"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="_h-shc9"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="ogq9fs8"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="qb8_hw9"
                  >
                    Ремонт коммерческих помещений
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="aicx9af"
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
