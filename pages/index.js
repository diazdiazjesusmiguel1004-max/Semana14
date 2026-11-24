import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const LargeComponent = dynamic(() => import("../components/LargeComponent"), {
  loading: () => <p>Cargando componente...</p>,
});

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px 40px", maxWidth: "900px", margin: "0 auto" }}>
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
        <meta
          name="google-site-verification"
          content="f6ZbR2dM9fJxC1O7m2Z46B09e6i7bL3p"
        />
      </Head>

      {/* Barra de navegacion funcional */}
      <header style={{ marginBottom: "30px", borderBottom: "2px solid #eaeaea", paddingBottom: "15px" }}>
        <nav style={{ display: "flex", gap: "25px", fontSize: "17px", fontWeight: "600" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#0070f3" }}>
            Inicio
          </Link>
          <Link href="/blog" style={{ textDecoration: "none", color: "#333" }}>
            Blog
          </Link>
          <Link href="/contacto" style={{ textDecoration: "none", color: "#333" }}>
            Contacto
          </Link>
        </nav>
      </header>

      <main>
        <h1 style={{ fontSize: "32px", color: "#111", marginBottom: "15px" }}>
          Bienvenido a mi pagina optimizada
        </h1>

        <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6", marginBottom: "25px" }}>
          Esta plataforma web fue desarrollada e implementada aplicando tecnicas clave de optimizacion
          para motores de busqueda (SEO) en Next.js Pages Router. Entre sus principales caracteristicas
          destacan la carga prioritaria de imagenes en alta definicion, componentes diferidos bajo demanda
          (lazy loading), indexacion estructurada mediante robots.txt y un sitemap dinamico validado con exito
          en Google Search Console.
        </p>

        <div style={{ marginBottom: "30px" }}>
          <Image
            src="/images/seo-image.png"
            alt="Imagen optimizada SEO"
            width={700}
            height={400}
            priority
            style={{ borderRadius: "8px", maxWidth: "100%", height: "auto", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          />
        </div>

        <LargeComponent />
      </main>
    </div>
  );
}