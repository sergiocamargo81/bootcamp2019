import React, { Component } from 'react';

import './Comment.css';

class Comment extends Component {
  render() {
    const profiles = this.props.profiles;

    const comment = this.props.comment;
    
    return <div className="comment">
      <img className="avatar" src={profiles[comment.author.id]} />
      <div className="balloon">
        <b>{comment.author.name}</b>
        <span>: </span>
        <span>{comment.content}</span>
      </div>
    </div>
  }
}

export default Comment;