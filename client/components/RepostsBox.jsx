import React from 'react';
import fakeUserRepostsData from '../../fakeUserRepostsData.js';
import Epony from './Eponymous.jsx';
import UserBubble from './UserBubbles.jsx';
import styles from './RelSongsBox.css';


class RepostsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userReposts: fakeUserRepostsData,
    };
  }

  render() {
    return (
      <div>
        <Epony name="reposts" />
        <ul>
          {this.state.userReposts.map((user, key) => (
            <UserBubble user={user} key={`${user.username}_related_${key}`} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RepostsBox;
