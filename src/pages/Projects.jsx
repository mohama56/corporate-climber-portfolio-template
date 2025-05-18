// FILENAME: src/pages/Projects.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update your projects in the ProjectContext.jsx file
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useProjects } from '../context/ProjectContext';

const Projects = () => {
    const { projects, loading } = useProjects();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState([]);

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Extract unique categories from projects
    const categories = ['All', ...new Set(projects.map(project => project.category))];

    // Filter projects when selected category changes
    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === selectedCategory));
        }
    }, [selectedCategory, projects]);

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

    if (loading) {
        return (
            <div className="pt-24 pb-16">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold mb-8">Projects</h1>
                    <p>Loading projects...</p>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-16"
        >
            <div className="container-custom">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Project Portfolio</h1>
                    <p className="text-lg text-secondary-700 mb-8 max-w-3xl">
                        Explore my professional projects showcasing expertise in business strategy,
                        operational excellence, and organizational leadership.
                    </p>
                </motion.div>

                {/* Category filters */}
                <div className="mb-10">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    selectedCategory === category
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="card group"
                        >
                            <div className="relative h-56 w-full overflow-hidden">
                                <img
                                    src={project.coverImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <p className="text-sm font-medium text-white/90 mb-1">{project.category}</p>
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-secondary-700 mb-4 line-clamp-3">{project.summary}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded"
                                        >
                      {tech}
                    </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-secondary-500 text-xs px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                                    )}
                                </div>
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

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-secondary-500 mb-4">No projects found in this category.</p>
                        <button
                            onClick={() => setSelectedCategory('All')}
                            className="btn btn-outline rounded-md"
                        >
                            View All Projects
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Projects;