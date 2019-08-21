//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (arr, func) => {
  return arr.filter(func)
};

export const discard = (arr, func) => {
  let result = []
  for(let i = 0; i < arr.length; i++){
    if(!func(arr[i])){
      result.push(arr[i])
    }
  }
  return result
};
