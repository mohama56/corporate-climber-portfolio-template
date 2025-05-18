// FILENAME: src/context/ProjectContext.jsx
/**
 * MODIFICATIONS NEEDED:
 * - Replace the sample projects with your own professional projects
 * - For each project, include detailed descriptions, technologies used, and outcomes
 * - Add your own project images (store them in the public folder)
 */

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
const ProjectContext = createContext();

// Custom hook to use the project context
export const useProjects = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error('useProjects must be used within a ProjectProvider');
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
        return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%230ea5e9" /><text x="600" y="400" font-family="Arial" font-size="50" fill="white" text-anchor="middle">Placeholder Image</text></svg>';
    }
};

// Provider component
export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Try to fetch projects from the backend API
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects`);
                if (response.data && response.data.data) {
                    setProjects(response.data.data);
                } else {
                    // If no projects are returned or backend not connected, use sample projects
                    setProjects(sampleProjects);
                }
                setLoading(false);
            } catch (err) {
                console.log('Using sample projects due to API error:', err);
                setProjects(sampleProjects);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // MODIFY THIS SECTION WITH YOUR OWN PROJECTS
    // These sample projects will be used if the backend API is not connected
    const sampleProjects = [
        {
            id: "1",
            title: "Corporate Restructuring & Cost Optimization",
            slug: "corporate-restructuring",
            summary: "Led a company-wide initiative to restructure operations and optimize costs, resulting in 20% reduction in operational expenses while improving efficiency.",
            description: `
        ## Overview
        
        Led a comprehensive corporate restructuring initiative aimed at streamlining operations, reducing redundancies, and optimizing costs across all business units.
        
        ## Challenge
        
        The company was experiencing declining profitability due to bloated operational costs, process inefficiencies, and organizational redundancies. Leadership needed to implement significant changes without disrupting core business functions.
        
        ## Approach
        
        1. Conducted thorough analysis of all business units to identify inefficiencies and cost-saving opportunities
        2. Developed a phased restructuring plan with clear milestones and KPIs
        3. Implemented process optimization and automation in key operational areas
        4. Reorganized teams to eliminate redundancies while preserving essential capabilities
        5. Established new governance structures to maintain efficiency gains
        
        ## Results
        
        * Reduced operational expenses by 20% ($4.2M annually)
        * Improved process efficiency by 35% through strategic automation
        * Decreased decision-making time by 40% through organizational streamlining
        * Maintained employee satisfaction above industry benchmarks throughout transition
      `,
            client: "Global Manufacturing Corporation",
            date: "2023",
            category: "Business Strategy",
            coverImage: getImageWithFallback("/project-1-cover.jpg"),
            images: [
                getImageWithFallback("/project-1-image-1.jpg"),
                getImageWithFallback("/project-1-image-2.jpg"),
                getImageWithFallback("/project-1-image-3.jpg")
            ],
            videoUrl: "https://www.youtube.com/embed/your-video-id", // Optional: YouTube embed URL
            presentationUrl: "https://docs.google.com/presentation/d/your-presentation-id/embed", // Optional: Google Slides or other presentation URL
            technologies: ["Financial Modeling", "Process Optimization", "Change Management", "PowerBI"],
            outcomes: [
                "20% reduction in operational expenses",
                "35% improvement in process efficiency",
                "40% decrease in decision-making time"
            ]
        },
        {
            id: "2",
            title: "Market Expansion Strategy",
            slug: "market-expansion",
            summary: "Developed and executed a market expansion strategy for entering three new regional markets, resulting in 45% revenue growth within 18 months.",
            description: `
        ## Overview
        
        Spearheaded the development and execution of a comprehensive market expansion strategy to establish presence in three new regional markets.
        
        ## Challenge
        
        The company had saturated its current markets and needed to identify and penetrate new geographic regions to maintain growth targets. The expansion needed to be executed with limited capital investment while navigating different regulatory environments.
        
        ## Approach
        
        1. Conducted extensive market research to identify high-potential regions for expansion
        2. Developed tailored value propositions for each new market based on local needs
        3. Created strategic partnerships with established local businesses to accelerate market entry
        4. Implemented phased rollout strategy to manage risk and allow for iterative improvements
        5. Established localized marketing campaigns to build brand recognition
        
        ## Results
        
        * Achieved 45% revenue growth within 18 months of implementation
        * Established successful operations in all three target markets
        * Developed five key strategic partnerships that reduced market entry costs by 30%
        * Created a replicable expansion playbook for future market entries
      `,
            client: "National Retail Chain",
            date: "2022",
            category: "Business Development",
            coverImage: getImageWithFallback("/project-2-cover.jpg"),
            images: [
                getImageWithFallback("/project-2-image-1.jpg"),
                getImageWithFallback("/project-2-image-2.jpg")
            ],
            videoUrl: "", // Optional: YouTube embed URL
            presentationUrl: "https://docs.google.com/presentation/d/your-presentation-id/embed", // Optional: Google Slides or other presentation URL
            technologies: ["Market Analysis", "Strategic Planning", "Partnership Development", "Tableau"],
            outcomes: [
                "45% revenue growth in 18 months",
                "Successful entry into 3 new markets",
                "30% reduction in expansion costs through strategic partnerships"
            ]
        },
        {
            id: "3",
            title: "Digital Transformation Initiative",
            slug: "digital-transformation",
            summary: "Led a company-wide digital transformation initiative to modernize legacy systems and implement data-driven decision making, resulting in 25% improvement in operational efficiency.",
            description: `
        ## Overview
        
        Led a comprehensive digital transformation initiative to modernize outdated systems, implement data-driven decision-making processes, and enhance customer experience through technology.
        
        ## Challenge
        
        The organization was relying on legacy systems and manual processes that were creating inefficiencies, data silos, and hampering growth. Leadership recognized the need for digital transformation but faced resistance to change and technology adoption barriers.
        
        ## Approach
        
        1. Assessed current technology landscape and identified critical pain points and opportunities
        2. Developed a phased digital transformation roadmap aligned with business objectives
        3. Implemented cloud-based CRM and ERP solutions to centralize data and streamline operations
        4. Created a data analytics program to enable data-driven decision making
        5. Conducted organization-wide training to ensure successful adoption
        
        ## Results
        
        * Improved operational efficiency by 25% through process automation
        * Reduced IT infrastructure costs by 35% by migrating to cloud solutions
        * Decreased manual data processing by 70%, freeing staff for higher-value work
        * Enhanced customer satisfaction scores by 18% through improved digital experience
      `,
            client: "Financial Services Firm",
            date: "2021-2022",
            category: "Digital Strategy",
            coverImage: getImageWithFallback("/project-3-cover.jpg"),
            images: [
                getImageWithFallback("/project-3-image-1.jpg"),
                getImageWithFallback("/project-3-image-2.jpg"),
                getImageWithFallback("/project-3-image-3.jpg"),
                getImageWithFallback("/project-3-image-4.jpg")
            ],
            videoUrl: "https://www.youtube.com/embed/your-video-id", // Optional: YouTube embed URL
            presentationUrl: "", // Optional: Google Slides or other presentation URL
            technologies: ["Cloud Migration", "CRM Implementation", "Process Automation", "Change Management", "Data Analytics"],
            outcomes: [
                "25% improvement in operational efficiency",
                "35% reduction in IT infrastructure costs",
                "70% decrease in manual data processing",
                "18% increase in customer satisfaction"
            ]
        }
    ];

    const value = {
        projects,
        loading,
        error
    };

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    );
};