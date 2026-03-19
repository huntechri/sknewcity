import { PropertyHomes } from "@/app/types/properyHomes";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const PropertyCard: React.FC<{ item: PropertyHomes }> = ({ item }) => {
  const { name, location, rate, beds, baths, area, slug, images } = item;

  const mainImage = images[0]?.src;

  return (
    <div data-oid="2e7kuon">
      <div
        className="relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20"
        data-oid="u:uilc1"
      >
        <div className="overflow-hidden rounded-t-2xl" data-oid=":fg4.xs">
          <Link href={`/properties/${slug}`} data-oid="j_l.zxj">
            <div className="w-full h-[300px]" data-oid="4_1pq6c">
              {mainImage && (
                <Image
                  src={mainImage}
                  alt={name}
                  width={440}
                  height={300}
                  className="w-full h-full object-cover rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75"
                  loading="lazy"
                  sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 31vw"
                  data-oid="5:7:q6r"
                />
              )}
            </div>
          </Link>
          <div
            className="absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block"
            data-oid="lhd0_u5"
          >
            <Icon
              icon={"solar:arrow-right-linear"}
              width={24}
              height={24}
              className="text-black"
              data-oid="z4r1k4h"
            />
          </div>
        </div>
        <div className="p-6" data-oid="_xe50ij">
          <div
            className="flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6"
            data-oid="jbv4.o-"
          >
            <div data-oid=":g95gju">
              <Link href={`/properties/${slug}`} data-oid=".kq42pj">
                <h3
                  className="text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary"
                  data-oid="pe1m97o"
                >
                  {name}
                </h3>
              </Link>
              <p
                className="text-base font-normal text-black/50 dark:text-white/50"
                data-oid="rl7.nvo"
              >
                {location}
              </p>
            </div>
            <div data-oid="0z7qyvv">
              <button
                className="text-base font-normal text-primary px-5 py-2 rounded-full bg-primary/10"
                data-oid="73bck0v"
              >
                {rate}
              </button>
            </div>
          </div>
          <div className="flex" data-oid="dedk07b">
            <div
              className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8"
              data-oid="v.1q:s."
            >
              <Icon
                icon={"solar:bed-linear"}
                width={20}
                height={20}
                data-oid="r33at98"
              />
              <p
                className="text-sm mobile:text-base font-normal text-black dark:text-white"
                data-oid="ak8d7co"
              >
                {beds} комнаты
              </p>
            </div>
            <div
              className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8"
              data-oid=".zd6fjd"
            >
              <Icon
                icon={"solar:bath-linear"}
                width={20}
                height={20}
                data-oid="weyb9ne"
              />
              <p
                className="text-sm mobile:text-base font-normal text-black dark:text-white"
                data-oid="mlad8j9"
              >
                {baths} санузла
              </p>
            </div>
            <div
              className="flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8"
              data-oid="s9436s8"
            >
              <Icon
                icon={"lineicons:arrow-all-direction"}
                width={20}
                height={20}
                data-oid="-8gtmt5"
              />

              <p
                className="text-sm mobile:text-base font-normal text-black dark:text-white"
                data-oid="5rbxw4o"
              >
                {area}m<sup data-oid="tbn89sq">2</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
