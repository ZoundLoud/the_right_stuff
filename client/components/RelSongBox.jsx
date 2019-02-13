import React from 'react';
import fakeData from '../../fakeData.js';
import RelSong from './RelSong.jsx';

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
        <ul>
          {this.state.relatedSongs.map((eachRelatedSong, key) => (
            <RelSong song={eachRelatedSong} key={`relSong${eachRelatedSong.primarySong}-${key + 1}`} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RelatedSongsList;
