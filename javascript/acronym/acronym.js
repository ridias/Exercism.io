//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {
  str = str.replace(/[\_\-\,]/g, " ").replace(/ {2,}/g, " ").trim().split(" ")
  let result = ""
  for(let i = 0; i < str.length; i++){
    result += str[i][0].toUpperCase()
  }
  return result
};
