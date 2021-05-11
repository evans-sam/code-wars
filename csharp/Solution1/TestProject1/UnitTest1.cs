using CodeWars;
using NUnit.Framework;

namespace TestProject1
{
    [TestFixture]
    class SnakesLaddersTests
    {
        private readonly SnakesLadders test = new SnakesLadders();

        [TestCase]
        public void BasicTest1()
        {
            string result = test.play(1, 1);
            Assert.AreEqual("Player 1 is on square 38",result, "Should return: 'Player 1 is on square 38'");
        }

        [TestCase]
        public void BasicTest2()
        {
            string result = test.play(1, 5);
            Assert.AreEqual("Player 1 is on square 44",result, "Should return: 'Player 1 is on square 44'");
        }

        [TestCase]
        public void BasicTest3()
        {
            string result = test.play(6, 2);
            Assert.AreEqual("Player 2 is on square 31",result, "Should return: 'Player 2 is on square 31'");
        }

        [TestCase]
        public void BasicTest4()
        {
            string result = test.play(1, 1);
            Assert.AreEqual("Player 1 is on square 25", result, "Should return: 'Player 1 is on square 25'");
        }
    }
}