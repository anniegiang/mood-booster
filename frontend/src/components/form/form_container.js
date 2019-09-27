import Form from './form';
import { connect } from "react-redux";
import { fetchVideos } from '../../actions/video_action';

const msp = (state, ownProps) => {
    return ({

    })
}

const mdp = dispatch => {
    return({
        
    })
}

export default connect(msp,mdp)(Form)