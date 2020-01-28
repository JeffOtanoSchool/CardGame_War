let playerArray = [];
let computerArray = [];

var dealButton = document.querySelector("#deal"),
nextButton = document.querySelector("#next");

dealButton.addEventListener("click",deal,false);
nextButton.addEventListener('click',next,false);
nextButton.style.display = 'none';


function deal(){
  Deck.load();
  let cardCount = 52;
  while(playerArray.length !== 26)
  {
    const random = Math.floor(Math.random() * cardCount);
    let nextPossibleCard = Deck.cardArray[random];
    if(!nextPossibleCard.inUse)
    {
      playerArray.push(nextPossibleCard);
      Deck.cardArray[random].inUse = true;
    }
  }

  for (const possibleCard of Deck.cardArray) {
  if(!possibleCard.inUse)
  {
    computerArray.push(possibleCard);
  }
}

  console.log(playerArray.length);
  console.log(computerArray.length);
  console.log(Deck);

  dealButton.style.display = 'none';
  nextButton.style.display = 'block';
}

function next(){
  


}