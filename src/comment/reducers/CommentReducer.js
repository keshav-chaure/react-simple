const CommentReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            console.log('CHANGE_TEXT from CommentReducer');
            return Object.assign({}, state, {text: action.text});
        default:
            console.log('Default value from CommentReducer');
            return state;
    }
}

export default CommentReducer;
