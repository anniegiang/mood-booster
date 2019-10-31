import { connect } from "react-redux";
import { fetchQuote } from "../../actions/quote_actions";
import { saveContent, deleteContent } from "../../actions/user_actions";
import { createComment } from "../../actions/comment_actions";
import Quote from "./quote";

const mapStateToProps = (state, ownProps) => {
  return {
    quotes: state.content.quotes[ownProps.match.params.quote_id],
    isAuthenticated: state.session.isAuthenticated,
    currentUser: state.session.user,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuote: id => dispatch(fetchQuote(id)),
    saveContent: data => dispatch(saveContent(data)),
    createComment: data => dispatch(createComment(data)),
    deleteContent: data => dispatch(deleteContent(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote);
