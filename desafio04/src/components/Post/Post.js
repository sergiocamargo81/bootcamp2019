import React, { Component } from 'react';

import './Post.css';

import profile1 from '../../assets/1.jpg';
import profile2 from '../../assets/2.jpg';
import profile3 from '../../assets/3.jpg';
import profile4 from '../../assets/4.jpg';
import profile5 from '../../assets/5.jpg';

import Comment from '../Comment/Comment';

class Post extends Component {
  render() {
    const post = this.props.post;

    const profiles = [null, profile1, profile2, profile3, profile4, profile5];

    return <>
      <div className="post">
        <div className="post-header">
          <img className="avatar" src={profiles[post.author.id]} />
          <div className="info">
            <b>{post.author.name}</b>
            <span className="date">{post.date}</span>
          </div>
        </div>
        <span>{post.content}</span>
        {post.comments.map(c => 
          <Comment key={c.id} comment={c} profiles={profiles} />
        )}
      </div>
    </>
  }
}

export default Post;