# Corporate Climber Portfolio Template

A professional, modern portfolio template designed for corporate professionals, business leaders, consultants, and executives. This template showcases your professional achievements, projects, and expertise in a clean, sophisticated format.

![Corporate Climber Portfolio Preview](readme-preview.png)

## Features

- **Professional Design**: Sophisticated layout optimized for corporate and business professionals
- **Mobile Responsive**: Looks great on all devices (desktop, tablet, mobile)
- **Project Showcase**: Highlight your key professional accomplishments with detailed project pages
- **Multiple Media Types**: Support for images, videos, and presentations for each project
- **Contact Form**: Built-in contact form with backend integration
- **Easy Customization**: Well-commented code makes personalization simple
- **SEO-Friendly**: Structured for optimal search engine visibility
- **Backend Integration**: Ready to connect with the portfolio-template-backend

## Pages

- **Home**: Professional introduction with sections for about, skills, highlights, and featured projects
- **Projects**: Grid display of all projects with filtering by category
- **Project Detail**: Comprehensive view of individual projects with multiple media options
- **Contact**: Contact form and professional contact information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the backend repository (if you haven't already):

```bash
git clone https://github.com/mohama56/portfolio-template-backend backend
```

2. Clone this template repository:

```bash
git clone https://github.com/mohama56/corporate-climber-portfolio-template
```

3. Navigate to the frontend directory:

```bash
cd frontend
```

4. Install dependencies:

```bash
npm install
```

5. Set up environment variables:
    - Rename `.env` to `.env.local` if needed
    - Update the API URL if your backend is running on a different port

6. Start the development server:

```bash
npm run dev
```

7. Open your browser and visit: `http://localhost:3000`

## Customization Guide

### Where to Make Changes

Each file that requires personalization has a comment at the top indicating what needs to be modified:

1. **Profile Information**: Update your personal details in `src/context/ProfileContext.jsx`
    - Name, title, contact info, about text, social links, and skills

2. **Project Information**: Add your projects in `src/context/ProjectContext.jsx`
    - Project titles, descriptions, images, and outcomes

3. **Images**: Replace placeholder images in the `public` directory with your own
    - Profile photo: Replace `public/placeholder-profile.jpg`
    - Project images: Add your project images to `public/`

4. **Colors**: Customize the color scheme in `tailwind.config.js`
    - Modify the primary, secondary, and accent colors to match your personal brand

### Additional Customization Options

- **Fonts**: Change typography in `tailwind.config.js` and update imports in `src/index.css`
- **Layout**: Modify component structure in page files (src/pages/*)
- **Content Sections**: Add or remove sections by editing the Home.jsx file

## File Structure Overview

```
corporate-climber-portfolio-template/
├── public/                 # Static assets (images, favicon)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   ├── sections/       # Page sections (Hero, About, Skills, etc.)
│   │   └── ui/             # UI elements
│   ├── context/            # React context providers
│   ├── pages/              # Page components
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── .env                    # Environment variables
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

## Adding Your Own Images

1. **Profile Image**:
    - Add your professional headshot to the `public/` directory
    - Update the `profileImage` path in `src/context/ProfileContext.jsx`

2. **Project Images**:
    - Add project images to the `public/` directory
    - Update the image paths in your project objects in `src/context/ProjectContext.jsx`
    - Recommended image size: 1200x800px or 4:3 aspect ratio

3. **Favicon**:
    - Replace `public/favicon.svg` with your own favicon
    - Update meta tags in `index.html` if needed

## Backend Integration

This template is designed to work seamlessly with the portfolio-template-backend:

1. Make sure the backend server is running on port 5001 (default)
2. The template will automatically fetch projects from the API
3. The contact form will submit messages to the backend
4. If the backend is not available, the template will use sample data

## Deployment

### Frontend Deployment (Netlify/Vercel)

1. Build your project:

```bash
npm run build
```

2. Deploy the `dist` directory to your preferred hosting platform:
    - Netlify: Drag and drop the `dist` folder or connect your GitHub repo
    - Vercel: Connect your GitHub repo and configure build settings

3. Configure environment variables on your hosting platform to match your `.env.local`

### Backend Connection

Update the `.env` file with your deployed backend URL:

```
VITE_API_URL=https://your-backend-url.com/api
```

## License

This template is MIT licensed. Feel free to use it for personal or commercial projects.

## Support

If you have any questions or need assistance, please open an issue in the GitHub repository.

---

Happy portfolio building! 🚀