import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BtnOne extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.onClick(e.target.id);
    }
    render() {
        const style = {
            background: 'linear-gradient(to right, #ccc, #eee, #ccc)',
            boxShadow: '2px 2px 5px #aaa',
            color: '#333',
            margin: '20px 20px 0 0',
            width: '100px',
            border: 'none',
            lineHeight: '30px'
        };
        return (
            <button id={this.props.value} style={style} onClick={this.handleClick} >{this.props.value}</button>
        );
    }
}

export default withRouter(BtnOne);