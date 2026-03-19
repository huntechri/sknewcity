import { ColorConfiguration } from "./ColorConfiguraion";
import { LogoConfiguration } from "./LogoConfiguration";
import { TypographyConfiguration } from "./TypographyConfiguration";

export const Configuration = () => {
  return (
    <>
      <div
        className="pb-10 md:scroll-m-[180px] scroll-m-28"
        id="configuration"
        data-oid="q_:cjrp"
      >
        <h3
          className=" text-black text-2xl font-semibold mt-4 dark:text-white"
          data-oid="_ful_ej"
        >
          Project Configuration
        </h3>
        <ColorConfiguration data-oid="6bh..t." />
        <TypographyConfiguration data-oid="nzzdabl" />
        <LogoConfiguration data-oid="100d0ev" />
      </div>
    </>
  );
};
