import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        axios.get(this.props.url)
          .then(res => {
            this.setState({ data: res.data });
          });
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                <h1>Projects List</h1>
                <div class="wrapper">
                    {this.state.data.map((item,i) => <Card data={item} key={i} />)}
                </div>
            </div>
        );
    }
}

class Card extends Component {
    render() {
        return (
            <div key={this.props.key} class="card">
                <div class='picture'>
                    <img src={this.props.data.img[0]} alt={this.props.data.title} width="120"></img>
                </div>
                {this.props.data.title}
            </div>
        );
    }
}

export default Main;