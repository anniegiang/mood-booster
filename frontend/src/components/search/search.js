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
       debugger
        if (!this.props.videos) {
            return null
        }
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

            </div>
        )
    }
}

export default Search;