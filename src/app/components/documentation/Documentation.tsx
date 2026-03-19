import { Configuration } from "./Configuration";
import { DocNavigation } from "./DocNavigation";
import { Introduction } from "./Introduction";
import { PackageStructure } from "./PackageStructure";
import { QuickStart } from "./QuickStart";

export const Documentation = () => {
  return (
    <div className="" data-oid="tof9pt3">
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:mt-28 mt-16 !pt-10"
        data-oid="olw.f1o"
      >
        <div className="grid grid-cols-12 gap-6" data-oid="pkr5f.k">
          <div
            className="lg:col-span-3 col-span-12 lg:block hidden"
            data-oid="li1jmw6"
          >
            <DocNavigation data-oid=".l9sj1c" />
          </div>
          <div className="lg:col-span-9 col-span-12" data-oid="0o2r0qf">
            <Introduction data-oid="25pr-7o" />
            <PackageStructure data-oid="gwqn5q4" />
            <QuickStart data-oid="m3tx:_3" />
            <Configuration data-oid="mg3rkt7" />
          </div>
        </div>
      </div>
    </div>
  );
};
