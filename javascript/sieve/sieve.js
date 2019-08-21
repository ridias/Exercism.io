//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (n) => {
  let array = new Array(n+1).fill(true)
  let i = 2
  let result = []
  array[0] = false
  array[1] = false
  while(i < array.length){
    if(array[i] == true){
      result.push(i)
      for(let j = i+i; j < array.length; j += i ){
        array[j] = false
      }
    }
    i++
  }
  return result
};
