import React from 'react';
import styles from './RelSongsBox.css';
import fakePlaylistData from '../../fakePlaylistData';
import PlayListItem from './PlaylistItem.jsx';
import Epony from './Eponymous';

class PlaylistsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inPlaylists: fakePlaylistData,
    };
  }

  render() {
    return (
      <div>
        <Epony name="In playlists" />
        <ul>
          {this.state.inPlaylists.map((playlist, key) => (
            <PlayListItem playlist={playlist} key={`${playlist.primarySong}_related_${key}`} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PlaylistsBox;
