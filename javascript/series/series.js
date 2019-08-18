//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(numbers) {
    this.numbers = numbers
  }

  get digits() {
    let result = []
    for(let i = 0 ;i < this.numbers.length; i++) result.push(parseInt(this.numbers[i]))
    return result
  }

  slices(num) {
    if(num > this.digits.length) throw new Error("Slice size is too big.")
    let result = []
    for(let i = 0; i <= this.digits.length - num; i++){
      result.push(this.digits.slice(i, i + num))
    }
    return result
  }
}
