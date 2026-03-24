import { ColorConfiguration } from "./ColorConfiguraion";
import { LogoConfiguration } from "./LogoConfiguration";
import { TypographyConfiguration } from "./TypographyConfiguration";

export const Configuration = () => {
  return (
    <>
      <div
        className="pb-10 md:scroll-m-[180px] scroll-m-28"
        id="configuration"
        data-oid="dk6t6lk"
      >
        <h3
          className=" text-black text-2xl font-semibold mt-4 dark:text-white"
          data-oid="9f:2j:f"
        >
          Project Configuration
        </h3>
        <ColorConfiguration data-oid="gj26o_1" />
        <TypographyConfiguration data-oid="hd_pv8u" />
        <LogoConfiguration data-oid="g:exfw2" />
      </div>
    </>
  );
};
