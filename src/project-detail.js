import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ProjectDetail extends Component {

    render() {
        const project = (this.props.projects) ? (
            this.props.projects.find(item => {
                return this.props.match.params.id === item._id;
            })
        ) : (
            null    
        )
        console.log(project);
        return (
            <div key={this.props.match.params.id} className='project-detail'>
                {(project) ? (
                    <div>
                        <img src={project.img[0]} alt={project.title} />
                        <div>
                            <p>{project.description}</p>
                        </div>
                        <div className='project-detail-links'>
                            <a href={project.appUrl} target='_blank'><i className="fas fa-external-link-alt"></i></a>
                            <a href={project.repoUrl} target='_blank'><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                ) : (
                    <h1>Loading</h1>
                )}
            </div>
        );
    }
}

export default withRouter(ProjectDetail);