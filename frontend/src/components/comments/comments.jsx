import React from "react";
import "./comments.css";
class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.content.text
    };
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.renderCommentButtons = this.renderCommentButtons.bind(this);
  }

  handleDeleteComment(commentId) {
    return e => {
      e.preventDefault();
      const { type } = this.props;

      let data = {
        type,
        commentId,
        contentId: this.props.content._id
      };

      return this.props.deleteComment(data);
    };
  }

  renderCommentButtons(comment) {
    if (comment.userId === this.props.currentUser.id) {
      return (
        <span className="comment-buttons">
          <button
            className="comment-delete"
            onClick={this.handleDeleteComment(comment._id)}
          >
            Delete
          </button>
        </span>
      );
    }
  }

  render() {
    return (
      <div className="comments-text-container">
        {this.props.content.comments.map(comment => (
          <p key={comment._id} className="comment-text">
            {comment.text}
            {this.renderCommentButtons(comment)}
          </p>
        ))}
      </div>
    );
  }
}

export default Comments;
