// FILENAME: src/pages/ProjectDetail.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update your projects in the ProjectContext.jsx file
 */

import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Briefcase, ExternalLink } from 'lucide-react';
import { useProjects } from '../context/ProjectContext';
import ReactMarkdown from 'react-markdown';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { projects, loading } = useProjects();
    const [project, setProject] = useState(null);
    const [activeImage, setActiveImage] = useState(0);

    // Find the project that matches the id parameter
    useEffect(() => {
        if (!loading) {
            const foundProject = projects.find(p => p.id === id);
            if (foundProject) {
                setProject(foundProject);
                setActiveImage(0); // Reset active image when project changes
            } else {
                // If no project is found, navigate to the projects page
                navigate('/projects', { replace: true });
            }
        }
    }, [id, loading, projects, navigate]);

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading || !project) {
        return (
            <div className="pt-24 pb-16">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold mb-8">Loading project...</h1>
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
                {/* Back button */}
                <Link
                    to="/projects"
                    className="inline-flex items-center text-secondary-600 hover:text-primary-600 mb-8"
                >
                    <ArrowLeft size={16} className="mr-1" /> Back to Projects
                </Link>

                {/* Project header */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                    <p className="text-lg text-secondary-700 mb-6 max-w-3xl">
                        {project.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-secondary-600">
                        {project.client && (
                            <div className="flex items-center">
                                <Briefcase size={16} className="mr-1" />
                                <span>{project.client}</span>
                            </div>
                        )}

                        {project.date && (
                            <div className="flex items-center">
                                <Calendar size={16} className="mr-1" />
                                <span>{project.date}</span>
                            </div>
                        )}

                        <div className="ml-auto">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Project media column */}
                    <div className="lg:col-span-7">
                        {/* Main image display */}
                        <div className="bg-secondary-100 rounded-lg overflow-hidden mb-4">
                            <img
                                src={project.images[activeImage] || project.coverImage}
                                alt={`${project.title} - view ${activeImage + 1}`}
                                className="w-full h-auto object-cover aspect-[16/9]"
                            />
                        </div>

                        {/* Thumbnails */}
                        {project.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-2 mb-6">
                                {project.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`rounded overflow-hidden ${
                                            activeImage === index ? 'ring-2 ring-primary-600' : 'opacity-70 hover:opacity-100'
                                        }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-auto aspect-[4/3] object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Video or presentation */}
                        {(project.videoUrl || project.presentationUrl) && (
                            <div className="space-y-4 mt-8">
                                {project.videoUrl && (
                                    <div className="bg-secondary-100 rounded-lg overflow-hidden">
                                        <iframe
                                            src={project.videoUrl}
                                            title={`${project.title} video`}
                                            className="w-full aspect-video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                )}

                                {project.presentationUrl && (
                                    <div className="bg-secondary-100 rounded-lg overflow-hidden">
                                        <iframe
                                            src={project.presentationUrl}
                                            title={`${project.title} presentation`}
                                            className="w-full aspect-[16/10]"
                                            frameBorder="0"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Project details column */}
                    <div className="lg:col-span-5">
                        {/* Project description */}
                        <div className="prose max-w-none mb-8">
                            <ReactMarkdown>{project.description}</ReactMarkdown>
                        </div>

                        {/* Project details */}
                        <div className="space-y-6">
                            {/* Technologies */}
                            <div>
                                <h3 className="text-lg font-bold mb-2">Technologies & Methodologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Key Outcomes */}
                            <div>
                                <h3 className="text-lg font-bold mb-2">Key Outcomes</h3>
                                <ul className="space-y-2">
                                    {project.outcomes.map((outcome, index) => (
                                        <li key={index} className="flex items-baseline">
                                            <span className="text-primary-600 mr-2">•</span>
                                            <span>{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;