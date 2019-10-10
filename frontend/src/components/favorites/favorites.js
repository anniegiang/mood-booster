import React from "react";
import "./favorite.css"
import { Link } from 'react-router-dom'
class Favorites extends React.Component {
    componentDidMount(){
        this.props.user.photoSave.forEach(photoId => {
            this.props.fetchPhoto(photoId)
        })

        this.props.user.quoteSave.forEach(quoteId => {
            this.props.fetchQuote(quoteId)
        })

        this.props.user.videoSave.forEach(videoId => {
            this.props.fetchVideo(videoId)
        })
    }

    render() {
        if (!this.props.user) {
            return null;
        }

        let undef = function(ele) {
            if (ele === undefined) {
                return true;
            }
        }

        let p = this.props.photos.some(undef)
        if (p) {
            return null;
        }

        let q = this.props.quotes.some(undef)
        if (q) {
            return null;
        }

        let v = this.props.videos.some(undef)

        if (v) {
            return null;
        }

        // debugger
        return (
            
            <div className='fav-container'>
                    {this.props.photos.map(photo => {
                       
                        return <li>
                            <Link to={`/photos/${photo._id}`}>
                                <img src={photo.photoUrl} alt={photo.title}></img> 
                            </Link>
                        </li>
                    })}

                    {this.props.quotes.map(quote => {
                        return <li>
                            <Link to={`/quotes/${quote._id}`}>
                                <h1>{quote.quoteText}</h1>
                            </Link>
                        </li>
                        
                    })}

                    {this.props.videos.map(video => {
                        return <li> 
                            <Link to={`/videos/${video._id}`}>
                                <video controls>
                                    <source src={video.videoUrl} type="video/mp4"></source>
                                </video>
                            </Link>
                        </li>
                    })}
            </div>
        )
    }
}

export default Favorites;