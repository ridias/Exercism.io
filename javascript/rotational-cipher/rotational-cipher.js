//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RotationalCipher {
  static rotate(str, rotate) {
    let result = ""
    for(let i = 0; i < str.length; i++){
      if(/[A-Z]/.test(str[i])){
        result += String.fromCharCode((str[i].charCodeAt(0) - 65 + rotate) % 26 + 65)
      }else if(/[a-z]/.test(str[i])){
        result += String.fromCharCode((str[i].charCodeAt(0) - 97 + rotate) % 26 + 97)
      }else{
        result += str[i]
      }
    }
    return result
  }
}
