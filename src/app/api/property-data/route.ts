import { NextResponse } from 'next/server';
import { propertyHomes } from '@/lib/property-data';

export const GET = async () => {
  return NextResponse.json({ propertyHomes });
};
