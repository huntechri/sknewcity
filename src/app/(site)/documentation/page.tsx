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
        <div className="" >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md p-6 lg:mt-28 mt-16 !pt-10">
                <h1 className="sr-only">Документация SK New City</h1>
                <div className="grid grid-cols-12 gap-6">
                    <div className="lg:col-span-3 col-span-12 lg:block hidden">
                        <DocNavigation />
                    </div>
                    <div className="lg:col-span-9 col-span-12">
                        <Introduction />
                        <PackageStructure />
                        <QuickStart />
                        <Configuration />
                    </div>
                </div>
            </div>
        </div>
    );
};
