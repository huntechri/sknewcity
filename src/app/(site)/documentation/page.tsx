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
    <div className="" data-oid="zapx6iq">
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:mt-28 mt-16 !pt-10"
        data-oid="b16hgad"
      >
        <h1 className="sr-only" data-oid="jcp:h_r">
          Документация SK New City
        </h1>
        <div className="grid grid-cols-12 gap-6" data-oid="xx:k_ew">
          <div
            className="lg:col-span-3 col-span-12 lg:block hidden"
            data-oid="eni51k5"
          >
            <DocNavigation data-oid="hflci0r" />
          </div>
          <div className="lg:col-span-9 col-span-12" data-oid="bgbmjqj">
            <Introduction data-oid="ax:w7z3" />
            <PackageStructure data-oid="tgk7xy4" />
            <QuickStart data-oid="w0l6_pd" />
            <Configuration data-oid="ivtf5kt" />
          </div>
        </div>
      </div>
    </div>
  );
}
