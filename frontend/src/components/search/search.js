import React from 'react';

class Search extends React.Component {
    componentDidMount(){
        if (this.props.location.state.videos) {
            this.props.fetchVideos(this.props.location.search)
        }
        if (this.props.location.state.photos) {
            this.props.fetchPhotos(this.props.location.search)
        }
    }
    render() {
    //    debugger
        if (!this.props.videos) {
            return null
        }
        return(
            
            <div>
                <h1>
                    hello
                    {this.props.videos.map(video => {
                       return <li>{video.title}</li>
                    })}
                </h1>
                <h1>
                    hello
                    {this.props.photos.map(photo => {
                       return <li>{photo.title}</li>
                    })}
                </h1>

            </div>
        )
    }
}

export default Search;