// FILENAME: src/main.jsx
// No need for any personal modifications

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ProfileProvider } from './context/ProfileContext';
import { ProjectProvider } from './context/ProjectContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ProfileProvider>
                <ProjectProvider>
                    <App />
                </ProjectProvider>
            </ProfileProvider>
        </BrowserRouter>
    </React.StrictMode>,
);