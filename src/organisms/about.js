import React, { Component } from 'react';
import profilePhoto from '../img/profile.png';

import '../css/about.css';

class About extends Component {
    render() {
        return (
            <div className='main-card'>
                <div className='about'>
                    <h1>About Me</h1>
                    <p>   
                        <img className='about-photo' src={profilePhoto} alt='me' />
                        My name is Shohei Shibata. Living in Düsseldorf with my wife and two boys,
                        I code as much as I can outside of my day job responsibility as a mechanical engineer in the automotive industry.
                    </p>
                    <p>
                        My biggest focus is in creating simple web apps that positively influence people's lives. I want to help the web to be useful, rather than distracting or addictive.
                    </p>
                    <p>
                        If there are any projects which I could support you in any way, please don't hesitate to contact me.
                    </p>
                </div>
            </div>  
        );
    }
}

export default About;