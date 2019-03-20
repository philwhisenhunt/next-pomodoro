/*
*  ✨ umm... bit o clean up 
*/
const ticker = document.getElementById('ticker');
const playToggleBtn = document.getElementById('pause');
playToggleBtn.addEventListener('click', () => paused = !paused)

// let's keep state together to be clean -- 
// also, if we want the user to set workTime and breakTime
// we will need to not use const 
// const won't let us reassign a value
const state = {
  workTime: 30,
  breakTime: 15,
  time: 0,
  paused: false,
  working: true
};

// ✨✨fancy destructuring!✨✨
// this allows us to cleanly us the items on the objects 
// instead of saying state.workTime, we can just call it by saying workTime
// ✨✨magic!✨✨
// note that we have to use let here because the values will be reassigned
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