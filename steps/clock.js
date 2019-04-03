let time = 0;

//anonymous functions don't have a name after function
const draw = () => {
time++;
console.log(time);
}

//implicit return
/*
same as:
function tick(){
return 'something'
}
*/
const tick = () => 'something'
