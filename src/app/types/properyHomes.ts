export type PropertyHomes = {
  name: string
  slug: string
  category: string
  location: string
  rate: string
  beds: number
  baths: number
  area: number
  images: PropertyImage[]
  description?: string[]
  features?: PropertyFeature[]
  workItems?: PropertyWorkItem[]
}

interface PropertyWorkItem {
  title: string;
  icon: string;
}

interface PropertyFeature {
  title: string;
  description: string;
  icon: string; // Iconify name or path
  image?: string; // For the custom SVGs used in the detail page
}

interface PropertyImage {
  src: string;
}
export interface Testimonial {
  name: string;
  position: string;
  image: string;
  review: string;
}
