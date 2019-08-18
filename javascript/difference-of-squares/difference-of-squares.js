//
// This is only a SKELETON file for the 'Difference of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.num = num
  }

  get sumOfSquares() {
    let sum = 0
    for(let i = 1; i <= this.num; i++) sum += (i ** 2)
    return sum
  }

  get squareOfSum() {
    let sum = 0
    for(let i = 1; i <= this.num; i++) sum += i
    return sum ** 2
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
