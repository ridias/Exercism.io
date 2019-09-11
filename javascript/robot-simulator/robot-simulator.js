//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor(message) {
    super(message)
  }
}

export class Robot {
  constructor(){
    this.direction = null
    this.points = []
  }

  orient(direction) {
    if(!/(east|north|south|west){1}/.test(direction)) throw new InvalidInputError("Invalid direction")
    this.direction = direction
  }

  get bearing() {
    return this.direction
  }

  get coordinates() {
    return this.points
  }

  turnRight() {
    if(this.direction == "north") this.direction = "east"
    else if(this.direction == "east") this.direction = "south"
    else if(this.direction == "south") this.direction = "west"
    else this.direction = "north"
  }

  turnLeft() {
    if(this.direction == "north") this.direction = "west"
    else if(this.direction == "east") this.direction = "north"
    else if(this.direction == "south") this.direction = "east"
    else this.direction = "south"
  }

  at(x, y) {
    this.points = [x,  y]
  }

  advance() {
    if(this.direction == "north") this.points[1] += 1
    else if(this.direction == "east") this.points[0] += 1
    else if(this.direction == "south") this.points[1] -= 1
    else this.points[0] -= 1
  }

  static instructions(letters) {
    let result = []
    for(let i = 0; i < letters.length; i++){
      if("L" == letters[i]) result.push("turnLeft")
      else if("R" == letters[i]) result.push("turnRight")
      else result.push("advance")
    }

    return result
  }

  place(data) {
    this.points[0] = data.x
    this.points[1] = data.y 
    this.direction = data.direction
  }

  evaluate(str) {
    for(let i = 0; i < str.length; i++){
      if(str[i] == "A") this.advance()
      else if(str[i] == "R") this.turnRight()
      else if(str[i] == "L") this.turnLeft()
    }
  }
}
