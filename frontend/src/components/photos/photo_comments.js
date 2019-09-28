import React from "react";

class PhotoComments extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleDeleteComment(commentId) {
    return e => {
      e.preventDefault();
      let data = {
        commentId,
        photoId: this.props.photo._id
      };
      return this.props.deletePhotoComment(data);
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
          </p>
        ))}
      </div>
    );
  }
}

export default PhotoComments;
