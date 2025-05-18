// FILENAME: src/components/sections/About.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update your about text in the ProfileContext.jsx file
 */

import { motion } from 'framer-motion';
import { useProfile } from '../../context/ProfileContext';

const About = () => {
    const { personalInfo } = useProfile();

    return (
        <section id="about" className="py-20 bg-secondary-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Professional background and expertise</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12 mx-auto max-w-4xl"
                >
                    <div className="prose prose-lg max-w-none">
                        {/* Display the about text with proper spacing between paragraphs */}
                        {personalInfo.about.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4 text-secondary-700 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;