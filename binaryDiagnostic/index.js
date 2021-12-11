const inputPath = './binaryDiagnostic/input.txt'

const calculateBitSum = (bitsList, idx) => {
  return bitsList
    .map(bits => Number(bits[idx]))
    .reduce((sum, bit) => sum + bit, 0)
}

const resolve = lines => {
  const binaryNumLength = lines[0].length
  let oxygenRatingCandidates = [...lines]
  let i = 0;
  
  while (oxygenRatingCandidates.length > 1 && i < binaryNumLength) {
    const sumBits = calculateBitSum(oxygenRatingCandidates, i)

    const mostCommonBit = 
      sumBits / oxygenRatingCandidates.length < 0.5 ? 0 : 1

    oxygenRatingCandidates = oxygenRatingCandidates
      .filter(bits => Number(bits[i]) === mostCommonBit)

    i++
  }


  let CO2RatingCandidates = [...lines]
  i = 0;
  
  while (CO2RatingCandidates.length > 1 && i < binaryNumLength) {
    const sumBits = calculateBitSum(CO2RatingCandidates, i)

    const leastCommonBit = 
      sumBits / CO2RatingCandidates.length < 0.5 ? 1 : 0

      CO2RatingCandidates = CO2RatingCandidates
      .filter(bits => Number(bits[i]) === leastCommonBit)

    i++
  }

  const oxygenRating = parseInt(oxygenRatingCandidates.pop(), 2)
  const CO2Rating = parseInt(CO2RatingCandidates.pop(), 2)

  return oxygenRating * CO2Rating
}

export default {resolve, inputPath}