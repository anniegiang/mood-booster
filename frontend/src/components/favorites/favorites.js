import React from "react";
import "./favorite.css"
import { Link } from 'react-router-dom'
class Favorites extends React.Component {
    componentDidMount(){
     

    }

    render() {
        if (!this.props.photos && !this.props.videos && !this.props.quotes) {
            return null;
        }
      

    
        return (
            
            <div className='hi'>

               {/* {array.map(photo => {
                   return <Link to={`/photos/${photo}`}>
                       <li className='content'>
                           <h1>{photo.title}</h1>
                       </li>
                   </Link>
               })} */}

               
            </div>
        )
    }
}

export default Favorites;