//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const secretHandshake = (num) => {
  if(!Number.isInteger(num)) throw new Error('Handshake must be a number')
  let steps = 0
  let result = []
  while(num > 0){
    if(num & 1 == 1){ 
      if(steps == 0){
        result.push("wink")
      }else if(steps == 1){
        result.push("double blink")
      }else if(steps == 2){
        result.push("close your eyes")
      }else if(steps == 3){
        result.push("jump")
      }else if(steps == 4){
        result = result.reverse()
      }
    }
    steps++
    num = num >> 1
  }
  return result
};
