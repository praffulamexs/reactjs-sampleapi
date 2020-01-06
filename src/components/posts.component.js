import React from 'react';
import SinglePostComponent from './singlepost.component';

class PostsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    posts: result
                })
            }, (error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h3 className="App">Posts</h3>
                {
                    this.state.posts.map(post => <SinglePostComponent key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} /> )
                }
            </div>
        )
    }
}

export default PostsComponent