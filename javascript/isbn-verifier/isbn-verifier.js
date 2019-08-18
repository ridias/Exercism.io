import { strict } from "assert";

//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ISBN {
  constructor(isbnCode) {
    this.isbnCode = isbnCode
  }

  isValid() {
    
    let pattern = /^\d{1}-*\d{3}-*\d{5}-*[\dX]{1}$/
    let sum = 0
    if(!pattern.test(this.isbnCode)){ return false }
    else{
      let str = this.isbnCode.replace(/[^\dX]/g, "")
      for(let i = 0; i < str.length; i++){
        if(/\d/.test(str[i])){ sum += parseInt(str[i]) * (10 - i) }
        else if(str[i] == "X"){ sum += 10 * (10 - i) }
      }
    }
    return sum % 11 == 0
  }
}
