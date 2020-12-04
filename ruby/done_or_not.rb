require 'pry'

def done_or_not(board)
  rows_valid?(board) &&
    columns_valid?(board) &&
    squares_valid?(board) ?
      'Finished!' :
      'Try again!'
end

def rows_valid?(board)
  board.all? { |row| valid_set?(row) }
end

def columns_valid?(board)
  board.transpose.all? { |column| valid_set?(column) }
end

def squares_valid?(board)
  indexes = [0, 3, 6]
  squares = []

  indexes.each do |i|
    indexes.each do |j|
      squares << [
        board[i][j], board[i][j + 1], board[i][j + 2],
        board[i + 1][j], board[i + 1][j + 1], board[i + 1][j + 2],
        board[i + 2][j], board[i + 2][j + 1], board[i + 2][j + 2]
      ]
    end
  end
  squares.all? { |square| valid_set?(square) }
end

def valid_set?(set)
  set.sort.join == '123456789'
end

p done_or_not(
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]
)

p done_or_not(
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]
)
