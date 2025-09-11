document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cita");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    if (!nombre || !telefono || !fecha || !hora) {
      alert("⚠️ Por favor completa todos los campos.");
      return;
    }

    // Aquí podrías enviar por fetch a un endpoint; por ahora mostramos confirmación local
    const texto = `✅ Cita reservada para ${nombre} el ${fecha} a las ${hora}. Tel: ${telefono}`;
    resultado.textContent = texto;
    resultado.style.display = "block";

    // opcional: limpiar formulario
    form.reset();
  });
});
