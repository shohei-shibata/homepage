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
                <h1>My Projects</h1>
                <div className="wrapper">
                    {this.state.data.map((item,i) => <Card data={item} key={i} />)}
                </div>
            </div>
        );
    }
}

class Card extends Component {
    render() {
        return (
            <div key={this.props.key} className="card">
                <img src={this.props.data.img[0]} alt={this.props.data.title} className="image"></img>
                <div className="overlay card-text">
                    <div className="card-title">
                        <h3>{this.props.data.title}</h3>
                    </div>
                    <div className="card-description">
                        <p>{this.props.data.description}</p>
                    </div>
                    <div className="card-links">
                        <p><a href={this.props.data.appUrl} target="_blank">Live App</a> | <a href={this.props.data.repoUrl} target="_blank">Code</a></p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Main;