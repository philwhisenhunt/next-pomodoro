/*
*
*  ⏯️ Let's hook up the play pause button!
*
*/
let time = 0;
// adding boolean to see if the clock is paused
// we will use let because we need to reassign this value
let paused = false;
const ticker = document.getElementById('ticker');
const playToggleBtn = document.getElementById('pause');

// add the event listener to toggle the paused variable when 
// we click the button
playToggleBtn.addEventListener('click', () => paused = !paused)

const refresh = () => {
  // only increment if we are not pauseds
  if (!paused) {
    time++;
    ticker.innerHTML = time;
  }
}

const tick = () => setInterval(refresh, 1000);
tick()