import { useState, useEffect } from "react";
import "../src/styles.css";

function App() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");

  // 1. Cargar tareas al inicio
  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    const resp = await fetch("https://umb-web-taller-0az6.onrender.com");
    const data = await resp.json();
    setTareas(data);
  };

  const agregarTarea = async (e) => {
    e.preventDefault();

    await fetch("https://umb-web-taller-0az6.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo }),
    });

    setTitulo("");
    obtenerTareas();
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>

      <form onSubmit={agregarTarea}>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button>Agregar</button>
      </form>

      <ul>
        {tareas.map((t) => (
          <li key={t.id}>
            {t.titulo} — {t.completada ? "✔" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
