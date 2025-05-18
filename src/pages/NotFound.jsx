// FILENAME: src/pages/NotFound.jsx
// No need for any personal modifications

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-16 flex items-center justify-center min-h-[70vh]"
        >
            <div className="container-custom max-w-3xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-6">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Page Not Found</h2>
                <p className="text-lg text-secondary-600 mb-8">
                    The page you are looking for might have been removed, had its name changed,
                    or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="btn btn-primary rounded-md inline-flex items-center"
                >
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>
            </div>
        </motion.div>
    );
};

export default NotFound;