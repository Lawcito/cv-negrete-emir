document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("toggle-theme");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("theme-dark");
    themeButton.textContent = "☀️";
  }

  themeButton.addEventListener("click", () => {
    body.classList.toggle("theme-dark");

    if (body.classList.contains("theme-dark")) {
      localStorage.setItem("theme", "dark");
      themeButton.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeButton.textContent = "🌙";
    }
  });
});
