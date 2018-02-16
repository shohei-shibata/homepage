import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Project extends Component {
    handleClick = (e) => {
        console.log('click');
        this.props.history.push('/project/' + this.props.project._id);
        this.props.toggleView(true);
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
                style={style} 
                className='projects-card'
                onClick={this.handleClick}>
                    <div className='projects-card-text'>Click to learn more</div>
            </div>
        );
    }
}

export default withRouter(Project);