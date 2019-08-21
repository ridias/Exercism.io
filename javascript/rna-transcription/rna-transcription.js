export const toRna = (value) => {
    let result = ""
    for(let i = 0; i < value.length; i++){
        if(value[i] === "G"){
            result += "C"
        }else if(value[i] === "C"){
            result += "G"
        }else if(value[i] === "A"){
            result += "U"
        }else if(value[i] === "T"){
            result += "A"
        }else{
            return "Invalid input"
        }
    }
    return result
}
