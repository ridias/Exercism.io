//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BeerSong {
  static verse(number) {
    return number == 0 ? `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n` : number == 1 ? `${number} bottle of beer on the wall, ${number} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n` : number == 2 ? `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n` :  `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number-1} bottles of beer on the wall.\n`
  }

  static sing() {
    let result = ""
    let start = 99
    let end = 0
    if(arguments.length == 1){
      start = arguments[0]
    }else if(arguments.length == 2){
      start = arguments[0]
      end = arguments[1]
    }

    for(let i = start; i >= end; i--){
      if(i != end) result += BeerSong.verse(i) + "\n"
      else result += BeerSong.verse(i)
    }
    return result
  }
}
