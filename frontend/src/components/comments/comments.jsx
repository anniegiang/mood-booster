import React from "react";
import "./comments.css";
class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.content.text
    };
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
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

  renderUpdateCommentForm(commentId) {}

  render() {
    return (
      <div className="comments-text-container">
        {this.props.content.comments.map(comment => (
          <p className="comment-text">
            {comment.text}
            <div className="comment-buttons">
              <button
                className="comment-delete"
                onClick={this.handleDeleteComment(comment._id)}
              >
                Delete
              </button>
              <button
                className="comment-update"
                onClick={this.renderUpdateCommentForm(comment._id)}
              >
                Update
              </button>
            </div>
          </p>
        ))}
      </div>
    );
  }
}

export default Comments;
