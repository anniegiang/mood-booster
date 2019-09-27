import React from 'react';

class Search extends React.Component {
    componentDidMount(){
        // USE IF STATEMENT TO KEEP IN GLOBAL STATE GOING TO NEXT PAGE IF YOU WANT TO SHOW SAME VIDEOS WHEN THEY PRESS BACK BUTTON ON SHOW PAGE
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
                
                <div>
                    
                    {this.props.videos ? (
                        this.props.videos.map(video => {
                        return <li>{video.title}</li>
                        })
                        
                    ): ("")
                    }
    
                    {this.props.photos ? (
                        this.props.photos.map(photo => {
                        return <li>{photo.title}</li>
                        })
                    ): ("")
                    }
    
                    {this.props.quotes ? (
                        this.props.quotes.map(quote => {
                        return <li>{quote.title}</li>
                        })
                    ): ("")
                    }
    
                </div>
            )
        }
    }
}

export default Search;