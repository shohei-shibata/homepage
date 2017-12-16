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
            <div className="wrapper">
                {this.state.data.map((item,i) => <Card data={item} id={i} />)}
            </div>
        );
    }
}

class Card extends Component {
    render() {
        return (
            <div key={this.props.id} className="card">
                <div className='picture'>
                    <img src={this.props.data.img[0]} alt={this.props.data.title} width="120"></img>
                </div>
                {this.props.data.title}
            </div>
        );
    }
}

export default Main;