export default function CommentAction(newText){
    console.log('from HelloAction.js');
    return {
        type: 'CHANGE_TEXT',
        text: newText
    }
}
