// Archivo: /pages/index.js
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

// Carga perezosa (Lazy Loading) desactivando SSR para este componente cliente
const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Optimizado - Home</title>
        <meta name="description" content="Aprende sobre optimización SEO y rendimiento en Next.js." />
      </Head>

      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Bienvenido</h1>
        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Ejemplo de imagen optimizada"
          priority
        />
        
        {/* Componente con Lazy Loading */}
        <DynamicComponent />
      </main>
    </>
  );
}