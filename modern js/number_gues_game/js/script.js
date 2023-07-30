
let low = 1;
let high = 10;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  let randomNumber = getRandomIntInclusive(low,high);
  console.log(randomNumber);

  const playBtn = document.getElementById("gameBtn");
  playBtn.addEventListener("click", gameStart);

  const resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", resetGame);

  function disablePlayBtn() {
      playBtn.disabled = true;
  }

   function enablePlayBtn() {
      playBtn.disabled = false;
   }



  function gameStart() {
      const maxAttempts = 3;
      let failedAttempts = 0;

      for(i=1; i<= maxAttempts; i++) {
         let guess1 = prompt("Enter the number you guess:");
         if (guess1 !== null) {
               let guessNumber = parseInt(guess1);
               if (isNaN(guessNumber)) {
                  alert("Please enter a valid number.");
               } else {
                  if (guessNumber === randomNumber) {
                        alert("Congratulations! You Win.");
                        disablePlayBtn();
                        break;
                  } 
                  else if (guessNumber > randomNumber) {
                        alert(`Correct answer is smaller!`);
                  }
                  else if (guessNumber < randomNumber) {
                     alert(`Correct answer is greater!`);
                  }

                  failedAttempts++;
                  if (failedAttempts === maxAttempts) {
                        alert("You lose. You reached maximum attempts.");
                        disablePlayBtn();
                  }
               }
            }
      }
}

function resetGame() {
   failedAttempts = 0;
   randomNumber = getRandomIntInclusive(low, high);
   enablePlayBtn();
}




