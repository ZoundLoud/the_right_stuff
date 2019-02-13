import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './RelSongsBox.css';


function RelSongs({ song, key }) {
  return (
    <li key={key}>
      <div className="name">{song.artist}</div>
      <div className="songName">{song.songName}</div>
      <div><img alt={`${song.songName} albumPic`} src={`${song.albumPic}`} /></div>
      <div>
        <span className="gray">
          <FontAwesomeIcon icon="play" className="icon" />
          {' '}
          <span className="details">{song.plays}</span>
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="heart" className="icon" />
          {' '}
          <span className="details">{song.likes}</span>
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="retweet" size="1x" />
          {' '}
          <span className="details">{song.reposts}</span>
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="comment-alt" className="icon" />
          {' '}
          <span className="details">{song.comments}</span>
          {' '}
        </span>
      </div>
    </li>
  );
}

export default RelSongs;
