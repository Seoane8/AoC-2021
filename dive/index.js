const inputPath = './dive/input.txt'

const resolve = lines => {
  const movesCounter = {
    forward : 0,
    down    : 0,
    up      : 0
  }

  lines
    .map(line => line.split(' '))
    .forEach(([move, units]) => movesCounter[move] += Number(units))

  const partOne = movesCounter.forward * (movesCounter.down - movesCounter.up)
  const partTwo = null

  return {partOne, partTwo}
}

export default {resolve, inputPath}