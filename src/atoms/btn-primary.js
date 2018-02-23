import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../css/btn.css';

class BtnOne extends Component {
    handleClick = (e) => {
        if (this.props.onClick) {
            e.preventDefault();
            this.props.onClick(e.target.id);
        }
    }
    render() {
        const style = {
            margin: this.props.margin || '20px 20px 0 0',
            width: this.props.width || '100px',
            lineHeight: this.props.lineHeight || '30px',
            fontSize: (this.props.fontSize) || ('1em')
        };
        return (
            <button id={this.props.value} style={style} className="btn-primary" onClick={this.handleClick} type={this.props.type}>{this.props.value}</button>
        );
    }
}

export default withRouter(BtnOne);