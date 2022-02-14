const prompt = require("prompt-sync")();

let sides = Number(prompt("Choose number of sides for your dice(limit 100):  "));


function rolldice(){
        let result = Math.floor(Math.random()* sides);
        if (result < 10 ){
            return (6);
        }else if (result > 20 && result < 101)
            return result;
        else (
            console.log("Not a valid selection")
        )

}for(let i = 0; i < 10; i++){
    if (i === 20){
        break;
    }console.log("You rolled a: " + rolldice());
    
} 



