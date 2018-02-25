import React, { Component } from 'react';

import Markdown from 'react-markdown';

import '../css/portfolio.css';

class ProjectBig extends Component {
    handleClick = (e) => {
        console.log('click', e.target.value);
        this.props.toggleModal();
    }
    render() {
        console.log('project details', this.props.project)
        const project = this.props.project;
        return (
            <div 
                className='project-big'
                onClick={this.handleClick}
            >
                <div className='project-big-background'></div>
                <div className='project-big-contents'>
                    <img src={project.img} alt={project.title} />
                    <div>
                        <Markdown source={project.description} />
                    </div>
                    <div className='project-big-links'>
                            <a href={project.appUrl} target='_blank'><i className="fas fa-external-link-alt"></i></a>
                            <a href={project.repoUrl} target='_blank'><i className="fab fa-github"></i></a>
                        </div>
                </div>
            </div>
        );
    }
}

export default ProjectBig;