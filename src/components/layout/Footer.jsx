// FILENAME: src/components/layout/Footer.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update the copyright information with your name/company
 * - Customize social links to match your profiles
 */

import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';

const Footer = () => {
    const { personalInfo, socialLinks } = useProfile();
    const currentYear = new Date().getFullYear();

    // Map of icon names to components
    const iconComponents = {
        'Linkedin': Linkedin,
        'Github': Github,
        'Mail': Mail,
        // Add more icons as needed
    };

    return (
        <footer className="bg-secondary-900 text-white py-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Name and Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
                        <p className="text-secondary-300 mb-2">{personalInfo.title}</p>
                        <p className="text-secondary-300 mb-4">{personalInfo.location}</p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Navigation</h4>
                        <nav className="flex flex-col space-y-2">
                            <Link to="/" className="text-secondary-300 hover:text-white transition-colors">Home</Link>
                            <Link to="/projects" className="text-secondary-300 hover:text-white transition-colors">Projects</Link>
                            <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors">Contact</Link>
                        </nav>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4 mb-4">
                            {socialLinks.map((link) => {
                                const IconComponent = iconComponents[link.icon];
                                return IconComponent ? (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-secondary-300 hover:text-white transition-colors"
                                        aria-label={link.name}
                                    >
                                        <IconComponent size={20} />
                                    </a>
                                ) : null;
                            })}

                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="text-secondary-300 hover:text-white transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                        <p className="text-secondary-400 text-sm">
                            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                                {personalInfo.email}
                            </a>
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-secondary-700 mt-8 pt-6 text-center">
                    <p className="text-secondary-400 text-sm">
                        {/* MODIFY THIS WITH YOUR COPYRIGHT INFORMATION */}
                        &copy; {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;