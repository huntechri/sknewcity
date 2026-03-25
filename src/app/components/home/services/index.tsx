import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Services = () => {
  return (
    <section className="relative overflow-hidden" data-oid="0u:90yc">
      <div className="absolute left-0 top-0 hidden sm:block" data-oid="l_g1mzh">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
          data-oid="26vxrrd"
        />

        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
          data-oid="f1xzmte"
        />
      </div>
      <div
        className="container max-w-8xl mx-auto px-3 sm:px-5 2xl:px-0 relative z-10"
        data-oid="3m4y9.t"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-center gap-4 sm:gap-6 lg:gap-10"
          data-oid="4c5d.er"
        >
          <div className="lg:col-span-6 col-span-1" data-oid="drapnmd">
            <p
              className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex gap-2.5 items-center"
              data-oid="r01qc:k"
            >
              <Icon
                icon="ph:house-simple-fill"
                className="text-lg sm:text-2xl text-primary "
                data-oid="ppg0op6"
              />

              <span data-oid="k4juxm3">Направления</span>
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-5xl lg:text-52 mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white"
              data-oid="gp8ohjd"
            >
              Реализуем проекты в разных форматах
            </h2>
            <p
              className="text-dark/50 dark:text-white/50 text-sm sm:text-base md:text-lg lg:max-w-full leading-[1.3] md:max-w-3/4"
              data-oid="1v4x76k"
            >
              От дизайна до финальной отделки — берём на себя все этапы работы.
            </p>
            <Link
              href="/properties"
              className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300"
              data-oid="2:4snt7"
            >
              Смотреть проекты
            </Link>
          </div>
          <div className="lg:col-span-6 col-span-1" data-oid="nm6xdsc">
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="4q9eih3"
            >
              <Link href="/apartment-renovation" data-oid="r2lcm27">
                <Image
                  src="/images/categories/villas.jpg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  data-oid="0t40r-c"
                />
              </Link>
              <Link
                href="/apartment-renovation"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="7tg0eoo"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="q_d4abs"
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid="t3sor3t"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="cm4-2tu"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="h3f.-qb"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="iqvwypw"
                  >
                    Ремонт квартиры
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="up9os1b"
                  >
                    Полный цикл работ от проекта до сдачи
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-1" data-oid="8:brxui">
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="_4cnkdz"
            >
              <Link href="/properties?category=capital" data-oid="ntiqehe">
                <Image
                  src="/images/categories/luxury-villa.jpg"
                  alt="villas"
                  width={680}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  data-oid="7bpm8xb"
                />
              </Link>
              <Link
                href="/properties?category=capital"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="knc30hy"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="07iv05w"
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid="yi52c9o"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="wa-8i59"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="hltbewj"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="h6gm:9w"
                  >
                    Ремонт загородного дома
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="m-4tdy4"
                  >
                    Комфорт и надёжность на годы
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="sm:col-span-1 lg:col-span-3 col-span-1"
            data-oid="g5.k2zr"
          >
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="9-zca.1"
            >
              <Link href="/properties?category=designer" data-oid="ta08-9:">
                <Image
                  src="/images/categories/appartment.jpg"
                  alt="villas"
                  width={320}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  data-oid="ah1s3ca"
                />
              </Link>
              <Link
                href="/properties?category=designer"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="hf.1ckk"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="3aaitot"
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid="uum27tf"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="l06-aaw"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="nl69zz_"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="5enjzht"
                  >
                    Дизайн проект
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="9ze:uo1"
                  >
                    Планировки, визуализация и рабочая документация
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="sm:col-span-1 lg:col-span-3 col-span-1"
            data-oid="1s-vskx"
          >
            <div
              className="relative rounded-2xl overflow-hidden group h-64 sm:h-96 lg:h-auto"
              data-oid="os9_zy_"
            >
              <Link href="/properties?category=commercial" data-oid="oqm7.ql">
                <Image
                  src="/images/categories/office.jpg"
                  alt="office"
                  width={320}
                  height={386}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  data-oid="mn0vso7"
                />
              </Link>
              <Link
                href="/properties?category=commercial"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-0 sm:top-full flex flex-col justify-between pl-5 sm:pl-10 pb-5 sm:pb-10 sm:group-hover:top-0 duration-500"
                data-oid="dg-ym.s"
              >
                <div
                  className="flex justify-end mt-4 sm:mt-6 mr-4 sm:mr-6"
                  data-oid="fei86pm"
                >
                  <div
                    className="bg-white text-dark rounded-full w-fit p-2 sm:p-4"
                    data-oid="p107hur"
                  >
                    <Icon
                      icon="ph:arrow-right"
                      width={20}
                      height={20}
                      className="sm:w-6 sm:h-6"
                      data-oid="ki288:u"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col gap-1.5 sm:gap-2.5"
                  data-oid="64one_0"
                >
                  <h3
                    className="text-white text-lg sm:text-2xl"
                    data-oid="-910f3."
                  >
                    Ремонт коммерческих помещений
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-base leading-5 sm:leading-6"
                    data-oid="95:hymf"
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
