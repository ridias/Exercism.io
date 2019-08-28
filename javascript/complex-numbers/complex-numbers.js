//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, img) {
    this.complex = [real, img]
  }

  get real() {
    return this.complex[0]
  }

  get imag() {
    return this.complex[1]
  }

  add(complexNumber) {
    return new ComplexNumber(this.real + complexNumber.real, this.imag + complexNumber.imag)
  }

  sub(complexNumber) {
    return new ComplexNumber(this.real - complexNumber.real, this.imag - complexNumber.imag)
  }

  div(complexNumber) {
    return new ComplexNumber((this.real * complexNumber.real + this.imag * complexNumber.imag) / (complexNumber.real ** 2 + complexNumber.imag ** 2), (this.imag * complexNumber.real - this.real * complexNumber.imag) / (complexNumber.real ** 2 + complexNumber.imag ** 2))
  }

  mul(complexNumber) {
    return new ComplexNumber(this.real * complexNumber.real - this.imag * complexNumber.imag, this.imag * complexNumber.real + this.real * complexNumber.imag)
  }

  get abs() {
    return Math.sqrt((this.real ** 2) + (this.imag ** 2))
  }

  get conj() {
    let img = this.imag == 0 ?  0 : -this.imag
    return new ComplexNumber(this.real, img)
  }

  //falla
  get exp() {
    let e = Math.exp(this.real)
    return new ComplexNumber(e * Math.cos(this.imag), e * Math.sin(this.imag))
  }
}
