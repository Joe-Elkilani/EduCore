import { renderSidebar } from "./components/Sidebar/sidebar.js";
import { renderDashboard } from "./components/Dashboard/dashboard.js";

const app = document.getElementById("app");

app.innerHTML = `
  ${renderSidebar()}

  ${renderDashboard()}
  </div>
`;
