import Form from './form';
import { connect } from "react-redux";
import { fetchUser } from '../../actions/user_actions'

const msp = (state, ownProps) => {
    return ({
        user: state.session.user
    })
}

const mdp = dispatch => {
    return({
        fetchUser: id => dispatch(fetchUser(id))
    })
}

export default connect(msp,mdp)(Form)