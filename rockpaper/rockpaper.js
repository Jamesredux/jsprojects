let playerWins = 0;
let computerWins = 0;
document.getElementById("playerScore").innerHTML = playerWins;
document.getElementById("computerScore").innerHTML = computerWins;



function computerPlay() {
			let choice = ''
			let compChoice = Math.floor(Math.random() * 3)
			switch (compChoice) {
				case 0:
				  choice = 'rock';
					break;	
				case 1:
				  choice = 'paper';
					break;
				case 2:
				  choice = 'scissors';

			}
			return choice
		}

//		function getPlayerSelection() {
//			const validChoices = ['rock', 'paper', 'scissors']
//			let selection = prompt("Please make your choice: rock, paper or scissors");
//			selection = selection.toLowerCase();
//			if (validChoices.includes(selection)) {
//				return selection;
//			}
//			else {
//				alert("That was not a valid selection")
//				return getPlayerSelection();
//			}	
//		}	

		function playRound(playerSelection, computerSelection) {
			let result = 'tie';
			if (playerSelection == computerSelection) {
				return result;
			}
			else {
				let playerWin = true;
				switch(playerSelection) {
					case 'rock':
						computerSelection == 'scissors' ? playerWin : playerWin = false
							break;
					case 'paper':
						computerSelection == 'rock' ? playerWin : playerWin = false
						break;
					case 'scissors':
						computerSelection == 'paper' ? playerWin : playerWin = false
						break;
					default:
						console.log("there was an error");

				}	
				if (playerWin)
					return result = 'win'
				else
					return result = 'lose'
			}
		}




  function playGame(e) {
  	const playerSelection = e.target.id;
  	const computerSelection = computerPlay();
  	const computerChoice = "The Computer chose " + computerSelection + ":    \n"
  	console.log(playerSelection);
  	console.log(computerSelection);

  	let result = playRound(playerSelection, computerSelection);
  	console.log(result);
  	let resultMessage = ""
  	resultMessage += computerChoice
  	if (result == 'win') {
  				console.log("You win " + playerSelection + " beats " + computerSelection);
  				resultMessage += "You win " + playerSelection + " beats " + computerSelection;
  				playerWins += 1;
  			}
  			else if (result == 'lose') {
  				console.log("You lose " + computerSelection + " beats " + playerSelection );
  				resultMessage += "You lose " + computerSelection + " beats " + playerSelection;	
  				computerWins += 1
  			}
  			else {
  				console.log("It's a tie!!!!")
  				resultMessage += "It's a tie!"
  			}
  			
  			updateScore(resultMessage);

  			if (playerWins > 4 || computerWins > 4) {
  				endGame();
  			}	
  }

  function endGame() {
  	let finalMessage = "Game over! ";
  	if (playerWins > 4) {
  		finalMessage += "You are the winner";
  	}
  	else {
  		finalMessage += "The computer has won";
  	}
  	const container = document.querySelector('#gamePlay');
  	const gameOver = document.createElement('div');
  	const newGame = document.createElement('BUTTON');
  	newGame.classList.add("newGame");
  	newGame.innerHTML = "NEW GAME";
  	newGame.type = "button";
  	newGame.onclick = reloadPage;
  	const btns =document.getElementById("btns");
  	gameOver.textContent = finalMessage;
  	gameOver.appendChild(newGame);
  	btns.parentNode.removeChild(btns);
  	container.appendChild(gameOver);


  }

  function reloadPage() {
  	console.log("reloadPage called");
  	location.reload();
  }



const buttons = document.querySelectorAll('#rock,#paper,#scissors');


function updateScore(resultMessage)  {
	document.querySelector("#playerScore").innerHTML = playerWins; // just showing both work
	document.getElementById("computerScore").innerHTML = computerWins;
	document.getElementById("resultMsg").innerHTML = resultMessage;
}
 
buttons.forEach((button) => {
	button.addEventListener('click', playGame);
});
