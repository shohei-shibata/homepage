import React, { Component } from 'react';

import '../css/portfolio.css';

import ProjectSmall from '../molecules/project-small';
import ProjectBig from '../molecules/project-big';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: null
        };
    }
    toggleModal = (val) => {
        console.log('toggle modal', val);
        if (val) {
            this.setState({
                details: val
            });
        } else {
            this.setState({
                details: null
            })
        }
    }
    render() {
        console.log('projects', this.props.projects)
        const projects = this.props.projects;
        if (projects) {
            console.log('will render cards')
            return (
                <div className='portfolio' >
                    {projects.map(project => {
                        return (
                            <ProjectSmall 
                                key={project._id} 
                                project={project}
                                toggleModal={this.toggleModal}
                            />
                        );
                    })}
                    {(this.state.details) ? (
                        <ProjectBig project={this.state.details} toggleModal={this.toggleModal}/>
                    ) : (
                        null
                    )}
                </div>  
            );
        } else {
            return (
                <div className='portfolio' >
                    <h1>Loading...</h1>
                </div>  
            );
        }
        
    }
}

export default Portfolio;