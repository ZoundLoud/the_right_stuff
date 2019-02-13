import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart, faPlay, faRetweet, faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';

import RelSongsBox from './RelSongsBox.jsx';

library.add(faHeart);
library.add(faPlay);
library.add(faRetweet);
library.add(faCommentAlt);

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
        <RelSongsBox />
      </div>


    );
  }
}

export default App;
