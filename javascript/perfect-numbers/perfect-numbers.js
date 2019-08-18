//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
  if(num <= 0) throw new Error('Classification is only possible for natural numbers.')
  if(num == 1){ return "deficient"}
  let sum = 1
  for(let i = 2; i < Math.sqrt(num); i++){
    if(num % i == 0){
      sum += i + (num / i)
    }
  }

  return sum == num ? "perfect" : sum > num ? "abundant" : "deficient"

};
