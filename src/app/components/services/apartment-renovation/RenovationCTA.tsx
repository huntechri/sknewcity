import Link from "next/link";
import { Icon } from "@iconify/react";

const RenovationCTA = () => {
  return (
    <section
      className="py-10 bg-white dark:bg-black relative overflow-hidden"
      data-oid="t40aws4"
    >
      <div
        className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-dark/5 dark:via-white/5 to-transparent"
        data-oid="kxt.qm9"
      ></div>
      <div
        className="container max-w-8xl mx-auto px-5 relative z-10"
        data-oid="z-_j-uv"
      >
        <div
          className="relative rounded-[48px] bg-primary overflow-hidden p-8 sm:p-20 text-center"
          data-oid="kqkz0q4"
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            data-oid="0w9qg8."
          >
            <div
              className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-[100px]"
              data-oid="07jjxde"
            ></div>
            <div
              className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-dark opacity-10 rounded-full blur-[80px]"
              data-oid="zm1dzud"
            ></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto" data-oid="x.nsjc6">
            <h2
              className="text-4xl sm:text-6xl font-black tracking-wide text-white mb-8 leading-tight"
              data-oid="s3tkd.u"
            >
              Обсудим ваш проект{" "}
              <br className="hidden sm:block" data-oid="f3n0_o9" /> и подготовим
              решение.
            </h2>

            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              data-oid="4..6:w_"
            >
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-sm sm:text-base font-semibold rounded-full hover:cursor-pointer text-center active:scale-95 w-full sm:w-auto"
                data-oid="ji_zxro"
              >
                <Icon
                  icon="ph:paper-plane-tilt-bold"
                  width={20}
                  height={20}
                  data-oid="ltu05it"
                />
                Начать обсуждение
              </Link>
              <Link
                href="tel:+79167673434"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-white dark:border-dark bg-transparent text-white dark:text-dark hover:bg-white dark:hover:bg-dark dark:hover:text-white hover:text-dark duration-300 text-sm sm:text-base font-semibold rounded-full hover:cursor-pointer text-center active:scale-95 w-full sm:w-auto"
                data-oid="hxrovp0"
              >
                <Icon
                  icon="ph:phone-call-bold"
                  width={20}
                  height={20}
                  data-oid="bnlyyix"
                />
                +7 916 767-34-34
              </Link>
            </div>

            <div
              className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10"
              data-oid="ulqeikz"
            >
              {/* Small badges or icons could go here */}
              <div
                className="flex items-center gap-2 text-white"
                data-oid="eb57.-b"
              >
                <Icon icon="ph:check-bold" data-oid="dbezwvx" />
                <span
                  className="text-xs uppercase tracking-widest font-bold"
                  data-oid="lxaywso"
                >
                  Бесплатный выезд
                </span>
              </div>
              <div
                className="flex items-center gap-2 text-white"
                data-oid="16bamt3"
              >
                <Icon icon="ph:check-bold" data-oid="w6uv5cj" />
                <span
                  className="text-xs uppercase tracking-widest font-bold"
                  data-oid="qlf7k8k"
                >
                  Договор за 24 часа
                </span>
              </div>
              <div
                className="flex items-center gap-2 text-white"
                data-oid="3t.ex:4"
              >
                <Icon icon="ph:check-bold" data-oid="sdnd:m7" />
                <span
                  className="text-xs uppercase tracking-widest font-bold"
                  data-oid="k85rxmn"
                >
                  Гарантия качества
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenovationCTA;
