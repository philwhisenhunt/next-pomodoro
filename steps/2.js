/*
 *
 *  ⏳update the time on the page⏳
 *   add the time to the page
 *
 */
let time = 0;

// declaring the ticker variable for easy acess
const ticker = document.getElementById("ticker");

const refresh = () => {
  time++;

  // replacing the value inside ticker
  ticker.innerHTML = time;
};

const tick = () => setInterval(refresh, 1000);
tick();
