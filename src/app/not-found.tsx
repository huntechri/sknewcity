import Image from "next/image";
import { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js";

export const metadata: Metadata = {
  title: "404 | Ремонт квартир",
};

const ErrorPage = () => {
  return (
    <>
      <section className="flex justify-center pb-0!" data-oid="iw56w0s">
        <Image
          src="/images/404.png"
          alt="404"
          width={490}
          height={450}
          unoptimized={true}
          data-oid="5-vksft"
        />
      </section>
      <section
        className="text-center bg-cover relative overflow-x-hidden"
        data-oid="-v_-7f5"
      >
        <div
          className="flex gap-2.5 items-center justify-center"
          data-oid="sm8r:sa"
        >
          <span data-oid="8bah78y">
            <Icon
              icon={"ph:house-simple-fill"}
              width={20}
              height={20}
              className="text-primary"
              data-oid=".8_x_o7"
            />
          </span>
          <p
            className="text-base font-semibold text-dark/75 dark:text-white/75"
            data-oid="::s_h65"
          >
            Error 404
          </p>
        </div>
        <h2
          className="text-dark text-52 relative font-bold dark:text-white "
          data-oid="t-k35a_"
        >
          Страница не найдена
        </h2>
        <p
          className="text-lg text-dark/50 dark:text-white/50 font-normal w-full mx-auto"
          data-oid="-33tpgm"
        >
          Похоже, вы попали не туда. Вернитесь на главную или выберите нужный
          раздел.
        </p>
      </section>
    </>
  );
};

export default ErrorPage;
