// FILENAME: src/components/sections/Highlights.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update your career highlights in the ProfileContext.jsx file
 */

import { motion } from 'framer-motion';
import { useProfile } from '../../context/ProfileContext';

const Highlights = () => {
    const { highlights } = useProfile();

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
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="highlights" className="py-20 bg-primary-600 text-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title text-white">Career Highlights</h2>
                    <p className="section-subtitle text-primary-100">Key achievements and business impacts</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center"
                        >
                            <div className="bg-white/10 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                                <span className="text-3xl font-bold">{highlight.metric}</span>
                            </div>
                            <p className="text-primary-50">{highlight.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Highlights;