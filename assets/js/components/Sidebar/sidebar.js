export function renderSidebar() {
  return `
    <aside class="side">
        <div class="logo">
          <i class="fa-solid fa-graduation-cap"></i>
          <div>
            <h3>EduCore</h3>
            <small>Learn - Manage - Grow</small>
          </div>
        </div>

        <nav>
          <a href="#" class="active"
            ><i class="fa-solid fa-house"></i> Overview</a
          >
          <a href="#"><i class="fa-solid fa-user-group"></i> Teachers</a>
          <a href="#"><i class="fa-solid fa-users"></i> Students</a>
          <a href="#"><i class="fa-solid fa-book"></i> Subjects</a>
          <a href="#"><i class="fa-solid fa-people-group"></i> Groups</a>
          <a href="#"><i class="fa-regular fa-calendar"></i> Schedule</a>
          <a href="#"><i class="fa-solid fa-circle-check"></i> Attendance</a>
          <a href="#"><i class="fa-solid fa-chart-column"></i> Reports</a>

          <hr />

          <a href="#"><i class="fa-solid fa-gear"></i> Settings</a>
        </nav>

        <div class="plan">
          <i class="fa-solid fa-graduation-cap"></i>
          <h5>Better Education<br />Brighter Future</h5>
          <button>Upgrade Plan</button>
        </div>
      </aside>
  `;
}
