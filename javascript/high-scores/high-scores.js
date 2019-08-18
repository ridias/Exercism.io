//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this.points = scores
  }

  get scores() {
    return this.points
  }

  get latest() {
    return this.points[this.points.length - 1]
  }

  get personalBest() {
    return Math.max(...this.points)
  }

  get personalTopThree() {
    let p = [...this.points]
    return p.sort((a, b) => b - a).slice(0, 3)
  }
}
