const inputPath = './giantSquib/input.txt'

const processLines = lines => {
  const numbers = lines.shift().split(',').map(num => Number(num))
  let boards = []
  let board = []
  lines.forEach(line => {
    if (line === '' && board.length !== 0) boards = [...boards, board]
    if (line === '') {
      board = []
      return
    }

    const formatedLine = line.split(/\s/)
      .filter(num => num.trim())
      .filter(num =>  num !== '')
      .map(num => ({value: Number(num), marked: false}))

    board = [...board, formatedLine]
  })

  return {numbers, boards}
}

const markNumbers = (board, num) => {
  let markedNumbers = []
  board.forEach((line, y) => {
    line.forEach((number, x) => {
      if (number.value === num) {
        number.marked = true
        markedNumbers = [...markedNumbers, {x,y}]
      }
    })
  })
  return markedNumbers
}

const isBingo = (board, number) => {
  const markedNumbers = markNumbers(board, number)
  for (const {x,y} of markedNumbers) {
    const bingo = testCol(x,board) || testLine(y,board)
    if (bingo) return true
  }
  return false
}

const testCol = (col, board) => {
  for (const line of board) {
    if (!line[col].marked) return false
  }
  return true
}

const testLine = (line, board) => {
  for (const {marked, _} of board[line]){
    if (!marked) return false
  }
  return true
}

const sumUnmarked = board => {
  let sum = 0
  board.forEach(line => {
    line.forEach(({value, marked}) => {
      if (!marked) sum += value
    })
  })
  return sum
}

const resolve = lines => {
  const {numbers, boards} = processLines(lines)

  for (const number of numbers) {
    for (const board of boards) {
      if (!isBingo(board, number)) continue
      return number * sumUnmarked(board)
    }
  }
}

export default {resolve, inputPath}