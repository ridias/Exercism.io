class WordProblem {
    constructor(question){
        this.question = question.replace(/(What is |by |\?| {2,})/g, "")
            .replace(/plus/g, "+")
            .replace(/multiplied/g, "*")
            .replace(/divided/g, "/")
            .replace(/minus/g, "-")
            .trim()
    }

    answer(){
        if(!/^(\-?\d+ [\+\-\/\*]{1} )+-?\d+$/.test(this.question)){ throw new ArgumentError() }
        this.question = this.question.split(" ")
        let result = parseInt(this.question[0])
        
        for(let i = 1; i < this.question.length - 1; i++){
            if(this.question[i] == "+"){
                result += parseInt(this.question[i+1])
            }else if(this.question[i] == "-"){
                result -= parseInt(this.question[i+1])
            }else if(this.question[i] == "*"){
                result *= parseInt(this.question[i+1])
            }else if(this.question[i] == "/"){
                result /= parseInt(this.question[i+1])
            }
        }

        return result
    }
}

class ArgumentError extends Error {
    constructor(){
        super()
    }
}

module.exports = {
    WordProblem: WordProblem,
    ArgumentError: ArgumentError
}