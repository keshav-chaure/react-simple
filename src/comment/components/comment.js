import React, { Component } from 'react';
import CommentAction from "../actions/CommentAction";


class Comment extends Component {
    // onChangeHandler(event) {
    //     console.log('from onChangeHandler Component.js');
    //     this.props.onChange(event.target.value);
    // }
    //
    // onClickButton(e){
    //     console.log('from onChangeHandler Component.js');
    //      this.props.CommentAction("some changes!!!");
    //      this.props.onChange(e.target.value);
    //
    // }

    render() {
        return (
            <div className="Comment-container">
                <div>
                    <h2>this is comment</h2>
                </div>
                <div>

                     {/*<button onClick={this.onClickButton.bind(this)} >click</button>*/}
                    <div>{state.text}</div>
                     <button>click</button>

                </div>
            </div>
        );
    }
}

export default Comment;