//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this.list = list || []
  }

  compare(objList) {
    let superList = this.list.length > objList.list.length ? true : false
    let equal = true

    if(!superList){
      let temp = this.list
      this.list = [...objList.list]
      objList.list = [...temp]
    }

    if(this.list.length == objList.list.length){
      for(let i = 0; i < this.list.length / 2; i++){
        if(this.list[i] != objList.list[i]){
          equal = false;
          break
        }
      }
      if(equal || (this.list.length == 0 && objList.list.length == 0)){ return "EQUAL" }
    }

    if(!superList  && objList.list.length == 0){ return "SUBLIST"}
    if(superList && objList.list.length == 0){ return "SUPERLIST"}
    
    let i = 0
    let j = 0

    while(i < this.list.length){
      if(this.list[i] == objList.list[j]){
        let isSublist = true
        let pos = i
        while(j < objList.list.length){
          if(this.list[pos] != objList.list[j]){
            isSublist = false
            j = 0
            break
          }
          j++
          pos++
        }

        if(isSublist && superList){ return "SUPERLIST" }
        if(isSublist && !superList){ return "SUBLIST" }
      }
      j = 0
      i++
    }

    return "UNEQUAL"
    
  }
}
