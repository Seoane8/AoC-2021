const inputPath = './dive/input.txt'

const resolve = lines => {
  let horizontal = 0
  let depth = 0
  let aim = 0

  const moves = {
    forward : units => { horizontal += units; depth += aim*units },
    down    : units => { aim += units },
    up      : units => { aim -= units }
  }

  lines
    .map(line => line.split(' '))
    .forEach(([move, units]) => moves[move](Number(units)))

  return horizontal * depth
}

export default {resolve, inputPath}