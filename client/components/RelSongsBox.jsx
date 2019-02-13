import React from 'react';
import fakeData from '../../fakeData.js';
import Epony from './Eponymous.jsx';
import RelSong from './RelSong.jsx';
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
            <RelSong song={eachSong} key={`${eachSong.primarySong}_related_${key}`} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RelSongsBox;
