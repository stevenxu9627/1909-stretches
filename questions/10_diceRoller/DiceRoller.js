// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(sides,numDice){
    this.sides = sides;
    this.numDice = numDice;
    if(typeof sides !== 'number' || typeof numDice !== 'number' || sides >6 || sides<0){
      throw 'Error';
    }
  }
}

module.exports = { DiceRoller };
