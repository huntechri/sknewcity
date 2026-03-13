import { NextResponse } from 'next/server';
import { complexes, featuredProperty, testimonials } from '@/lib/page-data';

export const GET = async () => {
  return NextResponse.json({
    featuredProprty: featuredProperty,
    testimonials,
    complexes
  });
};
