//
// This is only a SKELETON file for the 'Resistor color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (colors) => {
  let result = ""
  for(let i = 0; i < colors.length; i++){
    result += colors[i] == "black" ? 0 : colors[i] == "brown" ? 1 : colors[i] == "red" ? 2 : colors[i] == "orange" ? 3 : colors[i] == "yellow" ? 4 : colors[i] == "green" ? 5 : colors[i] == "blue" ? 6 : colors[i] == "violet" ? 7 : colors[i] == "grey" ? 8 : 9
  }
  return parseInt(result)
};
