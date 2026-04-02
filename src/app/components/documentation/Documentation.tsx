import { Configuration } from "./Configuration";
import { DocNavigation } from "./DocNavigation";
import { Introduction } from "./Introduction";
import { PackageStructure } from "./PackageStructure";
import { QuickStart } from "./QuickStart";

export const Documentation = () => {
  return (
    <div className="" data-oid="7mi:wz5">
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:mt-28 mt-16 !pt-10"
        data-oid="zdydef4"
      >
        <div className="grid grid-cols-12 gap-6" data-oid="xovo-ph">
          <div
            className="lg:col-span-3 col-span-12 lg:block hidden"
            data-oid="ra-e564"
          >
            <DocNavigation data-oid="p5s_:8-" />
          </div>
          <div className="lg:col-span-9 col-span-12" data-oid="irmq0.e">
            <Introduction data-oid="rpwsgff" />
            <PackageStructure data-oid="iy6mt3k" />
            <QuickStart data-oid="_ozax7r" />
            <Configuration data-oid="g13wmhv" />
          </div>
        </div>
      </div>
    </div>
  );
};
