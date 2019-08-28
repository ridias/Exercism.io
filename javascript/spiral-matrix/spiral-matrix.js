//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class SpiralMatrix {
  static ofSize(n) {
    let spiral = []
    if(n == 0){ return spiral }
    for(let i = 0; i < n; i++){
      let row = []
      for(let j = 0; j < n; j++) row.push(0)
      spiral.push(row)
    }

    let iTop = 0
    let iLeft = spiral[0].length - 1
    let iBottom = spiral.length - 1
    let iRight = 0

    let start = 1
    while(start <= n * n){
        for(let i = iTop; i < spiral[0].length; i++){
            if(spiral[iTop][i] != 0) break
            spiral[iTop][i] = start
            start++
        }
        start--
        
        for(let i = iTop; i < spiral.length; i++){ 
            if(spiral[i][iLeft] != 0 && i != iTop) break
            spiral[i][iLeft] = start
            start++ 
        }
        start--
        
        for(let i = iLeft; i >= 0; i--){
            if(spiral[iBottom][i] != 0 && i != iLeft) break
            spiral[iBottom][i] = start
            start++
        }
        start--
        
        for(let i = iBottom; i >= 0; i--){ 
            if(spiral[i][iRight] != 0 && i != iBottom) break
            spiral[i][iRight] = start
            start++
        }
        iTop++
        iLeft--
        iBottom--
        iRight++
    }
    return spiral
  }
}
