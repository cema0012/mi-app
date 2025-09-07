const form = document.getElementById("form-cita");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  if(!nombre || !telefono || !fecha || !hora){
    alert("Completa todos los campos");
    return;
  }

  // Guarda una “reserva” simple en localStorage sólo como demo
  const reserva = { nombre, telefono, fecha, hora, creada: new Date().toISOString() };
  const reservas = JSON.parse(localStorage.getItem("reservas") || "[]");
  reservas.push(reserva);
  localStorage.setItem("reservas", JSON.stringify(reservas));

  resultado.classList.remove("hidden");
  resultado.textContent = `¡Listo, ${nombre}! Tu cita quedó para el ${fecha} a las ${hora}.`;
  form.reset();
});
