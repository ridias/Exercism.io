//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Diamond {
  makeDiamond(letter) {
    if(letter == "A"){ return "A\n"}
    let size = letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1
    let spaces = 1
    let middleSpace = Math.floor(size / 2) * 4 - 1
    let result = [letter + ' '.repeat(middleSpace) + letter]
    middleSpace -= 2
    for(let i = 2; i < size; i++){
      let str = ' '.repeat(spaces) + String.fromCharCode(65 + size - i) + ' '.repeat(middleSpace) + String.fromCharCode(65 + size - i ) + ' '.repeat(spaces)
      result.push(str)
      result.unshift(str)
      spaces++
      middleSpace -= 2
    }

    let final = " ".repeat(spaces) + "A" + " ".repeat(spaces)
    result.push(final)
    result.unshift(final)
    return result.join("\n") + "\n"
  }
}
