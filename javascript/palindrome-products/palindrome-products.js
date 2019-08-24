//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static generate(data) {

    let min = data.minFactor
    let max = data.maxFactor
    let h = {}

    let palindromes = []

    if(min > max){ throw new Error('min must be <= max')}
    
    this["smallest"] = { factors: [], value: null }
    this["largest"] = { factors: [], value: null }

    for(let i = min; i <= max; i++){
      for(let j = i; j <= max; j++){
          if(Palindromes.isPalindrome(i * j)){
            palindromes.push(i * j)
          }
        
      }
    }

    if(palindromes.length == 0){ return this }

    palindromes.sort((a, b) => a - b)

    this.smallest.value = palindromes[0]
    this.smallest.factors = Palindromes.getFactors(palindromes[0], min, max)
    this.largest.value = palindromes[palindromes.length - 1]
    this.largest.factors = Palindromes.getFactors(palindromes[palindromes.length - 1], min, max)

    return this
  }

  static isPalindrome(num){
    num = num.toString()
    let i = 0
    let j = num.length - 1

    while(i <= j){
      if(num[i] != num[j]){ return false }
      i++
      j--
    }
    return true
  }

  static getFactors(value, min, max){
      let factors = []
      for(let k = min; k <= Math.sqrt(value); k++){
        if(value % k == 0 && k >= min && value / k <= max){
          factors.push([k, value / k])
        }
      }
      return factors
  }
}
