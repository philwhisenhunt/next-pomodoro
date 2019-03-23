const adders = document.getElementById("adders");
// ✨ we cheated by hiding a div for most of these steps
// ✨ this is where we unhide it by setting display to 'flex'
adders.style.display = "flex";

// 🔥Selecting a bunch of DOM elements🔥
const workTimeView = document.getElementById("workTime");
const addWork = document.getElementById("addWorkTime");
const subtractWork = document.getElementById("subtractWork");

const breakTimeView = document.getElementById("breakTime");
const addBreak = document.getElementById("addBreak");
const subtractBreak = document.getElementById("subtractBreak");

const ticker = document.getElementById("ticker");
const playToggleBtn = document.getElementById("pause");

const status = document.getElementById("status");
// 🔥Selecting a bunch of DOM elements🔥

const state = {
  workTime: 30,
  breakTime: 15,
  time: 0,
  paused: false,
  working: true
};

let { workTime, breakTime, time, paused, working } = state;

// 🦍 adding the increment decrement functions
const updateTimes = () => {
  breakTimeView.innerHTML = breakTime;
  workTimeView.innerHTML = workTime;
};
const inc = time => {
  time === "workTime" ? workTime++ : breakTime++;
  updateTimes();
};
const dec = time => {
  time === "workTime" ? workTime-- : breakTime--;
  updateTimes();
};
// 🦍 adding the increment decrement functions

// 🦄 toggling the play button but also
// 🦄 turning the background grey when we pause
playToggleBtn.addEventListener("click", () => {
  paused = !paused;
  if (paused) document.body.style.background = "grey";
});

// 💥💥💥
// Event Listeners to handle our click events
addWork.addEventListener("click", () => inc("workTime"));
subtractWork.addEventListener("click", () => dec("workTime"));
addBreak.addEventListener("click", () => inc("breakTime"));
subtractBreak.addEventListener("click", () => dec("breakTime"));
// 💥💥💥

const refresh = () => {
  if (!paused) {
    if (working) {
      if (time >= workTime) {
        working = false;
        time = 0;
      }
    } else {
      if (time >= breakTime) {
        working = true;
        time = 0;
      }
    }

    time++;
    document.body.style.background = working ? "skyblue" : "orangered";
    ticker.style.color = working ? "orangered" : "skyblue";
    ticker.innerHTML = time;
    status.innerHTML = working ? "Do work things" : "Take it Easy!!!";
  }
};

const tick = () => setInterval(refresh, 1000);
updateTimes();
tick();
