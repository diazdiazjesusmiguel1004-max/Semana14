import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px 40px", maxWidth: "900px", margin: "0 auto" }}>
      <Head>
        <title>Contacto - Proyecto SEO</title>
      </Head>
      <header style={{ marginBottom: "30px", borderBottom: "2px solid #eaeaea", paddingBottom: "15px" }}>
        <nav style={{ display: "flex", gap: "25px", fontSize: "17px", fontWeight: "600" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#333" }}>Inicio</Link>
          <Link href="/blog" style={{ textDecoration: "none", color: "#333" }}>Blog</Link>
          <Link href="/contacto" style={{ textDecoration: "none", color: "#0070f3" }}>Contacto</Link>
        </nav>
      </header>
      <main>
        <h1>Contacto</h1>
        <p>Canal de comunicacion directo para consultas sobre el proyecto y soporte tecnico.</p>
      </main>
    </div>
  );
}