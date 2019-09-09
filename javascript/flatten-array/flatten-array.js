//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Flattener {
  constructor(){

  }

  flatten(arr) {
    let stack = []
    let result = []

    for(let i = arr.length - 1; i >= 0; i--) stack.push(arr[i])

    while(stack.length > 0){
      let value = stack.pop()

      if(value == null) continue 
      
      if((value).length == undefined){
        result.push(value)
      }else{
        for(let i = value.length - 1; i >= 0; i--){
          stack.push(value[i])
        }
      }
    }
    return result
  }
}