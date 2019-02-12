import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RelSongs from './RelSongs.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songPlaying: 1,
    };
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        <RelSongs />
      </div>


    );
  }
}

export default App;
