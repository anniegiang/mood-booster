import React from "react";
import "./favorite.css";
import { Link } from "react-router-dom";
class Favorites extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.user.id);
    this.props.photoSave.forEach(photoId => {
      this.props.fetchPhoto(photoId);
    });

    this.props.quoteSave.forEach(quoteId => {
      this.props.fetchQuote(quoteId);
    });

    this.props.videoSave.forEach(videoId => {
      this.props.fetchVideo(videoId);
    });
    // debugger
  }

  // handleDelete(e,contentType) {
  //     e.preventDefault()
  //     let data = {
  //         contentType: "photoSave",
  //         contentId: this.props.match.params.photo_id,
  //         userId: this.props.currentUser.id
  //     };
  //     this.props.saveContent(data);
  // }

  render() {
    if (!this.props.user) {
      return null;
    }

    let undef = function(ele) {
      if (ele === undefined) {
        return true;
      }
    };

    let p = this.props.photos.some(undef);
    if (p) {
      return null;
    }

    let q = this.props.quotes.some(undef);
    if (q) {
      return null;
    }

    let v = this.props.videos.some(undef);

    if (v) {
      return null;
    }

    // debugger
    return (
      <div className="fav-container">
        {this.props.photos.map(photo => {
          return (
            <li>
              {/* <div className='li-title'>
                                <button>X</button>
                            </div> */}
              <Link to={`/photos/${photo._id}`}>
                <h1>{photo.title}</h1>
                <img src={photo.photoUrl} alt={photo.title}></img>
              </Link>
            </li>
          );
        })}

        {this.props.quotes.map(quote => {
          return (
            <li>
              {/* <div className='li-title'>
                                <button>X</button>
                            </div> */}
              <Link to={`/quotes/${quote._id}`}>
                <h1>{quote.title}</h1>
                <h3>{quote.quoteText}</h3>
              </Link>
            </li>
          );
        })}

        {this.props.videos.map(video => {
          return (
            <li>
              {/* <div className='li-title'>
                                <button>X</button>
                            </div> */}
              <Link to={`/videos/${video._id}`}>
                <h1>{video.title}</h1>
                <video controls>
                  <source src={video.videoUrl} type="video/mp4"></source>
                </video>
              </Link>
            </li>
          );
        })}
      </div>
    );
  }
}

export default Favorites;
