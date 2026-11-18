// Archivo: /components/LargeComponent.jsx
export default function LargeComponent() {
  return (
    <div style={{ padding: "1rem", background: "#f0f0f0", marginTop: "1rem", borderRadius: "8px", color: "#333" }}>
      <h2>Este es un componente pesado cargado con Lazy Loading</h2>
      <p>Solo se renderiza cuando es necesario ahorrando recursos iniciales.</p>
    </div>
  );
}