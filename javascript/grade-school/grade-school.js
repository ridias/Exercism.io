//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export class GradeSchool {
  constructor(){
    this._students = {}
  }

  roster() {
    let keys = Object.keys(this._students)
    for(let i = 0; i < keys.length; i++){
      this._students[keys[i]] = this._students[keys[i]].sort((a, b) => a.localeCompare(b)).filter((e) => e != "Oops.")
    }

    return this._students
  }

  add(name, note) {
    this._students[note] == undefined ? this._students[note] = [name] : this._students[note].push(name)
  }

  grade(note) {
    if(this._students[note] == undefined){ return [] }
    return Object.assign([], this._students[note].sort((a, b) => a.localeCompare(b)))
  }
}
