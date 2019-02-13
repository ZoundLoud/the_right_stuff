import React from 'react';
import RelatedSongsList from './RelSongBox.jsx/index.js';
import Epony from './Eponymous.jsx';

function RelSong(props) {
  return (
    <div>
      Related Songs Component
      <Epony />
      <RelatedSongsList />
    </div>
  );
}

export default RelSong;
