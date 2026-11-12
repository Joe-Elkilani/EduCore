export function renderDashboard() {
  return `
    <main class="main">
        <header class="top">
          <div class="search">
            <label
              for="search"
              class="fa-solid fa-magnifying-glass icon"
            ></label>
            <input
              type="text"
              placeholder="Search anything..."
              name="search"
              id="search"
            />
            <label class="shortcut" for="search" id="shortcut">Ctrl + K</label>
          </div>

          <div class="user">
            <div class="bell">
              <i class="fa-regular fa-bell"></i>
              <span>3</span>
            </div>

            <i class="fa-regular fa-circle-question help"></i>

            <div class="profile">
              <img src="https://i.pravatar.cc/100?img=12" alt="Profile" />
              <div>
                <h6>Ahmed Hassan</h6>
                <small>Center Owner</small>
              </div>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </header>

        <section class="welcome">
          <div>
            <h2>Welcome back, Ahmed!</h2>
            <p>Here's what's happening at your education center today.</p>
          </div>

          <div class="date">
            <i class="fa-regular fa-calendar"></i>
            Mon, Apr 28, 2025
          </div>
        </section>

        <section class="stats">
          <div class="stat">
            <div class="ico blue">
              <i class="fa-solid fa-users"></i>
            </div>
            <div class="info">
              <p>Total Students</p>
              <h3>1,240 <small>↑ 12%</small></h3>
            </div>
            <div class="line blue"></div>
          </div>

          <div class="stat">
            <div class="ico green">
              <i class="fa-solid fa-user-tie"></i>
            </div>
            <div class="info">
              <p>Total Teachers</p>
              <h3>85 <small>↑ 8%</small></h3>
            </div>
            <div class="line green"></div>
          </div>

          <div class="stat">
            <div class="ico purple">
              <i class="fa-solid fa-layer-group"></i>
            </div>
            <div class="info">
              <p>Active Groups</p>
              <h3>48 <small>↑ 5%</small></h3>
            </div>
            <div class="line purple"></div>
          </div>

          <div class="stat">
            <div class="ico orange">
              <i class="fa-regular fa-calendar-check"></i>
            </div>
            <div class="info">
              <p>Today's Sessions</p>
              <h3>12 <small>↑ 0%</small></h3>
            </div>
            <div class="line orange"></div>
          </div>
        </section>

        <section class="row g-3 mt-1">
          <div class="col-lg-7">
            <div class="box">
              <div class="box-head">
                <h5>
                  <i class="fa-regular fa-calendar-days"></i> Today's Schedule
                </h5>
                <a href="#">View All →</a>
              </div>

              <div class="lesson">
                <span class="dot blue-dot"></span>
                <span class="time">09:00 - 10:30</span>
                <div class="lesson-info">
                  <h6>Math - Group A</h6>
                  <p>Dr. Ahmed Samir</p>
                </div>
                <span class="tag">In Progress</span>
              </div>

              <div class="lesson">
                <span class="dot gray-dot"></span>
                <span class="time">11:00 - 12:30</span>
                <div class="lesson-info">
                  <h6>Physics - Group B</h6>
                  <p>Dr. Sarah Khaled</p>
                </div>
                <span class="tag gray">Upcoming</span>
              </div>

              <div class="lesson">
                <span class="dot gray-dot"></span>
                <span class="time">01:00 - 02:30</span>
                <div class="lesson-info">
                  <h6>Chemistry - Group A</h6>
                  <p>Dr. Mohamed Ali</p>
                </div>
                <span class="tag gray">Upcoming</span>
              </div>

              <div class="lesson">
                <span class="dot gray-dot"></span>
                <span class="time">03:00 - 04:30</span>
                <div class="lesson-info">
                  <h6>English - Group C</h6>
                  <p>Dr. Fatma Hassan</p>
                </div>
                <span class="tag gray">Upcoming</span>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="box attend">
              <div class="box-head">
                <h5>
                  <i class="fa-solid fa-people-group"></i> Attendance Overview
                </h5>
              </div>

              <div class="att-info">
                <div class="chart">
                  <div class="circle">
                    <h2>92%</h2>
                    <small>Overall</small>
                  </div>
                </div>

                <div class="details">
                  <p><span class="dot blue-dot"></span> Present <b>92%</b></p>
                  <p><span class="dot green-dot"></span> Absent <b>5%</b></p>
                  <p><span class="dot orange-dot"></span> Late <b>3%</b></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="row g-3 mt-1">
          <div class="col-lg-7">
            <div class="box">
              <div class="box-head">
                <h5><i class="fa-solid fa-bolt"></i> Recent Activities</h5>
                <a href="#">View All →</a>
              </div>

              <div class="activity">
                <i class="fa-solid fa-user-plus green-text"></i>
                <h6>New student registered: Omar Khaled</h6>
                <small>2 min ago</small>
              </div>

              <div class="activity">
                <i class="fa-solid fa-users blue-text"></i>
                <h6>Group "Math - A" updated</h6>
                <small>5 min ago</small>
              </div>

              <div class="activity">
                <i class="fa-solid fa-credit-card purple-text"></i>
                <h6>Payment received: 1,200 EGP</h6>
                <small>8 min ago</small>
              </div>

              <div class="activity">
                <i class="fa-solid fa-circle-check green-text"></i>
                <h6>Attendance marked for Group B</h6>
                <small>10 min ago</small>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="banner">
              <div>
                <h4>Education is the key<br />to a better tomorrow</h4>
                <button>Explore More →</button>
              </div>
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
          </div>
        </section>
      </main>
  `;
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    document.getElementById("search").focus();
  }
});
