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
                        My name is Shohei Shibata.<br/>
                        Living in Düsseldorf with my wife and two boys,
                        I code as much as I can outside of my day job responsibility as 
                        a mechanical engineer in the automotive industry.
                    </p>
                    <p>
                        My biggest focus is in creating simple web apps that positively influence people's lives. 
                        If my apps help people to produce, learn, build a community... I'd be a very happy man.
                    </p>
                    <p>
                        If there are any projects which I could support you in any way, I'll be excited to hear about it!
                    </p>
                </div>
            </div>  
        );
    }
}

export default About;