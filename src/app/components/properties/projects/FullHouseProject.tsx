import React from "react";
import BaseProjectLayout from "./BaseProjectLayout";
import { PropertyHomes, Testimonial } from "@/app/types/properyHomes";
import { Icon } from "@iconify/react";

interface ProjectProps {
  item: PropertyHomes;
  testimonials: Testimonial[] | null;
}

const FullHouseProject: React.FC<ProjectProps> = ({ item, testimonials }) => {
  return (
    <div className="bg-white dark:bg-dark" data-oid="veqthpz">
      <BaseProjectLayout
        item={item}
        testimonials={testimonials}
        data-oid="rap1eup"
      />

      {/* Unique Section: Technical Specs */}
      <div className="bg-dark text-white py-16" data-oid="ear3c92">
        <div className="container mx-auto px-5" data-oid="_13bxzr">
          <h3
            className="text-3xl font-bold mb-10 text-center"
            data-oid="rvnarkb"
          >
            Технические особенности
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="9nzc5y7"
          >
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="p.6nb9y"
            >
              <Icon
                icon="ph:thermometer-hot-light"
                width={48}
                className="text-primary mb-4"
                data-oid="_dy2vuk"
              />

              <h4 className="text-xl font-semibold mb-2" data-oid="_-cx948">
                Микроклимат
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="vwjpt27"
              >
                Система приточно-вытяжной вентиляции с рекуперацией тепла.
              </p>
            </div>
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="z2cqi68"
            >
              <Icon
                icon="ph:lightning-light"
                width={48}
                className="text-primary mb-4"
                data-oid="-w2hl5s"
              />

              <h4 className="text-xl font-semibold mb-2" data-oid="nii76ev">
                Энергоэффективность
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="c_6ugxm"
              >
                Полное светодиодное освещение и умные реле управления нагрузкой.
              </p>
            </div>
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="pmrq14p"
            >
              <Icon
                icon="ph:drop-light"
                width={48}
                className="text-primary mb-4"
                data-oid="sof0_0s"
              />

              <h4 className="text-xl font-semibold mb-2" data-oid="eim2luf">
                Аква-стоп
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="y47cvfy"
              >
                8 датчиков протечки с автоматическим перекрытием стояков.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullHouseProject;
