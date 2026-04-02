export const TypographyConfiguration = () => {
  return (
    <>
      <h3
        className=" text-black text-xl font-semibold mt-8 dark:text-white"
        data-oid="lozdyga"
      >
        Typography
      </h3>
      <div
        className="p-6 rounded-md border mt-4 border-black/10 dark:border-white/20"
        data-oid="obdb0of"
      >
        <p
          className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50"
          data-oid="eacwo2x"
        >
          1. Change Font family over here :{" "}
          <span className="font-semibold text-base" data-oid="io.00i1">
            src/app/layout.tsx
          </span>{" "}
        </p>
        <div className="py-4 px-3 rounded-md bg-black mt-8" data-oid="ca3kbt3">
          <p
            className="text-sm text-gray-400 flex flex-col gap-2 mb-3"
            data-oid="ap-wkuy"
          >
            {`import { Bricolage_Grotesque } from 'next/font/google'`}
          </p>
          <p
            className="text-sm text-gray-400 flex flex-col gap-2"
            data-oid="sa7y04s"
          >
            {`const font = Bricolage_Grotesque({ subsets: ["latin"] });`}
          </p>
        </div>
      </div>
    </>
  );
};
