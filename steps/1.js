/*
*
*  ⏳Add the setInterval to start the ticker⏳
*
*/

// declare time, but we will need to reassign this value so we will use let
let time = 0;

// declare our refresh function -- this runs on every tick
const refresh = () => {
  time++;
  console.log(time);
}

// ⏳this *tick* function runs the refresh function every second!⏳
const tick = () => setInterval(refresh, 1000);

// The tick function has to be invoked!
tick()