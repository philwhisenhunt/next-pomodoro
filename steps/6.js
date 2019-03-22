/*
*  ✨ Let's make the workTime and breakTime something the user can change
*/

const adders = document.getElementById('adders');
// ✨ we cheated by hiding a div for most of these steps 
// ✨ this is where we unhide it by setting display to 'flex'
adders.style.display = 'flex';

const workTimeView = document.getElementById('workTime');
const addWork = document.getElementById('addWorkTime');
const subtractWork = document.getElementById('subtractWork');

const breakTimeView = document.getElementById('breakTime');
const addBreak = document.getElementById('addBreak');
const subtractBreak = document.getElementById('subtractBreak');

const ticker = document.getElementById('ticker');
const playToggleBtn = document.getElementById('pause');



const state = {
  workTime: 30,
  breakTime: 15,
  time: 0,
  paused: false,
  working: true
};

let { workTime, breakTime, time, paused, working } = state;
const updateTimes = () => {
  breakTimeView.innerHTML = breakTime;
  workTimeView.innerHTML = workTime;
}
const inc = time => {
  time === 'workTime' ? workTime++ : breakTime++;
  updateTimes();
}
const dec = time => {
  time === 'workTime' ? workTime-- : breakTime--;
  updateTimes();
}

playToggleBtn.addEventListener('click', () => paused = !paused);
addWork.addEventListener('click', () => inc("workTime"));
subtractWork.addEventListener('click', () => dec("workTime"));
addBreak.addEventListener('click', () => inc("breakTime"));
subtractBreak.addEventListener('click', () => dec("breakTime"));

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
    document.body.style.background = working ? "skyblue" : "orangered"
    ticker.style.color = working ? "orangered" : "skyblue";
  }
}

const tick = () => setInterval(refresh, 1000);
updateTimes();
tick()