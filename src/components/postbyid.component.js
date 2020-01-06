import React from 'react'
import SinglePostComponent from './singlepost.component'

class PostByIdComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: null,
            id: 0,
            title: null,
            body: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.state.id)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    userId: result.userId,
                    id: result.id,
                    title: result.title,
                    body: result.body
                })
            })
    }

    handleChange(event) {
        fetch('https://jsonplaceholder.typicode.com/posts/' + event.target.value)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    userId: result.userId,
                    id: result.id,
                    title: result.title,
                    body: result.body
                })
            })
    }

    render() {
        return(
            <div>
                <h3 className="App">Search Post By ID</h3>
                <form className="post App">
                    <label>
                        Enter the value of the ID :  <input type="number" name="num" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </form>
                
                <SinglePostComponent key={this.state.id} userId={this.state.userId} id={this.state.id} title={this.state.title} body={this.state.body} />
            </div>
        )
    }
}

export default PostByIdComponent