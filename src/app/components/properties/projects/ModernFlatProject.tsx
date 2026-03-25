import React from "react";
import BaseProjectLayout from "./BaseProjectLayout";
import { PropertyHomes, Testimonial } from "@/app/types/properyHomes";

interface ProjectProps {
  item: PropertyHomes;
  testimonials: Testimonial[] | null;
}

const ModernFlatProject: React.FC<ProjectProps> = ({ item, testimonials }) => {
  return (
    <div data-oid="9m4alhd">
      <BaseProjectLayout
        item={item}
        testimonials={testimonials}
        data-oid=":jt:cf-"
      />

      {/* We could add more unique sections here */}
      <div
        className="container mx-auto mb-20 px-4 text-center sm:px-5"
        data-oid="ke0j62b"
      >
        <p
          className="text-dark/50 dark:text-white/50 italic"
          data-oid="ov-a9ot"
        >
          * Данный проект был реализован с использованием экологически чистых
          материалов.
        </p>
      </div>
    </div>
  );
};

export default ModernFlatProject;
