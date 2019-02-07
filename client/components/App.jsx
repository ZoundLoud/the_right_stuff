import React from 'react';
import Viewall from './Viewall.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div>Hello world</div>
        <Viewall />
      </div>
    )
  }
}

export default App;