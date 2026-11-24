import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

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
        <title>Contacto | Notas de SEO y Next.js</title>
        <meta
          name="description"
          content="Formulario de contacto y datos del despliegue en Render."
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
                color: "#8b949e",
                padding: "7px 14px",
                borderRadius: "6px",
                fontSize: "14px",
              }}
            >
              Blog
            </Link>
            <Link
              href="/contacto"
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
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: "920px", margin: "0 auto", padding: "40px 24px" }}>
        <p
          style={{
            color: "#34d399",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "1.2px",
            marginBottom: "8px",
          }}
        >
          CANAL DIRECTO
        </p>
        <h1 style={{ fontSize: "34px", margin: "0 0 10px 0", fontWeight: "700" }}>
          Contacto
        </h1>
        <p style={{ color: "#8b949e", fontSize: "15px", marginBottom: "32px" }}>
          Déjame un mensaje sobre el proyecto o revisa los datos activos del entorno.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          <form
            onSubmit={manejarEnvio}
            style={{
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "8px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div>
              <label
                htmlFor="nombre"
                style={{ display: "block", fontSize: "13px", marginBottom: "6px", color: "#c9d1d9" }}
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #30363d",
                  backgroundColor: "#0d1117",
                  color: "#f0f6fc",
                  fontSize: "14px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="correo"
                style={{ display: "block", fontSize: "13px", marginBottom: "6px", color: "#c9d1d9" }}
              >
                Correo electrónico
              </label>
              <input
                id="correo"
                type="email"
                required
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="nombre@correo.com"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #30363d",
                  backgroundColor: "#0d1117",
                  color: "#f0f6fc",
                  fontSize: "14px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                style={{ display: "block", fontSize: "13px", marginBottom: "6px", color: "#c9d1d9" }}
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                required
                rows="4"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe tu comentario o consulta..."
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #30363d",
                  backgroundColor: "#0d1117",
                  color: "#f0f6fc",
                  fontSize: "14px",
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#f59e0b",
                color: "#0d1117",
                border: "none",
                padding: "11px 16px",
                borderRadius: "6px",
                fontWeight: "700",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Enviar mensaje
            </button>

            {enviado && (
              <div
                style={{
                  backgroundColor: "rgba(52, 211, 153, 0.12)",
                  border: "1px solid #34d399",
                  color: "#34d399",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                }}
              >
                Mensaje registrado correctamente para esta sesión.
              </div>
            )}
          </form>

          <aside
            style={{
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "8px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "17px", color: "#f0f6fc" }}>
              Estado del despliegue
            </h2>

            <div>
              <div style={{ fontSize: "12px", color: "#8b949e" }}>URL pública</div>
              <div style={{ fontSize: "13px", color: "#fbbf24", wordBreak: "break-all", marginTop: "3px" }}>
                https://semana14-lpua.onrender.com
              </div>
            </div>

            <div>
              <div style={{ fontSize: "12px", color: "#8b949e" }}>Sitemap</div>
              <div style={{ fontSize: "13px", fontFamily: "monospace", color: "#e6edf3", marginTop: "3px" }}>
                /api/sitemap
              </div>
            </div>

            <div>
              <div style={{ fontSize: "12px", color: "#8b949e" }}>Search Console</div>
              <div style={{ fontSize: "13px", color: "#34d399", fontWeight: "600", marginTop: "3px" }}>
                Propiedad verificada y sitemap en estado Correcto
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}