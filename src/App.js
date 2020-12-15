import React, { Component } from 'react';
import Home from './Components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      merge: '',
    }
  }


  render() {
    return (
      <div >
        <Home />
      </div>
    )
  }
}

export default App;