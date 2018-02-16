import { connect } from 'react-redux';
import Comment from '../comment/components/comment';
import { bindActionCreators } from 'redux';
import CommentAction from '../comment/actions/CommentAction';

const mapStateToProps = (state) => {
    console.log('map to state to props, state.text: ' + state.text);
    return {
        thing: state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('map to dispatch to props');
    return bindActionCreators({onChange: CommentAction}, dispatch);
}

const CommentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Comment)

export default CommentContainer;