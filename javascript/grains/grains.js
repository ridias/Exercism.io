//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import bigInt from './lib/big-integer';

export class Grains {
  square(num) {
    let result = bigInt(2).pow(num-1).toString()
    return result
  }

  total() {
    let sum = "0"
    for(let i = 0; i < 64; i++){
      sum = bigInt(bigInt(2).pow(i)).add(sum).toString()
    }
    return sum
  }
}
