//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Luhn {
  constructor(cardSIN) {
    this.cardSIN = cardSIN
  }

  get valid() {
    if(!/^\d+( *\d)*/.test(this.cardSIN)){ return false }
    if(this.cardSIN == "0"){ return false }

    let number = this.cardSIN
    number = number.replace(/[ \:]/g, "")
    let sum = 0
    for(let i = 0; i < number.length; i++){
      if(i % 2 == 1){
        let digit = ((parseInt(number[i]) * 2) % 9)
        if((parseInt(number[i]) * 2) == 0){
          sum += 0
        }else if(digit == 0){
          sum += 9 
        } else { 
          sum += digit 
        }
      }else{
        sum += parseInt(number[i])
      }
    }

    return sum % 2 == 0
  }
}
