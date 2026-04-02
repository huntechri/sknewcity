import { ColorConfiguration } from "./ColorConfiguraion";
import { LogoConfiguration } from "./LogoConfiguration";
import { TypographyConfiguration } from "./TypographyConfiguration";

export const Configuration = () => {
  return (
    <>
      <div
        className="pb-10 md:scroll-m-[180px] scroll-m-28"
        id="configuration"
        data-oid="b9bwry1"
      >
        <h3
          className=" text-black text-2xl font-semibold mt-4 dark:text-white"
          data-oid="jdvcqsn"
        >
          Project Configuration
        </h3>
        <ColorConfiguration data-oid="e3:a62k" />
        <TypographyConfiguration data-oid="q1nc5nw" />
        <LogoConfiguration data-oid="mz4cq6i" />
      </div>
    </>
  );
};
