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
