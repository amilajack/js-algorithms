// create a deck of cards with numbers 1 - 52
// shuffle deck, distribute
// each player has deck and scoringPile
// each player take item from deck, compare, add to corrresponding scoringPile

import shuffle from 'lodash/shuffle';

// if more than 2 players
// need to change how we distribute cards
// use objects instead of defined object literals
// if any player runs out of cards, end the game

export default function simulateWar() {
  let cards = new Array(52);
  const player1 = { cards: [], scoringPile: [] };
  const player2 = { cards: [], scoringPile: [] };
  for (let i = 0; i < cards.length; i++) {
    cards[i] = i + 1;
  }
  cards = shuffle(cards);
  // add cards to deck
  for (let i = 0; i < cards.length / 2; i++) {
    player1.cards.push(cards[i]);
    player2.cards.push(cards[i + 26]);
  }
  // simulate
  for (let i = 0; i < cards.length / 2; i++) {
    const p1Card = player1.cards.pop();
    const p2Card = player2.cards.pop();
    if (p1Card > p2Card) {
      player1.scoringPile.push(p1Card);
      player1.scoringPile.push(p2Card);
    } else {
      player2.scoringPile.push(p1Card);
      player2.scoringPile.push(p2Card);
    }
  }
  if (player1.scoringPile.length === player2.scoringPile.length) {
    return console.log('tie');
  }
  if (player1.scoringPile.length > player2.scoringPile.length) {
    return console.log('player 1 won');
  }
  return console.log('player2 won');
}
