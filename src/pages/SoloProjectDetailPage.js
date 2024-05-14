import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import soloProjectData from '../components/SoloProjectData';
import '../styles/ProjectDetailPage.css';


const SoloProjectDetailPage = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const currentProjectIndex = soloProjectData.findIndex(p => p.id === parseInt(projectId, 10));
    const totalProjects = soloProjectData.length;

    const nextProjectId = currentProjectIndex >= 0 && currentProjectIndex < totalProjects - 1
        ? soloProjectData[currentProjectIndex + 1].id
        : soloProjectData[0].id;

    const prevProjectId = currentProjectIndex > 0
        ? soloProjectData[currentProjectIndex - 1].id
        : soloProjectData[totalProjects - 1].id;

    const nextProjectTitle = currentProjectIndex >= 0 && currentProjectIndex < totalProjects - 1
        ? soloProjectData[currentProjectIndex + 1].title
        : soloProjectData[0].title;

    const prevProjectTitle = currentProjectIndex > 0
        ? soloProjectData[currentProjectIndex - 1].title
        : soloProjectData[totalProjects - 1].title;

    const project = soloProjectData[currentProjectIndex];

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
                            onClick={() => navigate(`/projects/solo/${prevProjectId}`)}>← {prevProjectTitle}</button>
                        <button onClick={() => navigate(`/projects/solo/${nextProjectId}`)}>{nextProjectTitle} →
                        </button>
                    </div>
                </div>

            ) : (
                <div>Project not found</div>
            )}
        </div>
    );
};

export default SoloProjectDetailPage;
