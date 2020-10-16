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
  // for(let i = 0; i < 9; i++) {
  //   const rowSet = row(board)(i)
  //   const columnSet = column(board)(i)

  //   if(
  //     rowSet.size !== 9 ||
  //     columnSet.size !== 9 ||
  //     rowSet.has(0) ||
  //     columnSet.has(0)
  //   ) return false
  // }

  return true
}

const rowSet = board => {
  return index => {
    return board[index].reduce((rowSet, value) => {
      return rowSet.add(value)
    }, new Set())
  }
}

const columnSet = board => {
  return index => {
    return board.reduce((columnSet, row) => {
      return columnSet.add(row[index])
    }, new Set())
  }
}

const setOfSquares = board => {
  let squares = new Set()

  for(let i = 0; i < 7; i += 3) {
    for(let j = 0; j < 7; j += 3) {
      squares.add([
        board[i][j], board[i][j+1], board[i][j+2],
        board[i+1][j], board[i+1][j+1], board[i+1][j+2],
        board[i+2][j], board[i+2][j+1], board[i+2][j+2],
      ].reduce((set, value) => set.add(value), new Set()))
    }
  }

  return squares
}

const validSet = set => {
  return set.size === 9 && !set.has(0)
}



console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]), true);
  
console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]), false);

console.log(
  squaresSet([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ])
)