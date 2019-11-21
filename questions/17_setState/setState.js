// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState(incomingState) {
    // this.state = { ...this.state, ...incomingState };
    this.prevState.push(this.state);
    this.state = Object.assign({}, this.state, incomingState)
    return this.state;
  }
  goBack() {
    this.state = this.preStates.pop();
  }
}

module.exports = { StatefulThing };
