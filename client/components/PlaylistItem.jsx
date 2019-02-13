import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './RelSongsBox.css';

function PlayListItem({ playlist, key }) {
  return (
    <li key={key}>
      <div className="gray">{playlist.creator}</div>
      <div className="songName">{playlist.title}</div>
      <div><img alt={`${playlist.title} playpic`} src={`${playlist.playlistPic}`} /></div>
      <div>
        <span className="gray">
          <FontAwesomeIcon icon="play" className="icon" />
          {' '}
          {playlist.plays}
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="heart" className="icon" />
          {' '}
          {playlist.likes}
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="retweet" size="1x" />
          {' '}
          {playlist.reposts}
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="comment-alt" className="icon" />
          {' '}
          {playlist.comments}
          {' '}
        </span>
      </div>
    </li>
  );
}

export default PlayListItem;
