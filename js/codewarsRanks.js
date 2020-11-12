const { min, max } = Math;

class User {
  constructor() {
    this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    this.rank = this.ranks[0];
    this.progress = 0;
  }

  index() {
    return this.ranks.indexOf(this.rank);
  }

  incRank() {
    if (this.progress >= 100) {
      const newIndex = min(max(0, this.index() + 1), 15);
      this.rank = this.ranks[newIndex];
      this.progress -= 100;
      this.incRank();
    }
    if (this.rank === 8) this.progress = 0;
  }

  incProgress(activity) {
    if (this.ranks.indexOf(activity) === -1) throw new Error(`${activity} is not a valid rank!`);

    const d = this.ranks.indexOf(activity) - this.index();
    if (d === 0) {
      this.progress += 3;
    } else if (d === -1) {
      this.progress += 1;
    } else if (d > 0) {
      this.progress += (10 * d * d);
    }

    this.incRank();
  }
}
