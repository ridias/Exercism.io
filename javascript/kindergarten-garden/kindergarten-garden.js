const STUDENTS = ["Alice", "Bob", "Charlie", "David", "Eve", "Fred", "Ginny", "Harriet", "Ileana", "Joseph", "Kincaid", "Larry"]

export class Garden{
    constructor(diagram, students = STUDENTS){
        this.diagram = diagram.split("\n")
        this.students = students.sort((a, b) => a.localeCompare(b))
        this.generate()
    }

    generate(){
        let col = 0
        let d = this.diagram
        for(let i = 0; i < this.students.length; i++){
            this[this.students[i].toLowerCase()] = [this.gDF(d[0][col]), this.gDF(d[0][col+1]), this.gDF(d[1][col]), this.gDF(d[1][col+1])]
            col += 2
            if(col >= this.diagram[0].length){ break }
        }
    }

    gDF(letter){
        if(letter == "V") return "violets"
        if(letter == "R") return "radishes"
        if(letter == "C") return "clover"
        if(letter == "G") return "grass"
    }
}