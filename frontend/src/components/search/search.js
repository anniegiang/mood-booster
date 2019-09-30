import React from 'react';
import { Link } from 'react-router-dom'
import './search.css'

class Search extends React.Component {
    componentDidMount(){
        // USE IF STATEMENT TO KEEP IN GLOBAL STATE GOING TO NEXT PAGE IF YOU WANT TO SHOW SAME VIDEOS WHEN THEY PRESS BACK BUTTON ON SHOW PAGE WITH FETCHING NOTHING
        // if (this.props.location.state.videos) {
            this.props.fetchVideos(this.props.location.search)
        // }

        // if (this.props.location.state.photos) {
            this.props.fetchPhotos(this.props.location.search)
        // }

        // if (this.props.location.state.quotes) {
            this.props.fetchQuotes(this.props.location.search)
        // }
    }
    render() {
     
        if (!this.props.videos) {
            return null
        }
        if (this.props.videos.length === 0 && this.props.photos.length === 0 && this.props.quotes.length === 0) {
            return (
                <div>
                    <h1>Sorry no Content!! Go to form page ya mankey</h1>
                </div>
            )


        } else {
            return(
                
                <div className='search-container'>
                    <div className='result-container'>
                        {this.props.videos ? (
                            this.props.videos.map(video => {
                            return <Link to={`/videos/${video._id}`}>
                                <li className='content'>
                                    <h1>{video.title}</h1>
                                    <video controls >
                                        <source src={video.videoUrl} ></source>
                                    </video>                     
                                </li>
                            </Link>
                            })               
                        ): ("")
                        }
                    </div>
    
                    <div className='result-container'>
                        {this.props.photos ? (
                            this.props.photos.map(photo => {
                                return <Link to={`/photos/${photo._id}`}>
                                    <li className='content'>
                                        <h1>{photo.title}</h1>
                                        <img src={photo.photoUrl} ></img>
                                    </li>
                                </Link>
                            })
                        ): ("")
                        }
                    </div>
    
                    <div className='result-container'>
                        {this.props.quotes ? (
                            this.props.quotes.map(quote => {
                                return <Link to={`/quotes/${quote._id}`}>
                                    <li className='content'>
                                        <h1>{quote.title}</h1> 
                                        <blockquote>{quote.quoteText}</blockquote>
                                    </li>
                                </Link>
                            })
                        ): ("")
                        }
                    </div>
    
                </div>
            )
        }
    }
}

export default Search;