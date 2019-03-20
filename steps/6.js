/*
*  ✨ Let's make the workTime and breakTime something the user can change
*/
const ticker = document.getElementById('ticker');
const playToggleBtn = document.getElementById('pause');
playToggleBtn.addEventListener('click', () => paused = !paused)

const state = {
  workTime: 30,
  breakTime: 15,
  time: 0,
  paused: false,
  working: true
};

let { workTime, breakTime, time, paused, working } = state;

const status = document.getElementById('status');



const refresh = () => {
  status.innerHTML = working ? "Do work things" : "Take it Easy!!!"
  if (!paused) {
    if (working) {
      if (time >= workTime) {
        working = false;
        time = 0;
      }
    }
    else {
      if (time >= breakTime) {
        working = true;
        time = 0;
      }
    }

    time++;
    ticker.innerHTML = time;
  }
}

const tick = () => setInterval(refresh, 1000);
tick()