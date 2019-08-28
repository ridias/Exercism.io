export class Anagram{
    constructor(word){
        this.word = word.toLowerCase()
    }

    matches(){
        let arrayWords = null
        if(arguments.length == 1 && typeof arguments[0] !== "string"){
            arrayWords = arguments[0]
        }else{
            arrayWords = [...arguments]
        }
    
        let sortedWord = [...this.word].sort((a, b) => a.localeCompare(b)).join("")
        let result = []
        for(let i = 0; i < arrayWords.length; i++){
            if(sortedWord.length == arrayWords[i].length){
                if(arrayWords[i].toLowerCase() == this.word){ continue }
                let word = [...arrayWords[i]].sort((a, b) => a.localeCompare(b)).join("").toLowerCase()
                if(word == sortedWord){
                    result.push(arrayWords[i])
                }
            }
        }
        return result
    }
}