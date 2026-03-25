import { Configuration } from "./Configuration";
import { DocNavigation } from "./DocNavigation";
import { Introduction } from "./Introduction";
import { PackageStructure } from "./PackageStructure";
import { QuickStart } from "./QuickStart";

export const Documentation = () => {
  return (
    <div className="" data-oid="ev4wwfg">
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:mt-28 mt-16 !pt-10"
        data-oid="eouczo3"
      >
        <div className="grid grid-cols-12 gap-6" data-oid="4f2ja-4">
          <div
            className="lg:col-span-3 col-span-12 lg:block hidden"
            data-oid="4i8zud_"
          >
            <DocNavigation data-oid="x8c82v-" />
          </div>
          <div className="lg:col-span-9 col-span-12" data-oid="ge-qste">
            <Introduction data-oid="riauv1e" />
            <PackageStructure data-oid="k31kq69" />
            <QuickStart data-oid="mgyzqx-" />
            <Configuration data-oid="v6iu174" />
          </div>
        </div>
      </div>
    </div>
  );
};
