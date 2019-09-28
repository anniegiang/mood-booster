import React from "react";

class Comments extends React.Component {
  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <p>{comment.text}</p>
        ))}
      </div>
    );
  }
}

export default Comments;
