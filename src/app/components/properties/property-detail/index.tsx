"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";

import BaseProjectLayout from '../projects/BaseProjectLayout';
import ModernFlatProject from '../projects/ModernFlatProject';
import FullHouseProject from '../projects/FullHouseProject';

import { PropertyHomes, Testimonial } from '@/app/types/properyHomes';

export default function Details() {
    const { slug } = useParams();
    const [testimonials, setTestimonials] = useState<Testimonial[] | null>(null);
    const [propertyHomes, setPropertyHomes] = useState<PropertyHomes[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [pageRes, propertyRes] = await Promise.all([
                    fetch('/api/page-data'),
                    fetch('/api/property-data')
                ])

                if (!pageRes.ok || !propertyRes.ok) {
                    throw new Error('Failed to fetch one or more APIs')
                }

                const pageData = await pageRes.json()
                const propertyData = await propertyRes.json()

                setTestimonials(pageData?.testimonials)
                setPropertyHomes(propertyData?.propertyHomes)

            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])


    const item = propertyHomes?.find((item: PropertyHomes) => item.slug === slug);

    if (!item) return null; // Or a loader

    // Selection of component based on slug
    const ProjectComponent = () => {
        switch (slug) {
            case 'project-1':
                return <ModernFlatProject item={item} testimonials={testimonials} />;
            case 'project-2':
                return <FullHouseProject item={item} testimonials={testimonials} />;
            // Add other projects here:
            default:
                return <BaseProjectLayout item={item} testimonials={testimonials} />;
        }
    };

    return <ProjectComponent />;
}
