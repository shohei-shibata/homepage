import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    loadPosts = () => {
        axios.get(this.props.url)
          .then(res => {
            this.setState({ data: res.data });
          });
    }
    componentDidMount() {
        this.loadPosts();
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                <h1>Projects List</h1>
                <div>
                    <p>Projects by Title:</p>
                    {this.state.data.map((item,i) => <li key={i}>{item.title}</li>)}
                </div>
            </div>
        );
    }
}

export default Main;