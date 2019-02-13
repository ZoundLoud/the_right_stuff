import React from 'react';
import styles from './RelSongsBox.css';


function Epony({ name }) {
  return (
    <span>
      <span className="epony">{name}</span>
      <span className="epony">View all</span>
    </span>
  );
}

export default Epony;
