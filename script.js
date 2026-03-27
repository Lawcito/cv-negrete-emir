document.addEventListener("DOMContentLoaded", () => {
  const botonTema = document.getElementById("toggle-tema");
  const body = document.body;

  const temaGuardado = localStorage.getItem("tema");

  if (temaGuardado === "oscuro") {
    body.classList.add("tema-oscuro");
    botonTema.textContent = "☀️";
  }

  botonTema.addEventListener("click", () => {
    body.classList.toggle("tema-oscuro");

    if (body.classList.contains("tema-oscuro")) {
      localStorage.setItem("tema", "oscuro");
      botonTema.textContent = "☀️";
    } else {
      localStorage.setItem("tema", "claro");
      botonTema.textContent = "🌙";
    }
  });
});
