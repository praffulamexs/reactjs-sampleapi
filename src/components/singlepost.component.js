import React from 'react'
import './SinglePost.css'

class SinglePostComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: props.userId,
            id: props.id,
            title: props.title,
            body: props.body
        }
    }

    render() {
        return (
            <div className="post">
                <div className="head">
                    <p>ID - <b>{this.state.id}</b></p>
                    <p>User ID - <b>{this.state.userId}</b></p>
                </div>
                <p><b>{this.state.title}</b></p>
                <p>{this.state.body}</p>
            </div>
        )
    }
}

export default SinglePostComponent