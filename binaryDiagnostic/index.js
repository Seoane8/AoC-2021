const inputPath = './binaryDiagnostic/input.txt'

const resolve = lines => {
  const mostCommonBits = []
  
  lines
    .map(line => line.split(''))
    .forEach(bits => {
      bits
        .forEach((bit, idx) => {
          mostCommonBits[idx] = mostCommonBits[idx] 
            ? mostCommonBits[idx] + Number(bit)
            : Number(bit)
        })
        
    })
  
  const gammaRate = mostCommonBits
    .map(bit => bit/lines.length > 0.5 ? 1 : 0)
    .join('')

  const epsilonRate = mostCommonBits
    .map(bit => bit/lines.length > 0.5 ? 0 : 1)
    .join('')

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

export default {resolve, inputPath}