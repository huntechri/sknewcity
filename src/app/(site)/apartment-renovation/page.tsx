import type { Metadata } from "next";
import RenovationHero from "@/app/components/services/apartment-renovation/RenovationHero";
import RenovationWorks from "@/app/components/services/apartment-renovation/RenovationWorks";
import RenovationCalculator from "@/app/components/services/apartment-renovation/RenovationCalculator";
import RenovationMaterials from "@/app/components/services/apartment-renovation/RenovationMaterials";
import RenovationFAQ from "@/app/components/services/apartment-renovation/RenovationFAQ";
import RenovationTrust from "@/app/components/services/apartment-renovation/RenovationTrust";
import RenovationCTA from "@/app/components/services/apartment-renovation/RenovationCTA";


export const metadata: Metadata = {
    title: "Ремонт квартир под ключ в Москве | Homely",
    description: "Профессиональный ремонт квартир любой сложности. Калькулятор стоимости, проверенные материалы, гарантия 2 года. Узнайте стоимость вашего ремонта!",
};

export default function ApartmentRenovationPage() {
    return (
        <main className="bg-white dark:bg-dark">
            <RenovationHero />
            <RenovationWorks />
            <RenovationCalculator />
            <RenovationTrust />
            <RenovationMaterials />
            <RenovationFAQ />
            <RenovationCTA />
        </main>
    );
}
