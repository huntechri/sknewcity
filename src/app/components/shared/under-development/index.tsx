import { Icon } from "@iconify/react";
import Link from "next/link";

const UnderDevelopment = ({ categoryName }: { categoryName: string }) => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-5 text-center min-h-[400px]"
      data-oid="956rd-o"
    >
      <div className="relative mb-8" data-oid=".hfktec">
        <div
          className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse"
          data-oid="so:60nl"
        ></div>
        <div
          className="relative bg-white dark:bg-dark border border-black/5 dark:border-white/5 shadow-2xl rounded-3xl p-10 flex items-center justify-center"
          data-oid="6.s9av7"
        >
          <Icon
            icon="ph:hammer-bold"
            className="text-7xl text-primary animate-bounce"
            data-oid=".q9eswv"
          />
        </div>
      </div>

      <h2
        className="text-3xl sm:text-4xl font-semibold text-dark dark:text-white mb-4"
        data-oid="-0x6q:v"
      >
        Раздел «{categoryName}» в разработке
      </h2>

      <p
        className="text-dark/50 dark:text-white/50 text-lg max-w-lg mb-10 leading-relaxed"
        data-oid="di2:e8z"
      >
        Мы уже работаем над наполнением этого раздела нашими лучшими проектами.
        Совсем скоро здесь появятся фотографии, сметы и подробные кейсы.
      </p>

      <div className="flex flex-col sm:flex-row gap-4" data-oid="4sit4vq">
        <Link
          href="/properties?category=cosmetic"
          className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-dark duration-300 shadow-lg shadow-primary/20"
          data-oid="ndpbcgx"
        >
          Посмотреть готовые проекты
        </Link>
        <Link
          href="/contactus"
          className="px-8 py-4 border border-dark/10 dark:border-white/10 text-dark dark:text-white rounded-full font-semibold hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark duration-300"
          data-oid="28u1bti"
        >
          Связаться с нами
        </Link>
      </div>
    </div>
  );
};

export default UnderDevelopment;
