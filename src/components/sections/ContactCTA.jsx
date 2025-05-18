// FILENAME: src/components/sections/ContactCTA.jsx
// No need for any personal modifications

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section className="py-16 bg-accent-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-xl rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto"
                >
                    <div className="mb-6 mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <Mail size={28} className="text-primary-600" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to collaborate?</h2>
                    <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
                        Let's discuss how my expertise can contribute to your organization's success.
                        I'm available for consulting, project work, and full-time opportunities.
                    </p>

                    <Link
                        to="/contact"
                        className="btn btn-primary rounded-md inline-flex items-center"
                    >
                        Get in Touch <ArrowRight size={16} className="ml-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;