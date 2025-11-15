import { useEffect, useState } from "react";
import { getTareas, crearTarea, actualizarTarea, eliminarTarea } from "./api";

function App() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");

  async function cargar() {
    const data = await getTareas();
    setTareas(data);
  }

  useEffect(() => { cargar(); }, []);

  async function handleAdd() {
    await crearTarea(titulo);
    setTitulo("");
    cargar();
  }

  async function toggle(id, completada) {
    await actualizarTarea(id, !completada);
    cargar();
  }

  async function handleDelete(id) {
    await eliminarTarea(id);
    cargar();
  }

  return (
    <div>
      <h1>Tareas</h1>
      <input value={titulo} onChange={e => setTitulo(e.target.value)} />
      <button onClick={handleAdd}>Agregar</button>

      <ul>
        {tareas.map(t => (
          <li key={t.id}>
            <span style={{textDecoration: t.completada ? "line-through" : ""}}>
              {t.titulo}
            </span>
            <button onClick={() => toggle(t.id, t.completada)}>✔</button>
            <button onClick={() => handleDelete(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
