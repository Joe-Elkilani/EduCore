export function renderSidebar() {
  return `
    <aside class="side" id="sidebar">
        <div class="logo">
          <i class="fa-solid fa-graduation-cap"></i>
          <div>
            <h3>EduCore</h3>
            <small>Learn - Manage - Grow</small>
          </div>
        </div>

        <nav>
          <a href="#" title="Overview" class="active">
            <i class="fa-solid fa-house"></i>
            <span>Overview</span>
          </a>
          <a href="#" title="Teachers"><i class="fa-solid fa-user-group"></i> <span>Teachers</span></a>
          <a href="#" title="Students"><i class="fa-solid fa-users"></i> <span>Students</span></a>
          <a href="#" title="Subjects"><i class="fa-solid fa-book"></i> <span>Subjects</span></a>
          <a href="#" title="Groups"><i class="fa-solid fa-people-group"></i> <span>Groups</span></a>
          <a href="#" title="Schedule"><i class="fa-regular fa-calendar"></i> <span>Schedule</span></a>
          <a href="#" title="Attendance"><i class="fa-solid fa-circle-check"></i> <span>Attendance</span></a>
          <a href="#" title="Reports"><i class="fa-solid fa-chart-column"></i> <span>Reports</span></a>

          <hr />

          <a href="#" title="Settings"><i class="fa-solid fa-gear"></i> <span>Settings</span></a>
        </nav>

        <div class="plan">
          <i class="fa-solid fa-graduation-cap"></i>
          <h5>Better Education<br />Brighter Future</h5>
          <button>Upgrade Plan</button>
        </div>
      </aside>
  `;
}
