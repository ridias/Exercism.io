//
// This is only a SKELETON file for the 'Sum of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sumOfMultiples = (list, number) => {
  
  let sum = 0
  for(let i = 1; i < number; i++){
    for(let j = 0; j < list.length; j++){
      if(i % list[j] == 0){
        sum += i
        break
      }
    }
  }
  return sum
};
