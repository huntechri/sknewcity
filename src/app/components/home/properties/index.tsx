import { Icon } from "@iconify/react";
import PropertyCard from "./card/Card";
import { propertyHomes } from "@/lib/property-data";

const Properties: React.FC = () => {
  return (
    <section data-oid="iljsj49">
      <div
        className="container max-w-8xl mx-auto px-5 2xl:px-0"
        data-oid="dt:rl:2"
      >
        <div className="mb-16 flex flex-col gap-3 " data-oid="n30571h">
          <div
            className="flex gap-2.5 items-center justify-center"
            data-oid="4m8t80y"
          >
            <span data-oid="i6.mewb">
              <Icon
                icon={"ph:house-simple-fill"}
                width={20}
                height={20}
                className="text-primary"
                data-oid="pqan8lc"
              />
            </span>
            <p
              className="text-base font-semibold text-dark/75 dark:text-white/75"
              data-oid="90mcn5v"
            >
              Проекты
            </p>
          </div>
          <h2
            className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2"
            data-oid="2cagrio"
          >
            Текущие проекты.
          </h2>
          <p
            className="text-xm font-normal text-black/50 dark:text-white/50 text-center"
            data-oid="2k.y-_e"
          >
            Чёткие сроки, прозрачная смета и контроль качества на каждом этапе.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
          data-oid="_ouomzm"
        >
          {propertyHomes.slice(0, 6).map((item, index) => (
            <div key={index} className="" data-oid="uw2wv56">
              <PropertyCard item={item} data-oid="340-8sq" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
