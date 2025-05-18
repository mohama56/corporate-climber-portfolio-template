// FILENAME: src/pages/Contact.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update your contact information in the ProfileContext.jsx file
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';
import axios from 'axios';

const Contact = () => {
    const { personalInfo, socialLinks } = useProfile();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Map of icon names to components
    const iconComponents = {
        'Linkedin': Linkedin,
        'Github': Github,
        // Add more as needed
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // Try to submit to backend API
            await axios.post(`${import.meta.env.VITE_API_URL}/contact`, data);
            setIsSubmitted(true);
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError('There was an error sending your message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg text-secondary-700">
                        Interested in working together? Feel free to reach out through any of the channels below.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <Mail size={20} className="text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary-900 mb-1">Email</h3>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-secondary-700 hover:text-primary-600"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            {/* Phone (optional) */}
                            {personalInfo.phone && (
                                <div className="flex items-start">
                                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                                        <Phone size={20} className="text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-secondary-900 mb-1">Phone</h3>
                                        <a
                                            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                                            className="text-secondary-700 hover:text-primary-600"
                                        >
                                            {personalInfo.phone}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Location */}
                            <div className="flex items-start">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <MapPin size={20} className="text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-secondary-900 mb-1">Location</h3>
                                    <p className="text-secondary-700">{personalInfo.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h3 className="font-semibold text-secondary-900 mb-4">Connect on Social Media</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((link) => {
                                    const IconComponent = iconComponents[link.icon];
                                    return IconComponent ? (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-secondary-100 hover:bg-secondary-200 p-3 rounded-full text-secondary-700 hover:text-primary-600 transition-colors"
                                            aria-label={link.name}
                                        >
                                            <IconComponent size={20} />
                                        </a>
                                    ) : null;
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                        {isSubmitted ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                                <p className="text-green-700 mb-4">
                                    Thank you for reaching out. I'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="btn btn-outline rounded-md"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="label">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className={`input ${errors.name ? 'border-red-500' : ''}`}
                                        placeholder="Your name"
                                        {...register('name', { required: 'Name is required' })}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="label">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className={`input ${errors.email ? 'border-red-500' : ''}`}
                                        placeholder="Your email address"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="label">Subject</label>
                                    <input
                                        id="subject"
                                        type="text"
                                        className={`input ${errors.subject ? 'border-red-500' : ''}`}
                                        placeholder="Message subject"
                                        {...register('subject', { required: 'Subject is required' })}
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="label">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className={`input ${errors.message ? 'border-red-500' : ''}`}
                                        placeholder="Your message"
                                        {...register('message', { required: 'Message is required' })}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                    )}
                                </div>

                                {/* Submit Error */}
                                {submitError && (
                                    <div className="bg-red-50 border border-red-200 rounded p-3 text-red-700">
                                        {submitError}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary rounded-md w-full flex items-center justify-center"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <>
                                            Send Message <Send size={16} className="ml-2" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;