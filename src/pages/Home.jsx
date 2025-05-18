// FILENAME: src/pages/Home.jsx
// No need for any personal modifications

import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Import sections
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Highlights from '../components/sections/Highlights';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ContactCTA from '../components/sections/ContactCTA';
import TestComponent from '../components/ui/TestComponent'; // Import for testing

const Home = () => {
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <TestComponent /> {/* Add this for testing Tailwind */}
            <Hero />
            <About />
            <Highlights />
            <Skills />
            <FeaturedProjects />
            <ContactCTA />
        </motion.div>
    );
};

export default Home;