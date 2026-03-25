import Image from "next/image";
import { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = {
  title: "404 | Ремонт квартир",
};

const ErrorPage = () => {
  return (
    <>
      <section className="flex justify-center pb-0!" data-oid="4_ycc:i">
        <Image
          src="/images/404.png"
          alt="404"
          width={490}
          height={450}
          unoptimized={true}
          data-oid="flhd8os"
        />
      </section>
      <section
        className="text-center bg-cover relative overflow-x-hidden"
        data-oid="m5.k_41"
      >
        <div
          className="flex gap-2.5 items-center justify-center"
          data-oid="lpqahi-"
        >
          <span data-oid="q.aamkl">
            <Icon
              icon={"ph:house-simple-fill"}
              width={20}
              height={20}
              className="text-primary"
              data-oid="otly193"
            />
          </span>
          <p
            className="text-base font-semibold text-dark/75 dark:text-white/75"
            data-oid="ymtiyco"
          >
            Error 404
          </p>
        </div>
        <h2
          className="text-dark text-52 relative font-bold dark:text-white "
          data-oid="cwe98gb"
        >
          Страница не найдена
        </h2>
        <p
          className="text-lg text-dark/50 dark:text-white/50 font-normal w-full mx-auto"
          data-oid="bz_7w3:"
        >
          Похоже, вы попали не туда. Вернитесь на главную или выберите нужный
          раздел.
        </p>
      </section>
    </>
  );
};

export default ErrorPage;
