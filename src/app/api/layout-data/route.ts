import { NextResponse } from "next/server";
import { footerLinks, navLinks } from "@/lib/layout-data";

export const GET = async () => {
  return NextResponse.json({
    navLinks,
    footerLinks
  });
};
