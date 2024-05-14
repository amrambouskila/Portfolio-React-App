import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coopProjectData from '../components/CoopProjectData';
import '../styles/ProjectDetailPage.css';


const CoopProjectDetailPage = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const currentProjectIndex = coopProjectData.findIndex(p => p.id === parseInt(projectId, 10));
    const totalProjects = coopProjectData.length;

    const nextProjectId = currentProjectIndex >= 0 && currentProjectIndex < totalProjects - 1
        ? coopProjectData[currentProjectIndex + 1].id
        : coopProjectData[0].id;  // Loop back to the first project

    const prevProjectId = currentProjectIndex > 0
        ? coopProjectData[currentProjectIndex - 1].id
        : coopProjectData[totalProjects - 1].id;  // Loop back to the last project

    const nextProjectTitle = currentProjectIndex >= 0 && currentProjectIndex < totalProjects - 1
        ? coopProjectData[currentProjectIndex + 1].title
        : coopProjectData[0].title;  // Loop back to the first project

    const prevProjectTitle = currentProjectIndex > 0
        ? coopProjectData[currentProjectIndex - 1].title
        : coopProjectData[totalProjects - 1].title;  // Loop back to the last project

    const project = coopProjectData[currentProjectIndex];

    return (
        <div className="project-detail-container">
            {project ? (
                <div className="project-detail">
                    <div className="project-detail-content">
                        <img src={project.imageUrl} alt={project.title} className="project-detail-image"/>
                        <div className="project-detail-text">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>
                    <div className="project-navigation">
                        <button
                            onClick={() => navigate(`/projects/coop/${prevProjectId}`)}>← {prevProjectTitle}</button>
                        <button onClick={() => navigate(`/projects/coop/${nextProjectId}`)}>{nextProjectTitle} →
                        </button>
                    </div>
                </div>
            ) : (
                <div>Project not found</div>
            )}
        </div>
    );
};

export default CoopProjectDetailPage;
