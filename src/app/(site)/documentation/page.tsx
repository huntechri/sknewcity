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
    <div className="" data-oid="-276t0l">
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:mt-28 mt-16 !pt-10"
        data-oid="3txtq4l"
      >
        <h1 className="sr-only" data-oid="1lh7:j:">
          Документация SK New City
        </h1>
        <div className="grid grid-cols-12 gap-6" data-oid="wyp7f08">
          <div
            className="lg:col-span-3 col-span-12 lg:block hidden"
            data-oid="-_5-7r7"
          >
            <DocNavigation data-oid="q3:pnc9" />
          </div>
          <div className="lg:col-span-9 col-span-12" data-oid="ovr:fyk">
            <Introduction data-oid="z64dx6n" />
            <PackageStructure data-oid="n:6lc1p" />
            <QuickStart data-oid="c48wf8s" />
            <Configuration data-oid="-4jdul_" />
          </div>
        </div>
      </div>
    </div>
  );
}
