//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values) {
    this.values = values || []
  }

  append(list) {
    for(let i = 0; i < list.values.length; i++) this.values.push(list.values[i])
    return this
  }

  concat(list) {
    for(let i = 0; i < list.values.length; i++) this.append(list.values[i])
    return this
  }

  filter(func) {
    this.values = this.values.filter(func)
    return this
  }

  map(func) {
    for(let i = 0; i < this.values.length; i++) this.values[i] = func(this.values[i])
    return this
  }

  length() {
    return this.values.length
  }

  foldl(func, value) {
    let acc = value
    for(let i = 0; i < this.values.length; i++){
      acc = func(acc, this.values[i])
    }
    return acc
  }

  foldr(func, value) {
    let acc = value
    for(let i = 0; i < this.values.length; i++){
      acc = func(acc, this.values[this.values.length - 1 - i])
    }
    return acc
  }

  reverse() {
    this.values.reverse()
    return this
  }
}
