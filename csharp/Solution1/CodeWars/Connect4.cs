using System;

namespace CodeWars
{
    public class Connect4
    {
        public Connect4()
        {
            GameBoard = new Board();
        }

        private bool GameIsOver;
        private Player CurrentPlayer = Player.Red;
        private Board GameBoard;

        private enum Player
        {
            Empty = 0,
            Red = 1,
            Black = 2,
        }

        public string play(int column)
        {
            if (GameIsOver) return "Game has finished!";
            try
            {
                GameBoard.Add(CurrentPlayer, column);
                return GameBoard.HasWinner(CurrentPlayer)
                    ? EndGame()
                    : NextTurn();
            }
            catch (ArgumentException e)
            {
                return e.Message;
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        private string EndGame()
        {
            GameIsOver = true;
            return $"Player {(int) CurrentPlayer} wins!";
        }


        private string NextTurn()
        {
            try
            {
                return $"Player {(int) CurrentPlayer} has a turn";
            }
            finally
            {
                CurrentPlayer = CurrentPlayer == Player.Red ? Player.Black : Player.Red;
            }
        }

        private class Board
        {
            private const int Rows = 6;
            private const int Columns = 7;
            private Player[,] board { get; set; }

            public Board()
            {
                NewBoard();
            }

            private void NewBoard()
            {
                board = new Player[Rows, Columns];
                for (var row = 0; row < Rows; row++)
                for (var column = 0; column < Columns; column++)
                    board[row, column] = Player.Empty;
            }

            public void Add(Player disc, int column)
            {
                if (ColumnIsFull(column)) throw new ArgumentException("Column full!");

                var row = 0;
                while (row < Rows - 1 && board[row + 1, column] == Player.Empty)
                    row++;

                board[row, column] = disc;
            }

            private bool ColumnIsFull(int column) => board[0, column] != Player.Empty;

            public bool HasWinner(Player disc)
            {

                for (var i = 0; i < Rows; i++)
                for (var j = 0; j < Columns - 3; j++)
                    if (board[i, j] == disc && board[i, j + 1] == disc && board[i, j + 2] == disc &&
                        board[i, j + 3] == disc)
                        return true;

                for (var i = 0; i < Rows - 3; i++)
                for (var j = 0; j < Columns; j++)
                    if (board[i, j] == disc && board[i + 1, j] == disc && board[i + 2, j] == disc &&
                        board[i + 3, j] == disc)
                        return true;

                for (var i = 3; i < Rows; i++)
                for (var j = 0; j < Columns - 3; j++)
                    if (board[i, j] == disc && board[i - 1, j + 1] == disc && board[i - 2, j + 2] == disc &&
                        board[i - 3, j + 3] == disc)
                        return true;

                for (var i = 3; i < Rows; i++)
                for (var j = 3; j < Columns; j++)
                    if (board[i, j] == disc && board[i - 1, j - 1] == disc && board[i - 2, j - 2] == disc &&
                        board[i - 3, j - 3] == disc)
                        return true;
                
                return false;
            }
        }
    }
}