import React from 'react';
import styles from './RelSongsBox.css';


function UserBubble({ user }) {
  return (
    <img className="bubble" alt="userimage" src={`${user.pic}`} />
  );
}

export default UserBubble;
