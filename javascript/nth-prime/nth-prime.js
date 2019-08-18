//
// This is only a SKELETON file for the 'nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Prime {
  nth(num) {
    if(num <= 0){ throw new Error("Prime is not possible")}
    let arr = []
    for(let i = 2; arr.length < num; i++){
      if(isPrime(i)){ arr.push(i)}
    }
    return arr[arr.length - 1]
  }
}

function isPrime(num){
  for(let i = 2; i * i <= num; i++){
    if(num % i == 0){ return false }
  }
  return true
}
