//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(str) {
    let result = [0, 0, 0, 0] //[A, C, G, T]

    for(let i = 0; i < str.length; i++){
      if(str[i] == "A") result[0]++
      else if(str[i] == "C") result[1]++
      else if(str[i] == "G") result[2]++
      else if(str[i] == "T") result[3]++
      else throw new Error('Invalid nucleotide in strand')
    }
    return result.join(" ")
  }
}
