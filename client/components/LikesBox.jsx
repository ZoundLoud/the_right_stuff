import React from 'react';
import fakeUserLikesData from '../../fakeUserLikesData.js';
import Epony from './Eponymous.jsx';
import UserBubble from './UserBubbles.jsx';
import styles from './RelSongsBox.css';


class LikesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userlikes: fakeUserLikesData,
    };
  }

  render() {
    return (
      <div>
        <Epony name="likes" />
        <ul>
          {this.state.userlikes.map((user, key) => (
            <UserBubble user={user} key={`${user.username}_related_${key}`} />
          ))}
        </ul>
      </div>
    );
  }
}

export default LikesBox;
