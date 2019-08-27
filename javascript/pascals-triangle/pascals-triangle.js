//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(number) {
    this.number = number
  }

  get lastRow() {
    return this.rows[this.rows.length - 1]
  }

  get rows() {
    //there is the general formula for each cell: n! / (k! * (n - k)!)

    let result = [[1]]
    
    for(let i = 2; i <= this.number; i++ ){
      let row = []
      for(let j = 0; j < result[result.length - 1].length; j++ ){
        j == 0 ? row.push(1) : row.push(result[result.length - 1][j - 1] + result[result.length - 1][j])
      }
      row.push(1)
      result.push(row)
    }
    return result
  }
}
