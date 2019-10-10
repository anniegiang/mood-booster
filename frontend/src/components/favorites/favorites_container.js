import { connect } from "react-redux";
import Favorites from './favorites'
import { fetchPhoto } from "../../actions/photo_actions";
import { fetchQuote } from "../../actions/quote_actions";
import { fetchVideo } from "../../actions/video_actions";
import {fetchUser} from '../../actions/user_actions'

const msp = (state, ownProps) => {
    debugger
    
    return({
        // userId: state.user.id
        
    })
}

const mdp = dispatch => {
    return({
        fetchPhoto: id => dispatch(fetchPhoto(id)),
        fetchQuote: id => dispatch(fetchQuote(id)),
        fetchVideo: id => dispatch(fetchVideo(id)),
        fetchUser: id => dispatch(fetchUser(id))
    })
}

export default connect(msp,mdp)(Favorites);