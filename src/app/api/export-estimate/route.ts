import { NextResponse } from "next/server";
import { buildEstimateExcelHtml, type EstimateExportPayload } from "@/lib/excel-export";

export const POST = async (request: Request) => {
  try {
    const payload = (await request.json()) as EstimateExportPayload;

    if (!payload || !Array.isArray(payload.sections) || !payload.mode) {
      return NextResponse.json({ error: "Некорректный формат данных" }, { status: 400 });
    }

    const html = buildEstimateExcelHtml(payload);

    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.ms-excel; charset=utf-8",
        "Content-Disposition": 'attachment; filename="estimate.xls"',
      },
    });
  } catch {
    return NextResponse.json({ error: "Ошибка при формировании Excel" }, { status: 500 });
  }
};
