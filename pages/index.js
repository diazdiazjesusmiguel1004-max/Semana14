import Head from "next/head";
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
        <meta
          name="google-site-verification"
          content="f6ZbR2dM9fJxC1O7m2Z46B09e6i7bL3p"
        />
      </Head>

      <main>
        <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Bienvenido a mi pagina optimizada
        </h1>

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