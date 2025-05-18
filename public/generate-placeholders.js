#!/usr/bin/env node

/**
 * FILENAME: scripts/generate-placeholders.js
 *
 * This script generates placeholder images and template files
 * to help users understand what images they need to provide.
 *
 * Run this with: node scripts/generate-placeholders.js
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Ensure the public directory exists
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

// Create placeholder profile image
function createProfilePlaceholder() {
    const width = 600;
    const height = 600;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    // Background gradient
    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#0ea5e9');
    gradient.addColorStop(1, '#0c4a6e');
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    // Circle for head
    context.fillStyle = '#e0f2fe';
    context.beginPath();
    context.arc(width / 2, height / 3, 100, 0, 2 * Math.PI);
    context.fill();

    // Body shape
    context.fillStyle = '#e0f2fe';
    context.beginPath();
    context.moveTo(width / 2 - 80, height / 3 + 80);
    context.lineTo(width / 2 + 80, height / 3 + 80);
    context.lineTo(width / 2 + 120, height);
    context.lineTo(width / 2 - 120, height);
    context.closePath();
    context.fill();

    // Add text
    context.font = 'bold 40px Arial';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.fillText('Your', width / 2, height - 150);
    context.fillText('Profile Photo', width / 2, height - 100);

    // Save the image
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join(publicDir, 'placeholder-profile.jpg'), buffer);
    console.log('✅ Created placeholder profile image');
}

// Create project placeholder images
function createProjectPlaceholders() {
    // Project cover images
    for (let i = 1; i <= 3; i++) {
        const width = 1200;
        const height = 800;
        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');

        // Background color based on project number
        const colors = [
            ['#0ea5e9', '#164e63'], // Project 1: Blue
            ['#8b5cf6', '#4c1d95'], // Project 2: Purple
            ['#10b981', '#064e3b']  // Project 3: Green
        ];

        const gradient = context.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, colors[i-1][0]);
        gradient.addColorStop(1, colors[i-1][1]);
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);

        // Add text
        context.font = 'bold 80px Arial';
        context.fillStyle = 'white';
        context.textAlign = 'center';
        context.fillText(`Project ${i}`, width / 2, height / 2 - 50);
        context.font = '40px Arial';
        context.fillText('Cover Image', width / 2, height / 2 + 50);

        // Save the image
        const buffer = canvas.toBuffer('image/jpeg');
        fs.writeFileSync(path.join(publicDir, `project-${i}-cover.jpg`), buffer);
        console.log(`✅ Created project ${i} cover image`);

        // Project detail images
        const detailCount = i === 2 ? 2 : (i === 3 ? 4 : 3); // Different counts per project
        for (let j = 1; j <= detailCount; j++) {
            const detailCanvas = createCanvas(width, height);
            const detailContext = detailCanvas.getContext('2d');

            // Lighter gradient for detail images
            const detailGradient = detailContext.createLinearGradient(0, 0, width, height);
            detailGradient.addColorStop(0, colors[i-1][0] + '80'); // Add transparency
            detailGradient.addColorStop(1, colors[i-1][1] + '80');
            detailContext.fillStyle = detailGradient;
            detailContext.fillRect(0, 0, width, height);

            // Add grid pattern
            detailContext.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            detailContext.lineWidth = 2;

            // Vertical lines
            for (let x = 100; x < width; x += 100) {
                detailContext.beginPath();
                detailContext.moveTo(x, 0);
                detailContext.lineTo(x, height);
                detailContext.stroke();
            }

            // Horizontal lines
            for (let y = 100; y < height; y += 100) {
                detailContext.beginPath();
                detailContext.moveTo(0, y);
                detailContext.lineTo(width, y);
                detailContext.stroke();
            }

            // Add text
            detailContext.font = 'bold 60px Arial';
            detailContext.fillStyle = 'white';
            detailContext.textAlign = 'center';
            detailContext.fillText(`Project ${i}`, width / 2, height / 2 - 50);
            detailContext.font = '40px Arial';
            detailContext.fillText(`Detail Image ${j}`, width / 2, height / 2 + 50);

            // Save the image
            const detailBuffer = detailCanvas.toBuffer('image/jpeg');
            fs.writeFileSync(path.join(publicDir, `project-${i}-image-${j}.jpg`), detailBuffer);
            console.log(`✅ Created project ${i} detail image ${j}`);
        }
    }
}

try {
    console.log('Generating placeholder images...');
    createProfilePlaceholder();
    createProjectPlaceholders();
    console.log('✅ All placeholder images generated successfully!');
    console.log('\nNext steps:');
    console.log('1. Replace these placeholder images with your own');
    console.log('2. Update your profile info in src/context/ProfileContext.jsx');
    console.log('3. Update project details in src/context/ProjectContext.jsx');
} catch (error) {
    console.error('Error generating placeholders:', error);
}