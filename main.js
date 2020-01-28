let playerArray = [];
let computerArray = [];
let cardPlace = 0;
let playerScore = 0;
let computerScore = 0;

var dealButton = document.querySelector("#deal"),
  nextButton = document.querySelector("#next");

dealButton.addEventListener("click", deal, false);
nextButton.addEventListener("click", next, false);
nextButton.style.display = "none";

function deal() {
  Deck.load();
  const cardCount = 52;
  while (playerArray.length !== 26) {
    const random = Math.floor(Math.random() * cardCount);
    let nextPossibleCard = Deck.cardArray[random];
    if (!nextPossibleCard.inUse) {
      playerArray.push(nextPossibleCard);
      Deck.cardArray[random].inUse = true;
    }
  }

  for (const possibleCard of Deck.cardArray) {
    if (!possibleCard.inUse) {
      computerArray.push(possibleCard);
    }
  }

  dealButton.style.display = "none";
  nextButton.style.display = "block";
}

function next() {
  if (cardPlace < 26) {
    displayTurnNumber();
    const currentPlayerCard = playerArray[cardPlace];
    const currentComputerCard = computerArray[cardPlace];

    displayCards(currentPlayerCard, currentComputerCard);
    calculateWinner(currentPlayerCard, currentComputerCard);
    cardPlace++;
  } else {
    resetGame();
  }
}

function displayTurnNumber(reset) {
  if (reset) {
    document.getElementById("turnNumber").innerHTML = 0;
    return;
  }
  document.getElementById("turnNumber").innerHTML = cardPlace + 1;
}

function displayCards(playerCard, computerCard) {
  if (playerCard === undefined && computerCard === undefined) {
    document.getElementById("playerCard").innerHTML = "";
    document.getElementById("computerCard").innerHTML = "";
    return;
  }

  setCardColor(playerCard, "playerCard");
  document.getElementById("playerCard").innerHTML =
    playerCard.rank.Face + " of " + playerCard.suit.Suit;
  setCardColor(computerCard, "computerCard");
  document.getElementById("computerCard").innerHTML =
    computerCard.rank.Face + " of " + computerCard.suit.Suit;
}

function setCardColor(card, id) {
  if (card.suit.Value === 1 || card.suit.Value === 2) {
    document.getElementById(id).style.color = "red";
  } else {
    document.getElementById(id).style.color = "black";
  }
}

function calculateWinner(playerCard, computerCard) {
  if (playerCard.rank.Value > computerCard.rank.Value) {
    playerScore++;
    displayScores(playerScore, computerScore, "won");
  } else if (playerCard.rank.Value === computerCard.rank.Value) {
    if (playerCard.suit.Value > computerCard.suit.Value) {
      playerScore++;
      displayScores(playerScore, computerScore, "won");
    } else {
      computerScore++;
      displayScores(playerScore, computerScore, "lost");
    }
  } else {
    computerScore++;
    displayScores(playerScore, computerScore, "lost");
  }
}

function displayScores(playerScore, computerScore, outcome) {
  if (playerScore === undefined && computerScore === undefined) {
    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;
    document.getElementById("outcome").innerHTML = "";
    return;
  }

  if (cardPlace === 25) {
    document.getElementById("outcome").innerHTML =
      playerScore > computerScore
        ? "YOU WON!"
        : playerScore === computerScore
        ? "It was a tie :("
        : "YOU LOST!";
  } else {
    document.getElementById("outcome").innerHTML =
      "You " + outcome + " this hand.";
  }
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  cardPlace = 0;
  displayCards();
  displayScores();
  displayTurnNumber(true);

  dealButton.style.display = "block";
  nextButton.style.display = "none";
}
