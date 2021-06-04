

import React from 'react';

import profile from '../img/profile.jpeg';

import { motion } from 'framer-motion'
import { titleAnimation, fade, photoAnimation, scrollReveal } from '../animation'
import { useScroll } from '../hooks/useScroll'
import { useHistory } from 'react-router-dom'


import { About, Description, Image } from '../styles';



const AboutSection = () => {
    const [element, controls] = useScroll()
    const history = useHistory()

    const redirectHandler = () => {
        history.push('/contact')
    }

    return (
        <About
            variants={scrollReveal}
            animate={controls}
            initial='hidden'
            ref={element}
        >
            <Description>
                <motion.h2 variants={titleAnimation}>Djair Costa</motion.h2 >
                <motion.h2 variants={titleAnimation}>Software Engineer</motion.h2>

                <motion.p variants={fade}>
                    I'm a software engineer who is passionate about making code more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include chatbots, the MERN (Mongo, Express, React and Node) stack and Java. I am currently working on an awesome startup called Proposify.
                </motion.p>

                <button onClick={redirectHandler}>Contact Me</button>
            </Description>
            <Image>
                <motion.div variants={photoAnimation}>
                    <img alt='Djair Costa' src={profile} />
                </motion.div>
            </Image>
        </About>

    )
}

export default AboutSection