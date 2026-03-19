import { Configuration } from "@/app/components/documentation/Configuration";
import { DocNavigation } from "@/app/components/documentation/DocNavigation";
import { Introduction } from "@/app/components/documentation/Introduction";
import { PackageStructure } from "@/app/components/documentation/PackageStructure";
import { QuickStart } from "@/app/components/documentation/QuickStart";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Документация | SK New City",
  description: "Служебная документация проекта SK New City.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <div className="" data-oid="x_1-ch6">
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:mt-28 mt-16 !pt-10"
        data-oid="t04.h0t"
      >
        <h1 className="sr-only" data-oid=".5n:amh">
          Документация SK New City
        </h1>
        <div className="grid grid-cols-12 gap-6" data-oid="odg0gzh">
          <div
            className="lg:col-span-3 col-span-12 lg:block hidden"
            data-oid="llui82m"
          >
            <DocNavigation data-oid="pnnq1y-" />
          </div>
          <div className="lg:col-span-9 col-span-12" data-oid=".-xo5i2">
            <Introduction data-oid="i5nxlt5" />
            <PackageStructure data-oid="1yg.eav" />
            <QuickStart data-oid="uknaxu9" />
            <Configuration data-oid=":qxulbe" />
          </div>
        </div>
      </div>
    </div>
  );
}
