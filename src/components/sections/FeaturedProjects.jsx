// FILENAME: src/components/sections/FeaturedProjects.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update your projects in the ProjectContext.jsx file
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useProjects } from '../../context/ProjectContext';

const FeaturedProjects = () => {
    const { projects, loading } = useProjects();

    // Select up to 3 featured projects
    const featuredProjects = projects.slice(0, 3);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    if (loading) {
        return (
            <section className="py-20">
                <div className="container-custom">
                    <div className="section-header">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">Loading...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="featured-projects" className="py-20 bg-secondary-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">Highlights from my professional portfolio</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {featuredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="card group"
                        >
                            <div className="relative h-48 md:h-56 w-full overflow-hidden">
                                <img
                                    src={project.coverImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <p className="text-sm font-medium text-white/90 mb-1">{project.category}</p>
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-secondary-700 mb-4 line-clamp-3">{project.summary}</p>
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                                >
                                    View Project <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <Link
                        to="/projects"
                        className="btn btn-outline rounded-md"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;