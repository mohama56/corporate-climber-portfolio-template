// FILENAME: src/components/layout/Navbar.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update the logo text with your own name or brand
 * - Customize navigation links if needed
 */

import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { personalInfo } = useProfile();
    const location = useLocation();

    // Handle scroll event to add background to navbar when scrolling
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close mobile menu when navigating to a new page
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Navigation links - customize if needed
    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'Projects', path: '/projects' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
            }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    {/* MODIFY THIS SECTION WITH YOUR OWN NAME OR BRAND */}
                    <span className="text-xl font-display font-bold text-secondary-800">
            {personalInfo.name.split(' ')[0]} <span className="text-primary-600">{personalInfo.name.split(' ').length > 1 ? personalInfo.name.split(' ')[1] : ''}</span>
          </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative text-sm font-medium transition-colors hover:text-primary-600 ${
                                    isActive
                                        ? 'text-primary-600 after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-primary-600'
                                        : 'text-secondary-700'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-secondary-800 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="md:hidden py-4 px-6 bg-white border-t border-secondary-100">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `py-2 text-base transition-colors ${
                                        isActive ? 'text-primary-600 font-medium' : 'text-secondary-700'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Navbar;