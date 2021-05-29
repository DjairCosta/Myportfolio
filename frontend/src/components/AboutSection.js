

import React from 'react';

import AboutUs from '../pages/AboutUs';
import profile from '../img/profile.jpeg';

import { About, Description, Image } from '../styles';



const AboutSection = () => {
    return (
        <About>
            <Description>
                <h2>Djair Costa</h2>
                <h2>Software Engineer</h2>

                <p>
                    I'm a software engineer who is passionate about making code more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include chatbots, the MERN (Mongo, Express, React and Node) stack and Java. I am currently working on an awesome startup called Proposify.
                </p>

                <button>Contact Me</button>
            </Description>
            <Image>
                <img alt='Djair Costa' src={profile} />
            </Image>
        </About>

    )
}

export default AboutSection