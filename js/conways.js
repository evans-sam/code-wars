function GameOfLife() {
  this.init = function (turns, width, height) {
    this.board = new Array(height);
    for (let x = 0; x < height; x++) {
      this.board[x] = new Array(width);
      for (let y = 0; y < width; y++) {
        this.board[x][y] = Math.round(Math.random());
      }
    }
    this.turns = turns;
  };

  this.nextGen = function () {
    this.boardNext = new Array(this.board.length);
    for (let i = 0; i < this.board.length; i++) {
      this.boardNext[i] = new Array(this.board[i].length);
    }
    for (let x = 0; x < this.board.length; x++) {
      for (let y = 0; y < this.board[x].length; y++) {
        let n = 0;
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (dx == 0 && dy == 0) {} else if (typeof this.board[x + dx] !== 'undefined'
								&& typeof this.board[x + dx][y + dy] !== 'undefined'
								&& this.board[x + dx][y + dy]) {
              n++;
            }
          }
        }
        let c = this.board[x][y];
        switch (n) {
          case 0:
          case 1:
            c = 0;
            break;
          case 2:
            break;
          case 3:
            c = 1;
            break;
          default:
            c = 0;
        }
        this.boardNext[x][y] = c;
      }
    }
    this.board = this.boardNext.slice();
  };

  this.print = function () {
    for (let x = 0; x < this.board.length; x++) {
      let l = '';
      for (let y = 0; y < this.board[x].length; y++) {
        if (this.board[x][y]) l += 'X';
        else l += ' ';
      }
      console.log(l);
    }
  };

  this.start = function () {
    for (let t = 0; t < this.turns; t++) {
      console.log(`---\nTurn ${t + 1}`);
      this.print();
      this.nextGen();
    }
  };
}

const game = new GameOfLife();

console.log('---\n3x3 Blinker over three turns.');
game.init(3);
game.board = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0]];
game.start();

console.log('---\n10x6 Glider over five turns.');
game.init(5);
game.board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
game.start();

console.log('---\nRandom 5x10');
game.init(5, 5, 10);
game.start();
