import React, { Component } from 'react';

class App extends Component {
  constructor(props) {

    super();

    this.state = {
      name: "Alpredo"
    }
  }

  render() {
    const name = this.state.name

    return (
      <div>
        <div>My name is {name}</div>
      </div>
    )
  }

}

export default App;
