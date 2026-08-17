const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const stored = localStorage.getItem("theme");

if (stored === "light" || stored === "dark") {
  root.dataset.theme = stored;
}

function currentTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function syncToggle() {
  if (!toggle) return;
  const theme = currentTheme();
  toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  toggle.textContent = theme === "dark" ? "라이트" : "다크";
}

toggle?.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
  syncToggle();
});

syncToggle();
