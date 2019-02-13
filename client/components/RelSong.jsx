import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RelSongsBox from './RelSongsBox';
import styles from './RelSongsBox.css';


function RelSong({ song, key }) {
  return (
    <li key={key}>
      <div className="gray">{song.artist}</div>
      <div>{song.songName}</div>
      <div><img alt={`${song.songName} albumPic`} src={`${song.albumPic}`} /></div>
      <div>
        <span className="gray">
          <FontAwesomeIcon icon="play" className="icon" />
          {' '}
          {song.plays}
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="heart" className="icon" />
          {' '}
          {song.likes}
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="retweet" className="icon" />
          {' '}
          {song.reposts}
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="comment-alt" className="icon" />
          {' '}
          {song.comments}
          {' '}
        </span>
      </div>
    </li>
  );
}

export default RelSong;
