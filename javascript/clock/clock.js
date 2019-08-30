//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours
    this.minutes = minutes
  }

  toString() {
    let hour = null
    let accHours = null
    let minute = null
    if(this.minutes < 0){
      accHours = Math.floor(this.minutes / 60)
      minute = 60 - (Math.abs(this.minutes) % 60) 
    }else{
      accHours = this.minutes >= 60 ? Math.floor(this.minutes / 60) : 0
      minute = (this.minutes % 60).toString()
    }

    if(this.hours < 0){
      hours = 24 - Math.floor(this.hours / 24)
    }

    let accHours = this.minutes >= 60 ? Math.floor(this.minutes / 60) : 0
    let hour = ((this.hours + accHours) % 24).toString()
    let minute = (this.minutes % 60).toString()
    return '0'.repeat(2 - hour.length) + hour + ":" + '0'.repeat(2 - minute.length) + minute
  }

  plus(minutes) {
    
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
