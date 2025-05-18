// FILENAME: src/components/sections/Hero.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update profileImage in the ProfileContext.jsx file
 */

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext';

const Hero = () => {
    const { personalInfo } = useProfile();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center pt-16 pb-24 overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/5 -z-10"></div>

            <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Text Content */}
                <motion.div
                    className="lg:col-span-7 z-10"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4">
                            {personalInfo.name}
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <p className="text-2xl md:text-3xl text-primary-600 font-medium mb-6">
                            {personalInfo.title}
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <p className="text-xl text-secondary-700 max-w-2xl mb-8">
                            {personalInfo.headline}
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-4 items-center"
                        variants={itemVariants}
                    >
                        <Link
                            to="/projects"
                            className="btn btn-primary rounded-md flex items-center gap-2 text-base"
                        >
                            View Projects <ArrowRight size={16} />
                        </Link>

                        <Link
                            to="/contact"
                            className="btn btn-outline rounded-md text-base"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    className="lg:col-span-5 flex justify-center lg:justify-end"
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl">
                        {/* You'll need to add your own profile image to the public directory */}
                        <img
                            src={personalInfo.profileImage}
                            alt={personalInfo.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;