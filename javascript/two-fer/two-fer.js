export const twoFer =  (who) => {
  let toReplace = who
  who = 'One for X, one for me.'
  toReplace === null || toReplace === undefined ? who = who.replace("X", "you") : who = who.replace("X", toReplace)
  return who;
}
