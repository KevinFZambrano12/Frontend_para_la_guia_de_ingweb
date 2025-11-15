const API_URL = "https://umb-web-taller-0az6.onrender.com"; // cambia al tuyo

export async function getTareas() {
  const res = await fetch(API_URL, { method: "GET" });
  return await res.json();
}

export async function crearTarea(titulo) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo }),
  });
  return await res.json();
}

export async function actualizarTarea(id, completada) {
  const res = await fetch(API_URL, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, completada }),
  });
  return await res.json();
}

export async function eliminarTarea(id) {
  const res = await fetch(API_URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return await res.json();
}
