import { Configuration } from "./Configuration";
import { DocNavigation } from "./DocNavigation";
import { Introduction } from "./Introduction";
import { PackageStructure } from "./PackageStructure";
import { QuickStart } from "./QuickStart";

export const Documentation = () => {
  return (
    <div className="" data-oid="c3bh95k">
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:mt-28 mt-16 !pt-10"
        data-oid="f3t:ddu"
      >
        <div className="grid grid-cols-12 gap-6" data-oid="lah4.uz">
          <div
            className="lg:col-span-3 col-span-12 lg:block hidden"
            data-oid="pj.5act"
          >
            <DocNavigation data-oid="my_pq:c" />
          </div>
          <div className="lg:col-span-9 col-span-12" data-oid="d:6nwk1">
            <Introduction data-oid="-2txnxr" />
            <PackageStructure data-oid="ske-zw9" />
            <QuickStart data-oid="g2li-vp" />
            <Configuration data-oid="t4wpv4a" />
          </div>
        </div>
      </div>
    </div>
  );
};
