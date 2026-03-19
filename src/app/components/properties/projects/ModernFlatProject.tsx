import React from "react";
import BaseProjectLayout from "./BaseProjectLayout";
import { PropertyHomes, Testimonial } from "@/app/types/properyHomes";

interface ProjectProps {
  item: PropertyHomes;
  testimonials: Testimonial[] | null;
}

const ModernFlatProject: React.FC<ProjectProps> = ({ item, testimonials }) => {
  return (
    <div data-oid="97m0pev">
      <BaseProjectLayout
        item={item}
        testimonials={testimonials}
        data-oid="0i:n0ux"
      />

      {/* We could add more unique sections here */}
      <div
        className="container mx-auto mb-20 px-4 text-center sm:px-5"
        data-oid="3-jkug0"
      >
        <p
          className="text-dark/50 dark:text-white/50 italic"
          data-oid="1f3x0:."
        >
          * Данный проект был реализован с использованием экологически чистых
          материалов.
        </p>
      </div>
    </div>
  );
};

export default ModernFlatProject;
