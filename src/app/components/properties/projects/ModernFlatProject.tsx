import React from "react";
import BaseProjectLayout from "./BaseProjectLayout";
import { PropertyHomes, Testimonial } from "@/app/types/properyHomes";

interface ProjectProps {
  item: PropertyHomes;
  testimonials: Testimonial[] | null;
}

const ModernFlatProject: React.FC<ProjectProps> = ({ item, testimonials }) => {
  return (
    <div data-oid="ia2a0fy">
      <BaseProjectLayout
        item={item}
        testimonials={testimonials}
        data-oid="w5kximo"
      />

      {/* We could add more unique sections here */}
      <div
        className="container mx-auto mb-20 px-4 text-center sm:px-5"
        data-oid="am1wdae"
      >
        <p
          className="text-dark/50 dark:text-white/50 italic"
          data-oid="xtl728w"
        >
          * Данный проект был реализован с использованием экологически чистых
          материалов.
        </p>
      </div>
    </div>
  );
};

export default ModernFlatProject;
