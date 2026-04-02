import { PropertyHomes } from "@/app/types/properyHomes";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const PropertyCard: React.FC<{ item: PropertyHomes }> = ({ item }) => {
  const { name, location, rate, beds, baths, area, slug, images } = item;

  const mainImage = images[0]?.src;

  return (
    <div data-oid="x7_m0qd">
      <div
        className="relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20"
        data-oid="9msg-7l"
      >
        <div className="overflow-hidden rounded-t-2xl" data-oid="x.144o1">
          <Link href={`/properties/${slug}`} data-oid="p10aaoy">
            <div className="w-full h-[300px]" data-oid="3:zj84.">
              {mainImage && (
                <Image
                  src={mainImage}
                  alt={name}
                  width={440}
                  height={300}
                  className="w-full h-full object-cover rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75"
                  loading="lazy"
                  sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 31vw"
                  data-oid="zo4bb8j"
                />
              )}
            </div>
          </Link>
          <div
            className="absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block"
            data-oid="xl:_c1t"
          >
            <Icon
              icon={"solar:arrow-right-linear"}
              width={24}
              height={24}
              className="text-black"
              data-oid="hti1m0-"
            />
          </div>
        </div>
        <div className="p-6" data-oid=":azsghx">
          <div
            className="flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6"
            data-oid="eh4ry14"
          >
            <div data-oid="6yb9u2z">
              <Link href={`/properties/${slug}`} data-oid="lk9yaog">
                <h3
                  className="text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary"
                  data-oid="5v_z5:y"
                >
                  {name}
                </h3>
              </Link>
              <p
                className="text-base font-normal text-black/50 dark:text-white/50"
                data-oid="m4ccxa6"
              >
                {location}
              </p>
            </div>
            <div data-oid="m8aodnr">
              <button
                className="text-base font-normal text-primary px-5 py-2 rounded-full bg-primary/10"
                data-oid="5aahzmq"
              >
                {rate}
              </button>
            </div>
          </div>
          <div className="flex" data-oid="b8:620f">
            <div
              className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8"
              data-oid="6hmzgmf"
            >
              <Icon
                icon={"solar:bed-linear"}
                width={20}
                height={20}
                data-oid="st1vrcw"
              />

              <p
                className="text-sm mobile:text-base font-normal text-black dark:text-white"
                data-oid="dn-kuct"
              >
                {beds} комнаты
              </p>
            </div>
            <div
              className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8"
              data-oid="sdkmdas"
            >
              <Icon
                icon={"solar:bath-linear"}
                width={20}
                height={20}
                data-oid="gq04:nd"
              />

              <p
                className="text-sm mobile:text-base font-normal text-black dark:text-white"
                data-oid="9rgyfkg"
              >
                {baths} санузла
              </p>
            </div>
            <div
              className="flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8"
              data-oid="wepq.1w"
            >
              <Icon
                icon={"lineicons:arrow-all-direction"}
                width={20}
                height={20}
                data-oid="8_k_j:c"
              />

              <p
                className="text-sm mobile:text-base font-normal text-black dark:text-white"
                data-oid="h.yi1p_"
              >
                {area}m<sup data-oid="rcpxpbi">2</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
