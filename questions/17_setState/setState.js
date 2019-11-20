// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState() {
    this.setState({
      initialState: initialState.setState();
    })
  }
}

module.exports = { StatefulThing };
