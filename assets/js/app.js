import { renderSidebar } from "./components/Sidebar/sidebar.js";
import { renderDashboard } from "./components/Dashboard/dashboard.js";

const app = document.getElementById("app");

app.innerHTML = `
  ${renderSidebar()}
  <div class="sidebar-overlay" id="sidebarOverlay"></div>
  ${renderDashboard()}
`;

const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebar = document.getElementById("sidebar");

sidebarToggle.addEventListener("click", () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    app.classList.toggle("sidebar-open");
  } else {
    app.classList.toggle("sidebar-collapsed");
  }

  const isExpanded = isMobile
    ? app.classList.contains("sidebar-open")
    : !app.classList.contains("sidebar-collapsed");

  sidebarToggle.setAttribute("aria-expanded", isExpanded);
});

sidebarOverlay.addEventListener("click", closeMobileSidebar);

function closeMobileSidebar() {
  app.classList.remove("sidebar-open");
  sidebarToggle.setAttribute("aria-expanded", "false");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileSidebar();
  }

  if (event.ctrlKey && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.getElementById("search")?.focus();
  }
});

sidebar.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      closeMobileSidebar();
    }
  });
});
