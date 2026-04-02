import { Icon } from "@iconify/react";
import PropertyCard from "./card/Card";
import { propertyHomes } from "@/lib/property-data";

const Properties: React.FC = () => {
  return (
    <section data-oid="xa4vuue">
      <div
        className="container max-w-8xl mx-auto px-5 2xl:px-0"
        data-oid="242ldmu"
      >
        <div className="mb-16 flex flex-col gap-3 " data-oid="694jlbi">
          <div
            className="flex gap-2.5 items-center justify-center"
            data-oid="7xk-wn1"
          >
            <span data-oid="wcowsag">
              <Icon
                icon={"ph:house-simple-fill"}
                width={20}
                height={20}
                className="text-primary"
                data-oid="0twa55f"
              />
            </span>
            <p
              className="text-base font-semibold text-dark/75 dark:text-white/75"
              data-oid="txm0_nn"
            >
              Проекты
            </p>
          </div>
          <h2
            className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2"
            data-oid="4rfa5o2"
          >
            Текущие проекты.
          </h2>
          <p
            className="text-xm font-normal text-black/50 dark:text-white/50 text-center"
            data-oid="2u68.o7"
          >
            Чёткие сроки, прозрачная смета и контроль качества на каждом этапе.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
          data-oid="3d6upir"
        >
          {propertyHomes.slice(0, 6).map((item, index) => (
            <div key={index} className="" data-oid="5efdlvu">
              <PropertyCard item={item} data-oid="72ds:ir" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
