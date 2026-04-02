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
    <div className="bg-white dark:bg-dark" data-oid="dp0:66w">
      <BaseProjectLayout
        item={item}
        testimonials={testimonials}
        data-oid="u3637s4"
      />

      {/* Unique Section: Technical Specs */}
      <div className="bg-dark text-white py-16" data-oid="3uvauk-">
        <div className="container mx-auto px-5" data-oid="5z3mpr6">
          <h3
            className="text-3xl font-bold mb-10 text-center"
            data-oid="u_z653i"
          >
            Технические особенности
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="u7t2jx4"
          >
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="g1iy0_7"
            >
              <Icon
                icon="ph:thermometer-hot-light"
                width={48}
                className="text-primary mb-4"
                data-oid="2pt7yi5"
              />

              <h4 className="text-xl font-semibold mb-2" data-oid="7-k0hq:">
                Микроклимат
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="2ooqzj2"
              >
                Система приточно-вытяжной вентиляции с рекуперацией тепла.
              </p>
            </div>
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="r8geyfz"
            >
              <Icon
                icon="ph:lightning-light"
                width={48}
                className="text-primary mb-4"
                data-oid="wfrc0ix"
              />

              <h4 className="text-xl font-semibold mb-2" data-oid="3hwq822">
                Энергоэффективность
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="8wi0.y1"
              >
                Полное светодиодное освещение и умные реле управления нагрузкой.
              </p>
            </div>
            <div
              className="flex flex-col items-center p-6 border border-white/10 rounded-2xl"
              data-oid="_:d8ivd"
            >
              <Icon
                icon="ph:drop-light"
                width={48}
                className="text-primary mb-4"
                data-oid="t961l.u"
              />

              <h4 className="text-xl font-semibold mb-2" data-oid="0qnkwmx">
                Аква-стоп
              </h4>
              <p
                className="text-white/60 text-center text-sm"
                data-oid="69jnwsk"
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
