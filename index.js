
let guess;
let minNum = 1;
let maxNum = 100;
let attempts = 0;
let answer = Math.floor(Math.random() * maxNum - minNum + 1 );
document.getElementById("guess").onclick = function () {
     guess   =  document.getElementById("po1").value;


     
     
 
 
        guess = Number(guess);
if (isNaN(guess)) {
        document.getElementById("errormessage").innerText = ("please enter a valid number")
}
 else if(guess < minNum || guess > maxNum){
        document.getElementById("errormessage").innerText = ("please enter a valid number");
        
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
                        document.getElementById("errormessage").innerText = (`CORRECT! The answer was ${answer} it took you ${attempts}  attempt `) ;
                         running = false;
                }
   }
   }