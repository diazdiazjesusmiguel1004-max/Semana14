// Archivo: /pages/api/sitemap.js
const BASE_URL = "https://semana14-1pua.onrender.com";
export default async function handler(req, res) {
  // Las páginas requeridas para tu sitemap
  const urls = ["/", "/blog", "/contacto"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
    <url>
      <loc>${BASE_URL}${url}</loc>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap.trim());
  res.end();
}