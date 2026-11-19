const BASE_URL = "https://semana14-1pua.onrender.com";

function generateSiteMap() {
  const urls = ["/", "/blog", "/contacto"];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urls
       .map((url) => {
         return `
       <url>
           <loc>${BASE_URL}${url}</loc>
           <changefreq>daily</changefreq>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap.trim());
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}