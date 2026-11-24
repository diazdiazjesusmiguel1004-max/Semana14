import Head from "next/head";
import Link from "next/link";

const articulos = [
  {
    id: "01",
    categoria: "ARQUITECTURA SEO",
    duracion: "4 min",
    titulo: "Metadatos, etiquetas canónicas y estructura limpia en Pages Router",
    resumen:
      "Cómo organizar el componente Head, jerarquía de títulos y rutas claras para que los motores de búsqueda entiendan cada vista sin duplicidades.",
    ruta: "/blog/metadatos-y-rutas-nextjs",
    fecha: "Nov 2026",
  },
  {
    id: "02",
    categoria: "RENDIMIENTO",
    duracion: "5 min",
    titulo: "Imágenes optimizadas y carga diferida sin penalizar la primera pantalla",
    resumen:
      "Uso de next/image con dimensiones definidas y next/dynamic en componentes pesados para mantener tiempos de respuesta ágiles.",
    ruta: "/blog/imagenes-y-carga-diferida",
    fecha: "Nov 2026",
  },
  {
    id: "03",
    categoria: "RASTREO E INDEXACIÓN",
    duracion: "3 min",
    titulo: "Conexión entre robots.txt, sitemap dinámico y Google Search Console",
    resumen:
      "Coherencia exacta del dominio desplegado en Render, lectura del endpoint de sitemap y revisión de las URLs descubiertas.",
    ruta: "/blog/robots-sitemap-search-console",
    fecha: "Nov 2026",
  },
];

export default function Blog() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        color: "#e6edf3",
        fontFamily: "'Segoe UI', Roboto, Arial, sans-serif",
      }}
    >
      <Head>
        <title>Blog | Notas de SEO y Next.js</title>
        <meta
          name="description"
          content="Notas técnicas sobre SEO, rendimiento web y despliegue en Next.js."
        />
      </Head>

      <header
        style={{
          borderBottom: "1px solid #21262d",
          backgroundColor: "#161b22",
        }}
      >
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#f0f6fc",
              fontWeight: "700",
              fontSize: "17px",
              letterSpacing: "0.4px",
            }}
          >
            NEXT<span style={{ color: "#f59e0b" }}>.SEO</span>
          </Link>

          <nav style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "#8b949e",
                padding: "7px 14px",
                borderRadius: "6px",
                fontSize: "14px",
              }}
            >
              Inicio
            </Link>
            <Link
              href="/blog"
              style={{
                textDecoration: "none",
                color: "#0d1117",
                backgroundColor: "#f59e0b",
                padding: "7px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              style={{
                textDecoration: "none",
                color: "#8b949e",
                padding: "7px 14px",
                borderRadius: "6px",
                fontSize: "14px",
              }}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: "920px", margin: "0 auto", padding: "40px 24px" }}>
        <p
          style={{
            color: "#f59e0b",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "1.2px",
            marginBottom: "8px",
          }}
        >
          BITÁCORA TÉCNICA
        </p>
        <h1 style={{ fontSize: "34px", margin: "0 0 12px 0", fontWeight: "700" }}>
          Artículos del proyecto
        </h1>
        <p
          style={{
            color: "#8b949e",
            fontSize: "15px",
            lineHeight: "1.6",
            maxWidth: "680px",
            marginBottom: "36px",
          }}
        >
          Resumen práctico de las mejoras aplicadas al sitio y su registro en el
          sitemap en{" "}
          <span style={{ color: "#34d399", fontFamily: "monospace" }}>
            /api/sitemap
          </span>
          .
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {articulos.map((item) => (
            <article
              key={item.id}
              style={{
                backgroundColor: "#161b22",
                border: "1px solid #30363d",
                borderLeft: "4px solid #f59e0b",
                borderRadius: "8px",
                padding: "22px 24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "10px",
                  fontSize: "12px",
                  color: "#8b949e",
                }}
              >
                <span style={{ color: "#fbbf24", fontWeight: "600" }}>
                  #{item.id} · {item.categoria}
                </span>
                <span>
                  {item.fecha} · {item.duracion}
                </span>
              </div>

              <h2
                style={{
                  fontSize: "19px",
                  margin: "0 0 8px 0",
                  color: "#f0f6fc",
                }}
              >
                {item.titulo}
              </h2>
              <p
                style={{
                  margin: "0 0 14px 0",
                  color: "#8b949e",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                {item.resumen}
              </p>

              <div
                style={{
                  fontSize: "12px",
                  fontFamily: "monospace",
                  color: "#34d399",
                }}
              >
                Ruta: {item.ruta}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}