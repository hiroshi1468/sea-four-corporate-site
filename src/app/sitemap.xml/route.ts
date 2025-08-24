export async function GET() {
  const baseUrl = "https://sea4-four.com";
  // 必要に応じてページURLを追加
  const pages = [
    "",
    "/company/profile",
    "/company/PrivacyPolicy",
    "/message",
    "/contact",
  ];

  const urls = pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
    </url>
  `
    )
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://sea4-four.com/</loc>
    </url>
    ${urls}
  </urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
