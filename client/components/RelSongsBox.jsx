import React from 'react';
import fakeData from '../../fakeData.js';
import Epony from './Eponymous.jsx';
import RelSongs from './RelSongs.jsx';
import styles from './RelSongsBox.css';


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
        <ul>
          {this.state.relatedSongs.map((eachSong, key) => (
            <RelSongs song={eachSong} key={`${eachSong.primarySong}_related_${key}`} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RelSongsBox;
