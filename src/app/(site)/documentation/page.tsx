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
    <div className="" data-oid=".jw9jqs">
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:mt-28 mt-16 !pt-10"
        data-oid="g-15:43"
      >
        <h1 className="sr-only" data-oid="5vuakhw">
          Документация SK New City
        </h1>
        <div className="grid grid-cols-12 gap-6" data-oid="wnx7z--">
          <div
            className="lg:col-span-3 col-span-12 lg:block hidden"
            data-oid="pg4blin"
          >
            <DocNavigation data-oid="4dnwkif" />
          </div>
          <div className="lg:col-span-9 col-span-12" data-oid="b8duun3">
            <Introduction data-oid="91u_jhr" />
            <PackageStructure data-oid="meb6h99" />
            <QuickStart data-oid="4cntkml" />
            <Configuration data-oid="876qw0-" />
          </div>
        </div>
      </div>
    </div>
  );
}
