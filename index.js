 // get player name from localStorage
    const playerName = localStorage.getItem("playerName") || "Player";
    document.getElementById("myh1").textContent = "Hello, " + playerName + " 👋";





let guess;
let minNum = 1;
let maxNum = 100;
let attempts = 0;
let answer = Math.floor(Math.random() * maxNum - minNum + 1 );


document.getElementById("guess").onclick = function () {
     guess   =  document.getElementById("po1").value;
    let maxattempts = 10;
        guess = Number(guess);
if (isNaN(guess)) {
        document.getElementById("errormessage").innerText = ("please enter a valid number")
}
 else if(guess < minNum || guess > maxNum){
        document.getElementById("errormessage").innerText = ("please enter a valid number");
        
}
else if (attempts === maxattempts) {
                document.getElementById("guess").innerText = ("Oops out of guess, Refresh the game to try again")
        }

   else{
        attempts++;
        if (guess < answer) {
                document.getElementById("errormessage").innerText = ("Too low! Try again");
                
        }
        else if (guess > answer) {
                        document.getElementById("errormessage").innerText =("Too high! Try again");
                }
        
                else{
                 document.getElementById("errormessage").innerText = (` 🎉 Congrats, you nailed it!🔥 The answer was ${answer} it took you ${attempts}  attempt “🥳 Congrats, Sherlock!`) ; 
                }
       
   }
    if (guess == answer) {
        document.getElementById("guess").innerText = ("you won, Refresh the game to play again")
         running = false;
}
   }