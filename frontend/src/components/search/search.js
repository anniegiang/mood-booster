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
        
        if (this.props.videos === undefined || this.props.photos === undefined || this.props.quotes === undefined) {
            return null
        }
        if (this.props.videos.length === 0 && this.props.photos.length === 0 && this.props.quotes.length === 0) {
            return (
                <div>
                    <h1>Sorry no Content!! Go to form page ya mankey</h1>
                </div>
            )
        } 

        return(
            <div className='search-container'>
                <h1 className="headline">Your content:</h1>
                    <div>
                    {this.props.videos.length > 0 ? (
                        <div className="content_div">
                            <div>
                                <h1>Videos:</h1>
                                <hr></hr>
                                <div className='result-container'>
                                    {
                                        this.props.videos.map(video => {
                                        return <Link to={`/videos/${video._id}`} key={video._id}>
                                                <li className='content' >
                                                    <h1 className="title">{video.title}</h1>
                                                    <video width='426' height='240' controls >
                                                        <source src={video.videoUrl} type="video/mp4"></source>
                                                    </video> 
                                                </li>
                                            </Link>
                                            })               
                                        }
                                </div>
                            </div>
                        </div>
                    ) : ("")
                    }
                </div>
                    
                <div>
                    {this.props.photos.length > 0 ? (
                        <div className="content_div">
                            <div>
                                <h1>Photos:</h1>
                                <hr></hr>
                                <div className='result-container'>
                                    {this.props.photos.map(photo => {
                                        return <Link to={`/photos/${photo._id}`} key={photo._id}>
                                            <li className='content' >
                                                <h1 className="title">{photo.title}</h1>
                                                <img src={photo.photoUrl} ></img>
                                            </li>
                                        </Link>
                                        })
                                    }
                                </div>
                            </div> 
                        </div>
                    ): ("")
                    }
                </div>
                    
                <div>
                    {this.props.quotes.length > 0 ? (
                        <div className="content_div">
                            <div>
                            <h1>Quotes:</h1>
                            <hr></hr>
                                <div className='result-container'>
                                    {this.props.quotes.map(quote => {
                                        return <Link to={`/quotes/${quote._id}`} key={quote._id}>
                                            <li className='content' >
                                                <h1 className="title">{quote.title}</h1> 
                                                <br></br>
                                                <p className="index-quote-text">"{quote.quoteText}"</p>
                                                <blockquote> - {quote.author}</blockquote>
                                            </li>
                                        </Link>
                                        })
                                    }
                                </div>
                        </div>
                    </div> ): ("")
                    }
                </div>

            </div>    
        )
    }
}

export default Search;