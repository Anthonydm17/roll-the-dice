const prompt = require("prompt-sync")();

let sides = Number(prompt("Choose number of sides for your dice:  "));


if (sides > 2 ){
    console.log(rolldice());
}


function rolldice(){
    return 1 + Math.floor(Math.random()* sides);
}
for(let i = 0; i < 1; i++);