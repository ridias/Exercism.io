//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...args) => {
  let result = ""
  let limit = args[args.length - 1].qualifier == undefined ? args.length - 1 : args.length - 2
  for(let i = 0; i < limit; i++){
    result += "For want of a " + args[i] + " the " + args[i+1] + " was lost.\n"
  }
  return args[args.length - 1].qualifier != undefined ? result + "And all for the want of a " + args[args.length - 1].qualifier + " " + args[0] + "." : result + "And all for the want of a " + args[0] + "."
};
