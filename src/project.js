import React, { Component } from 'react';

class Project extends Component {
    render() {
        const project = this.props.project;
        console.log(project);
        const style = {
            backgroundImage: `url(${project.img})`,
            backgroundSize: 'cover'
        };
        return (
            <div style={style} className='projects-card'>
                <div className='projects-card-text'>Click to learn more</div>
            </div>
        );
    }
}

export default Project;