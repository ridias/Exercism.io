//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (num) => {
  if(num > 18){ throw new Error('Ability scores can be at most 18') }
  if(num < 3){ throw new Error("Ability scores must be at least 3") }
  return Math.floor((num - 10) / 2)
};

export class Character {

  constructor(){
    this.str = Character.rollAbility()
    this.dex = Character.rollAbility()
    this.const = Character.rollAbility()
    this.intel = Character.rollAbility()
    this.wis = Character.rollAbility()
    this.cha = Character.rollAbility()
  }

  static rollAbility() {
    let result = []
    let sum = 0

    for(let i = 0; i < 4; i++){
      let n = Math.floor(Math.random() * 6) + 1
      result.push(n)
      sum += n  
    }

    sum -= result.sort((a, b) => a - b)[0]
    return sum
  }

  get strength() {
    return this.str
  }

  get dexterity() {
    return this.dex
  }

  get constitution() {
    return this.const
  }

  get intelligence() {
    return this.intel
  }

  get wisdom() {
    return this.wis
  }

  get charisma() {
    return this.cha
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution)
  }
}
