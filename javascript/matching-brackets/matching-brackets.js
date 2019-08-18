//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const matchingBrackets = (str) => {
  
  let stack = []
  for(let i = 0; i < str.length; i++){
    if(str[i] == "(" || str[i] == "{" || str[i] == "[") stack.push(str[i])
    else if(str[i] == "}" && stack[stack.length - 1] == "{") stack.pop()
    else if(str[i] == "]" && stack[stack.length - 1] == "[") stack.pop()
    else if(str[i] == ")" && stack[stack.length - 1] == "(") stack.pop()
    else return false 
  }
  return stack.length == 0
};
