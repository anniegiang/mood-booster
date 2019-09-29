import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.photo.text
    };
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.renderUpdateCommentForm = this.renderUpdateCommentForm.bind(this);
    this.handleUpdateCommentInput = this.handleUpdateCommentInput.bind(this);
    this.handleSubmitUpdateComment = this.handleSubmitUpdateComment.bind(this);
  }

  handleDeleteComment(commentId) {
    return e => {
      e.preventDefault();
      let data = {
        commentId,
        photoId: this.props.photo._id,
        type: "photo"
      };
      return this.props.deleteComment(data);
    };
  }

  renderUpdateCommentForm(commentId) {
    return (
      <form onSubmit={() => this.handleSubmitUpdateComment(commentId)}>
        <input
          type="text"
          value={this.state.comment}
          onChange={this.handleUpdateCommentInput}
        />
        <input type="submit" value="Update Comment" />
      </form>
    );
  }

  handleUpdateCommentInput(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmitUpdateComment(commentId) {
    return e => {
      e.preventDefault();
      let data = {
        commentId,
        photoId: this.props.photo._id,
        text: this.state.comment
      };
    };
  }

  render() {
    return (
      <div>
        {this.props.photo.comments.map(comment => (
          <p>
            {comment.text}
            <button onClick={this.handleDeleteComment(comment._id)}>
              Delete Comment
            </button>
            <button onClick={() => this.renderUpdateCommentForm(comment._id)}>
              Update Comment
            </button>
          </p>
        ))}
      </div>
    );
  }
}

export default Comments;
