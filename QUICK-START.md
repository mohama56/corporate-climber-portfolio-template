# Quick Start Guide

This guide will help you customize this portfolio template quickly to showcase your professional background.

## 1. Essential Files to Modify

1. **Profile Information**:
    - Open `src/context/ProfileContext.jsx`
    - Update your personal information, skills, and highlights

2. **Project Information**:
    - Open `src/context/ProjectContext.jsx`
    - Replace sample projects with your own

3. **Images**:
    - Replace placeholder images in the `public` folder

## 2. Step-by-Step Customization

### Profile Information (15-20 minutes)

1. Open `src/context/ProfileContext.jsx`
2. Update `personalInfo` object:
    - Name, title, headline, about text
    - Contact information and location
    - Profile image path (after adding your image to public folder)

3. Update `socialLinks` array:
    - Add your LinkedIn, GitHub, and other social media links
    - Adjust the icons used (options defined in the Footer.jsx component)

4. Update `skills` array:
    - Group your professional skills by category
    - Focus on 3-4 categories with 4-5 skills each

5. Update `highlights` array:
    - Add 4 key metrics or achievements from your career
    - Use specific numbers and results for impact

### Project Information (30-45 minutes)

1. Open `src/context/ProjectContext.jsx`
2. For each project in the `sampleProjects` array:
    - Update title, summary, and detailed description
    - Set client, date, and category
    - Update image paths (after adding images to public folder)
    - Add video or presentation URLs if applicable
    - List technologies and key outcomes

3. Format project descriptions using Markdown:
    - Use ## for section headers (Overview, Challenge, Approach, Results)
    - Use bullet points with * for listing outcomes or steps
    - Keep paragraphs concise and focused on results

### Images (15-30 minutes)

1. Prepare your profile image:
    - Professional headshot with good lighting
    - Square aspect ratio (1:1)
    - Replace `public/placeholder-profile.jpg`

2. Prepare project images:
    - Project cover images should be 1200x800px (3:2 ratio)
    - Detail images can use the same size for consistency
    - Name files according to the convention in IMAGES.md
    - Place all images in the `public` folder

## 3. Optional Customization

### Colors and Branding (10-15 minutes)

1. Open `tailwind.config.js`
2. Modify the color palette:
    - Update primary colors to match your personal brand
    - Customize secondary and accent colors as needed

### Content Structure (15-30 minutes)

1. Open `src/pages/Home.jsx`
2. Rearrange or remove sections by modifying the components order
3. For advanced customization, modify individual section components in `src/components/sections/`

## 4. Testing Your Changes

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser to http://localhost:3000
3. Check all pages and ensure your content displays correctly
4. Test responsive behavior by resizing your browser window

## 5. Connecting to Backend (Optional)

1. Ensure the backend server is running (from portfolio-template-backend)
2. Update `.env` if your backend is not running on the default port

## 6. Deployment

1. Build your portfolio:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider of choice

## Need Help?

- Check the detailed documentation in README.md
- Look for comments in each file for specific guidance
- Refer to IMAGES.md for image requirements