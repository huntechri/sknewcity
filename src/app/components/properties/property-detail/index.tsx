import React from "react";
import BaseProjectLayout from "../projects/BaseProjectLayout";
import ModernFlatProject from "../projects/ModernFlatProject";
import FullHouseProject from "../projects/FullHouseProject";

import { PropertyHomes, Testimonial } from "@/app/types/properyHomes";

interface DetailsProps {
  item: PropertyHomes;
  testimonials: Testimonial[] | null;
}

export default function Details({ item, testimonials }: DetailsProps) {
  switch (item.slug) {
    case "cosmetic-42":
      return (
        <ModernFlatProject
          item={item}
          testimonials={testimonials}
          data-oid="sjyw9p."
        />
      );

    case "capital-78":
      return (
        <FullHouseProject
          item={item}
          testimonials={testimonials}
          data-oid="2vjab2j"
        />
      );

    default:
      return (
        <BaseProjectLayout
          item={item}
          testimonials={testimonials}
          data-oid="6fa-3r0"
        />
      );
  }
}
