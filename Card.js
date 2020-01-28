const suit = [
  { Suit: "Clubs", Value: 1 },
  { Suit: "Diamonds", Value: 2 },
  { Suit: "Hearts", Value: 3 },
  { Suit: "Spades", Value: 4 }
];

const rank = [
  { Face: "Ace", Value: 14 },
  { Face: "King", Value: 13 },
  { Face: "Queen", Value: 12 },
  { Face: "Jack", Value: 11 },
  { Face: "Ten", Value: 10 },
  { Face: "Nine", Value: 9 },
  { Face: "Eight", Value: 8 },
  { Face: "Seven", Value: 7 },
  { Face: "Six", Value: 6 },
  { Face: "Five", Value: 5 },
  { Face: "Four", Value: 4 },
  { Face: "Three", Value: 3 },
  { Face: "Two", Value: 2 }
];

const Card = function(suit, rank) {
  this.suit = suit;
  this.rank = rank;
  this.inUse = false;
};
