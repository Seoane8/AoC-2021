const inputPath = './sonarSweep/input.txt'

const resolve = lines => {
  let partOne = 0
  let partTwo = 0

  const measures = lines.map(line => Number(line))

  for (let i = 1; i < measures.length; i++) {
    const anterior = measures[i-1]
    const actual = measures[i]
  
    anterior < actual && partOne++
  }

  for (let i = 3; i < measures.length; i++) {
    const minus3 = measures[i-3]
    const minus2 = measures[i-2]
    const minus1 = measures[i-1]
    const minus0 = measures[i-0]

    const anterior = minus3 + minus2 + minus1
    const actual = minus2 + minus1 + minus0
  
    anterior < actual && partTwo++
  }

  return {partOne, partTwo}
}

export default {resolve, inputPath}