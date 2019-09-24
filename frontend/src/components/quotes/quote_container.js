import { connect } from "react-redux";
import { fetchQuote } from "../../actions/quote_action";
import Quote from "./quote";

const mapStateToProps = state => {
  return {
    quote: state.content.quote[ownProps.match.params.id],
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuote: id => dispatch(fetchQuote(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote);
