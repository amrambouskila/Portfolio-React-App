import React from 'react';
import '../styles/ResumePage.css'; // Import CSS file for styling

const ResumePage = () => {
    return (
        <div className="resume-container">
            <h1 className="resume-title">Amram Shalom Bouskila</h1>
            <p className="resume-text">Feel free to download my resume <a
                href="/documents/Machine_Learning_Engineer_Resume_5.pdf" download>here</a></p>
            <object data="/documents/Machine_Learning_Engineer_Resume_5.pdf" type="application/pdf" className="resume-pdf">
                <p>Sorry, your browser does not support embedded PDFs.</p>
            </object>
        </div>
    );
};

export default ResumePage;
