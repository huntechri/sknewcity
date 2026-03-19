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
    <div className="bg-white dark:bg-dark" data-oid="em90fjn">
      <BaseProjectLayout
        item={item}
        testimonials={testimonials}
        data-oid="va5td32"
      />

      {/* Unique Section: Technical Specs */}
      <div className="bg-dark text-white py-16" data-oid="bycgfde">
        <div className="container mx-auto px-5" data-oid="mj:_u-6">
          <h3
            className="text-3xl font-bold mb-10 text-center"
            data-oid="1cvi2-j"
          >
            Технические особенности
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="cpzh:fe"
          >
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="l5vjc_:"
            >
              <Icon
                icon="ph:thermometer-hot-light"
                width={48}
                className="text-primary mb-4"
                data-oid="hgi254f"
              />
              <h4 className="text-xl font-semibold mb-2" data-oid="o5114m1">
                Микроклимат
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="jw5usu8"
              >
                Система приточно-вытяжной вентиляции с рекуперацией тепла.
              </p>
            </div>
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="zn36qle"
            >
              <Icon
                icon="ph:lightning-light"
                width={48}
                className="text-primary mb-4"
                data-oid="_.48hv3"
              />
              <h4 className="text-xl font-semibold mb-2" data-oid="y544-is">
                Энергоэффективность
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="_xtpjlp"
              >
                Полное светодиодное освещение и умные реле управления нагрузкой.
              </p>
            </div>
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="yfvzqas"
            >
              <Icon
                icon="ph:drop-light"
                width={48}
                className="text-primary mb-4"
                data-oid="5u10po7"
              />
              <h4 className="text-xl font-semibold mb-2" data-oid="13tm2u4">
                Аква-стоп
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="79g388q"
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
