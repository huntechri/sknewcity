import React, { FC } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface HeroSubProps {
  title: string;
  description: string;
  badge: string;
  as?: "h1" | "h2";
}

const HeroSub: FC<HeroSubProps> = ({
  title,
  description,
  badge,
  as = "h1",
}) => {
  const HeadingTag = as;

  return (
    <>
      <section
        className="text-center bg-cover !pt-40 pb-20 relative overflow-x-hidden"
        data-oid="i3jroyq"
      >
        <div
          className="flex gap-2.5 items-center justify-center"
          data-oid="topa:t7"
        >
          <span data-oid="tzv.qjl">
            <Icon
              icon={"ph:house-simple-fill"}
              width={20}
              height={20}
              className="text-primary"
              data-oid="4gpowei"
            />
          </span>
          <p
            className="text-base font-semibold text-dark/75 dark:text-white/75"
            data-oid="v.qdnic"
          >
            {badge}
          </p>
        </div>
        <HeadingTag
          className="text-dark text-52 relative font-bold dark:text-white "
          data-oid="nzfhi-j"
        >
          {title}
        </HeadingTag>
        <p
          className="text-lg text-dark/50 dark:text-white/50 font-normal w-full mx-auto"
          data-oid="32ugvmj"
        >
          {description}
        </p>
      </section>
    </>
  );
};

export default HeroSub;
