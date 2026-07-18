function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if(playerMove === 'rock') {
    if(computerMove === 'rock') {
      result = 'Tie';
      console.log(result);
    } else if(computerMove === 'paper') {
      result = 'You Lose';
      console.log(result);
    } else if(computerMove === 'scissors') {
      result = 'You Win';
      console.log(result);
    }
  }

  else if(playerMove === 'paper') {
    if(computerMove === 'rock') {
      result = 'You Win';
      console.log(result);
    } else if(computerMove === 'paper') {
      result = 'Tie';
      console.log(result);
    } else if(computerMove === 'scissors') {
      result = 'You Lose';
      console.log(result);
    }
  }

  else if(playerMove === 'scissors') {
    if(computerMove === 'rock') {
      result = 'You Lose';
      console.log(result);
    } else if(computerMove === 'paper') {
      result = 'You Win';
      console.log(result);
    } else if(computerMove === 'scissors') {
      result = 'Tie';
      console.log(result);
    }
  }

}


function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}