const prompt = require("prompt-sync")();
let roll = (prompt("Welcome, type roll or r to generate: "));


if (roll = "r" || "roll"){
    console.log(rolldice());
}


function rolldice(){
    return 1 + Math.floor(Math.random()* 6);
}
for(let i = 0; i < 1; i++);


