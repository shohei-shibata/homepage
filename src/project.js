import React, { Component } from 'react';

class Project extends Component {
    handleClick = (e) => {
        console.log('click');
        this.props.toggleView(true);
    }
    render() {
        const project = this.props.project;
        const style = {
            backgroundImage: `url(${project.img})`,
            backgroundSize: 'cover'
        };
        return (
            <div 
                style={style} 
                className='projects-card'
                onClick={this.handleClick}>
                    <div className='projects-card-text'>Click to learn more</div>
            </div>
        );
    }
}

export default Project;