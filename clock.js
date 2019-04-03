let time = 0;
let paused = false;

const ticker = document.getElementById('ticker');
const playToggleBtn = document.getElementById('pause');

playToggleBtn.addEventListener('click', () =>console.log('clicked'));
//anonymous functions don't have a name after function
const draw = () => {
time++;
console.log(time);
ticker.innerHTML = time;
}

//implicit return
/*
same as:
function tick(){
return 'something'
}
*/
const tick = () => setInterval(draw, 1000);
tick();