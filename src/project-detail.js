import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ProjectDetail extends Component {
    handleClick = (e) => {
        switch (e.target.id) {
            case 'about':
                this.props.toggleView(true);
                this.props.history.push('/about');
                break;
            case 'home':
                this.props.toggleView(false);
                this.props.history.push('/');
                break;
            case 'contact':
                this.props.toggleView(true);
                this.props.history.push('/contact');
                break;
            default:
        }
    }
    render() {
        console.log(this.props.projects, this.props.match.params);
        const project = (this.props.projects) ? (
            this.props.projects.find(item => {
                return this.props.match.params.id === item._id;
            })
        ) : (
            null    
        )
        console.log(project);
        return (
            <div className='project-detail'>
                {(project) ? (
                    <img src={project.img[0]} />
  
                ) : (
                    <h1>Loading</h1>
                )}
          </div>
        );
    }
}

export default withRouter(ProjectDetail);