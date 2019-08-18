//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix.split("\n")
    for(let i = 0; i < this.matrix.length; i++){
      this.matrix[i] = this.matrix[i].trim().split(" ")
      for(let j = 0; j < this.matrix[i].length; j++){
        this.matrix[i][j] = parseInt(this.matrix[i][j])
      }
    }
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    let result = []
    for(let i = 0; i < this.matrix[0].length; i++){
      let minimums = []
      for(let j = 0; j < this.matrix.length; j++){
        minimums.push(this.matrix[j][i])
      }
      result.push(minimums)
    }
    return result
  }

  get saddlePoints() {
    let result = []
    for(let i = 0; i < this.matrix.length; i++){
      for(let j = 0; j < this.matrix[i].length; j++){
        if(this.matrix[i][j] == Math.max(...this.rows[i]) && this.matrix[i][j] == Math.min(...this.columns[j])){ result.push([i, j]) }
      }
    }
    return result
  }
}
