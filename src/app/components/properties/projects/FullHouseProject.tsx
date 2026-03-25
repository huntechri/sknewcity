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
    <div className="bg-white dark:bg-dark" data-oid=".aky:me">
      <BaseProjectLayout
        item={item}
        testimonials={testimonials}
        data-oid="pju5uuk"
      />

      {/* Unique Section: Technical Specs */}
      <div className="bg-dark text-white py-16" data-oid="fxh75wp">
        <div className="container mx-auto px-5" data-oid="e6xb:sf">
          <h3
            className="text-3xl font-bold mb-10 text-center"
            data-oid="c02axbc"
          >
            Технические особенности
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="fp644sj"
          >
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="0sea.z4"
            >
              <Icon
                icon="ph:thermometer-hot-light"
                width={48}
                className="text-primary mb-4"
                data-oid="0t21dq3"
              />

              <h4 className="text-xl font-semibold mb-2" data-oid="5aqk-sf">
                Микроклимат
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="10wul13"
              >
                Система приточно-вытяжной вентиляции с рекуперацией тепла.
              </p>
            </div>
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="uy-:5gy"
            >
              <Icon
                icon="ph:lightning-light"
                width={48}
                className="text-primary mb-4"
                data-oid="obcr6gu"
              />

              <h4 className="text-xl font-semibold mb-2" data-oid="qlgetnh">
                Энергоэффективность
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="t.w:.y:"
              >
                Полное светодиодное освещение и умные реле управления нагрузкой.
              </p>
            </div>
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="f_itk5b"
            >
              <Icon
                icon="ph:drop-light"
                width={48}
                className="text-primary mb-4"
                data-oid="kp2tbb-"
              />

              <h4 className="text-xl font-semibold mb-2" data-oid="k-59mzv">
                Аква-стоп
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="uzyp4mk"
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
