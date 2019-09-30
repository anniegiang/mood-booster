import React from "react";

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
      <div>
        {this.props.content.comments.map(comment => (
          <p>
            {comment.text}
            <button onClick={this.handleDeleteComment(comment._id)}>
              Delete
            </button>
            <button onClick={this.renderUpdateCommentForm(comment._id)}>
              Update
            </button>
          </p>
        ))}
      </div>
    );
  }
}

export default Comments;
