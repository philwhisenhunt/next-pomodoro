/*
 *
 *  ✨ Let's toggle between working🧟 and taking a break 🛋️
 *
 *   the logic for this will be:
 *   if we are working and time has exceeded total workTime;
 *      we will toggle working to false and set time to zero
 *    if we are not working and time has exceed total breakTime;
 *      we wil toggle working to true and set time to zero
 *
 *    In efforts to keep things simple, we will only deal with seconds for now
 */
const workTime = 30;
const breakTime = 15;
let time = 0;
let paused = false;
let working = true;
const ticker = document.getElementById("ticker");
const playToggleBtn = document.getElementById("pause");

// adding status for fun 👻
const status = document.getElementById("status");

playToggleBtn.addEventListener("click", () => (paused = !paused));

const refresh = () => {
  if (!paused) {
    // ✨✨magic!✨✨
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
    ticker.innerHTML = time;
    // adding status for fun 👻
    status.innerHTML = working ? "Do work things" : "Take it Easy!!!";
  }
};

const tick = () => setInterval(refresh, 1000);
tick();
