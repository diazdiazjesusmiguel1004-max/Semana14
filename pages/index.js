import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const LargeComponent = dynamic(() => import("../components/LargeComponent"), {
  loading: () => <p>Cargando componente...</p>,
});

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px 40px" }}>
      <Head>
        <title>Mi Proyecto SEO - Next.js</title>
        <meta
          name="description"
          content="Sitio web optimizado con Next.js, metadatos SEO, lazy loading y sitemap en Render."
        />
        <meta property="og:title" content="Mi Proyecto SEO - Next.js" />
        <meta
          property="og:description"
          content="Demostracion de SEO tecnico y despliegue en Render."
        />
        <meta name="google-site-verification" content="f6ZbR2dM9fJxC1O7m2Z46B09e6i7bL3p" />
      </Head>

      <header style={{ marginBottom: "25px", borderBottom: "1px solid #e0e0e0", paddingBottom: "15px" }}>
        <nav style={{ display: "flex", gap: "20px", fontSize: "16px", fontWeight: "bold" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#0070f3" }}>Inicio</Link>
          <Link href="/blog" style={{ textDecoration: "none", color: "#333" }}>Blog</Link>
          <Link href="/contacto" style={{ textDecoration: "none", color: "#333" }}>Contacto</Link>
        </nav>
      </header>

      <main>
        <h1 style={{ fontSize: "32px", marginBottom: "15px" }}>Bienvenido</h1>
        <p style={{ fontSize: "16px", color: "#555", maxWidth: "800px", lineHeight: "1.6", marginBottom: "25px" }}>
          Esta aplicacion web implementa tecnicas avanzadas de optimizacion para motores de busqueda (SEO)
          utilizando Next.js Pages Router: configuracion de metadatos dinamicos, imagenes comprimidas
          con carga prioritaria, carga diferida (lazy loading), archivo robots.txt y generacion de sitemap
          validado en Google Search Console.
        </p>

        <div style={{ marginBottom: "30px" }}>
          <Image
            src="/images/seo-image.png"
            alt="Imagen optimizada SEO"
            width={700}
            height={400}
            priority
            style={{ borderRadius: "6px", maxWidth: "100%", height: "auto" }}
          />
        </div>

        <LargeComponent />
      </main>
    </div>
  );
}