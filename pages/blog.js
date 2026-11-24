import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px 40px", maxWidth: "900px", margin: "0 auto" }}>
      <Head>
        <title>Blog - Proyecto SEO</title>
      </Head>
      <header style={{ marginBottom: "30px", borderBottom: "2px solid #eaeaea", paddingBottom: "15px" }}>
        <nav style={{ display: "flex", gap: "25px", fontSize: "17px", fontWeight: "600" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#333" }}>Inicio</Link>
          <Link href="/blog" style={{ textDecoration: "none", color: "#0070f3" }}>Blog</Link>
          <Link href="/contacto" style={{ textDecoration: "none", color: "#333" }}>Contacto</Link>
        </nav>
      </header>
      <main>
        <h1>Seccion de Blog</h1>
        <p>Articulos y publicaciones sobre desarrollo web y optimizacion SEO con Next.js.</p>
      </main>
    </div>
  );
}