import React, { Component } from 'react';

import { doCanvas } from '../logic/logic';

class App extends Component {
  componentDidMount() {
    doCanvas();
  }

  render() {
    return <canvas id='canvas'></canvas>;
  }
}

export default App;
