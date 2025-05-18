// FILENAME: src/context/ProfileContext.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update the personalInfo object with your own information
 * - Add your own social media links
 * - Modify the skills array with your own professional skills
 */

// FILENAME: src/context/ProfileContext.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Update the personalInfo object with your own information
 * - Add your own social media links
 * - Modify the skills array with your own professional skills
 */

import { createContext, useContext } from 'react';

// Create the context
const ProfileContext = createContext();

// Custom hook to use the profile context
export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error('useProfile must be used within a ProfileProvider');
    }
    return context;
};

// Helper function to handle missing images
const getImageWithFallback = (path) => {
    try {
        // Try to require the image
        return path;
    } catch (error) {
        // If image is missing, return a fallback
        console.warn(`Image not found: ${path}, using fallback`);
        return 'https://via.placeholder.com/600x600.png?text=Profile+Image';
    }
};

// Provider component
export const ProfileProvider = ({ children }) => {
    // MODIFY THIS SECTION WITH YOUR PERSONAL INFORMATION
    const personalInfo = {
        name: "Your Full Name",
        title: "Professional Title | Industry",
        headline: "Strategic business professional with expertise in driving growth and optimizing operations",
        about: `Replace this with 2-3 paragraphs about yourself. Describe your professional background, 
    expertise, and what sets you apart. Highlight your key career achievements and the value 
    you bring to organizations. Make sure to include relevant industry buzzwords that resonate 
    with your target audience. This section should be approx. 150-250 words and convey your 
    professional brand effectively.`,
        location: "City, State/Province, Country",
        email: "your.email@example.com",
        phone: "+1 (555) 123-4567", // Optional, remove if you don't want to share
        profileImage: getImageWithFallback("/placeholder-profile.jpg"), // Replace with your actual image path
    };

    // MODIFY THIS SECTION WITH YOUR SOCIAL MEDIA LINKS
    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/yourusername",
            icon: "Linkedin"
        },
        {
            name: "GitHub",
            url: "https://github.com/yourusername",
            icon: "Github"
        },
        // Optional: Add more social links as needed
        // {
        //   name: "Twitter",
        //   url: "https://twitter.com/yourusername",
        //   icon: "Twitter"
        // },
    ];

    // MODIFY THIS SECTION WITH YOUR PROFESSIONAL SKILLS
    const skills = [
        {
            category: "Business Strategy",
            items: ["Strategic Planning", "Business Development", "Market Analysis", "Project Management"]
        },
        {
            category: "Leadership & Management",
            items: ["Team Leadership", "Change Management", "Performance Optimization", "Stakeholder Management"]
        },
        {
            category: "Technical",
            items: ["Data Analysis", "Financial Modeling", "Process Optimization", "CRM Systems"]
        },
        // Add more skill categories as needed
    ];

    // Career highlights - significant achievements
    // MODIFY THIS SECTION WITH YOUR CAREER HIGHLIGHTS
    const highlights = [
        {
            metric: "30%",
            description: "Revenue growth achieved for XYZ Corp through strategic initiatives"
        },
        {
            metric: "$2.5M",
            description: "Cost savings implemented through process optimization"
        },
        {
            metric: "15+",
            description: "Major projects successfully delivered under budget and ahead of schedule"
        },
        {
            metric: "3",
            description: "Industry awards for excellence in business leadership"
        },
    ];

    // The value that will be given to consumers of this context
    const value = {
        personalInfo,
        socialLinks,
        skills,
        highlights,
    };

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
};