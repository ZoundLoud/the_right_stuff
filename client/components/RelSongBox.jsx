import React from 'react';
import fakeData from '../../fakeData.js';
import RelSongList from './RelSongList.jsx';
import Epony from './Eponymous.jsx';

class RelSongsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedSongs: fakeData,
    };
  }

  render() {
    return (
      <div>
        <Epony />
        <RelSongList relatedSongs={this.state.relatedSongs} />
      </div>
    );
  }
}

export default RelSongsBox;
