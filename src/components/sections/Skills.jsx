// FILENAME: src/components/sections/Skills.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update your skills in the ProfileContext.jsx file
 */

import { motion } from 'framer-motion';
import { useProfile } from '../../context/ProfileContext';

const Skills = () => {
    const { skills } = useProfile();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="py-20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">Professional Skills</h2>
                    <p className="section-subtitle">Key competencies and expertise areas</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skills.map((skillCategory, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-display font-bold text-primary-600 mb-4">
                                {skillCategory.category}
                            </h3>
                            <ul className="space-y-2">
                                {skillCategory.items.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="flex items-center text-secondary-700">
                                        <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;