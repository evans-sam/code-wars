function getPINs(observed) {
  observed = observed.split('')
  let result = layout[observed.shift()]

  observed.forEach(element => {
    result = result.map(entry => {
      return layout[element].map(possibility => {
        return entry + possibility
      })
    }).reduce((result, element) => result.concat(element), [])
  })

  return result
}

const layout = {
  "1": ["1", "2", "4"],
  "2": ["1", "2", "3", "5"],
  "3": ["2", "3", "6"],
  "4": ["1", "4", "5", "7"],
  "5": ["2", "4", "5", "6", "8"],
  "6": ["3", "5", "6", "9"],
  "7": ["4", "7", "8"],
  "8": ["5", "7", "8", "9", "0"],
  "9": ["6", "8", "9"],
  "0": ["8", "0"],
}

const validSolution = board => {
  const solution = '123456789'

  const attempts = [...rows(board), ...columns(board), ...squares(board)]

  for(const attempt of attempts)
    if(attempt !== solution) return false

  return true
}


const rows = board => {
  return board.map(row => [...row].sort().join(''))
}

const columns = board => {
  return board.map((_row, index) => {
    return board.map(row => {
      return row[index]
    }).sort().join('')
  })
}

const squares = board => {
  let squares = []

  for(let i = 0; i < 7; i += 3) {
    for(let j = 0; j < 7; j += 3) {
      const squareString = [
        board[i][j], board[i][j+1], board[i][j+2],
        board[i+1][j], board[i+1][j+1], board[i+1][j+2],
        board[i+2][j], board[i+2][j+1], board[i+2][j+2],
      ].sort().join('')

      squares.push(squareString)
    }
  }

  return squares
}
