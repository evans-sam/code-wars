using CodeWars;
using NUnit.Framework;

namespace TestProject1
{
    [TestFixture]
    class Connect4Tests
    {
        private Connect4 test1 = new CodeWars.Connect4();
        private Connect4 test2 = new CodeWars.Connect4();
        private Connect4 test3 = new CodeWars.Connect4();
        private Connect4 test4 = new CodeWars.Connect4();
        
        // Test 1
        [TestCase]
        public void BasicTest1a()
        {
            Assert.AreEqual("Player 1 has a turn", test1.play(0), "Should return: 'Player 1 has a turn'");
        }
        [TestCase]
        public void BasicTest1b()
        {
            Assert.AreEqual("Player 2 has a turn", test1.play(0), "Should return: 'Player 2 has a turn'");
        }
        
        // Test 2
        [TestCase]
        public void BasicTest2a()
        {
            Assert.AreEqual("Player 1 has a turn", test2.play(0), "Should return: 'Player 1 has a turn'");
        }
        [TestCase]
        public void BasicTest2b()
        {
            Assert.AreEqual("Player 2 has a turn", test2.play(1), "Should return: 'Player 2 has a turn'");
        }
        [TestCase]
        public void BasicTest2c()
        {
            Assert.AreEqual("Player 1 has a turn", test2.play(0), "Should return: 'Player 1 has a turn'");
        }
        [TestCase]
        public void BasicTest2d()
        {
            Assert.AreEqual("Player 2 has a turn", test2.play(1), "Should return: 'Player 2 has a turn'");
        }
        [TestCase]
        public void BasicTest2e()
        {
            Assert.AreEqual("Player 1 has a turn", test2.play(0), "Should return: 'Player 1 has a turn'");
        }
        [TestCase]
        public void BasicTest2f()
        {
            Assert.AreEqual("Player 2 has a turn", test2.play(1), "Should return: 'Player 2 has a turn'");
        }
        [TestCase]
        public void BasicTest2g()
        {
            Assert.AreEqual("Player 1 wins!", test2.play(0), "Should return: 'Player 1 wins!'");
        }
        
        // Test 3
        [TestCase]
        public void BasicTest3a()
        {
            Assert.AreEqual("Player 1 has a turn", test3.play(4), "Should return: 'Player 1 has a turn'");
        }
        [TestCase]
        public void BasicTest3b()
        {
            Assert.AreEqual("Player 2 has a turn", test3.play(4), "Should return: 'Player 2 has a turn'");
        }
        [TestCase]
        public void BasicTest3c()
        {
            Assert.AreEqual("Player 1 has a turn", test3.play(4), "Should return: 'Player 1 has a turn'");
        }
        [TestCase]
        public void BasicTest3d()
        {
            Assert.AreEqual("Player 2 has a turn", test3.play(4), "Should return: 'Player 2 has a turn'");
        }
        [TestCase]
        public void BasicTest3e()
        {
            Assert.AreEqual("Player 1 has a turn", test3.play(4), "Should return: 'Player 1 has a turn'");
        }
        [TestCase]
        public void BasicTest3f()
        {
            Assert.AreEqual("Player 2 has a turn", test3.play(4), "Should return: 'Player 2 has a turn'");
        }
        [TestCase]
        public void BasicTest3g()
        {
            Assert.AreEqual("Column full!", test3.play(4), "Should return: 'Column full!'");
        }


        // Test 4
        [TestCase]
        public void BasicTest4a()
        {
            Assert.AreEqual("Player 1 has a turn", test4.play(1), "Should return: 'Player 1 has a turn'");
        }
        [TestCase]
        public void BasicTest4b()
        {
            Assert.AreEqual("Player 2 has a turn", test4.play(1), "Should return: 'Player 2 has a turn'");
        }
        [TestCase]
        public void BasicTest4c()
        {
            Assert.AreEqual("Player 1 has a turn", test4.play(2), "Should return: 'Player 1 has a turn'");
        }
        [TestCase]
        public void BasicTest4d()
        {
            Assert.AreEqual("Player 2 has a turn", test4.play(2), "Should return: 'Player 2 has a turn'");
        }
        [TestCase]
        public void BasicTest4e()
        {
            Assert.AreEqual("Player 1 has a turn", test4.play(3), "Should return: 'Player 1 has a turn'");
        }
        [TestCase]
        public void BasicTest4f()
        {
            Assert.AreEqual("Player 2 has a turn", test4.play(3), "Should return: 'Player 2 has a turn'");
        }
        [TestCase]
        public void BasicTest4g()
        {
            Assert.AreEqual("Player 1 wins!", test4.play(4), "Should return: 'Player 1 wins!'");
        }
        [TestCase]
        public void BasicTest4h()
        {
            Assert.AreEqual("Game has finished!", test4.play(4), "Should return: 'Game has finished!'");
        }

    }
}
