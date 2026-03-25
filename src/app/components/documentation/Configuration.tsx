import { ColorConfiguration } from "./ColorConfiguraion";
import { LogoConfiguration } from "./LogoConfiguration";
import { TypographyConfiguration } from "./TypographyConfiguration";

export const Configuration = () => {
  return (
    <>
      <div
        className="pb-10 md:scroll-m-[180px] scroll-m-28"
        id="configuration"
        data-oid="2-:wqyc"
      >
        <h3
          className=" text-black text-2xl font-semibold mt-4 dark:text-white"
          data-oid="d5pnqc1"
        >
          Project Configuration
        </h3>
        <ColorConfiguration data-oid="khfs0ho" />
        <TypographyConfiguration data-oid="ulvu:u0" />
        <LogoConfiguration data-oid="lvzrru_" />
      </div>
    </>
  );
};
