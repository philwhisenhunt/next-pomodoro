const workTime = 30;
const breakTime = 115;
let time = 0;
let paused = false;
let working = true;


const status = document.getElementById("status");

const ticker = document.getElementById('ticker');
const playToggleBtn = document.getElementById('pause');

playToggleBtn.addEventListener('click', () => {
    paused = !paused;
});
//anonymous functions don't have a name after function
const draw = () => {
    if(!paused){
        if(working){
            if(time >= workTime){
                working = false;
                time = 0;
            }
        } else{
            if(time >= breakTime){
                working = true;
                time = 0;
            }
        }
        time++;
        //if true, first thing, otherwise second thing
        status.innerHTML = working ? "Keep Working" : "Take Break";
        ticker.innerHTML = time;
    }

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