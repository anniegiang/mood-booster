import { connect } from "react-redux";
import { fetchQuote } from "../../actions/quote_actions";
import { saveContent } from "../../actions/user_actions";
import Quote from "./quote";

const mapStateToProps = (state, ownProps) => {
  return {
    quotes: state.content.quotes[ownProps.match.params.quote_id],
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuote: id => dispatch(fetchQuote(id)),
    saveContent: data => dispatch(saveContent(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote);
