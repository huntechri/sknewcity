import PropertyCard from "../../home/properties/card/Card";
import HeroSub from "../../shared/hero-sub";
import UnderDevelopment from "../../shared/under-development";
import { propertyHomes } from "@/lib/property-data";

type PropertiesListingProps = {
  categoryParam?: string;
};

const PropertiesListing: React.FC<PropertiesListingProps> = ({
  categoryParam,
}) => {
  const formatCategory = (text: string) => {
    const map: Record<string, string> = {
      cosmetic: "Дизайнерский ремонт",
      capital: "Дизайнерский ремонт",
      designer: "Дизайнерский ремонт",
      commercial: "Дизайнерский ремонт",
    };
    return (
      map[text.toLowerCase()] ??
      text
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

  const normalizedCategory = categoryParam?.toLowerCase();
  const categoryLabel = normalizedCategory
    ? formatCategory(normalizedCategory)
    : null;

  const filteredProperties = normalizedCategory
    ? propertyHomes.filter(
        (property) => property.category.toLowerCase() === normalizedCategory,
      )
    : propertyHomes;

  return (
    <>
      <HeroSub
        title={categoryLabel ?? "Наши работы"}
        description="Реальные кейсы с фото и сроками — выбирайте подходящий формат ремонта."
        badge="Проекты"
        as="h1"
        data-oid="ihwxtw0"
      />

      <section className="pt-0!" data-oid="z245m0r">
        <div
          className="container max-w-8xl mx-auto px-5 2xl:px-0"
          data-oid="fc0c3ip"
        >
          {normalizedCategory &&
          ["commercial", "designer", "capital"].includes(normalizedCategory) ? (
            <UnderDevelopment
              categoryName={categoryLabel ?? normalizedCategory}
              data-oid="v69-yle"
            />
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
              data-oid="153nyfo"
            >
              {filteredProperties.map((item) => (
                <div key={item.slug} data-oid="_fdmyfm">
                  <PropertyCard item={item} data-oid=".kbptcl" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PropertiesListing;
