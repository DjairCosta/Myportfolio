
import React from 'react';

import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'

import { pageAnimation } from '../animation'
import { motion } from 'framer-motion'

import ScrollTop from '../components/Scrolltop'

const AboutUs = () => {
    return (
        <motion.div
            initial='hidden'
            animate='show'
            exit='exit'
            variants={pageAnimation}>
            <AboutSection />
            <ServicesSection />
            <ScrollTop />
        </motion.div>

    )
}

export default AboutUs