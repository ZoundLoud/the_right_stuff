import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './RelSongsBox.css';

function PlayListItem({ playlist, key }) {
  return (
    <li key={key}>
      <div className="name">{playlist.creator}</div>
      <div className="songName">{playlist.title}</div>
      <div><img alt={`${playlist.title} playpic`} src={`${playlist.playlistPic}`} /></div>
      <div>
        <span className="gray">
          <FontAwesomeIcon icon="play" className="icon" />
          {' '}
          <span className="details">{playlist.plays}</span>
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="heart" className="icon" />
          {' '}
          <span className="details">{playlist.likes}</span>
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="retweet" size="1x" />
          {' '}
          <span className="details">{playlist.reposts}</span>
          {' '}
        </span>
        <span className="gray">
          <FontAwesomeIcon icon="comment-alt" className="icon" />
          {' '}
          <span className="details">{playlist.comments}</span>
          {' '}
        </span>
      </div>
    </li>
  );
}

export default PlayListItem;
