import React, { Component } from 'react';

import '../css/portfolio.css';

class ProjectSmall extends Component {
    handleClick = (e) => {
        console.log('click');
        this.props.toggleModal(this.props.project);
    }
    render() {
        const project = this.props.project;
        const delay = this.props.position * 0.1 + 's';
        const style = {
            backgroundImage: `url(${project.img})`,
            backgroundSize: 'cover',
            animation: '0.5s ' + delay + ' slide-up both'
        };
        return (
            <div 
                key={project.title + this.props.position}
                id={project._id}
                className='portfolio-card'
                onClick={this.handleClick}
            >
                <div className='portfolio-background' style={style}>
                </div>
                <div className='portfolio-card-text'>
                    <h1>{project.title}</h1>
                    <p>Click for more info</p>
                </div>
            </div>
        );
    }
}

export default ProjectSmall;