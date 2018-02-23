import React, { Component } from 'react';

import BtnPrimary from '../atoms/btn-primary';

import '../css/home.css';

class About extends Component {
    handleClick = (e) => {
        this.props.history.push('/projects');
    }
    render() {
        return (
            <div>
                <div className="welcome">
                    <div className="text-background">
                        <h1>Welcome!</h1>
                    </div>
                </div>
                <div className="intro">
                    <div className="text-background">
                        <div>
                            <h1>Web Experiences,<br/>
                            made simply, <br/>
                            with attention to detail.</h1>
                        </div>
                    </div>
                    <BtnPrimary 
                        value='View Projects' 
                        fontSize='0.8em' 
                        width='120px' 
                        margin='5vh 0 0 0'
                        lineHeight='40px' 
                        onClick={this.handleClick} />
                </div>
            </div>  
        );
    }
}

export default About;