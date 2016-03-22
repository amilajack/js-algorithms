// You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.
//
// Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.
//
// For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.

(function() {

  const assertEquals = (number, numberToEqual) =>
    console.log(number === numberToEqual)

  const setCurrent = (currentPlayer) => {
    this.player = currentPlayer
  }

  // Determine who's the current user
  // If even, user is oponent
  let playerIsOponent = (turnCount) => turnCount / 2 % 1 === 0

  let subtractOptimalAmount = function(itemAmount, turnCount) {

    if (itemAmount >= 3) {
      return itemAmount = itemAmount - 3
    }

    if (itemAmount === 2) {
      return itemAmount = itemAmount - 2
    }

    if (itemAmount === 1) {
      return itemAmount = itemAmount - 1
    }
  }

  let beadsCount = 10
  let turnCount = 0

  while (beadsCount > 0) {

    turnCount = turnCount + 1
    beadsCount = subtractOptimalAmount(beadsCount, turnCount)

    if (!playerIsOponent(turnCount)) {
      console.log(`your beads: ${beadsCount}`)
    }
    else {
      console.log(`opponent beads: ${beadsCount}`)
    }

    if (beadsCount === 0) {

      if (playerIsOponent(turnCount)) {
        throw Error('LOST!')
      }
      else {
        throw Error('You won!')
      }
    }
  }
})()
