export type EstimateRow = {
  name: string;
  unit?: string;
  quantity?: number;
  price?: number;
  amount?: number;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export type EstimateSection = {
  title: string;
  rows: EstimateRow[];
};

export type EstimateExportPayload = {
  mode: "works" | "materials";
  sections: EstimateSection[];
};

const escapeHtml = (value: unknown): string => {
  const text = String(value ?? "");
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
};

const formatMoney = (value: number): string => {
  return new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const renderImageCell = (row: EstimateRow): string => {
  if (!row.imageUrl) {
    return "";
  }

  const width = Math.max(1, Math.round((row.imageWidth ?? 100) * 0.8));
  const height = Math.max(1, Math.round((row.imageHeight ?? 100) * 0.8));

  return `<div style="display:flex;justify-content:center;align-items:center;height:100%;"><img src="${escapeHtml(
    row.imageUrl,
  )}" width="${width}" height="${height}" style="object-fit:contain;" alt="Изображение" /></div>`;
};

export function buildEstimateExcelHtml(payload: EstimateExportPayload): string {
  const isWorks = payload.mode === "works";

  let bodyRows = "";

  for (const section of payload.sections) {
    bodyRows += `<tr><td colspan="6" style="font-weight:bold;background:#f3f3f3;">${escapeHtml(section.title)}</td></tr>`;

    let sectionTotal = 0;

    for (const row of section.rows) {
      const amount = row.amount ?? (row.quantity ?? 0) * (row.price ?? 0);
      sectionTotal += amount;

      const rowHeight = isWorks ? "height:42px;" : "height:86px;";
      const nameCellStyle = isWorks
        ? "vertical-align:top;white-space:normal;word-wrap:break-word;"
        : "vertical-align:middle;white-space:normal;word-wrap:break-word;";

      bodyRows += `
        <tr style="${rowHeight}">
          <td style="text-align:center;vertical-align:middle;">${renderImageCell(row)}</td>
          <td style="${nameCellStyle}">${escapeHtml(row.name)}</td>
          <td style="text-align:center;vertical-align:middle;">${escapeHtml(row.unit ?? "")}</td>
          <td style="text-align:center;vertical-align:middle;">${escapeHtml(row.quantity ?? "")}</td>
          <td style="text-align:center;vertical-align:middle;">${typeof row.price === "number" ? formatMoney(row.price) : ""}</td>
          <td style="text-align:center;vertical-align:middle;">${amount ? formatMoney(amount) : ""}</td>
        </tr>
      `;
    }

    bodyRows += `
      <tr style="font-weight:bold;background:#f8f8f8;">
        <td></td>
        <td>Итого по разделу: ${escapeHtml(section.title)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td style="text-align:center;">${formatMoney(sectionTotal)}</td>
      </tr>
    `;
  }

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
</head>
<body>
<table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:12px;">
  <colgroup>
    <col style="width:120px;" />
    <col style="width:60ch;" />
    <col style="width:70px;" />
    <col style="width:90px;" />
    <col style="width:110px;" />
    <col style="width:110px;" />
  </colgroup>
  <thead>
    <tr style="font-weight:bold;background:#efefef;text-align:center;vertical-align:middle;">
      <th>Изображение</th>
      <th>Наименование</th>
      <th>Ед.</th>
      <th>Кол-во</th>
      <th>Цена</th>
      <th>Сумма</th>
    </tr>
  </thead>
  <tbody>
    ${bodyRows}
  </tbody>
</table>
</body>
</html>`;
}
