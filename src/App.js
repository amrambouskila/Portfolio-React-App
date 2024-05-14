import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import SoloProjectDetailPage from './pages/SoloProjectDetailPage';
import CoopProjectDetailPage from './pages/CoopProjectDetailPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects/solo/:projectId" element={<SoloProjectDetailPage />} />
                <Route path="/projects/coop/:projectId" element={<CoopProjectDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
