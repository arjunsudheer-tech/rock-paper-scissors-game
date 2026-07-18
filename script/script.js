const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if(playerMove === 'rock') {
    if(computerMove === 'rock') {
      result = 'Tie';
    } else if(computerMove === 'paper') {
      result = 'You Lose';
    } else if(computerMove === 'scissors') {
      result = 'You Win';
    }
  }

  else if(playerMove === 'paper') {
    if(computerMove === 'rock') {
      result = 'You Win';
    } else if(computerMove === 'paper') {
      result = 'Tie';
    } else if(computerMove === 'scissors') {
      result = 'You Lose';
    }
  }

  else if(playerMove === 'scissors') {
    if(computerMove === 'rock') {
      result = 'You Lose';
    } else if(computerMove === 'paper') {
      result = 'You Win';
    } else if(computerMove === 'scissors') {
      result = 'Tie';
    }
  }

  if(result === 'You Win') {
    score.wins++;
  } else if(result === 'You Lose') {
    score.losses++;
  } else if(result === 'Tie') {
    score.ties++;
  }

  const finalResult = document.querySelector('.js-result');
  finalResult.innerHTML = result;

  finalResult.classList.remove('green' , 'red' , 'gray');

  if(result === 'You Win') {
    finalResult.classList.add('green');
  } else if(result === 'You Lose') {
    finalResult.classList.add('red');
  } else if(result === 'Tie') {
    finalResult.classList.add('gray');
  }


  document.querySelector('.js-move')
    .innerHTML = 
    `You
      <img class="move-icon" src="images/${playerMove}-emoji.png">
      <img class="move-icon" src="images/${computerMove}-emoji.png">
    Computer`;

  updateScore();
    
  localStorage.setItem('score',JSON.stringify(score));
  }
  
  function updateScore() {
    document.querySelector('.js-score') 
      .innerHTML = `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties}`;

    const gameCount = score.wins + score.losses + score.ties;
    const winPercentage = (gameCount === 0 ) ? 0 : Math.round((score.wins / gameCount) * 100);

    document.querySelector('.js-game-count')
      .innerHTML = `Game Count : ${gameCount}`;

    document.querySelector('.js-win-percentage')
      .innerHTML = `Win Percentage : ${winPercentage}%`;
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

function resetButton() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  updateScore();
  localStorage.setItem('score',JSON.stringify(score));
}