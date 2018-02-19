import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BtnOne extends Component {
    handleClick = (e) => {
        if (this.props.onClick) {
            e.preventDefault();
            this.props.onClick(e.target.id);
        }
    }
    render() {
        const style = {
            background: 'linear-gradient(to right, #ccc, #eee, #ccc)',
            boxShadow: '2px 2px 5px #aaa',
            color: '#333',
            margin: '20px 20px 0 0',
            width: this.props.width || '100px',
            border: 'none',
            lineHeight: this.props.lineHeight || '30px',
            opacity: '0.5',
            fontSize: (this.props.fontSize) || ('1em')
        };
        if (this.props.active) {
            style.background = 'linear-gradient(to right, #a50b5e, #b50c67, #a50b5e)';
            style.color = '#eee';
            style.opacity = '1';
        }
        return (
            <button id={this.props.value} style={style} onClick={this.handleClick} type={this.props.type}>{this.props.value}</button>
        );
    }
}

export default withRouter(BtnOne);