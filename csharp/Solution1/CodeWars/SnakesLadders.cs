namespace CodeWars
{
    public class SnakesLadders
    {
        public SnakesLadders()
        {
            Player1 = new Player("1");
            Player2 = new Player("2");
            Shooter = Player1;
        }

        private Player Shooter;
        private readonly Player Player1;
        private readonly Player Player2;
        private bool GameOver;

        public string play(int die1, int die2)
        {
            try
            {
                if (GameOver) return "Game over!";
                Shooter.Roll(die1, die2);
                return Shooter.IsWinner()
                    ? $"Player {Shooter.Name} Wins!"
                    : $"Player {Shooter.Name} is on square {Shooter.Position}";
            }
            finally
            {
                NextTurn();
            }
        }

        private void NextTurn()
        {
            if (Shooter.IsWinner()) GameOver = true;
            if (Dice.IsDoubles) return;
            Shooter = Shooter == Player1 ? Player2 : Player1;
        }

        private class Player
        {
            public Player(string name) => Name = name;
            public string Name { get; }
            public int Position { get; private set; }

            public void Roll(int die1, int die2)
            {
                Dice.Roll(die1, die2);
                Move();
            }

            public bool IsWinner() => Position == 100;

            private void Move()
            {
                var newPosition = Position + Dice.Total;
                Position = newPosition > 100 ? 100 - (newPosition - 100) : newPosition;
                Position = SnakesOrLadders(Position);
            }

            private static int SnakesOrLadders(int space) =>
                space switch
                {
                    2 => 38,
                    7 => 14,
                    8 => 31,
                    15 => 26,
                    16 => 6,
                    21 => 42,
                    28 => 84,
                    36 => 44,
                    46 => 25,
                    49 => 11,
                    51 => 67,
                    62 => 19,
                    64 => 60,
                    71 => 91,
                    74 => 53,
                    78 => 98,
                    87 => 94,
                    89 => 68,
                    92 => 88,
                    95 => 75,
                    99 => 80,
                    _ => space,
                };
        }

        private static class Dice
        {
            private static int _die1;
            private static int _die2;
            public static int Total => _die1 + _die2;
            public static bool IsDoubles => _die1 == _die2;

            public static void Roll(int die1, int die2)
            {
                _die1 = die1;
                _die2 = die2;
            }
        }
    }
}