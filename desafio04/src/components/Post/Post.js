import React, { Component } from 'react';

import './Post.css';

import profile1 from '../../assets/1.jpg';
import profile2 from '../../assets/1.jpg';
import profile3 from '../../assets/1.jpg';
import profile4 from '../../assets/1.jpg';
import profile5 from '../../assets/1.jpg';

class Post extends Component {
  render() {
    const post = this.props.post;

    const profiles = [null, profile1, profile2, profile3, profile4, profile5];

    return <>
      <div className="post">
        <img src={profiles[post.id]} />
      </div>
    </>
  }
}

export default Post;