// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(sides,numDice){
    this.sides = sides;
    this.numDice = numDice;
    this.history =[];
    if (!sides || !numDice){
      throw 'Need 2 parameters';
    }
    if(typeof sides !== 'number' || typeof numDice !== 'number' || sides >6 || sides<0){
      throw 'Must be valid';
    }
  }
  roll () {
    const allRolls = [];
    for(const  _ of Array(this.numDice)){
      const randomNum = Math.floor(Math.random()*this.sides +1);
      allRolls.push(randomNum);
    }
    this.history.push(allRolls);
    return allRolls;
  }
}



module.exports = { DiceRoller };
